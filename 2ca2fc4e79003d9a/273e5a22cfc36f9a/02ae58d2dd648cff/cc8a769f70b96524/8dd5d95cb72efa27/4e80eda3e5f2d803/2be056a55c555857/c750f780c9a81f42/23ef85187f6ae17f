import { FC } from 'react'
import { Stack, StackProps } from '@gic/battlefield-ui-pack'
import { useAppPalette } from '@bpd/bpd-web/shared/theme'

const WIDTH = '60%'

export interface DrawerLayoutBodyProps extends StackProps {}

const DrawerLayoutBody: FC<DrawerLayoutBodyProps> = (props) => {
  const palette = useAppPalette()

  const { width, children, ...rest } = props

  return (
    <Stack
      {...{
        bgcolor: palette.common.white,
        minWidth: WIDTH,
        width: width ?? WIDTH,
        ...rest,
      }}
    >
      {children}
    </Stack>
  )
}

export default DrawerLayoutBody
