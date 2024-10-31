'use client';

import React from 'react';
import { ReactNode, useEffect, useMemo, useState } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
  currentIndex: number;
}

const getTranslationClass = (children: ReactNode | ReactNode[]) => {
  const count = React.Children.count(children);
  return Array.from(
    { length: count },
    (_, index) => `-translate-x-[${index * 100}%]`
  );
};

const Carousel = ({ children, currentIndex }: Props) => {
  const [translateIndex, setTranslateIndex] = useState(0);

  const translateClasses = useMemo(() => getTranslationClass(children), []);

  useEffect(() => {
    setTranslateIndex(currentIndex);
    console.log(translateClasses);
  }, [currentIndex]);

  const translateSize = translateClasses[translateIndex];

  return (
    <div className="w-[70%] flex overflow-x-hidden">
      <div
        className={`w-full flex transition-transform duration-500 ${translateSize}`}
      >
        {React.Children.map(children, (child, index) => (
          <div className="min-w-full">{child}</div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
