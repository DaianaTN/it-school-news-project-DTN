export const getFormattedDate = dateString => {
  const currentDate = new Date(dateString);
  let month = currentDate.getMonth();
  if (month < 10) {
    month = "0" + month;
  }
  let day = currentDate.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  let year = currentDate.getFullYear();

  return `${day}/${month}/${year}`;
};
