export function getRecurringDates({ startDate, endDate, type, interval, selectedWeekdays = [], monthlyPattern = {} }) {
  if (!startDate) return [];

  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date(start.getFullYear(), start.getMonth() + 1, start.getDate());
  let dates = [];

  if (type === "weekly" && selectedWeekdays.length > 0) {
    let current = new Date(start);
    while (current <= end) {
      const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][current.getDay()];
      if (selectedWeekdays.includes(dayName)) {
        dates.push(current.toISOString().split("T")[0]);
      }
      current.setDate(current.getDate() + 1);
    }
    return dates;
  }

  if (type === "monthly" && monthlyPattern.week) {
    let current = new Date(start);
    while (current <= end) {
      const nthDate = getNthWeekdayOfMonth(current.getFullYear(), current.getMonth(), monthlyPattern.day, monthlyPattern.week);
      if (nthDate >= start && nthDate <= end) {
        dates.push(nthDate.toISOString().split("T")[0]);
      }
      current.setMonth(current.getMonth() + interval);
    }
    return dates;
  }

  // Default (daily, weekly no days, yearly)
  let current = new Date(start);
  while (current <= end) {
    const formatted = current.toISOString().split("T")[0];
    dates.push(formatted);

    if (type === "daily") current.setDate(current.getDate() + interval);
    else if (type === "weekly") current.setDate(current.getDate() + 7 * interval);
    else if (type === "monthly") current.setMonth(current.getMonth() + interval);
    else if (type === "yearly") current.setFullYear(current.getFullYear() + interval);
  }

  return dates;
}

function getNthWeekdayOfMonth(year, month, weekday, nth) {
  let date = new Date(year, month, 1);
  let count = 0;
  while (date.getMonth() === month) {
    if (date.getDay() === weekday) {
      count++;
      if (count === nth) return new Date(date);
    }
    date.setDate(date.getDate() + 1);
  }
  return null;
}
