'use client';

import { useState } from 'react';
import Button from '../../shared/button';
import UserInput from '../../shared/input';
import Navbar from '../../shared/navbar';
import { useRouter } from 'next/navigation';
import { useOnboarding } from '@/lib/utils/hooks/useOnboarding';

const Hero = () => {
  const [input, setInput] = useState('');
  const { onboardingData, setOnboardingData } = useOnboarding();

  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOnboardingData({ ...onboardingData, [name]: value });
  };
  const gotoReport = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push('onboarding');
  };
  return (
    <div>
      <Navbar />
      <div className="relative bg-[url(/agric.jpeg)] bg-cover h-[calc(100vh-64px)]">
        <div className="absolute inset-0 bg-slate-500 opacity-80"></div>
        <div className="relative z-10 p-4 flex flex-col items-center justify-around h-full w-full">
          <div className="w-full md:w-[55%] text-center px-4 space-y-4 flex flex-col items-center justify-center">
            <h1 className="text-6xl leading-[70px] font-bold">
              Sow Smart, Reap big <br />
              Elevate your farming experience
            </h1>
            <p className="text-sm font-semibold">
              Unlock the secrets of successful farming with our seasonal
              insights. Discover the best times to plant each crop, maximize
              your harvest, and elevate your farming experience.
            </p>
          </div>
          <form
            action=""
            className="flex flex-col items-center w-full gap-4 md:w-[45%]"
          >
            <div className="w-[70%]">
              <UserInput
                name="crop_name"
                value={onboardingData.crop_name}
                inputChange={handleChange}
                className="w-full px-3 py-2 rounded-md"
                placeholder="What do you want to plant"
              />
            </div>

            <Button
              type="submit"
              className="px-14 text-base font-medium rounded-md"
              handleClick={gotoReport}
            >
              Get Report
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
