export function getAllDates(monthDate) {
  let date = new Date(monthDate);

  let dates = [];

  let i = 0;

  while (date.getMonth() === monthDate.getMonth()) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
    i++;
  }

  return dates;
}

export function formatCalendarDates(dates) {
  const formatedDates = dates;

  const firstDate = dates[0];
  const lastDate = dates[dates.length - 1];

  let date = new Date(firstDate);

  for (let day = firstDate.getDay(); day > 0; day--) {
    date.setDate(date.getDate() - 1);
    formatedDates.unshift(new Date(date));
  }

  date = new Date(lastDate);

  for (let i = formatedDates.length; i < 42; i++) {
    date.setDate(date.getDate() + 1);
    formatedDates.push(new Date(date));
  }

  return formatedDates;
}
