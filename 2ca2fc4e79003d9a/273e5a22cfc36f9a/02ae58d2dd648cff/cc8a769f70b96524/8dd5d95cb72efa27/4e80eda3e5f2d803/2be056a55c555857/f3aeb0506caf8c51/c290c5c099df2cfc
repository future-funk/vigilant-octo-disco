import { FC, useEffect } from 'react'
import { Stack } from '@gic/battlefield-ui-pack'
import {
  DynamicReducer,
  useAppDispatch,
  useAppSelector,
  UiActions,
} from '@bpd/bpd-web/shared/store'
import {
  useRouterBreadCrumbs,
  useRouterPageTitle,
} from '@bpd/bpd-web/shared/core'
import { MapContainer } from '@bpd/vendors/carto'
import type { PageConfig } from './Page'
import { EsgPortalSelectors } from '../data'
import Layout from '../layouts/Layout'

export interface PageTemplateProps {
  config: PageConfig
}

const PageTemplate: FC<PageTemplateProps> = ({ config }) => {
  const {
    slots: { top, left, center },
    modules,
  } = config

  const dispatch = useAppDispatch()

  const breadcrumbs = useRouterBreadCrumbs()

  const title = useRouterPageTitle()

  const isDrawerExpanded = useAppSelector(
    EsgPortalSelectors.getIsDrawerExpanded
  )

  useEffect(() => {
    dispatch(UiActions.setBreadcrumbs(breadcrumbs))
  }, [breadcrumbs, dispatch])

  useEffect(() => {
    if (!title) return
    dispatch(UiActions.setPageTitle(title()))
  }, [title, dispatch])

  return (
    <DynamicReducer {...{ destroyWhenUnMount: true, configs: modules }}>
      <Stack>{top}</Stack>
      <Layout
        center={!isDrawerExpanded && <MapContainer>{center}</MapContainer>}
        left={left}
      />
    </DynamicReducer>
  )
}

export default PageTemplate
