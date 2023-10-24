import { FC } from 'react'
import { PageConfig } from '@bpd/bpd-web/shared/core'
import { DynamicReducer } from '@bpd/bpd-web/shared/store'
import { Layout } from '../layouts'

export interface PageTemplateProps {
  config: PageConfig
}

const PageTemplate: FC<PageTemplateProps> = ({ config }) => {
  const {
    slots: { main, top },
    tabs,
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
