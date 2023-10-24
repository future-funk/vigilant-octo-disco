import parsePercent from '../parsers/percentParser'

const percentFormatter = (value = 0) => (value ? `${parsePercent(value)}%` : '')

export default percentFormatter
