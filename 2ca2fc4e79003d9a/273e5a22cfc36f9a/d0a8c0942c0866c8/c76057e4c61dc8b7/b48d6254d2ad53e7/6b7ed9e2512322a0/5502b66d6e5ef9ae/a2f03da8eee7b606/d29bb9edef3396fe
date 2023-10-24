import { FC } from 'react'
import { Stack } from '@gic/battlefield-ui-pack'
import {
  BpdFilterControlType,
  BpdLink,
  BpdVerticalDivider,
} from '@bpd/bpd-web/shared/ui'
import { DownloadOutlined } from '@ant-design/icons'
import { Filters } from '@bpd/market-transactions/shared/core'
import { DIMENSION_TYPE_OPTIONS } from '../constants'

interface OverviewActionBar {
  dimension: string
  handleChange: (key: string, value: string) => void
  handleExport: () => void
}

const OverviewActionBar: FC<OverviewActionBar> = (props) => {
  const { dimension, handleChange, handleExport } = props

  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="space-between"
      alignItems="center"
    >
      <Filters
        handleChange={handleChange}
        filters={{ dimension }}
        options={[
          {
            key: 'dimension',
            label: '',
            type: BpdFilterControlType.SingleSelect,
            componentProps: {
              items: DIMENSION_TYPE_OPTIONS,
            },
          },
        ]}
      />
      <BpdVerticalDivider />
      <BpdLink
        startIcon={<DownloadOutlined />}
        onClick={handleExport}
        title="Download"
        sx={{ height: 28 }}
      />
    </Stack>
  )
}

export default OverviewActionBar
