import { useAppPalette } from '@bpd/bpd-web/shared/theme'
import { Box, BoxProps, Stack } from '@gic/battlefield-ui-pack'
import 'ag-grid-community/dist/styles/ag-grid.css'
import { LicenseManager } from 'ag-grid-enterprise'
import { FC, ReactNode } from 'react'
import './AgGrid.css'

LicenseManager.setLicenseKey(
  `${process.env['NX_REACT_APP_AG_GRID_LICENSE_KEY']}`
)

export interface AgGridContainerProps extends BoxProps {
  bordered?: boolean
  children: ReactNode
}

const AgGridContainer: FC<AgGridContainerProps> = (props, ref) => {
  const { bordered, height, children, ...containerProps } = props

  const palette = useAppPalette()

  return (
    <Box
      height={height}
      overflow="hidden"
      position="relative"
      bgcolor={palette.null.light}
      {...(bordered
        ? { border: `1px solid ${palette.null.border}`, borderRadius: 1 }
        : {})}
      {...containerProps}
    >
      <Stack height={height}>{children}</Stack>
    </Box>
  )
}

export default AgGridContainer
