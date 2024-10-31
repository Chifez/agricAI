'use client';

import Button from '@/components/shared/button';
import Calendar from '@/components/shared/calendar';
import ReportCard from '@/components/shared/reportCard';
import { currentDate } from '@/lib/utils/formatDate';
import { useOnboarding } from '@/lib/utils/hooks/useOnboarding';
import { useWeather } from '@/lib/utils/hooks/useWeather';
import { scheduleData } from '@/lib/utils/mockData';
import { ScheduleData } from '@/lib/utils/types';
import { useRouter } from 'next/navigation';
import { BsBellFill } from 'react-icons/bs';
import { FaCloudSun } from 'react-icons/fa';

const ReportPage = () => {
  const { onboardingData, setOnboardingData } = useOnboarding();
  const { weatherData } = useWeather();
  const router = useRouter();

  const moreInsights = () => {
    router.push('/report/insight');
  };

  const getDate = (season: string, type: string): string => {
    const seasonDate = scheduleData[season as keyof ScheduleData].find(
      (item) => item.type === type
    );
    console.log('season', seasonDate);
    return seasonDate ? currentDate(new Date(seasonDate?.date)) : '';
  };
  return (
    <div className="flex items-center justify-center py-4">
      <div className="w-[80%] h-fit flex flex-row items-start justify-center gap-6">
        <div className="grid grid-rows-2 gap-4">
          <ReportCard title="FarmerDetails">
            <div className="grid grid-cols-2 gap-2">
              <span className="text-sm space-y-2">
                <p>{onboardingData.full_name}</p>
                <p>{onboardingData.phone}</p>
                <p>{onboardingData.email}</p>
              </span>

              <span className="space-y-2 text-sm">
                <p className="font-semibold">Location</p>
                <p>{onboardingData.location}</p>
              </span>

              <span className="text-sm space-y-2">
                <p className="font-semibold">Crop details</p>
                <p>{onboardingData.crop_name}</p>
                <p>{onboardingData.crop_type}</p>
              </span>
            </div>
          </ReportCard>

          <ReportCard title="Weather Info">
            <div className="space-y-2">
              <div>
                <p className="text-base font-semibold">
                  {weatherData.location}
                </p>
                <p className="text-xs text-gray-500">{currentDate()}</p>
              </div>
              <div className="flex items-start justify-between">
                <span>
                  <p className="font-semibold">{weatherData.weather_state}</p>
                  <div className="flex items-center gap-2 text-xl font-semibold">
                    {weatherData.weather_value}''{' '}
                    <FaCloudSun className="fill-sky-400 size-8" />
                  </div>
                </span>
                <span className="space-y-1 text-xs text-gray-600">
                  <p>Humidity: {weatherData.humidity}%</p>
                  <p>Wind: {weatherData.wind}mph</p>
                  <p>High/Low: {weatherData.high_low}''</p>
                </span>
              </div>

              <div className="flex gap-4">
                <span>
                  <p className="font-medium">{weatherData.morning_value}</p>
                  <FaCloudSun className="fill-sky-400 size-5" />
                  <p className="text-xs">Morning</p>
                </span>
                <span>
                  <p className="font-medium">{weatherData.afternoon_value}</p>
                  <FaCloudSun className="fill-sky-400 size-5" />
                  <p className="text-xs">Afternoon</p>
                </span>
                <span>
                  <p className="font-medium">{weatherData.evening_value}</p>
                  <FaCloudSun className="fill-sky-400 size-5" />
                  <p className="text-xs">Evening</p>
                </span>
                <span>
                  <p className="font-medium">{weatherData.overnight_value}</p>
                  <FaCloudSun className="fill-sky-400 size-5" />
                  <p className="text-xs">Overnight</p>
                </span>
              </div>
            </div>
          </ReportCard>
        </div>
        <div className="min-h-full">
          <ReportCard title="Plant/HarvestInfo">
            <div>
              <div className="bg-white p-2">
                <Calendar scheduleData={scheduleData} />
              </div>
              <div className="flex gap-2 items-start mt-4">
                <div className="space-y-2">
                  <span className="flex gap-1 items-center">
                    <div className="size-2 rounded-full bg-green-400" />
                    <p className="text-sm">
                      {getDate('planting_schedule', 'best_planting')}
                    </p>
                  </span>
                  <span className="flex gap-1 items-center">
                    <div className="size-2 rounded-full bg-blue-400" />
                    <p className="text-sm">
                      {getDate('planting_schedule', 'late_planting')}
                    </p>
                  </span>
                  <span className="flex gap-1 items-center">
                    <div className="size-2 rounded-full bg-black" />
                    <p className="text-sm">
                      {getDate('harvesting_schedule', 'best_harvesting')}
                    </p>
                  </span>
                  <span className="flex gap-1 items-center">
                    <div className="size-2 rounded-full bg-red-400" />
                    <p className="text-sm">
                      {getDate('harvesting_schedule', 'late_harvesting')}
                    </p>
                  </span>
                </div>
                <div className="border-2 border-gray-300 p-2 rounded space-y-2">
                  <span className="space-y-1 text-xs">
                    <p className="font-semibold mb-2">Soil Info</p>
                    <p>soil Temp: {onboardingData.temp || 40}</p>
                    <p>soil PH: {onboardingData.ph || 30}</p>
                  </span>
                  <Button
                    children="More Insights"
                    className="w-full rounded-none font-normal text-xs"
                    handleClick={moreInsights}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2  gap-2 mt-4">
                <span className="flex gap-1 items-center">
                  <div className="size-2 rounded-full bg-green-400" />
                  <p className="text-sm">Best planting time</p>
                </span>
                <span className="flex gap-1 items-center">
                  <div className="size-2 rounded-full bg-blue-400" />
                  <p className="text-sm">late planting time</p>
                </span>
                <span className="flex gap-1 items-center">
                  <div className="size-2 rounded-full bg-black" />
                  <p className="text-sm">Best harvesting time</p>
                </span>
                <span className="flex gap-1 items-center">
                  <div className="size-2 rounded-full bg-red-400" />
                  <p className="text-sm">late harvesting time</p>
                </span>
              </div>
            </div>
          </ReportCard>
        </div>
      </div>
    </div>
  );
};
export default ReportPage;
