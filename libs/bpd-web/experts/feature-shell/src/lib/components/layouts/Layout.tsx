import React, { ReactElement, useEffect } from 'react'
import { Stack } from '@gic/battlefield-ui-pack'
import {
  useRouterBreadCrumbs,
  useRouterPageTitle,
} from '@bpd/bpd-web/shared/core'
import { renderIf } from '@bpd/ui/libs/react-slots'
import { UiActions, useAppDispatch } from '@bpd/bpd-web/shared/store'
import { some, values } from 'lodash'
import TopLayout from './TopLayout'

export interface LayoutProps {
  main: ReactElement
  top?: ReactElement
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { main, top } = props

  const dispatch = useAppDispatch()

  const breadcrumbs = useRouterBreadCrumbs()

  const title = useRouterPageTitle()

  const hasTop = some(values(top))

  useEffect(() => {
    dispatch(UiActions.setBreadcrumbs(breadcrumbs))
  }, [breadcrumbs, dispatch])

  useEffect(() => {
    if (!title) return
    dispatch(UiActions.setPageTitle(title()))
  }, [title, dispatch])


  return (
    <Stack height="100%">
      <Stack height="inherit" spacing={1} overflow="hidden">
        {renderIf(hasTop, <TopLayout top={top} />)}
        <Stack
          flex={1}
          overflow="auto"
          sx={{ backgroundColor: 'common.white' }}
        >
          {main}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Layout
