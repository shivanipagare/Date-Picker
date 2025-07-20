"use client";

import { useDateContext } from "@/context/Context";
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Pattern({ type }) {
  const { interval, setInterval, selectedWeekdays, setSelectedWeekdays, monthlyPattern, setMonthlyPattern } = useDateContext();

  const toggleDay = (day) => {
    setSelectedWeekdays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="space-y-2">
      <p className="font-medium text-gray-700">
        Pattern: Every {interval} {type}
      </p>
      <input
        type="number"
        min="1"
        value={interval}
        onChange={(e) => setInterval(parseInt(e.target.value) || 1)}
        className="border rounded px-2 py-1 w-20"
      />

      {type === "weekly" && (
        <div className="space-y-1">
          <p className="font-medium text-gray-700">Select Days:</p>
          <div className="flex flex-wrap gap-2">
            {weekdays.map((day) => (
              <button
                key={day}
                onClick={() => toggleDay(day)}
                className={`px-3 py-1 rounded-md text-sm ${
                  selectedWeekdays.includes(day)
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}

      {type === "monthly" && (
        <div className="space-y-1">
          <p className="font-medium text-gray-700">Monthly Pattern:</p>
          <div className="flex gap-2">
            <select
              value={monthlyPattern.week}
              onChange={(e) =>
                setMonthlyPattern({ ...monthlyPattern, week: parseInt(e.target.value) })
              }
              className="border rounded px-2 py-1"
            >
              <option value={1}>First</option>
              <option value={2}>Second</option>
              <option value={3}>Third</option>
              <option value={4}>Fourth</option>
            </select>
            <select
              value={monthlyPattern.day}
              onChange={(e) =>
                setMonthlyPattern({ ...monthlyPattern, day: parseInt(e.target.value) })
              }
              className="border rounded px-2 py-1"
            >
              {weekdays.map((day, idx) => (
                <option key={day} value={idx}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

