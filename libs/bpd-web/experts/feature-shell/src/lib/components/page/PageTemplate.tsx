import { FC } from 'react'
import type { PageConfig } from './Page'
import { DynamicReducer } from '@bpd/bpd-web/shared/store'
import { Layout } from '../layouts'

export interface PageTemplateProps {
  config: PageConfig
}

const PageTemplate: FC<PageTemplateProps> = ({ config }) => {
  const {
    slots: { main, top },
    modules,
    ...rest
  } = config

  return (
    <DynamicReducer {...{ destroyWhenUnMount: true, configs: modules }}>
      <Layout {...{ ...rest, main, top }} />
    </DynamicReducer>
  )
}

export default PageTemplate