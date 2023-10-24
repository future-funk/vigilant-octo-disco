import { FC } from 'react'
import { PerfectScrollbar } from '@bpd/vendors/perfect-scrollbar'
import { Stack } from '@gic/battlefield-ui-pack'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { ESGPortalRequestPayload } from '@bpd/esg-portal/shared/data-access'
import { COLOR_BY_TYPES, FILTER_COLUMN } from '../constants'
import AnalysisDrawerWidget from './AnalysisDrawerWidget'

interface AnalysisDrawerProps {
  records: ESGPortalRequestPayload[]
  isError: boolean
  isLoading: boolean
}

const InsightContainer = withTheme(Stack)({
  borderRadius: '4px',
  width: '100%',
  direction: 'row',
  height: '100%',
  display: 'flex',
  paddingTop: 20
})

const AnalysisDrawer: FC<AnalysisDrawerProps> = (props) => {
  const { records, isError, isLoading } = props

  return (
    <InsightContainer>
      <PerfectScrollbar>
        <Stack flexDirection={{ xxl: 'row', sm: 'column', xs: 'column' }} flexWrap={'wrap'}>
        <AnalysisDrawerWidget
          title="Storm Surge Risk Rating"
          subTitle="(Property NMV - units)"
          column={FILTER_COLUMN.COLUMN_STORM_SURGE_RISK_RATING}
          records={records}
          isError={isError}
          isLoading={isLoading}
          rowConfig={COLOR_BY_TYPES.STORM_SURGE_RISK_RATING}
        />
        <AnalysisDrawerWidget
          title="Hurricane Risk Rating"
          subTitle="(Property NMV - units)"
          column={FILTER_COLUMN.COLUMN_HURRICANE_RISK_RATING}
          records={records}
          isError={isError}
          isLoading={isLoading}
          rowConfig={COLOR_BY_TYPES.HURRICANE_RISK_RATING}
        />
        <AnalysisDrawerWidget
          title="Inland Flood Risk Rating"
          subTitle="(Property NMV - units)"
          column={FILTER_COLUMN.COLUMN_INLAND_FLOOR_RISK_RATING}
          records={records}
          isError={isError}
          isLoading={isLoading}
          rowConfig={COLOR_BY_TYPES.INLAND_FLOOD_RISK_RATION}
        />
        <AnalysisDrawerWidget
          title="Wildfire Risk Rating"
          subTitle="(Property NMV - units)"
          column={FILTER_COLUMN.COLUMN_WILDFIRE_RISK_RATING}
          records={records}
          isError={isError}
          isLoading={isLoading}
          rowConfig={COLOR_BY_TYPES.WILDFIRE_RISK_RATING}
        />
        <AnalysisDrawerWidget
          title="Green Cert Bucket"
          subTitle="(Property NMV - units)"
          column={FILTER_COLUMN.COLUMN_BUCKET}
          records={records}
          isError={isError}
          isLoading={isLoading}
          rowConfig={COLOR_BY_TYPES.GREEN_CERT_BUCKET_ANALYSIS}
        />
        </Stack>
      </PerfectScrollbar>
    </InsightContainer>
  )
}

export default AnalysisDrawer
