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

  const translateClasses = useMemo(
    () => getTranslationClass(children),
    [children]
  );

  useEffect(() => {
    setTranslateIndex(currentIndex);
  }, [currentIndex]);

  const translateSize = translateClasses[translateIndex] || 'translate-x-0';
  return (
    <div className="w-[70%] flex overflow-x-hidden">
      <div className={`w-full flex transition duration-500 ${translateSize}`}>
        {children}
      </div>
    </div>
  );
};

export default Carousel;
