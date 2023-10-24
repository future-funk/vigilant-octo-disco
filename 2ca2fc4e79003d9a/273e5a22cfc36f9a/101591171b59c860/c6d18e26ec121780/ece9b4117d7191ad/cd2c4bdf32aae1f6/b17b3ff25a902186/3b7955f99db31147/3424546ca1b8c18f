import { PageConfig } from '@bpd/bpd-web/shared/core'
import React, { cloneElement, ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LayoutProps, Layout } from '../layouts'

export interface PageProps {
  page: PageConfig<LayoutProps & { wrapper: ReactElement }>
}

const Page: React.FC<PageProps> = (props) => {
  const { page } = props

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
        <Route path={path} element={<Layout {...slots} />}></Route>
      </Route>
    </Routes>
  )
}

export default Page
