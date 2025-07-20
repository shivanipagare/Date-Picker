"use client";

import { useDateContext } from "@/context/Context";
import Options from "./Options";
import Pattern from "./Pattern";
import DateRangePicker from "./DateRangePicker";
import CalendarView  from "./CalenderView"

export default function DatePicker() {
  const { recurrenceType } = useDateContext();


  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-lg space-y-4 border-2">
      
      <h2 className="text-2xl font-bold text-gray-800 ">
        Date Picker
      </h2>
      <Options />
      <Pattern type={recurrenceType} />
      <DateRangePicker />
      <CalendarView />
    </div>
  );
}
