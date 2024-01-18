import { DateTime, Settings } from "luxon";
import * as holiday_jp from "@holiday-jp/holiday_jp";

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
    const date = DateTime.fromObject({ year, month, day: i + 1 }, { zone });
    // Check if the date is a holiday
    const is_jp_national_holiday = holiday_jp.isHoliday(
      new Date(date.year, date.month - 1, date.day),
    );
    // Get the holiday information
    // length is 1 or 0 because the date range is only one day
    const holidayjp_national_holiday = is_jp_national_holiday
      ? holiday_jp.between(
          new Date(date.year, date.month - 1, date.day),
          new Date(date.year, date.month - 1, date.day),
        )[0]
      : null;

    return {
      date: date.toISO(),
      is_jp_national_holiday,
      holidayjp_national_holiday,
    };
  });

  return {
    numDays,
    dates,
  };
};
