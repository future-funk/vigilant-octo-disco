import { BpdTabsItemProps, BpdTabsProps } from '@bpd/bpd-web/shared/ui'
import { ReactElement } from 'react'

export interface CreateTabOptions {
  belongsTo?: string
  left?: ReactElement
  right?: ReactElement
  items?: BpdTabsItemProps[]
}

export interface CreateTabsOptions extends CreateTabOptions {
  path: string
}

const createTab = (options: CreateTabOptions) => {
  const { belongsTo, left, right, ...rest } = options
  return { activeKey: belongsTo, tabBarExtraContent: { left, right }, ...rest }
}

const createTabs = (
  options: CreateTabsOptions[]
): Record<string, BpdTabsProps> =>
  options.reduce(
    (tabs, { belongsTo, path, ...rest }) => ({
      ...tabs,
      [path]: createTab({ ...rest, belongsTo: belongsTo ?? path }),
    }),
    {}
  )

export default createTabs
