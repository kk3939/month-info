import { monthInfoJpCalendar } from "./month-info-jp-calendar";

describe("numDays", () => {
  it("2024/01", () => {
    const monthInfo = monthInfoJpCalendar(2024, 1);
    expect(monthInfo.numDays).toBe(31);
  });
  it("2024/02", () => {
    const monthInfo = monthInfoJpCalendar(2024, 2);
    expect(monthInfo.numDays).toBe(29);
  });
});

describe("dates", () => {
  it("2024/01 has the same length of the days of the month", () => {
    const monthInfo = monthInfoJpCalendar(2024, 1);
    expect(monthInfo.dates.length).toBe(31);
  });
  it("2024/02 has the same length of the days of the month", () => {
    const monthInfo = monthInfoJpCalendar(2024, 2);
    expect(monthInfo.dates.length).toBe(29);
  });
  it("2024/01/01", () => {
    const monthInfo = monthInfoJpCalendar(2024, 1);
    console.log(monthInfo);

    expect(monthInfo.dates[0].date).toBe("2024-01-01T00:00:00.000+09:00");
    expect(monthInfo.dates[0].is_jp_national_holiday).toBe(true);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(monthInfo.dates[0].holidayjp_national_holiday!.name).toBe("元日");
  });
});
