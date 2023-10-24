import {
  CATEGORIES,
  InvestmentProcessSelectors,
} from '@bpd/bpd-web/investment-process/shared/core'
import {
  GetStaffsReportPayload,
  GetStaffsReportResult,
  queries,
} from '@bpd/bpd-web/investment-process/shared/data-access'
import { getVintageRange } from '../utils'
import { useConnectedQuery } from '@bpd/bpd-web/shared/core'

const useGetStaffReports = () =>
  useConnectedQuery<GetStaffsReportResult, GetStaffsReportPayload>({
    useQuery: queries.useGetStaffsReport,
    args: {
      filter: {
        selector: InvestmentProcessSelectors.getFilters,
        client: [
          {
            field: ['initials', 'name'],
            get: 'search',
            type: 'LIKE',
            resolve: (value) => `%${value}%`,
          },
        ],
        server: [
          {
            field: 'category',
            value: [CATEGORIES.DEAL, CATEGORIES.PROJECT, CATEGORIES.RESEARCH],
          },
          { field: 'status', get: 'status' },
          {
            field: ['vintageDtFrom', 'vintageDtTo'],
            get: 'vintage',
            resolve: getVintageRange,
          },
        ],
      },
      sort: { selector: InvestmentProcessSelectors.getSort },
    },
  })

export default useGetStaffReports
