import { DynamicReducer, ModuleConfigs } from '@bpd/bpd-web/shared/store'
import { FC, ReactElement } from 'react'
import { Layout } from '../layouts'
import Tabs from './Tabs'

export interface PageConfig {
  path?: string
  modules?: ModuleConfigs
  slots: {
    main?: ReactElement
    top?: ReactElement
    tabs?: any
  }
}

export interface PageTemplateProps {
  config: PageConfig
}

const PageTemplate: FC<PageTemplateProps> = ({ config }) => {
  const {
    slots: { tabs },
    modules,
    ...rest
  } = config

  return (
    <DynamicReducer {...{ destroyWhenUnMount: true, configs: modules }}>
      <Layout {...{ ...rest}} tabs= {<Tabs {...{...tabs}}/>}/>
    </DynamicReducer>
  )
}

export default PageTemplate
