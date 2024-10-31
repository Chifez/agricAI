import DropDown from '@/components/shared/dropdown';
import UserInput from '@/components/shared/input';
import { useOnboarding } from '@/lib/utils/hooks/useOnboarding';

const UserLocation = () => {
  const { onboardingData, setOnboardingData } = useOnboarding();
  const options = [
    'Raining season',
    'Spring season',
    'Winter season',
    'Summer season',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOnboardingData({ ...onboardingData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setOnboardingData({ ...onboardingData, [name]: value });
  };
  return (
    <form action="" className="space-y-10">
      <div className="border border-primary rounded-md shadow-lg space-y-2 p-4">
        <UserInput
          label="Location"
          required={true}
          name="location"
          value={onboardingData.location}
          inputChange={handleChange}
          className="w-full p-2 rounded-md bg-gray-200"
          placeholder="E.g Abuja"
        />

        <DropDown
          options={options}
          placeholder="Wet season"
          required={true}
          label="Season"
          name="season"
          initialState={options[0]}
          className="w-full p-2 rounded-md bg-gray-200"
          onChange={handleSelectChange}
        />
      </div>
    </form>
  );
};

export default UserLocation;
