'use client';
import { ReactNode, useState } from 'react';
import Button from './button';
import Carousel from './carousel';
import { useRouter } from 'next/navigation';
import { useOnboarding } from '@/lib/utils/hooks/useOnboarding';
import { useWeather } from '@/lib/utils/hooks/useWeather';

const CustomStepper = (props: { children: ReactNode[] }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const { onboardingData } = useOnboarding();
  const { weatherData, setweatherData } = useWeather();

  const router = useRouter();

  const steptitle = [
    'Alright lets get some details',
    'Almost there 😉',
    'Thats it 👍',
  ];

  const nextStep = () => {
    if (activeStep >= props.children.length - 1) return;
    setActiveStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (activeStep <= 0) return;
    setActiveStep((prev) => prev - 1);
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('Geolocation not supported');
      return;
    }
  };

  function success(position: { coords: { latitude: any; longitude: any } }) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    // Make API call to OpenWeatherMap
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setweatherData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  function error() {
    console.log('Unable to retrieve your location');
  }

  const handleClick = async (e: Event) => {
    e.preventDefault();
    // get user location
    const locationEnabled = await new Promise<boolean>((resolve) => {
      const success = (position: {
        coords: { latitude: any; longitude: any };
      }) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        // Optional: Store location data or use it in your API call

        try {
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7f485cf569940e6335eaccba70c7fafa&units=metric`
          )
            .then((response) => response.json())
            .then((data) => {
              const { main } = data;
              // setweatherData({ }); // start here
              console.log(data);
            })
            .catch((error) => console.log(error));
        } catch (err) {
          console.log('weather', err);
        }
        resolve(true);
      };

      const error = () => {
        console.log('Unable to retrieve your location');
        resolve(false);
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        console.log('Geolocation not supported');
        resolve(false);
      }
    });

    if (!locationEnabled) {
      // Location access is not enabled, do nothing
      return;
    }

    console.log('final data', onboardingData);
    const prompt = `using the following data: ${JSON.stringify(
      onboardingData
    )}, generate a json response for the best range of time in a year to plant and also harvest the crop in the provided data `;
    setIsLoading(true);

    try {
      const response = await fetch('/api/get_report', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('response', data.output);
        router.push('report');
      } else {
        console.log('error', data.error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center gap-2 w-full h-full px-20 py-2">
      <p className="font-semibold mb-2">{steptitle[activeStep]}</p>
      <div className="w-full">
        <div className="flex items-center justify-around">
          {props.children.map((step, idx) => (
            <div
              className="relative w-full h-fit flex justify-center items-center"
              key={idx}
            >
              <div
                className={`z-50 w-5 h-5 text-center text-sm rounded-full bg-green-600 text-white`}
              >
                <p>{idx + 1}</p>
              </div>
              {idx + 1 < props.children.length && (
                <span
                  className={`left-[50%] z-10 w-full absolute h-[2px] top-[50%] transition-all duration-500 ${
                    activeStep >= idx + 1 ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <Carousel currentIndex={activeStep}>
        {props.children.map((item, index) => (
          <div className="min-w-full h-full px-8 py-2" key={index}>
            {item}
          </div>
        ))}
      </Carousel>
      <div className="w-[80%] flex items-center justify-between">
        <Button
          handleClick={prevStep}
          className={`${activeStep <= 0 && 'invisible'} rounded-none px-4`}
        >
          Back
        </Button>

        <Button
          handleClick={handleClick}
          className={`${
            activeStep == props.children.length - 1 ? 'visible' : 'invisible'
          } rounded-none px-4`}
        >
          {isLoading ? 'Loading' : 'Get Report'}
        </Button>

        <Button
          handleClick={nextStep}
          className={`${
            activeStep >= props.children.length - 1 && 'invisible'
          } rounded-none px-4`}
        >
          Next
        </Button>
      </div>
    </section>
  );
};

export default CustomStepper;
