import { find, get } from 'lodash'
import type { LegendData } from '../types'

const createGetIsVisible =
  (legend: Record<string, LegendData>, attr: string) =>
  <T>(data: T) => {
    const value = get(data, ['properties', attr])
    const { visible } = find(legend, { attr, value }) || {}
    return visible ?? false
  }

export default createGetIsVisible
