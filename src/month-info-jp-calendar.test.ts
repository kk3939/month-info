import { monthInfoJpCalendar } from "./month-info-jp-calendar";

describe("numDays", () => {
  it("Check whether the number of days of each month is correct(2020)", () => {
    expect(monthInfoJpCalendar(2020, 1).numDays).toBe(31);
    expect(monthInfoJpCalendar(2020, 2).numDays).toBe(29);
    expect(monthInfoJpCalendar(2020, 3).numDays).toBe(31);
    expect(monthInfoJpCalendar(2020, 4).numDays).toBe(30);
    expect(monthInfoJpCalendar(2020, 5).numDays).toBe(31);
    expect(monthInfoJpCalendar(2020, 6).numDays).toBe(30);
    expect(monthInfoJpCalendar(2020, 7).numDays).toBe(31);
    expect(monthInfoJpCalendar(2020, 8).numDays).toBe(31);
    expect(monthInfoJpCalendar(2020, 9).numDays).toBe(30);
    expect(monthInfoJpCalendar(2020, 10).numDays).toBe(31);
    expect(monthInfoJpCalendar(2020, 11).numDays).toBe(30);
    expect(monthInfoJpCalendar(2020, 12).numDays).toBe(31);
  });

  it("Check whether the number of days of each month is correct(2021)", () => {
    expect(monthInfoJpCalendar(2021, 1).numDays).toBe(31);
    expect(monthInfoJpCalendar(2021, 2).numDays).toBe(28);
    expect(monthInfoJpCalendar(2021, 3).numDays).toBe(31);
    expect(monthInfoJpCalendar(2021, 4).numDays).toBe(30);
    expect(monthInfoJpCalendar(2021, 5).numDays).toBe(31);
    expect(monthInfoJpCalendar(2021, 6).numDays).toBe(30);
    expect(monthInfoJpCalendar(2021, 7).numDays).toBe(31);
    expect(monthInfoJpCalendar(2021, 8).numDays).toBe(31);
    expect(monthInfoJpCalendar(2021, 9).numDays).toBe(30);
    expect(monthInfoJpCalendar(2021, 10).numDays).toBe(31);
    expect(monthInfoJpCalendar(2021, 11).numDays).toBe(30);
    expect(monthInfoJpCalendar(2021, 12).numDays).toBe(31);
  });

  it("Check whether the number of days of each month is correct(2022)", () => {
    expect(monthInfoJpCalendar(2022, 1).numDays).toBe(31);
    expect(monthInfoJpCalendar(2022, 2).numDays).toBe(28);
    expect(monthInfoJpCalendar(2022, 3).numDays).toBe(31);
    expect(monthInfoJpCalendar(2022, 4).numDays).toBe(30);
    expect(monthInfoJpCalendar(2022, 5).numDays).toBe(31);
    expect(monthInfoJpCalendar(2022, 6).numDays).toBe(30);
    expect(monthInfoJpCalendar(2022, 7).numDays).toBe(31);
    expect(monthInfoJpCalendar(2022, 8).numDays).toBe(31);
    expect(monthInfoJpCalendar(2022, 9).numDays).toBe(30);
    expect(monthInfoJpCalendar(2022, 10).numDays).toBe(31);
    expect(monthInfoJpCalendar(2022, 11).numDays).toBe(30);
    expect(monthInfoJpCalendar(2022, 12).numDays).toBe(31);
  });
});

// Take example of 2020 for testing.
describe("dates", () => {
  it("Check whether the number and name of jp holiday is correct(2020/01)", () => {
    const dates = monthInfoJpCalendar(2020, 1).dates.filter(
      (date) => date.is_jp_national_holiday,
    );
    expect(dates.length).toBe(2);
    expect(dates[0].holidayjp_national_holiday?.name).toBe("元日");
    expect(dates[1].holidayjp_national_holiday?.name).toBe("成人の日");
  });
  it("Check whether the number and name of jp holiday is correct(2020/02)", () => {
    const dates = monthInfoJpCalendar(2020, 2).dates.filter(
      (date) => date.is_jp_national_holiday,
    );
    expect(dates.length).toBe(3);
    expect(dates[0].holidayjp_national_holiday?.name).toBe("建国記念の日");
    expect(dates[1].holidayjp_national_holiday?.name).toBe("天皇誕生日");
    expect(dates[2].holidayjp_national_holiday?.name).toBe(
      "天皇誕生日 振替休日",
    );
  });
  it("Check whether the number and name of jp holiday is correct(2020/03)", () => {
    const dates = monthInfoJpCalendar(2020, 3).dates.filter(
      (date) => date.is_jp_national_holiday,
    );
    expect(dates.length).toBe(1);
    expect(dates[0].holidayjp_national_holiday?.name).toBe("春分の日");
  });
  it("Check whether the number and name of jp holiday is correct(2020/04)", () => {
    const dates = monthInfoJpCalendar(2020, 4).dates.filter(
      (date) => date.is_jp_national_holiday,
    );
    expect(dates.length).toBe(1);
    expect(dates[0].holidayjp_national_holiday?.name).toBe("昭和の日");
  });
  it("Check whether the number and name of jp holiday is correct(2020/05)", () => {
    const dates = monthInfoJpCalendar(2020, 5).dates.filter(
      (date) => date.is_jp_national_holiday,
    );
    expect(dates.length).toBe(4);
    expect(dates[0].holidayjp_national_holiday?.name).toBe("憲法記念日");
    expect(dates[1].holidayjp_national_holiday?.name).toBe("みどりの日");
    expect(dates[2].holidayjp_national_holiday?.name).toBe("こどもの日");
    expect(dates[3].holidayjp_national_holiday?.name).toBe(
      "憲法記念日 振替休日",
    );
  });
  it("Check whether the number and name of jp holiday is correct(2020/06)", () => {
    const dates = monthInfoJpCalendar(2020, 6).dates.filter(
      (date) => date.is_jp_national_holiday,
    );
    expect(dates.length).toBe(0);
  });
  it("Check whether the number and name of jp holiday is correct(2020/07)", () => {
    const dates = monthInfoJpCalendar(2020, 7).dates.filter(
      (date) => date.is_jp_national_holiday,
    );
    expect(dates.length).toBe(2);
    expect(dates[0].holidayjp_national_holiday?.name).toBe("海の日");
    expect(dates[1].holidayjp_national_holiday?.name).toBe("スポーツの日");
  });
  it("Check whether the number and name of jp holiday is correct(2020/08)", () => {
    const dates = monthInfoJpCalendar(2020, 8).dates.filter(
      (date) => date.is_jp_national_holiday,
    );
    expect(dates.length).toBe(1);
    expect(dates[0].holidayjp_national_holiday?.name).toBe("山の日");
  });
  it("Check whether the number and name of jp holiday is correct(2020/09)", () => {
    const dates = monthInfoJpCalendar(2020, 9).dates.filter(
      (date) => date.is_jp_national_holiday,
    );
    expect(dates.length).toBe(2);
    expect(dates[0].holidayjp_national_holiday?.name).toBe("敬老の日");
    expect(dates[1].holidayjp_national_holiday?.name).toBe("秋分の日");
  });
  it("Check whether the number and name of jp holiday is correct(2020/10)", () => {
    const dates = monthInfoJpCalendar(2020, 10).dates.filter(
      (date) => date.is_jp_national_holiday,
    );
    expect(dates.length).toBe(0);
  });
  it("Check whether the number and name of jp holiday is correct(2020/11)", () => {
    const dates = monthInfoJpCalendar(2020, 11).dates.filter(
      (date) => date.is_jp_national_holiday,
    );
    expect(dates.length).toBe(2);
    expect(dates[0].holidayjp_national_holiday?.name).toBe("文化の日");
    expect(dates[1].holidayjp_national_holiday?.name).toBe("勤労感謝の日");
  });
  it("Check whether the number and name of jp holiday is correct(2020/12)", () => {
    const dates = monthInfoJpCalendar(2020, 12).dates.filter(
      (date) => date.is_jp_national_holiday,
    );
    expect(dates.length).toBe(0);
  });
});
