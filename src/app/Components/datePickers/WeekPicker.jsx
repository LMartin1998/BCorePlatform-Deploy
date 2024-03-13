import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WeekPicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showWeekNumbers
        showWeekPicker
        dateFormat="dd/MM/yyyy"
        className="mt-1 mb-1 p-1 w-full border border-blue-300 rounded-md text-center dark:placeholder-[#A0AEC0] dark:text-black dark:border-[#00000005]"
        placeholderText="Choose a week"
      ></DatePicker>
    </div>
  );
};

export default WeekPicker;
