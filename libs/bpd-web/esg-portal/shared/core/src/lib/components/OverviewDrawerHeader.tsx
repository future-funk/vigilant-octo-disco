import { FC, ReactNode } from 'react'
import { useAppPalette } from '@bpd/bpd-web/shared/theme'
import { renderSlot } from '@bpd/ui/libs/react-slots'
import { Stack } from '@gic/battlefield-ui-pack'

export interface DrawerHeaderProps {
  left?: ReactNode
  right?: ReactNode
}

const OverviewDrawerHeader: FC<DrawerHeaderProps> = (props) => {
  const { left, right } = props

  const palette = useAppPalette()

  return (
    <Stack
      borderBottom={`1px solid ${palette.null.border}`}
      direction="row"
      justifyContent={!left ? 'flex-end' : 'space-between'}
      alignItems="center"
      padding={1}
      width="100%"
    >
      {renderSlot(left)}
      {renderSlot(right)}
    </Stack>
  )
}

export default OverviewDrawerHeader
