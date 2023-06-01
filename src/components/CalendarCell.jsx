export default function CalendarCell({
  isStartDate,
  isEndDate,
  isInRange,
  date,
  isMuted,
  isActive,
  handleClick,
  isSelected,
}) {
  const isLeftEdge = date.getDay() === 0;
  const isRightEdge = date.getDay() === 6;

  const text = isSelected
    ? "text-white"
    : isMuted
    ? "text-[#667085]"
    : "text-[#344054]";
  const bg = isSelected
    ? "bg-[#007AFF]"
    : isInRange
    ? "bg-[#F9FAFB]"
    : "bg-white hover:bg-[#F9FAFB]";

  return (
    <div
      onClick={() => {
        handleClick(date);
      }}
      className={`p-2 w-10 aspect-square relative cursor-pointer`}
    >
      <span className="absolute w-full h-full left-0 top-0 grid grid-cols-2">
        <span
          className={
            isLeftEdge || isStartDate || (!isInRange && !isSelected)
              ? "opacity-0"
              : "bg-[#F9FAFB]"
          }
        />
        <span
          className={
            isRightEdge || isEndDate || (!isInRange && !isSelected)
              ? "opacity-0"
              : "bg-[#F9FAFB]"
          }
        />
      </span>

      <span
        className={`absolute w-full h-full left-0 top-0 grid items-center justify-center text-sm font-medium rounded-full ${bg} ${text}`}
      >
        {date.getDate()}
      </span>

      {isActive && (
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
