import { flatten, forEach, get } from 'lodash'

export const getValuesFromConst = <T>(constValue: T, items: string[]) => {
  const values: string[] = []

  forEach(items, (item) => {
    const value = get(constValue, item)
    if (value) {
      values.push(value)
    }
  })

  return flatten(values)
}

export default getValuesFromConst
