"use client";

import { createContext, useContext, useState } from "react";
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const RecurrenceContext = createContext();

export function RecurrenceProvider({ children }) {
  const [recurrenceType, setRecurrenceType] = useState("daily");
  const [interval, setInterval] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedWeekdays, setSelectedWeekdays] = useState([]); 
  const [monthlyPattern, setMonthlyPattern] = useState({ week: 1, day: 2 }); 

  return (
    <RecurrenceContext.Provider
      value={{
        recurrenceType,
        setRecurrenceType,
        interval,
        setInterval,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        selectedWeekdays,
        setSelectedWeekdays,
        monthlyPattern,
        setMonthlyPattern,
      }}
    >
      {children}
    </RecurrenceContext.Provider>
  );
}

export const useDateContext = () => useContext(RecurrenceContext);
