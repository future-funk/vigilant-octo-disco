import { usePageContext, useRouterBreadCrumbs } from '@bpd/bpd-web/shared/core'
import { RouterConfig } from '@bpd/bpd-web/shared/data-access'
import { DynamicReducer } from '@bpd/bpd-web/shared/store'
import { useOnFalsy, useUnmount } from '@bpd/ui/hooks'
import { LoadableLibrary } from '@loadable/component'
import { find, get } from 'lodash'
import { useEffect } from 'react'
import { matchPath, useLocation, useNavigate } from 'react-router-dom'
import { Layout } from '../layouts'
import Tabs from './Tabs'

export type RegisterPageConfig = RouterConfig<LoadableLibrary<any>>

export interface RegisterPageProps {
  config: RegisterPageConfig
}

const PageTemplate = (props: RegisterPageProps) => {
  const { config } = props
  const { page } = config
  const { slots, tabs } = page

  const { setContext } = usePageContext()

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const breadcrumbs = useRouterBreadCrumbs()

  const tabItem = find(tabs?.items, (item) => matchPath(item.key, pathname))

  useEffect(() => {
    setContext({
      dashboard: { ...config.dashboard, breadcrumbs },
      page: config.page,
    })
  }, [])

  // Redirect to default page if a route-based config cannot be matched
  useOnFalsy(() => {
    if (page?.default?.key) {
      navigate(page.default.key)
    }
  }, [tabItem])

  useUnmount(() => setContext(null))

  return (
    <DynamicReducer configs={config?.page?.modules}>
      <Layout
        menuBar={slots?.menuBar}
        main={slots?.main}
        tabs={<Tabs activeKey={get(tabItem, 'key')} {...tabs} />}
      />
    </DynamicReducer>
  )
}

export default PageTemplate
