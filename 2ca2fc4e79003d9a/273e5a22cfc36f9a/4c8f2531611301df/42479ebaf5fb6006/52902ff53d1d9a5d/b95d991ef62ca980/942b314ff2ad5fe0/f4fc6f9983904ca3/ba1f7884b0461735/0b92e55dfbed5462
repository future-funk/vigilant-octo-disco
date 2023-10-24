import {
  AnalysisPage,
  CATEGORIES,
  InvestmentProcessSelectors,
  PEOPLE_DETAIL_RADIO_OPTIONS,
  Table,
  useGetDeals,
} from '@bpd/bpd-web/investment-process/shared/core'
import { StaffsReportDto } from '@bpd/bpd-web/investment-process/shared/data-access'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdPeopleDetailCard, BpdRadioGroup } from '@bpd/bpd-web/shared/ui'
import { renderSlot } from '@bpd/ui/libs/react-slots'
import { Stack } from '@gic/battlefield-ui-pack'
import { RadioChangeEvent, Skeleton } from 'antd'
import { find, first, get, isEmpty, isEqual, some } from 'lodash'
import { FC, ReactNode, useState } from 'react'
import { TEAMS } from '@bpd/bpd-web/shared/config'
import { COLUMN_DEFS, DEFAULT_COLUMN_DEFS } from '../constants'
import { useGetStaffReports } from '../hooks'
import DetailStatusBar from './DetailStatusBar'
import { getAvatarUrl } from '@bpd/bpd-web/shared/core'

export interface DetailCardSkeletonProps {
  top?: ReactNode
}

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

const StyledBpdRadioGroup = withTheme(BpdRadioGroup)(() => {
  return {
    display: 'flex',
    '&&& .ant-radio-button-wrapper': {
      lineHeight: '20px',
    },
  }
})

const DetailCard = () => {
  const { data } = useGetStaffReports()

  const ntid = useAppSelector(InvestmentProcessSelectors.getStaff)

  const staff = find(data, { ntid }) as StaffsReportDto

  const defaultView = get(first(PEOPLE_DETAIL_RADIO_OPTIONS), 'value')

  const [view, setView] = useState<string>(defaultView)

  const handleRadioChange = (event: RadioChangeEvent) => {
    const { value } = event.target
    setView(value)
  }

  const { isFetching } = useGetDeals(
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
          { field: 'status', get: 'status' },
        ],
      },
    },
    { skip: some([data, ntid], isEmpty) }
  )

  return staff ? (
    <Stack height="100%" spacing={2}>
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Detail Card Title */}
        <BpdPeopleDetailCard
          name={staff?.name}
          group={staff?.divDesc}
          position={staff?.corpTitle}
          src={getAvatarUrl(staff?.ntid)}
        />
        {/* Toggle */}
        <StyledBpdRadioGroup
          optionType="button"
          buttonStyle="solid"
          options={PEOPLE_DETAIL_RADIO_OPTIONS}
          value={view}
          onChange={handleRadioChange}
        />
      </Stack>
      {!isFetching ? (
        isEqual(view, defaultView) ? (
          <>
            <DetailStatusBar />
            <Table
              columnDefs={COLUMN_DEFS}
              defaultColDef={DEFAULT_COLUMN_DEFS}
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
          <AnalysisPage team={TEAMS.US} />
        )
      ) : (
        <DetailCardSkeleton />
      )}
    </Stack>
  ) : (
    <DetailCardSkeleton
      top={<Skeleton.Button style={{ height: '4rem', width: '100%' }} />}
    />
  )
}

export default DetailCard
