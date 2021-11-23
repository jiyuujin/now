export const getJPStandardDateTime = (date?: Date | undefined): string => {
  if (date === undefined) {
    return new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' })
  }
  return new Date(date).toLocaleString('en-US', { timeZone: 'Asia/Tokyo' })
}

export const getDay = (date: Date, interval: number) => {
  const dateTime = new Date(getJPStandardDateTime(date))
  return getDoubleDigits(new Date(dateTime.getTime() + 1000 * 60 * 60 * 24 * interval).getDate())
}

export const getCurrentDayStyle = (date: Date, interval: number) => {
  const dateTime = new Date(getJPStandardDateTime())
  return getDay(date, interval) === getDoubleDigits(dateTime.getDate()) ? 'current' : ''
}

export const getDoubleDigits = (num: number) => {
  let tmp = String(num)
  tmp += ''
  if (tmp.length === 1) {
    tmp = '0' + tmp
  }
  return tmp
}
