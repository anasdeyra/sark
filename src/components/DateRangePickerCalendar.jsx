import { useMemo, useState } from "react";
import Calendar, { TODAY, useCalendar } from "./Calendar";
import CalendarCell from "./CalendarCell";

const useRangeCalendar = ({ start, end }) => {
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);
  const { dates, monthDate, setMonthDate } = useCalendar();

  const handleChange = (date) => {
    if (startDate && startDate.toDateString() === date.toDateString())
      return setStartDate(null);
    if (endDate && endDate.toDateString() === date.toDateString())
      return setEndDate(null);

    if (startDate && endDate) {
      if (date > endDate) return setEndDate(date);
      if (date < startDate) return setStartDate(date);
    }

    if (!startDate) {
      if (endDate) {
        if (date > endDate) {
          setStartDate(endDate);
          setEndDate(date);
          return;
        }
        if (endDate.toDateString() !== date.toDateString())
          return setStartDate(date);
      }

      return setStartDate(date);
    }

    if (!endDate) {
      if (startDate) {
        if (date < startDate) {
          setEndDate(startDate);
          setStartDate(date);
          return;
        }
        if (startDate.toDateString() !== date.toDateString())
          return setEndDate(date);
      }

      return setEndDate(date);
    }
  };

  return {
    handleChange,
    dates,

    startDate,
    setStartDate,
    endDate,
    setEndDate,
    monthDate,
    setMonthDate,
  };
};

export default function DateRangePickerCalendar({ start, end, handleChange }) {
  const {
    dates,
    handleChange: handleRangeChange,
    setMonthDate,
    monthDate,
    startDate,
    endDate,
  } = useRangeCalendar({ start, end });

  useMemo(() => {
    handleChange({ startDate, endDate });
  }, [startDate, endDate]);

  return (
    <Calendar monthDate={monthDate} setMonthDate={setMonthDate}>
      {dates.map((date, i) => (
        <CalendarCell
          isInRange={startDate && endDate && date > startDate && date < endDate}
          key={i}
          date={date}
          handleClick={handleRangeChange}
          isStartDate={
            startDate && date.toDateString() === startDate.toDateString()
          }
          isEndDate={endDate && date.toDateString() === endDate.toDateString()}
          isMuted={date.getMonth() !== monthDate.getMonth()}
          isActive={date.toDateString() === TODAY.toDateString()}
          isSelected={
            (startDate && date.toDateString() === startDate.toDateString()) ||
            (endDate && date.toDateString() === endDate.toDateString())
          }
        />
      ))}
    </Calendar>
  );
}
