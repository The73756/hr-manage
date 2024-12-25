export const formatTime = (decimalTime: number) => {
  const hours = Math.floor(decimalTime);
  const minutes = Math.round((decimalTime - hours) * 60);
  return minutes ? `${hours} ч ${minutes} мин` : `${hours} ч`;
};