'use client';

import { useState } from 'react';
import Button from '../../shared/button';
import UserInput from '../../shared/input';
import Navbar from '../../shared/navbar';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const [input, setInput] = useState('');

  const router = useRouter();

  const getReport = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const response = await fetch('/api/get_report', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ body: input }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('response', data.output);
      } else {
        console.log('error', data.error);
      }
    } catch (error) {
      console.log(error);
    }
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
          <div className="w-full md:w-[55%] text-center px-4 space-y-2 flex flex-col items-center justify-center">
            <h1 className="text-6xl leading-[77px] font-semibold">
              Sow Smart, Reap big <br />
              Elevate your farming experience
            </h1>
            <p className="text-sm font-semibold">
              Improve your crops yield by planting and harvesting at the right
              season.
            </p>
          </div>
          <form
            action=""
            className="flex flex-col items-center w-full gap-4 md:w-[45%]"
          >
            <div className="w-[70%]">
              <UserInput
                inputChange={(e) => setInput(e.target.value)}
                className="w-full px-3 py-2 rounded-md"
                placeholder="What do you want to plant"
              />
            </div>

            <Button
              type="submit"
              className="px-14 text-base font-medium rounded-md"
              handleClick={getReport}
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
