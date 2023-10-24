import dayjs from 'dayjs'

export const getMonthDifferent = (start: Date, end: Date) => {
  const endDate = dayjs(end)
  const months  = endDate.diff(dayjs(start), 'month')
  return months <= 0 ? 0 : months;
}
