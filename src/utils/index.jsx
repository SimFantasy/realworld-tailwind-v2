import dayjs from 'dayjs'

export const dateFormat = date => dayjs(date).format('MMMM D, YYYY')
