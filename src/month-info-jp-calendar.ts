import { DateTime } from "luxon";

// Return the number of days in a month
export const monthInfoJpCalendar = (
  year: number,
  month: number,
  zone: string = "Asia/Tokyo",
) => {
  const dt = DateTime.fromObject({ year, month }, { zone });
  const numDays = dt.daysInMonth;
  const dates = [...Array(numDays).keys()].map((i) => {
    // index starts from 0
    // So, add 1 to the index to get the day of the month
    const date = DateTime.fromObject(
      { year, month, day: i + 1 },
      { zone },
    ).toISO();
    return {
      date,
    };
  });

  return {
    numDays,
    dates,
  };
};
