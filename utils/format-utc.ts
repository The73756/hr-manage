export const formatUTC = (time: string | undefined) => {
  if (!time) return
  console.log(time)
  return Intl.DateTimeFormat(undefined, {
    timeZone: 'Asia/Tokyo',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
    Number(time.split(":")[0]) + 9,
    Number(time.split(":")[1])
  ))
}