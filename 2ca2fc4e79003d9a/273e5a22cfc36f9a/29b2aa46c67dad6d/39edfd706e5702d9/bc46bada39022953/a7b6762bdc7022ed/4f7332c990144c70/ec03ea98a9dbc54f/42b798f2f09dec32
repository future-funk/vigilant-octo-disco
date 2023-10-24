import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { map } from 'lodash'
import { ModuleConfigs } from '@bpd/bpd-web/shared/store'
import PageTemplate from './PageTemplate'
import { BpdTabsProps } from '@bpd/bpd-web/shared/ui'

export interface PageConfig<T = any> {
  path?: string
  modules?: ModuleConfigs
  tabs?: BpdTabsProps
  slots?: T
}

export interface PageProps {
  configs?: PageConfig[]
}

const Page: FC<PageProps> = ({ configs }) => {
  return (
    <>
      <Routes>
        {map(configs, (config) => (
          <Route
            key={config.path}
            path={config.path}
            element={<PageTemplate {...{ config }} />}
          />
        ))}
      </Routes>
    </>
  )
}

export default Page
