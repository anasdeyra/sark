import { useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { formatCalendarDates, getAllDates } from "../utils/date";

export const TODAY = new Date(Date.now());

export default function Calendar({ setMonthDate, monthDate, children }) {
  return (
    <div className="shadow-xl border-[#D0D5DD] border rounded-lg bg-white p-2">
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
        {children}
      </div>
    </div>
  );
}

export function useCalendar() {
  const [monthDate, setMonthDate] = useState(TODAY);

  const dates = useMemo(
    () => formatCalendarDates(getAllDates(monthDate)),
    [monthDate]
  );
  return { dates, monthDate, setMonthDate };
}
