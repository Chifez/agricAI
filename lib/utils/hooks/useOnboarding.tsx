import { useContext } from 'react';
import { OnboardingContext } from '../context/onboardingContext';

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
