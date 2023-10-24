import { FC } from 'react'
import { Popover } from 'antd'
import dayjs from 'dayjs'
import { map } from 'lodash'
import { CalendarOutlined } from '@ant-design/icons'
import { BpdLink } from '@bpd/bpd-web/shared/ui'
import { Box, Table, TableProps, Typography } from '@gic/battlefield-ui-pack'
import { MarketTransactionsCartoQueries } from '@bpd/market-transactions/shared/data-access'

export interface SourcesModalButtonProps {}

const SourcesModalButton: FC<SourcesModalButtonProps> = () => {
  const { data = [] } = MarketTransactionsCartoQueries.useGetDataSourceInfo(null)

  const columns: TableProps['columns'] = [
    {
      key: 'source',
      label: 'Source',
      xs: 14,
    },
    {
      key: 'last_updated',
      label: 'Last Updated',
      render: ({ last_updated }) => (
        <Typography variant="body2">
          {dayjs(last_updated).format('DD MMM YYYY')}
        </Typography>
      ),
      style: { textAlign: 'right' },
      xs: 10,
    },
  ]

  const rowData: TableProps['rowData'] = map(
    data,
    ({ dataDesc, dataEffDt }) => ({
      source: dataDesc ?? 'N/A',
      last_updated: dataEffDt,
    })
  )

  return (
    <Popover
      content={
        <Box width="100%" height="100%" py={1} px={2}>
          <Table
            headerTypographyProps={{ variant: 'subtitle2' }}
            bodyTypographyProps={{ variant: 'body2' }}
            columns={columns}
            rowData={rowData}
            spacing={0.5}
            minWidth="250px"
          />
        </Box>
      }
      trigger="click"
      placement="bottomRight"
    >
      <BpdLink
        title="Sources"
        startIcon={<CalendarOutlined />}
        sx={{ padding: '4px' }}
      />
    </Popover>
  )
}

export default SourcesModalButton
