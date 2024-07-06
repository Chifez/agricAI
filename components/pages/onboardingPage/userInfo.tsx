import DropDown from '@/components/shared/dropdown';
import UserInput from '@/components/shared/input';

const UserInfo = () => {
  const options = [
    'Cereal',
    'legume',
    'protein',
    'fat and oil',
    'carbonhydrate',
  ];

  const handleSelectChange = (value: string) => {
    console.log('Selected value:', value);
  };
  return (
    <form action="" className="space-y-6">
      <div className="border border-primary rounded-md shadow-lg space-y-2">
        <UserInput
          label="Full Name"
          inputChange={(e) => console.log(e)}
          className="w-full rounded-md bg-gray-200"
          placeholder="John Doe"
        />
        <UserInput
          label="Email Address"
          inputChange={(e) => console.log(e)}
          className="w-full rounded-md  bg-gray-200"
          placeholder="JonhDoe@example.com"
        />
        <UserInput
          label="Phone Number"
          inputChange={(e) => console.log(e)}
          className="w-full rounded-md  bg-gray-200"
          placeholder="+1234567"
        />
      </div>
      <div className=" border border-primary  rounded-md shadow-lg space-y-2">
        <UserInput
          label="Crop Name"
          inputChange={(e) => console.log(e)}
          className="w-full rounded-md bg-gray-200"
          placeholder="Okro"
        />

        <DropDown
          options={options}
          placeholder="Vegetable"
          label="Crop type"
          initialState=""
          className="w-full rounded-md bg-gray-200"
          onChange={handleSelectChange}
        />
      </div>
    </form>
  );
};

export default UserInfo;
