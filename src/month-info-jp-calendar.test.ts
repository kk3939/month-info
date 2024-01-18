import { monthInfoJpCalendar } from "./month-info-jp-calendar";

// to test
describe("test", () => {
  it("test", () => {
    const monthInfo = monthInfoJpCalendar();
    expect(monthInfo.numDays).toBe(31);
  });
});
