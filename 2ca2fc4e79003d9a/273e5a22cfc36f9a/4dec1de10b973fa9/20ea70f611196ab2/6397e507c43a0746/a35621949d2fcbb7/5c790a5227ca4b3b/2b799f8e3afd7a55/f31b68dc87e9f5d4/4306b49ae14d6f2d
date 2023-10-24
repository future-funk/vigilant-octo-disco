import {
  Layout,
  LayoutBodySlots,
} from '@bpd/bpd-web/directory/feature-shell/shared/ui'
import {
  Team,
  RouterConfig,
  useGetConfigFromLocation,
} from '@bpd/bpd-web/shared/data-access'
import { DynamicReducer, ModuleConfigs } from '@bpd/bpd-web/shared/store'
import { DashboardConfig } from '@bpd/bpd-web/shared/core'
import { mapValues } from 'lodash'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import WithConfig from './withConfig'
import { MapContainer } from '@bpd/vendors/carto'
import { BpdTabsProps } from '@bpd/bpd-web/shared/ui'
import { BreadcrumbsProps } from '@gic/battlefield-ui-pack'
import { usePageContext } from '@bpd/bpd-web/shared/core'
import { useUnmount } from '@bpd/ui/hooks'
import { POSITRON } from '@carto/react-basemaps'
import { setBasemap } from '@carto/react-redux'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'

export interface Page {
  dashboard?: Pick<DashboardConfig, 'teamSelect'>
  breadcrumbs: BreadcrumbsProps['items']
  modules: ModuleConfigs
  tabs?: Record<string, BpdTabsProps>
  scope: { team: Team }
  title: string
  routing: { path: string; slots: LayoutBodySlots }
}

export type PageConfig = RouterConfig<Page>

export interface PageTemplateProps {
  config: PageConfig
}

const PageTemplate: React.FC<PageTemplateProps> = (props) => {
  const { config } = props

  const dispatch = useAppDispatch()
  const { setContext } = usePageContext()

  const { breadcrumbs, modules, routing, scope, title, dashboard } =
    useGetConfigFromLocation({ config })

  useEffect(() => {
    if (dashboard) setContext({ dashboard, team: scope.team })
  }, [])

  useUnmount(() => {
    setContext(null)
    dispatch(setBasemap(POSITRON))
  })

  const route = (slot: keyof LayoutBodySlots) => (
    <Route
      key={routing.path}
      path={`${routing.path}/*`}
      element={routing.slots[slot]}
    />
  )

  const slots = mapValues(routing.slots, Boolean)

  return (
    <DynamicReducer configs={modules}>
      <WithConfig breadcrumbs={breadcrumbs} scope={scope} title={title}>
        <Layout
          left={slots?.left ? <Routes>{route('left')}</Routes> : null}
          center={
            slots?.center ? (
              <Routes>
                <Route element={<MapContainer />}>{route('center')}</Route>
              </Routes>
            ) : null
          }
          top={slots?.top ? <Routes>{route('top')}</Routes> : null}
        />
      </WithConfig>
    </DynamicReducer>
  )
}

export default PageTemplate
