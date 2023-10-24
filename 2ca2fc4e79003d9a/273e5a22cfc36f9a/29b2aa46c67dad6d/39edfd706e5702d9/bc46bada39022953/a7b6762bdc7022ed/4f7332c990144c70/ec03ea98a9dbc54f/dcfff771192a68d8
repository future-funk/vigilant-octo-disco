import { FC } from 'react'
import { DynamicReducer } from '@bpd/bpd-web/shared/store'
import type { PageConfig } from './Page'
import { Layout, Tabs } from '@bpd/mv-irr/shared/core'
import { some, values } from 'lodash'
import { renderIf } from '@bpd/ui/libs/react-slots'

export interface PageTemplateProps {
  config: PageConfig
}

const PageTemplate: FC<PageTemplateProps> = ({ config }) => {
  const { slots, modules, tabs } = config
  const hasTab = some(values(tabs))

  return (
    <DynamicReducer {...{ destroyWhenUnMount: true, configs: modules }}>
      <Layout
        main={slots?.main}
        top={{
          left: slots?.top?.left,
          right: slots?.top?.right,
          rightProps: slots?.top?.rightProps,
          leftProps: slots?.top?.leftProps,
          wrapperProps: slots?.top?.wrapperProps,
        }}
        tabs={renderIf(hasTab, <Tabs {...tabs} />)}
      />
    </DynamicReducer>
  )
}

export default PageTemplate
