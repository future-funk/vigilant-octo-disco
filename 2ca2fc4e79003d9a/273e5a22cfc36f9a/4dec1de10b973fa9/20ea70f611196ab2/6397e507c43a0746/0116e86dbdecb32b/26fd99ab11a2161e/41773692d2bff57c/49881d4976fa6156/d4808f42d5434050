import { FC, ReactNode } from 'react'
import { first, startCase  } from 'lodash'
import { useAppTheme, withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdSuspense } from '@bpd/bpd-web/shared/ui'
import {
  Table,
  Typography,
  Stack,
  Tooltip,
  ColProps,
} from '@gic/battlefield-ui-pack'
import { formatRelativeNumber, formatNumber } from '@bpd/utils/formatters'
import { getCurrencyInfo } from '../utils'

interface TableRowColInterface extends ColProps {
  key: string
  label: string | ReactNode
  dataKey?: string
  disableHeader?: boolean
  render?: (item: any) => ReactNode
}
export interface DirectoryInsightRow {
  currency: string
  dealcount: number
  name: string
  valuation: number
}

export interface DirectoryInsightTopWidgetProps {
  title: string
  rows: DirectoryInsightRow[]
  isLoading?: boolean
  isError?: boolean
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

const DirectoryInsightTopWidget: FC<DirectoryInsightTopWidgetProps> = (
  props
) => {
  const { title, rows, isError, isLoading } = props
  const { palette } = useAppTheme()

  const currency = first(rows)?.currency
  const currencyInfo = getCurrencyInfo(currency)

  const columns: TableRowColInterface[] = [
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
          <Tooltip placement="topRight" title={startCase(currencyInfo?.name)}>
            ({currencyInfo?.symbol})
          </Tooltip>
        </StyledTooltip>
      ),
      xs: 7,
      style: { textAlign: 'end' },
      render: ({ valuation }) => (
        <Typography variant="subtitle2" sx={{ textAlign: 'right' }}>
          {formatRelativeNumber(valuation || 0)}
        </Typography>
      ),
    },
    {
      dataKey: 'dealcount',
      key: 'dealcount',
      label: 'Deals',
      xs: 4,
      style: { textAlign: 'end' },
      render: ({ dealcount }) => (
        <Typography variant="body2">{formatNumber(dealcount || 0)}</Typography>
      ),
    },
  ]

  const rowData = rows.map((row, index) => ({
    ...row,
    index: `#${index + 1}`,
  }))

  return (
    <Stack
      direction="column"
      width={'100%'}
      sx={{ padding: '0 10px', minHeight: '200px' }}
    >
      <Typography variant="subtitle1">{title}</Typography>
      <BpdSuspense
        error={isError}
        loading={isLoading}
        empty={!rowData || rowData.length === 0}
      >
        <StyledTable
          columns={columns}
          rowData={rowData}
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

export default DirectoryInsightTopWidget
