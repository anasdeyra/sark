import { useMemo, useState } from "react";
import Calendar, { TODAY, useCalendar } from "./Calendar";
import CalendarCell from "./CalendarCell";

const useMultipleDateCalendar = (defaultDates = []) => {
  const [selectedDates, setSelectedDates] = useState(defaultDates);
  const { dates, monthDate, setMonthDate } = useCalendar();

  const handleChange = (date) => {
    const index = selectedDates.findIndex(
      (_date) => _date.toDateString() === date.toDateString()
    );
    if (index === -1)
      return setSelectedDates((_selectedDates) => [...selectedDates, date]);
    setSelectedDates((_selectedDates) => {
      const _ = [..._selectedDates];
      _.splice(index, 1);
      return _;
    });
  };

  return {
    handleChange,
    dates,
    selectedDates,
    setSelectedDates,
    monthDate,
    setMonthDate,
  };
};

export default function MultipleDatePickerCalendar({
  defaultDates = [],
  handleChange,
}) {
  const {
    handleChange: handleDateChange,
    dates,
    setMonthDate,
    monthDate,
    selectedDates,
  } = useMultipleDateCalendar(defaultDates);

  useMemo(() => {
    handleChange(selectedDates);
  }, [selectedDates]);

  return (
    <Calendar monthDate={monthDate} setMonthDate={setMonthDate}>
      {dates.map((date, i) => (
        <CalendarCell
          key={i}
          date={date}
          handleClick={handleDateChange}
          isSelected={selectedDates.find(
            (_date) => _date.toDateString() === date.toDateString()
          )}
          isMuted={date.getMonth() !== monthDate.getMonth()}
          isActive={date.toDateString() === TODAY.toDateString()}
          isStartDate
          isEndDate
        />
      ))}
    </Calendar>
  );
}
