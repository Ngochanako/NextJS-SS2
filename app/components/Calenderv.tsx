import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div style={{ margin: '20px' }}>
      <h2>Select a Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Choose a date"
      />
    </div>
  );
};

export default MyDatePicker;
