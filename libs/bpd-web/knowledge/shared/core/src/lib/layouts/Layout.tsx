import {
  usePageContext,
  useRouterBreadCrumbs,
  useRouterPageTitle,
} from '@bpd/bpd-web/shared/core'
import { UiActions, useAppDispatch } from '@bpd/bpd-web/shared/store'
import { BpdLayoutBodyProps } from '@bpd/bpd-web/shared/ui'
import { PerfectScrollbar } from '@bpd/vendors/perfect-scrollbar'
import { Stack } from '@gic/battlefield-ui-pack'
import { useEffect } from 'react'

export interface LayoutProps {
  main: BpdLayoutBodyProps
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { main } = props

  const { setContext } = usePageContext()

  const dispatch = useAppDispatch()

  const breadcrumbs = useRouterBreadCrumbs()

  const title = useRouterPageTitle()

  useEffect(() => {
    dispatch(UiActions.setBreadcrumbs(breadcrumbs))
  }, [breadcrumbs, dispatch])

  useEffect(() => {
    if (title) {
      dispatch(UiActions.setPageTitle(title()))
    }
  }, [title, dispatch])

  useEffect(() => {
    setContext({
      dashboard: {
        sx: {
          '&&& .ant-layout-content': {
            overflow: 'auto !important',
            backgroundColor: 'background.main',
          },
        },
      },
    })
    return () => {
      setContext({
        dashboard: null,
      })
    }
  }, [])

  return (
    <Stack height="100%" className="js-test">
      <Stack height="inherit" spacing={1.5} overflow="hidden">
        <Stack flex={1} overflow="hidden">
          <PerfectScrollbar> {main}</PerfectScrollbar>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Layout
