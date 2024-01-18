import { DateTime } from "luxon";

// Return the number of days in a month
export const monthInfoJpCalendar = (year: number, month: number) => {
  const dt = DateTime.local(year, month);
  const numDays = dt.daysInMonth;
  return {
    numDays,
  };
};
