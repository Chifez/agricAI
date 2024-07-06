'use client';

import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
  currentIndex: number;
}
const Carousel = ({ children, currentIndex }: Props) => {
  const [translateSize, setTranslateSize] = useState('-translate-x-[0]');

  useEffect(() => {
    setTranslateSize(`-translate-x-[${currentIndex * 100}%]`);
  }, [currentIndex]);

  return (
    <div className={`w-[70%] flex overflow-x-hidden`}>
      <div className={`${translateSize} w-full flex transition duration-500`}>
        {children}
      </div>
    </div>
  );
};
export default Carousel;
