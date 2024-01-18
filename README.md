## month-info-jp-calendar

## how to use

```ts
import { monthInfoJpCalendar } from 'month-info-jp-calendar';

const monthInfoJpCalendar = monthInfoJpCalendar(2020, 1);

console.log(monthInfoJpCalendar);

// この月の日数と各日をdateオブジェクト、それぞれの日が日本の祝日であればその情報を返す
// {
//   numDays: 31,
//   dates: [
//     {
//       date: 2020-01-01T00:00:00.000Z,
//       is_jp_national_holiday: true,
//       holidayjp_national_holiday: {
//         name: '元日',
//         name_en: 'New Year\'s Day',
//         date: '2020-01-01'
//       }
//     },
//     {
//       date: 2020-01-02T00:00:00.000Z,
//       is_jp_national_holiday: false,
//       holidayjp_national_holiday: null
//     },
//     ...
//   ]


```

