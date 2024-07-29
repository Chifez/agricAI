'use client';

import { ReactNode, useState } from 'react';
import Button from './button';
import Carousel from './carousel';
import { getReport } from '@/lib/utils/getReport';
import { useRouter } from 'next/navigation';
import { useOnboarding } from '@/lib/utils/hooks/useOnboarding';

const CustomStepper = (props: { children: ReactNode[] }) => {
  const { onboardingData } = useOnboarding();

  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();

  const nextStep = () => {
    if (activeStep >= props.children.length - 1) return;
    setActiveStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (activeStep <= 0) return;
    setActiveStep((prev) => prev - 1);
  };
  const handleClick = () => {
    console.log('final data', onboardingData);
  };

  return (
    <section className="flex flex-col justify-center items-center gap-2 w-full h-full px-20 py-2">
      <div className="w-full">
        <div className="flex items-center justify-around">
          {props.children.map((step, idx) => (
            <div
              className="relative w-full h-fit flex justify-center items-center"
              key={idx}
            >
              <div className="z-50 w-5 h-5 text-center text-sm rounded-full bg-green-600 text-white">
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
          <div
            className="min-w-full h-full px-8 py-2 border border-red-500"
            key={index}
          >
            {item}
          </div>
        ))}
      </Carousel>
      <div className="w-[80%] flex items-center justify-between ">
        <Button
          handleClick={prevStep}
          className={`${activeStep <= 0 && 'invisible'} rounded-none px-4`}
        >
          Back
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

      <Button
        handleClick={handleClick}
        className={`${
          activeStep == props.children.length - 1 ? 'visible' : 'invisible'
        } rounded-none px-4`}
      >
        Get Report
      </Button>
    </section>
  );
};

export default CustomStepper;
