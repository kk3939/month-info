import { monthInfoJpCalendar } from "./month-info-jp-calendar";

// to test
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
