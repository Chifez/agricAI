// 'use client';

// import { format, getDay, isSameMonth, isToday, startOfToday } from 'date-fns';
// import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
// import useCalendar from '@/lib/utils/hooks/useCalendar';

// const today = startOfToday();

// const Calendar = () => {
//   const { firstDayOfMonth, getPrevMonth, getNextMonth, days, daysInMonth } =
//     useCalendar();

//   return (
//     <div className="w-full flex-1 flex items-end">
//       <div className="w-full h-fit">
//         <div className="mb-2">
//           <div className="flex items-center justify-between">
//             <p className="font-semibold text-base">
//               {format(firstDayOfMonth, 'MMMM yyyy')}
//             </p>
//             <div className="flex items-center justify-evenly gap-8 sm:gap-12">
//               <MdNavigateBefore
//                 className="w-4 h-4 cursor-pointer"
//                 onClick={getPrevMonth}
//               />
//               <MdNavigateNext
//                 className="w-4 h-4 cursor-pointer"
//                 onClick={getNextMonth}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-7 gap-2 place-items-center">
//           {days.map((day, idx) => (
//             <div key={idx} className="text-sm font-semibold capitalize">
//               {day}
//             </div>
//           ))}
//         </div>
//         <div className="grid grid-cols-7 gap-2 place-items-center mt-2">
//           {Array.from({ length: getDay(firstDayOfMonth) }).map((_, idx) => (
//             <div
//               key={`empty-${idx}`}
//               className="text-sm font-semibold capitalize"
//             ></div>
//           ))}
//           {daysInMonth.map((day, idx) => (
//             <div key={idx} className="">
//               <p
//                 className={`text-sm cursor-pointer flex items-center justify-center font-semibold h-6 w-6 rounded-full hover:text-white ${
//                   isSameMonth(day, today)
//                     ? 'text-gray-900 dark:text-white'
//                     : 'text-gray-400'
//                 } ${!isToday(day) && 'hover:bg-blue-500'} ${
//                   isToday(day) && 'bg-red-500 text-white'
//                 }`}
//               >
//                 {format(day, 'd')}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calendar;

'use client';

import {
  format,
  getDay,
  isSameMonth,
  isToday,
  startOfToday,
  isSameDay,
} from 'date-fns';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import useCalendar from '@/lib/utils/hooks/useCalendar';
import { ScheduleData } from '@/lib/utils/types';

const today = startOfToday();

// Mock data representing API response
// const scheduleData = {
//   planting_schedule: [
//     {
//       type: 'best_planting',
//       date: '2024-09-15',
//     },
//     {
//       type: 'late_planting',
//       date: '2024-10-01',
//     },
//   ],
//   harvesting_schedule: [
//     {
//       type: 'best_harvesting',
//       date: '2025-03-20',
//     },
//     {
//       type: 'late_harvesting',
//       date: '2025-04-05',
//     },
//   ],
// };

const Calendar = ({ scheduleData }: { scheduleData?: ScheduleData }) => {
  const { firstDayOfMonth, getPrevMonth, getNextMonth, days, daysInMonth } =
    useCalendar();

  // Convert string dates from scheduleData to Date objects
  const scheduleEvents = scheduleData
    ? [
        ...scheduleData.planting_schedule,
        ...scheduleData.harvesting_schedule,
      ].map((event) => ({
        ...event,
        date: new Date(event.date),
      }))
    : [];

  return (
    <div className="w-full flex-1 flex items-end">
      <div className="w-full h-fit">
        <div className="mb-2">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-base">
              {format(firstDayOfMonth, 'MMMM yyyy')}
            </p>
            <div className="flex items-center justify-evenly gap-8 sm:gap-12">
              <MdNavigateBefore
                className="w-4 h-4 cursor-pointer"
                onClick={getPrevMonth}
              />
              <MdNavigateNext
                className="w-4 h-4 cursor-pointer"
                onClick={getNextMonth}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 place-items-center">
          {days.map((day, idx) => (
            <div key={idx} className="text-sm font-semibold capitalize">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 place-items-center mt-2">
          {Array.from({ length: getDay(firstDayOfMonth) }).map((_, idx) => (
            <div
              key={`empty-${idx}`}
              className="text-sm font-semibold capitalize"
            ></div>
          ))}
          {daysInMonth.map((day, idx) => {
            const eventForDay = scheduleEvents.find((event) =>
              isSameDay(day, event.date)
            );

            let bgColor = '';

            if (eventForDay) {
              switch (eventForDay.type) {
                case 'best_planting':
                  bgColor = 'bg-green-500 text-white';
                  break;
                case 'late_planting':
                  bgColor = 'bg-yellow-500 text-white';
                  break;
                case 'best_harvesting':
                  bgColor = 'bg-blue-500 text-white';
                  break;
                case 'late_harvesting':
                  bgColor = 'bg-red-500 text-white';
                  break;
                default:
                  break;
              }
            }

            return (
              <div key={idx} className="">
                <p
                  className={`text-sm cursor-pointer flex items-center justify-center font-semibold h-6 w-6 rounded-full hover:text-white ${
                    isSameMonth(day, today)
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-400'
                  } ${!isToday(day) && 'hover:bg-blue-500'} ${
                    isToday(day) && 'bg-red-500 text-white'
                  } ${bgColor}`}
                >
                  {format(day, 'd')}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
