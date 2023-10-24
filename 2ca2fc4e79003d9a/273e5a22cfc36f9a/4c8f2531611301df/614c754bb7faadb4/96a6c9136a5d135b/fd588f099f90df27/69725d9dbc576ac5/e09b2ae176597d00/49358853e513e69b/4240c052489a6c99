import {
  AnalysisPage,
  CATEGORIES,
  InvestmentProcessSelectors,
  PEOPLE_DETAIL_RADIO_OPTIONS,
  Table,
  useGetDeals,
} from '@bpd/bpd-web/investment-process/shared/core'
import { StaffsReportDto } from '@bpd/bpd-web/investment-process/shared/data-access'
import { SHARED_DEFAULT_COLUMN_DEFS } from '@bpd/bpd-web/investment-process/us/shared/core'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdPeopleDetailCard, BpdRadioGroup } from '@bpd/bpd-web/shared/ui'
import { renderSlot } from '@bpd/ui/libs/react-slots'
import { Stack } from '@gic/battlefield-ui-pack'
import { RadioChangeEvent, Skeleton } from 'antd'
import { find, first, get, isEmpty, isEqual, some } from 'lodash'
import { FC, ReactNode, useState } from 'react'
import { TEAMS } from '@bpd/bpd-web/shared/config'
import { COLUMN_DEFS } from '../constants'
import { useGetStaffReports } from '../hooks'
import DetailStatusBar from './DetailStatusBar'
import { getAvatarUrl } from '@bpd/bpd-web/shared/core'

export interface DetailCardSkeletonProps {
  top?: ReactNode
}

const StyledBpdRadioGroup = withTheme(BpdRadioGroup)(() => {
  return {
    display: 'flex',
    '&&& .ant-radio-button-wrapper': {
      lineHeight: '20px',
    },
  }
})

const DetailCardSkeleton: FC<DetailCardSkeletonProps> = (props) => {
  const { top } = props

  const config = { active: true, block: true }

  return (
    <Stack height="100%" spacing={2}>
      {renderSlot(top, { defaultProps: config })}
      <Skeleton.Button {...config} style={{ height: '3rem', width: '100%' }} />
      <Skeleton.Button
        {...config}
        style={{ height: '2.5rem', width: '100%' }}
      />
      <Skeleton.Button {...config} style={{ height: 300, width: '100%' }} />
    </Stack>
  )
}

const DetailCard = () => {
  const { data, isFetching: isFetchingStaffs } = useGetStaffReports()

  const ntid = useAppSelector(InvestmentProcessSelectors.getStaff)

  const staff = find(data, { ntid }) as StaffsReportDto

  const defaultView = get(first(PEOPLE_DETAIL_RADIO_OPTIONS), 'value')

  const [view, setView] = useState<string>(defaultView)

  const handleRadioChange = (event: RadioChangeEvent) => {
    const { value } = event.target
    setView(value)
  }

  const { isFetching: isFetchingTable } = useGetDeals(
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
          { field: 'ntid', value: ntid },
          { field: 'team', value: TEAMS.EU },
          {
            field: 'status',
            get: 'status',
          },
        ],
      },
    },
    { skip: some([data, ntid], isEmpty) }
  )

  return isFetchingStaffs ? (
    <DetailCardSkeleton
      top={<Skeleton.Button style={{ height: '4rem', width: '100%' }} />}
    />
  ) : (
    <Stack spacing={2} height="100%">
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <BpdPeopleDetailCard
          name={staff?.name}
          group={staff?.divDesc}
          position={staff?.corpTitle}
          src={getAvatarUrl(staff?.ntid)}
        />
        <StyledBpdRadioGroup
          optionType="button"
          buttonStyle="solid"
          options={PEOPLE_DETAIL_RADIO_OPTIONS}
          value={view}
          onChange={handleRadioChange}
        />
      </Stack>
      {isFetchingTable ? (
        <DetailCardSkeleton />
      ) : isEqual(view, defaultView) ? (
        <>
          <DetailStatusBar />
          <Table
            columnDefs={COLUMN_DEFS}
            defaultColDef={SHARED_DEFAULT_COLUMN_DEFS}
            dataSource={{
              useQuery: useGetDeals,
              args: {
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
                    { field: 'ntid', value: ntid },
                    { field: 'team', value: 'eu' },
                    { field: 'status', get: 'status' },
                  ],
                  client: [
                    {
                      field: 'status',
                      get: 'dealStatus',
                    },
                  ],
                },
              },
              options: { skip: some([data, ntid], isEmpty) },
            }}
          />
        </>
      ) : (
        <AnalysisPage team={TEAMS.EU} />
      )}
    </Stack>
  )
}

export default DetailCard
