import {
  Builder,
  createQueryParams,
  QueryBuilder,
  QueryPayload,
  Team,
} from '@bpd/bpd-web/shared/data-access'
import { ENDPOINTS, TAGS } from '../constants'
import { StaffsReportsDto } from '../types'

export type GetStaffsReportResult = StaffsReportsDto

export type GetStaffsReportPayload = QueryPayload<{
  category: string[]
  status: string
  team: Team
  vintageDtFrom: string
  vintageDtTo: string
}>

const getStaffsReport = (builder: Builder) =>
  QueryBuilder.get<GetStaffsReportResult, GetStaffsReportPayload>(
    builder,
    ({ url: { category, status, team, vintageDtFrom, vintageDtTo } }) => ({
      url: `${ENDPOINTS.DEALS.REPORT}${createQueryParams([
        ['category', category],
        ['status', status],
        ['team', team],
        ['vintageDtFrom', vintageDtFrom],
        ['vintageDtTo', vintageDtTo],
      ])}`,
    }),
    [TAGS.STAFF_REPORTS]
  )

export default getStaffsReport
