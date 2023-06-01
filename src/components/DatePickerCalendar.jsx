import { useMemo, useState } from "react";
import Calendar, { TODAY, useCalendar } from "./Calendar";
import CalendarCell from "./CalendarCell";

const useDateCalendar = (date) => {
  const [selectedDate, setSelectedDate] = useState(date);
  const { dates, monthDate, setMonthDate } = useCalendar();

  const handleChange = (d) => {
    if (selectedDate && selectedDate.toDateString() === d.toDateString())
      return setSelectedDate(null);
    setSelectedDate(d);
  };

  return {
    handleChange,
    dates,

    selectedDate,
    setSelectedDate,
    monthDate,
    setMonthDate,
  };
};

export default function DatePickerCalendar({ defaultDate, handleChange }) {
  const {
    handleChange: handleDateChange,
    dates,
    setMonthDate,
    monthDate,
    selectedDate,
  } = useDateCalendar(defaultDate);

  useMemo(() => {
    handleChange(selectedDate);
  }, [selectedDate]);

  return (
    <Calendar monthDate={monthDate} setMonthDate={setMonthDate}>
      {dates.map((date, i) => (
        <CalendarCell
          key={i}
          date={date}
          handleClick={handleDateChange}
          isSelected={
            selectedDate && date.toDateString() === selectedDate.toDateString()
          }
          isMuted={date.getMonth() !== monthDate.getMonth()}
          isActive={date.toDateString() === TODAY.toDateString()}
          isStartDate
          isEndDate
        />
      ))}
    </Calendar>
  );
}
