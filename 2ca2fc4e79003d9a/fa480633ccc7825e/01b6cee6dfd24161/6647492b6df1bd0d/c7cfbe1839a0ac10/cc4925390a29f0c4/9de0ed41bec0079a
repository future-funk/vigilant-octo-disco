import { Color } from '@deck.gl/core/typed'
import { decomposeColorValues } from '@bpd/bpd-web/shared/theme'
import { find, get } from 'lodash'
import { LegendData } from '../types'

export interface CreateGetDomainColorsOptions {
  fallback?: string
  alpha?: number
}

const createGetDomainColors =
  (
    property: string,
    domain: LegendData[],
    options?: CreateGetDomainColorsOptions
  ) =>
  (data: unknown): Color => {
    const { alpha, fallback = '#00000000' } = options || {}
    const value = get(data, ['properties', property])
    const { color = fallback } = find(domain, { value }) || {}
    return Array.isArray(color)
      ? (color as unknown as Color)
      : decomposeColorValues(color as string, alpha)
  }

export default createGetDomainColors
