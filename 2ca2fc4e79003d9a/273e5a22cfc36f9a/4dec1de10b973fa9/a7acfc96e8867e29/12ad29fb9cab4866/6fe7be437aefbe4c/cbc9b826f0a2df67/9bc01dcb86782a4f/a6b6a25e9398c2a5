import { createCartoQuery } from '@bpd/vendors/carto'
import { compact, isNil } from 'lodash'
import { scopeId } from '../constants'
import { generateQueryCondition } from '../../utils'

export interface GetAnalyticsSource {
  tableName: string
  whereCondition?: string
  viewport?: string | null
  filters?: Record<string, string[]>
  userId?: string | null
  forceToUpdate?: string
}

export const ANALYTICS_SOURCE_ID = scopeId('ANALYTICS_SOURCE_ID')

const getAnalyticsSource = ({
  tableName,
  viewport,
  filters,
  whereCondition,
  userId,
  forceToUpdate = null,
}: GetAnalyticsSource) => {
  return createCartoQuery(
    ANALYTICS_SOURCE_ID,
    `SELECT ${compact([
      forceToUpdate ? `'${forceToUpdate}' as forceToUpdate` : null,
      '*',
    ]).join(', ')} FROM ${tableName} (${generateQueryCondition(
      filters,
      viewport,
      userId
    )})
    ${!isNil(whereCondition) ? `WHERE ${whereCondition}` : ''}`
  )
}

export default getAnalyticsSource
