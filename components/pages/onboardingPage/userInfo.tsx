import DropDown from '@/components/shared/dropdown';
import UserInput from '@/components/shared/input';
import { useOnboarding } from '@/lib/utils/hooks/useOnboarding';

const UserInfo = () => {
  const { onboardingData, setOnboardingData } = useOnboarding();

  const options = [
    'Cereal',
    'legume',
    'protein',
    'fat and oil',
    'carbonhydrate',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOnboardingData({ ...onboardingData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setOnboardingData({ ...onboardingData, [name]: value });
  };

  return (
    <form action="" className="space-y-6">
      <div className="border border-primary rounded-md shadow-lg space-y-2 p-4">
        <UserInput
          label="Full Name"
          required={true}
          name="full_name"
          value={onboardingData.full_name}
          inputChange={handleChange}
          className="w-full p-2 rounded-md bg-gray-200"
          placeholder="John Doe"
        />
        <UserInput
          label="Email Address"
          required={true}
          name="email"
          value={onboardingData.email}
          inputChange={handleChange}
          className="w-full p-2 rounded-md  bg-gray-200"
          placeholder="JonhDoe@example.com"
        />
        <UserInput
          label="Phone Number"
          required={true}
          name="phone"
          value={onboardingData.phone}
          inputChange={handleChange}
          className="w-full p-2 rounded-md  bg-gray-200"
          placeholder="+1234567"
        />
      </div>
      <div className=" border border-primary  rounded-md shadow-lg space-y-2 p-4">
        <UserInput
          label="Crop Name"
          required={true}
          name="crop_name"
          value={onboardingData.crop_name}
          inputChange={handleChange}
          className="w-full p-2 rounded-md bg-gray-200"
          placeholder="Okro"
        />

        <DropDown
          options={options}
          placeholder="Vegetable"
          name="crop_type"
          label="Crop type"
          initialState={options[0]}
          className="w-full p-2 rounded-md bg-gray-200"
          onChange={handleSelectChange}
        />
      </div>
    </form>
  );
};

export default UserInfo;
