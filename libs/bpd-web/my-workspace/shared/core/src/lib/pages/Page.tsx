import { PageConfig } from '@bpd/bpd-web/shared/core'
import { FC } from 'react'
import { Layout, LayoutProps } from '../layouts'
import { createRoute } from '../utils'

export interface PageProps {
  page: PageConfig<Omit<LayoutProps, 'tabs'>>
}

const Page: FC<PageProps> = (props) => {
  const { page } = props

  const { path, slots } = page ?? {}

  if (!page) {
    return null
  }

  return <Layout main={createRoute({ path, element: slots?.main })} />
}

export default Page
