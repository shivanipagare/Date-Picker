"use client";

import { useDateContext } from "@/context/Context";
import { getRecurringDates } from "@/utils/recurrence";

export default function CalendarView() {
  //const { startDate, endDate, recurrenceType, interval } = useDateContext();

const { startDate, endDate, recurrenceType, interval, selectedWeekdays, monthlyPattern } = useDateContext();

const recurringDates = getRecurringDates({
  startDate,
  endDate,
  type: recurrenceType,
  interval,
  selectedWeekdays,
  monthlyPattern,
});

  return (
    <div className="border p-3 rounded">
      <p className="font-medium text-gray-700 mb-2">Preview Dates:</p>
      {recurringDates.length > 0 ? (
        <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
          {recurringDates.slice(0, 10).map((date, idx) => (
            <li key={idx}>{date}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No dates selected.</p>
      )}
    </div>
  );
}
