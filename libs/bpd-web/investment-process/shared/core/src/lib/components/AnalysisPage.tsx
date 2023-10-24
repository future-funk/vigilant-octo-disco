import {
  DealDto,
  DealStaffDto,
} from '@bpd/bpd-web/investment-process/shared/data-access'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { useAppPalette } from '@bpd/bpd-web/shared/theme'
import { formatRelativeNumber } from '@bpd/utils/formatters'
import { Chart } from '@bpd/vendors/highcharts'
import { Stack } from '@gic/battlefield-ui-pack'
import { Dictionary } from '@reduxjs/toolkit'
import {
  chain,
  compact,
  entries,
  filter,
  find,
  findIndex,
  flatMap,
  get,
  groupBy,
  isEmpty,
  isEqual,
  join,
  keys,
  map,
  size,
  some,
  sumBy,
} from 'lodash'
import { FC, ReactNode, useMemo } from 'react'
import { CATEGORIES, INVESTMENT_TYPES, TYPES } from '../constants'
import { InvestmentProcessSelectors } from '../data'
import { useGetDeals } from '../hooks'
import AnalysisPageCard from './AnalysisPageCard'
import AnalysisPageTable, { AnalysisPageTableProps } from './AnalysisPageTable'
import { PerfectScrollbar } from '@bpd/vendors/perfect-scrollbar'
import { STAGES } from '@bpd/bpd-web/shared/core'
import { Col, Row } from 'antd'

export interface AnalysisPageProps {
  team: string
}

const getTableFromType = (
  title: string,
  rows: string[],
  groups: Dictionary<DealDto[]>
): ReactNode => {
  const tableProps: AnalysisPageTableProps = {
    headers: [title, 'Deals', 'GIC Eq. Commit'],
    rows: map(rows, (row) => {
      const data = get(groups, row)
      const count = size(data)
      const value = `$${formatRelativeNumber(Math.abs(sumBy(data, 'necUsd')))}`
      return [row, count, value]
    }),
  }

  return (
    <AnalysisPageCard title={title}>
      <AnalysisPageTable {...tableProps} />
    </AnalysisPageCard>
  )
}

const DEAL_STAGES_US: string[] = [
  STAGES.NEW_DEAL_FOR_DISCUSSION,
  STAGES.UNDER_CONSIDERATION,
  STAGES.UNDER_CONSIDERATION_APPROVED,
  STAGES.CLOSED,
  STAGES.COMPLETED,
]

const DEAL_STAGES_EU: string[] = [
  STAGES.NEW_DEAL_FOR_DISCUSSION,
  STAGES.UNDER_CONSIDERATION,
  STAGES.DEALS_WITH_DQM_APPROVAL,
  STAGES.DEALS_SIGNED,
  STAGES.NO_LONGER_PROCEEDING_STAND_BY,
  STAGES.CLOSED,
  STAGES.COMPLETED,
]

const DEAL_TYPES: string[] = [
  TYPES.NEW_INVESTMENT,
  TYPES.PROGRAMMATIC_JV_SUB_DEAL,
  TYPES.ADDITIONAL_COMMITMENT,
  TYPES.DIVESTMENT,
  TYPES.SOFT_COMMITMENT_RELEASE,
  TYPES.GIPS,
  TYPES.OTHERS,
]

const DEAL_INVESTMENT_TYPES: string[] = [
  INVESTMENT_TYPES.EQUITY,
  INVESTMENT_TYPES.PREFERRED_EQUITY,
  INVESTMENT_TYPES.DEBT,
  INVESTMENT_TYPES.LISTED_EQUITY,
]

export const AnalysisPage: FC<AnalysisPageProps> = (props) => {
  const { team } = props
  const palette = useAppPalette()
  const colors = palette.chart

  const ntid = useAppSelector(InvestmentProcessSelectors.getStaff)

  // Data
  const { data = [] } = useGetDeals(
    {
      filter: {
        server: [
          {
            field: 'category',
            value: [
              CATEGORIES.DEAL,
              CATEGORIES.PROJECT,
              CATEGORIES.RESEARCH,
              CATEGORIES.STRATS,
            ],
          },
          {
            field: 'ntid',
            value: ntid,
          },
          {
            field: 'team',
            value: team,
          },
          {
            field: 'status',
            get: 'status',
          },
        ],
      },
    },
    { skip: some([ntid, team], isEmpty) }
  )

  const sectors = keys(
    chain(data)
      .groupBy('sector')
      .toPairs()
      .sortBy((pair) => size(pair[1]))
      .reverse()
      .fromPairs()
      .value()
  )
  const dataGroupByStatus = groupBy(data, 'status')
  const dataGroupByType = groupBy(data, 'requestType')
  const dataGroupByInvestmentType = groupBy(data, 'investmentType')
  const dataGroupByStatusBySector = chain(dataGroupByStatus)
    .toPairs()
    .map((pair) => [pair[0], groupBy(pair[1], 'sector')])
    .fromPairs()
    .value()

  const series = map(entries(dataGroupByStatusBySector), ([key, value]) => {
    return {
      name: key,
      data: map(entries(value), ([childKey, childValue]) => {
        return {
          x: findIndex(sectors, (sector) => isEqual(sector, childKey)),
          y: size(childValue as DealDto[]),
        }
      }),
    }
  })

  // Staff exposure
  const staffExposure: DealDto['staffs'] = filter(
    flatMap(data, 'staffs'),
    (staff) => !isEqual(staff.ntid, ntid)
  )
  const staffExposureByNtid = chain(staffExposure)
    .groupBy('ntid')
    .toPairs()
    .sortBy((pair) => size(pair[1]))
    .reverse()
    .fromPairs()
    .value()

  const staffExposureTableProps: AnalysisPageTableProps = {
    headers: ['Staff Exposure', 'Projects'],
    rows: map(entries(staffExposureByNtid), ([staffNtid, values]) => {
      const staff: DealStaffDto = find(staffExposure, (staff) =>
        isEqual(staff.ntid, staffNtid)
      )
      const staffName = join(compact([staff.initials, staff.name]), ' - ')
      return [isEmpty(staffName) ? 'Undefined Staff' : staffName, size(values)]
    }),
  }

  const chartOptions = useMemo(() => {
    return {
      chart: {
        type: 'bar',
        height: 250,
      },
      plotOptions: {
        series: {
          stacking: 'normal',
        },
      },
      colors: [
        colors.blueAlt,
        colors.orange,
        colors.purple,
        colors.pink,
        colors.green,
      ],
      xAxis: {
        type: 'category',
        categories: sectors,
      },
      yAxis: {
        min: 0,
        type: 'numeric',
      },
      series,
    }
  }, [series])

  return (
    <PerfectScrollbar>
      <Stack spacing={2}>
        {/* Sector */}
        <AnalysisPageCard flex={0} title="Sector">
          <Chart options={chartOptions} />
        </AnalysisPageCard>
        <Row gutter={16} wrap>
          <Col xl={24} xxl={8}>
            {/* Staff Exposure */}
            <AnalysisPageCard title="Staff Exposure">
              <AnalysisPageTable {...staffExposureTableProps} />
            </AnalysisPageCard>
          </Col>
          <Col lg={24} xl={12} xxl={8}>
            {/* Deal Types */}
            {getTableFromType('Deal Types', DEAL_TYPES, dataGroupByType)}
          </Col>
          <Col lg={24} xl={12} xxl={8}>
            {/* Deal Investment Types */}
            {getTableFromType(
              'Investment Types',
              DEAL_INVESTMENT_TYPES,
              dataGroupByInvestmentType
            )}
          </Col>
        </Row>
      </Stack>
    </PerfectScrollbar>
  )
}

export default AnalysisPage
