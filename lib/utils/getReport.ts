import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const getReport = (router: AppRouterInstance | string[]) => {
  return router.push('/report');
};
