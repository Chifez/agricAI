import UserInput from '@/components/shared/input';

const SoilInfo = () => {
  return (
    <form action="" className="space-y-10">
      <div className="border border-primary rounded-md shadow-lg space-y-2">
        <UserInput
          label="Soil PH"
          inputChange={(e) => console.log(e)}
          className="w-full rounded-md bg-gray-200"
          placeholder="Type here"
        />
        <UserInput
          label="Soil Temperature"
          inputChange={(e) => console.log(e)}
          className="w-full rounded-md  bg-gray-200"
          placeholder="Type here"
        />
        <UserInput
          label="Soil Humidity"
          inputChange={(e) => console.log(e)}
          className="w-full rounded-md  bg-gray-200"
          placeholder="Type here"
        />
      </div>
    </form>
  );
};

export default SoilInfo;
