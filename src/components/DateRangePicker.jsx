"use client";

import { useDateContext } from "@/context/Context";

export default function DateRangePicker() {
  const { startDate, setStartDate, endDate, setEndDate } = useDateContext();

  return (
    <div className="space-y-2">
      <p className="font-medium text-gray-700">Select Date Range:</p>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Start Date:</label>
          <input
            type="date"
            value={startDate || ""}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded px-2 py-1"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-600">End Date:</label>
          <input
            type="date"
            value={endDate || ""}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded px-2 py-1"
          />
        </div>
      </div>
    </div>
  );
}
