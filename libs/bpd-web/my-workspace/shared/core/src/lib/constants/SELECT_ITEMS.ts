import { SelectItemInterface } from '@bpd/bpd-web/shared/ui'

export const MY_DEALS_ITEM_LABEL = 'My Deals'
export const MY_DEALS_ITEM_KEY = 'my-deals'

export const MY_TEAM_ITEM_LABEL = 'My Team'
export const MY_TEAM_ITEM_KEY = 'my-team'

export const SELECT_ITEMS: SelectItemInterface[] = [
  {
    key: MY_DEALS_ITEM_KEY,
    value: MY_DEALS_ITEM_KEY,
    label: MY_DEALS_ITEM_LABEL,
  },
  { key: MY_TEAM_ITEM_KEY, value: MY_TEAM_ITEM_KEY, label: MY_TEAM_ITEM_LABEL },
]
