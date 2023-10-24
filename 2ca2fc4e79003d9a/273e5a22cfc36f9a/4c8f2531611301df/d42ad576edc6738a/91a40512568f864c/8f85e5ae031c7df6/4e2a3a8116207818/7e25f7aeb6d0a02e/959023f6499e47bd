import { PageConfig, createRoute } from '@bpd/bpd-web/shared/core'
import React from 'react'
import { Layout, LayoutProps } from '../layouts'
import Tabs from './Tabs'

export interface PageProps {
  page: PageConfig<Omit<LayoutProps, 'tabs'>>
}

const Page: React.FC<PageProps> = (props) => {
  const { page } = props

  const { path, slots, tabs } = page ?? {}

  if (!page) return null

  return (
    <Layout
      main={createRoute({ path, element: slots?.main })}
      top={{
        left: createRoute({ path, element: slots?.top?.left }),
        right: createRoute({ path, element: slots?.top?.right }),
        rightProps: slots?.top?.rightProps,
        leftProps: slots?.top?.leftProps,
        wrapperProps: slots?.top?.wrapperProps,
      }}
      tabs={<Tabs {...tabs} />}
    />
  )
}

export default Page
