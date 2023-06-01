import { useMemo, useState } from "react";
import { formatCalendarDates, getAllDates } from "../utils/date";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const today = new Date(Date.now());

export default function Calendar({ start, end, handleChange }) {
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);
  const [monthDate, setMonthDate] = useState(today);

  const dates = useMemo(
    () => formatCalendarDates(getAllDates(monthDate)),
    [monthDate]
  );

  useMemo(() => {
    handleChange({ startDate, endDate });
  }, [startDate, endDate]);

  const handleClick = (date) => {
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

  return (
    <div className="shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[#D0D5DD] border rounded-lg bg-white p-2">
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            setMonthDate((md) => {
              const _date = new Date(md);
              _date.setMonth(_date.getMonth() - 1);
              return _date;
            });
          }}
          className="bg-white hover:bg-neutral-50 p-2 rounded-lg"
        >
          <FiChevronLeft size={20} color=" #344054" />
        </button>
        <span className="text-[#344054] text-base font-semibold">
          {monthDate.toLocaleString("default", { month: "long" })}{" "}
          {monthDate.getFullYear()}
        </span>
        <button
          onClick={() => {
            setMonthDate((md) => {
              const _date = new Date(md);
              _date.setMonth(_date.getMonth() + 1);
              return _date;
            });
          }}
          className="bg-white hover:bg-neutral-50 p-2 rounded-lg"
        >
          <FiChevronRight size={20} color=" #344054" />
        </button>
      </div>
      <div className="grid gap-y-1 grid-cols-7 mt-3">
        <div className="w-10 aspect-square p-2 text-sm font-medium text-[#344054]">
          Su
        </div>
        <div className="w-10 aspect-square p-2 text-sm font-medium text-[#344054]">
          Mo
        </div>
        <div className="w-10 aspect-square p-2 text-sm font-medium text-[#344054]">
          Tu
        </div>
        <div className="w-10 aspect-square p-2 text-sm font-medium text-[#344054]">
          We
        </div>
        <div className="w-10 aspect-square p-2 text-sm font-medium text-[#344054]">
          Th
        </div>
        <div className="w-10 aspect-square p-2 text-sm font-medium text-[#344054]">
          Fr
        </div>
        <div className="w-10 aspect-square p-2 text-sm font-medium text-[#344054] mb-1">
          Sa
        </div>
        {dates.map((date, i) => (
          <CalendarCell
            isInRange={
              startDate && endDate && date > startDate && date < endDate
            }
            isStartDate={
              startDate && date.toDateString() === startDate.toDateString()
            }
            isEndDate={
              endDate && date.toDateString() === endDate.toDateString()
            }
            key={i}
            date={date}
            handleClick={handleClick}
            month={monthDate.getMonth()}
          />
        ))}
      </div>
    </div>
  );
}

function CalendarCell({
  isStartDate,
  isEndDate,
  isInRange,
  date,
  handleClick,
  month,
}) {
  const isSelected = isStartDate || isEndDate;
  const isLeftEdge = date.getDay() === 0;
  const isRightEdge = date.getDay() === 6;

  const classes = isSelected
    ? "bg-[#007AFF] rounded-full"
    : isInRange
    ? isLeftEdge
      ? "bg-[#F9FAFB] rounded-l-full"
      : isRightEdge
      ? "bg-[#F9FAFB] rounded-r-full"
      : "bg-[#F9FAFB]"
    : "hover:bg-[#F9FAFB] rounded-full ";

  return (
    <div
      onClick={() => {
        handleClick(date);
      }}
      className={`p-2 w-10 aspect-square relative cursor-pointer`}
    >
      <span className="absolute w-full h-full left-0 top-0 grid grid-cols-2">
        <span className={isEndDate ? "bg-[#F9FAFB]" : "opacity-0"} />
        <span className={isStartDate ? "bg-[#F9FAFB]" : "opacity-0"} />
      </span>

      <span
        className={`absolute w-full h-full left-0 top-0 grid items-center justify-center text-sm font-medium ${
          isSelected
            ? "text-white"
            : date.getMonth() !== month
            ? "text-[#667085]"
            : "text-[#344054]"
        } ${classes} `}
      >
        {date.getDate()}
      </span>

      {today.toDateString() === date.toDateString() && (
        <span className="absolute w-full h-full left-0 top-0 grid justify-center items-end">
          <span
            className={`rounded-full w-1 mb-1 aspect-square ${
              isSelected ? "bg-white" : "bg-[#007AFF]"
            }`}
          />
        </span>
      )}
    </div>
  );
}
