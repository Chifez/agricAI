import DropDown from '@/components/shared/dropdown';
import UserInput from '@/components/shared/input';

const UserLocation = () => {
  const options = [
    'Raining season',
    'Spring season',
    'Winter season',
    'Summer season',
  ];

  const handleSelectChange = (value: string) => {
    console.log('Selected value:', value);
  };
  return (
    <form action="" className="space-y-10">
      <div className="border border-primary rounded-md shadow-lg space-y-2 p-4">
        <UserInput
          label="Location"
          inputChange={(e) => console.log(e)}
          className="w-full p-2 rounded-md bg-gray-200"
          placeholder="E.g Abuja"
        />

        <DropDown
          options={options}
          placeholder="Wet season"
          label="Season"
          initialState={options[0]}
          className="w-full p-2 rounded-md bg-gray-200"
          onChange={handleSelectChange}
        />
      </div>
    </form>
  );
};

export default UserLocation;
