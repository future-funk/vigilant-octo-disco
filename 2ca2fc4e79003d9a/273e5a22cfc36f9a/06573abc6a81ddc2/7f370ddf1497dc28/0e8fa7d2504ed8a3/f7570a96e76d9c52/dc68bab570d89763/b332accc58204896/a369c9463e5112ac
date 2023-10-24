import {
  useRouterBreadCrumbs,
  useRouterPageTitle,
} from '@bpd/bpd-web/shared/core'
import { UiActions, useAppDispatch } from '@bpd/bpd-web/shared/store'
import { Stack } from '@gic/battlefield-ui-pack'
import React, { ReactElement, useEffect } from 'react'

export interface LayoutProps {
  main: ReactElement
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { main } = props

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

  return (
    <Stack height="100%">
      <Stack height="inherit" spacing={1.5} overflow="hidden">
        <Stack flex={1}>{main}</Stack>
      </Stack>
    </Stack>
  )
}

export default Layout
