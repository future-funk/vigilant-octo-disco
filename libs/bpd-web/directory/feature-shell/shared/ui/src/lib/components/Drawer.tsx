import { ReactElement } from 'react'
import { Stack } from '@gic/battlefield-ui-pack'
import { BpdTypographyCaption } from '@bpd/bpd-web/shared/ui'
import { BaseDrawer } from '@bpd/bpd-web/directory/feature-shell/shared/ui'
import { get } from 'lodash'

export interface DrawerProps {
  items: any[]
  item: (item: any) => ReactElement
  itemId: string
  error?: boolean
  loading?: boolean
  sx?: any
}

const Drawer = (props: DrawerProps) => {
  const { items, error, loading, item, itemId, sx } = props

  const renderItem = <T,>(data: T) =>
    item({
      item: data,
      key: get(data, itemId),
    })

  return (
    <>
      <BaseDrawer
        items={items}
        error={error}
        loading={loading}
        renderItem={renderItem}
        sx={sx}
      />
    </>
  )
}

export default Drawer
