"use client";

import { useDateContext } from "@/context/Context";

const options = ["daily", "weekly", "monthly", "yearly"];

export default function Options() {
  const { recurrenceType, setRecurrenceType } = useDateContext();

  return (
    <div className="space-y-2">
      <p className="font-medium text-gray-700">Recurrence Type:</p>
      <div className="flex gap-4">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setRecurrenceType(opt)}
            className={`px-3 py-1 rounded-md text-sm capitalize ${
              recurrenceType === opt
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
