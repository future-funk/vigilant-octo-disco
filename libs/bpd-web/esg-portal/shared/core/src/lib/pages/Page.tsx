import { FC, ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import { map } from 'lodash'
import { ModuleConfigs } from '@bpd/bpd-web/shared/store'
import PageTemplate from './PageTemplate'

export interface PageConfig {
  path?: string
  modules?: ModuleConfigs
  slots: {
    top: ReactElement
    left: ReactElement
    center: ReactElement
  }
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
