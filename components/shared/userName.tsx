'use client';

import { formatUserName } from '@/lib/utils/getUsername';
import { useOnboarding } from '@/lib/utils/hooks/useOnboarding';

const Username = () => {
  const { onboardingData } = useOnboarding();
  return <p>{formatUserName(onboardingData.full_name) || 'NE'}</p>;
};

export default Username;
