import { FC, useMemo, ReactNode } from 'react'
import { get, chain, sumBy, size, groupBy } from 'lodash'
import { withTheme, useAppPalette } from '@bpd/bpd-web/shared/theme'
import { BpdSuspense } from '@bpd/bpd-web/shared/ui'
import { formatNumberInMillions, formatNumber } from '@bpd/utils/formatters'
import {
  Table,
  Typography,
  Stack,
  Tooltip,
  ColProps,
} from '@gic/battlefield-ui-pack'
import { ESGPortalRequestPayload } from '@bpd/esg-portal/shared/data-access'
import { ColorByTypes } from '../constants'

interface TableRowColInterface extends ColProps {
  key: string
  label: string | ReactNode
  dataKey?: string
  disableHeader?: boolean
  render?: (item: any) => ReactNode
}

interface AnalysisDrawerWidgetProps {
  title: string
  subTitle: string
  rowConfig: ColorByTypes
  column: string
  records: ESGPortalRequestPayload[]
  isError: boolean
  isLoading: boolean
}

const StyledTable = withTheme(Table)({
  '&&& .ant-col': {
    padding: '0px !important',
    marginRight: '5px',
  },
})

const StyledTooltip = withTheme(Stack)({
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '2px',
})

const AnalysisDrawerWidget: FC<AnalysisDrawerWidgetProps> = (props) => {
  const { title, subTitle, rowConfig, column, records, isError, isLoading } =
    props

  const palette = useAppPalette()

  const groupedRecords = groupBy(records, column)

  const columns: TableRowColInterface[] = useMemo(
    () => [
      {
        dataKey: 'index',
        key: 'index',
        label: '',
        xs: 2,
      },
      {
        dataKey: 'name',
        key: 'name',
        label: 'Name',
        xs: 9,
        render: ({ name }) => (
          <Typography
            variant="body2"
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {name}
          </Typography>
        ),
      },
      {
        dataKey: 'valuation',
        key: 'valuation',
        label: (
          <StyledTooltip>
            Valuation
            <Tooltip placement="topRight" title={'US Dollar'}>
              ($)
            </Tooltip>
          </StyledTooltip>
        ),
        xs: 7,
        style: { textAlign: 'end' },
        render: ({ valuation }) => (
          <Typography variant="subtitle2" sx={{ textAlign: 'right' }}>
            {formatNumberInMillions(valuation || 0, 1)}
          </Typography>
        ),
      },
      {
        dataKey: 'units',
        key: 'units',
        label: 'Units',
        xs: 4,
        style: { textAlign: 'end' },
        render: ({ units }) => (
          <Typography variant="body2">{formatNumber(units || 0)}</Typography>
        ),
      },
    ],
    []
  )

  const rows = chain({
    ...rowConfig,
    NULL: { value: null, name: 'UNDEFINED', legendName: 'Undefined' },
  })
    .values()
    .map((column, index) => ({
      index: column.value ? `${index + 1}` : `U`,
      name: column.legendName,
      valuation: sumBy(get(groupedRecords, column.value), 'propNmv'),
      units: size(get(groupedRecords, column.value)),
    }))
    .value()

  return (
    <Stack
      direction="column"
      sx={{ padding: '0 10px', minHeight: '200px' }}
      minWidth={{ xxl: '50%', sm: '50%', xs: '50%' }}
    >
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="subtitle2">{subTitle}</Typography>

      <BpdSuspense
        error={isError}
        loading={isLoading}
        empty={!records || records.length === 0}
      >
        <StyledTable
          columns={columns}
          rowData={rows}
          headerTypographyProps={{ variant: 'body2' }}
          bodyTypographyProps={{ variant: 'body3' }}
          spacing={0}
          py={2}
          px={2}
          bodyRowProps={{
            sx: {
              py: 0.5,
              borderBottom: `1px solid ${palette.null.border}`,
            },
          }}
          headerRowProps={{
            sx: {
              borderBottom: `1px solid ${palette.null.border}`,
              paddingBottom: 0.5,
            },
          }}
        />
      </BpdSuspense>
    </Stack>
  )
}

export default AnalysisDrawerWidget
