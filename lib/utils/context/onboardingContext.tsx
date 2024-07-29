'use client';

import { createContext, useState, ReactNode } from 'react';

interface OnboardingData {
  full_name: string;
  email: string;
  phone: string;
  crop_name: string;
  crop_type: string;
  location: string;
  season: string;
  ph: string;
  temp: string;
  humidity: string;
}

interface OnboardingContextType {
  onboardingData: OnboardingData;
  setOnboardingData: (data: OnboardingData) => void;
}

export const OnboardingContext = createContext<
  OnboardingContextType | undefined
>(undefined);

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    full_name: '',
    email: '',
    phone: '',
    crop_name: '',
    crop_type: '',
    location: '',
    season: '',
    temp: '',
    ph: '',
    humidity: '',
  });

  return (
    <OnboardingContext.Provider value={{ onboardingData, setOnboardingData }}>
      {children}
    </OnboardingContext.Provider>
  );
};
