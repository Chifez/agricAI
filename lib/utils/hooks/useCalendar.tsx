// 'use client';

// import React, { useState } from 'react';
// import {
//   add,
//   eachDayOfInterval,
//   endOfMonth,
//   format,
//   parse,
//   startOfToday,
// } from 'date-fns';

// const today = startOfToday();

// const useCalendar = () => {
//   const [currMonth, setCurrMonth] = useState(() => format(today, 'MMM-yyyy'));
//   let firstDayOfMonth = parse(currMonth, 'MMM-yyyy', new Date());
//   const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
//   const colStartClasses = [
//     '',
//     'col-start-2',
//     'col-start-3',
//     'col-start-4',
//     'col-start-5',
//     'col-start-6',
//     'col-start-7',
//   ];

//   const daysInMonth = eachDayOfInterval({
//     start: firstDayOfMonth,
//     end: endOfMonth(firstDayOfMonth),
//   });
//   // React.MouseEvent<SVGSVGElement>
//   const getPrevMonth = (event: any) => {
//     console.log('clicked prevMonth');
//     event.preventDefault();
//     const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
//     setCurrMonth(format(firstDayOfPrevMonth, 'MMM-yyyy'));
//   };

//   const getNextMonth = (event: any) => {
//     console.log('clicked nextMonth');
//     event.preventDefault();
//     const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
//     setCurrMonth(format(firstDayOfNextMonth, 'MMM-yyyy'));
//   };
//   return {
//     currMonth,
//     setCurrMonth,
//     firstDayOfMonth,
//     days,
//     colStartClasses,
//     daysInMonth,
//     getNextMonth,
//     getPrevMonth,
//   };
// };

// export default useCalendar;

'use client';

import React, { useState } from 'react';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  parse,
  startOfToday,
  startOfWeek,
  getDay,
} from 'date-fns';

const today = startOfToday();

const useCalendar = () => {
  const [currMonth, setCurrMonth] = useState(() => format(today, 'MMM-yyyy'));
  const firstDayOfMonth = parse(currMonth, 'MMM-yyyy', new Date());

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Calculate the start of the week for the first day of the month
  const startOfWeekForFirstDay = startOfWeek(firstDayOfMonth);

  // Calculate the days in the month
  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: endOfMonth(firstDayOfMonth),
  });

  // Calculate the offset for the first day
  const colStartClasses = new Array(7).fill('');
  colStartClasses[getDay(firstDayOfMonth)] = `col-start-${
    getDay(firstDayOfMonth) + 1
  }`;

  const getPrevMonth = (event: any) => {
    event.preventDefault();
    const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
    setCurrMonth(format(firstDayOfPrevMonth, 'MMM-yyyy'));
  };

  const getNextMonth = (event: any) => {
    event.preventDefault();
    const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
    setCurrMonth(format(firstDayOfNextMonth, 'MMM-yyyy'));
  };

  return {
    currMonth,
    setCurrMonth,
    firstDayOfMonth,
    days,
    colStartClasses,
    daysInMonth,
    getNextMonth,
    getPrevMonth,
    startOfWeekForFirstDay,
  };
};

export default useCalendar;
