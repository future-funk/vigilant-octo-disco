import { withTheme } from '@bpd/bpd-web/shared/theme'
import { renderIf } from '@bpd/ui/libs/react-slots'
import { Stack } from '@gic/battlefield-ui-pack'
import { some, values } from 'lodash'
import React, { ReactElement, ReactNode, useEffect } from 'react'
import TopLayout, { TopLayoutProps } from './TopLayout'
import {
  useRouterBreadCrumbs,
  useRouterPageTitle,
} from '@bpd/bpd-web/shared/core'
import { UiActions, useAppDispatch } from '@bpd/bpd-web/shared/store'

export interface LayoutProps {
  main: ReactNode
  tabs: ReactElement
  top?: TopLayoutProps
}

const StyledTabsContainer = withTheme(Stack)(({ theme }) => ({
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: theme.spacing(2),
  justifyContent: 'space-between',
}))

const Layout: React.FC<LayoutProps> = (props) => {
  const { main, tabs, top } = props

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

  const hasTop = some(values(top))

  return (
    <Stack height="100%">
      <StyledTabsContainer>{tabs}</StyledTabsContainer>
      <Stack height="inherit" spacing={1.5} overflow="hidden">
        {renderIf(hasTop, <TopLayout {...top} />)}
        <Stack flex={1} overflow="hidden" bgcolor="common.white">
          {main}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Layout
