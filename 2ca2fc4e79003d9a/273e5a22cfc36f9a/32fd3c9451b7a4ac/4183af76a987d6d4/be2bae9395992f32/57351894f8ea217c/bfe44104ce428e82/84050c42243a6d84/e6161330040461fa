import { usePageContext } from '@bpd/bpd-web/shared/core'
import { Stack } from '@gic/battlefield-ui-pack'
import React, { ReactNode, useEffect } from 'react'

export interface LayoutProps {
  main: ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { main } = props

  const { setContext } = usePageContext()

  useEffect(() => {
    setContext({
      disableHeader: true,
      dashboard: {
        sx: {
          '&&& .ant-layout-content': {
            overflow: 'auto !important',
          },
        },
      },
    })
    return () => {
      setContext({
        disableHeader: false,
        dashboard: null,
      })
    }
  }, [])

  return (
    <Stack height="100%">
      <Stack height="inherit" spacing={1.5}>
        <Stack flex={1}>{main}</Stack>
      </Stack>
    </Stack>
  )
}

export default Layout
