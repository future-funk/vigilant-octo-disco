import {
  useRouterBreadCrumbs,
  useRouterPageTitle,
} from '@bpd/bpd-web/shared/core'
import { UiActions, useAppDispatch } from '@bpd/bpd-web/shared/store'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Stack } from '@gic/battlefield-ui-pack'
import React, { ReactElement, useEffect } from 'react'

export interface LayoutProps {
  tabs: ReactElement
}

const StyledTabsContainer = withTheme(Stack)(({ theme }) => ({
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: theme.spacing(1),
  justifyContent: 'space-between',
}))

const Layout: React.FC<LayoutProps> = (props) => {
  const { tabs } = props

  const dispatch = useAppDispatch()

  const breadcrumbs = useRouterBreadCrumbs()

  const title = useRouterPageTitle()

  useEffect(() => {
    dispatch(UiActions.setBreadcrumbs(breadcrumbs))
  }, [breadcrumbs, dispatch])

  useEffect(() => {
    if (!title) return
    dispatch(UiActions.setPageTitle(title()))
  }, [title, dispatch])

  return (
    <Stack height="100%">
      <StyledTabsContainer>{tabs}</StyledTabsContainer>
    </Stack>
  )
}

export default Layout
