import { Dictionary, get, keys, map, mapValues } from 'lodash'

const getLineSeriesFromDictionary = <T>(
  dictionary: Dictionary<T[]>,
  value: keyof T
) =>
  keys(dictionary).map((type) => ({
    name: type,
    type: 'line' as const,
    data: get(
      mapValues(dictionary, (data) => map(data, value)),
      type
    ),
  }))

export default getLineSeriesFromDictionary
