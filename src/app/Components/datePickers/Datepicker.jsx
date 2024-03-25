import React, { useContext, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";
import { GridContext } from "../../contexts/GridContext";

const MyDatePicker = ({ blockId }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const { addDateToIdBlock } = useContext(GridContext);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    addDateToIdBlock(blockId, date);
  };

  return (
    <div className="w-full rounded-md flex flex-col justify-center items-center">
      <label className=" text-sm font-medium text-gray-700 dark:text-white">
        Choose a date
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        className="mt-1 mb-1 p-1 w-full border rounded-md text-center dark:text-black dark:border-[#00000005] dark:bg-gray-300"
      />
    </div>
  );
};

export default MyDatePicker;
