'use client'
import React, { useState } from 'react'

const DatePickerComp = () => {  
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
  
    const toggleCalendar = () => {
      setIsOpen(!isOpen);
    };
  
    const handleDateChange = (date: Date) => {
      setSelectedDate(date.toDateString());
      setIsOpen(false);
    };
  
    const daysInMonth = (date: Date) => {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
  
    const renderDays = () => {
      const days: JSX.Element[] = [];
      const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
      const totalDays = daysInMonth(currentDate);
  
      for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`} className="w-12 h-12"></div>);
      }
  
      for (let day = 1; day <= totalDays; day++) {
        days.push(
          <div
            key={day}
            className="w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-blue-500 hover:text-white"
            onClick={() => handleDateChange(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
          >
            {day}
          </div>
        );
      }
  
      return days;
    };
  
    return (
      <div className="relative h-full text-black">
        <input
          type="text"
          value={selectedDate}
          onClick={toggleCalendar}
          readOnly
          className="border rounded px-4 py-2"
          placeholder="Select a date"
        />
        {isOpen && (
          <div className="absolute bg-green-800 border z-50  rounded shadow-lg mt-2 p-4">
            <div className="grid grid-cols-7 gap-2">{renderDays()}</div>
          </div>
        )}
      </div>
    );
  };
  

export default DatePickerComp