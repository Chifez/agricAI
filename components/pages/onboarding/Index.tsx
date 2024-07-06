'use client';

import UserInfo from './userInfo';
import UserLocation from './userLocation';
import SoilInfo from './soilInfo';
import CustomStepper from '@/components/shared/customstepper';

const OnboardingForm = () => {
  return (
    <CustomStepper>
      <UserInfo />
      <UserLocation />
      <SoilInfo />
    </CustomStepper>
  );
};

export default OnboardingForm;
