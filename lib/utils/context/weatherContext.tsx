'use client';

import { createContext, useState, ReactNode } from 'react';

interface WeatherData {
  location: string;
  weather_state: string;
  weather_value: string;
  morning_value: string;
  afternoon_value: string;
  evening_value: string;
  overnight_value: string;
  humidity: string;
  wind: string;
  high_low: string;
}

interface WeatherContextType {
  weatherData: WeatherData;
  setweatherData: (data: WeatherData) => void;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weatherData, setweatherData] = useState<WeatherData>({
    location: 'Enugu North',
    weather_state: 'mostly cloudy',
    weather_value: '86',
    morning_value: '78',
    afternoon_value: '62',
    evening_value: '75',
    overnight_value: '80',
    humidity: '70',
    wind: '37',
    high_low: '45',
  });

  return (
    <WeatherContext.Provider value={{ weatherData, setweatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};
