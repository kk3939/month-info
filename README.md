## month-info-jp-calendar

This is a library that provides month information about the calendar of Japan.

## how to use

```ts
import { monthInfoJpCalendar } from 'month-info-jp-calendar';

const monthInfoJpCalendar = monthInfoJpCalendar(2020, 1);

console.log(monthInfoJpCalendar);

// {
//   numDays: 31,
//   dates: [
//     {
//       date: '2024-01-01T00:00:00.000+09:00',
//       is_jp_national_holiday: true,
//       holidayjp_national_holiday: {
//         name: '元日',
//       }
//     },
//     {
//       date: '2024-01-02T00:00:00.000+09:00',
//       is_jp_national_holiday: false,
//       holidayjp_national_holiday: null
//     },
//     ...
//   ]


```

