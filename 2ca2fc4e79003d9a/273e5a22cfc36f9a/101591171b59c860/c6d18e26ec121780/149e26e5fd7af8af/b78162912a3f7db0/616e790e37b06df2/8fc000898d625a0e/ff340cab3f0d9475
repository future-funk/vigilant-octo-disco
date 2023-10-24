import { PageConfig } from '@bpd/bpd-web/shared/core'
import { BpdSpinner } from '@bpd/bpd-web/shared/ui'
import { Layout, LayoutProps } from '@bpd/daw/shared/core'
import { Stack } from '@gic/battlefield-ui-pack'
import React, { cloneElement, ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LayoutSkeleton } from '../components'

export interface PageProps {
  page: PageConfig<LayoutProps & { wrapper: ReactElement }>
  isFetching: boolean
}

const Page: React.FC<PageProps> = (props) => {
  const { page, isFetching } = props

  const { path, slots } = page ?? {}

  if (!page) return null

  return (
    <Routes>
      <Route
        element={
          slots?.wrapper
            ? cloneElement(slots?.wrapper, { injectedPath: path })
            : null
        }
      >
        <Route
          path={path}
          element={isFetching ? <LayoutSkeleton /> : <Layout {...slots} />}
        ></Route>
      </Route>
    </Routes>
  )
}

export default Page
