import { format } from 'date-fns';

export const currentDate = (value?: Date): string => {
  let date;
  if (value) {
    date = value;
  } else {
    date = new Date();
  }

  const day = format(date, 'do');
  const monthAndYear = format(date, 'MMMM yyyy');
  return `${day}, ${monthAndYear}`;
};
