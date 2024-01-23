import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'tailwindcss/tailwind.css'; // Asegúrate de importar los estilos de Tailwind

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="w-full rounded-md flex flex-col justify-center items-center">
      <label className=" text-sm font-medium text-gray-700">Choose a date</label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        className="mt-1 mb-1 p-2 w-full border rounded-md text-center"
      />
    </div>
  );
};

export default MyDatePicker;
