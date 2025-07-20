import { getRecurringDates } from "../utils/recurrence";

describe("getRecurringDates function", () => {
  test("generates daily recurrence correctly", () => {
    const result = getRecurringDates({
      startDate: "2025-07-01",
      endDate: "2025-07-05",
      type: "daily",
      interval: 1,
    });
    expect(result).toEqual([
      "2025-07-01",
      "2025-07-02",
      "2025-07-03",
      "2025-07-04",
      "2025-07-05",
    ]);
  });

  test("generates weekly recurrence correctly", () => {
    const result = getRecurringDates({
      startDate: "2025-07-01",
      endDate: "2025-07-22",
      type: "weekly",
      interval: 1,
    });
    expect(result).toEqual(["2025-07-01", "2025-07-08", "2025-07-15", "2025-07-22"]);
  });

  test("generates monthly recurrence correctly", () => {
    const result = getRecurringDates({
      startDate: "2025-07-01",
      endDate: "2025-10-01",
      type: "monthly",
      interval: 1,
    });
    expect(result).toEqual(["2025-07-01", "2025-08-01", "2025-09-01", "2025-10-01"]);
  });
});
