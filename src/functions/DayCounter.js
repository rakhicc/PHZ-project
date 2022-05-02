const DayCounter = (closedDate) => {
  const today = new Date().getTime();
  const closed = new Date(closedDate).getTime();
  const minutesToDays = 1000 * 3600 * 24;
  return Math.round((today - closed) / minutesToDays);
};

export default DayCounter;
