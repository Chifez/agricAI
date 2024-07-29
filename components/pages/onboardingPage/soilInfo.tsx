import UserInput from '@/components/shared/input';
import { useOnboarding } from '@/lib/utils/hooks/useOnboarding';

const SoilInfo = () => {
  const { onboardingData, setOnboardingData } = useOnboarding();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOnboardingData({ ...onboardingData, [name]: value });
  };

  return (
    <form action="" className="space-y-10">
      <div className="border border-primary rounded-md shadow-lg space-y-2 p-4">
        <UserInput
          label="Soil PH"
          name="ph"
          inputChange={handleChange}
          value={onboardingData.ph}
          className="w-full p-2 rounded-md bg-gray-200"
          placeholder="Type here"
        />
        <UserInput
          label="Soil Temperature"
          name="temp"
          value={onboardingData.temp}
          inputChange={handleChange}
          className="w-full p-2 rounded-md  bg-gray-200"
          placeholder="Type here"
        />
        <UserInput
          label="Soil Humidity"
          name="humidity"
          value={onboardingData.humidity}
          inputChange={handleChange}
          className="w-full p-2 rounded-md  bg-gray-200"
          placeholder="Type here"
        />
      </div>
    </form>
  );
};

export default SoilInfo;
