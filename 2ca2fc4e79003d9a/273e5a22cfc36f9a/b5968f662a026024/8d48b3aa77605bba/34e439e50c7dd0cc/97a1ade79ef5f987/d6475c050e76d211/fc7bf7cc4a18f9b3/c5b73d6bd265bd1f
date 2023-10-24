import { FC, ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ModuleConfigs } from '@bpd/bpd-web/shared/store'
import PageTemplate from './PageTemplate'

export interface PageConfig {
  path?: string
  modules?: ModuleConfigs
  slots: {
    main: ReactElement
    top?: ReactElement
  }
}

export interface PageProps {
  configs?: PageConfig[]
}

const Page: FC<PageProps> = ({ configs }) => {
  return (
    <>
      <Routes>
        {configs?.map((config) => (
          <Route
            path={config.path}
            element={<PageTemplate {...{ config }} />}
          />
        ))}
      </Routes>
    </>
  )
}

export default Page
