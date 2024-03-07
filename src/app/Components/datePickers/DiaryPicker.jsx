import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DiaryPicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <div>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                className="mt-1 mb-1 p-1 w-full border border-blue-300 rounded-md text-center" 
                placeholderText="Choose a day"
            >
            </DatePicker>
        </div> 
    );
}
 
export default DiaryPicker;