import { DownloadOutlined } from '@ant-design/icons'
import {
  BpdFilterControlType,
  BpdLink,
  BpdVerticalDivider,
} from '@bpd/bpd-web/shared/ui'
import { Stack } from '@gic/battlefield-ui-pack'
import { values } from 'lodash'
import { FC } from 'react'
import { BUYERS_SELLERS } from '../constants'
import Filters from './Filters'

export interface TopBuyersSellersActionBarProps {
  buyersSellersType: string
  handleChangeBuyersSellers: (key: string, value: string) => void
  handleClickExport: () => void
}

const TopBuyersSellersActionBar: FC<TopBuyersSellersActionBarProps> = (
  props
) => {
  const { handleClickExport, buyersSellersType, handleChangeBuyersSellers } =
    props

  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="space-between"
      alignItems="center"
    >
      <Filters
        handleChange={handleChangeBuyersSellers}
        filters={{ buyersSellersType }}
        options={[
          {
            key: 'buyersSellersType',
            label: '',
            type: BpdFilterControlType.SingleSelect,
            componentProps: {
              items: values(BUYERS_SELLERS),
            },
          },
        ]}
      />

      <BpdVerticalDivider />
      <BpdLink
        startIcon={<DownloadOutlined />}
        onClick={handleClickExport}
        title="Download"
        sx={{ height: 28 }}
      />
    </Stack>
  )
}

export default TopBuyersSellersActionBar
