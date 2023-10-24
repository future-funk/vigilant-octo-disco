import { DynamicReducer, ModuleConfigs } from '@bpd/bpd-web/shared/store'
import { FC, ReactElement } from 'react'
import { Layout } from '../layouts'

export interface PageConfig {
  path?: string
  modules?: ModuleConfigs
  slots: {
    main: ReactElement
    top?: ReactElement
  }
}

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
