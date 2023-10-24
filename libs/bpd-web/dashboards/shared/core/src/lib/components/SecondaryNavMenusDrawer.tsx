import { FC } from 'react'
import { kebabCase, startCase } from 'lodash'
import { useNavigate } from 'react-router-dom'
import {
  UiActions,
  UiSelectors,
  useAppDispatch,
  useAppSelector,
} from '@bpd/bpd-web/shared/store'
import { BpdSecondaryMenu } from '@bpd/bpd-web/shared/ui'

import { DASHBOARD_MENU_ITEMS, SECONDARY_MENU, TITLE } from '../constants'

export interface SecondaryNavMenusDrawerProps {
  selectedKeys: string[]
}

const SecondaryNavMenusDrawer: FC<SecondaryNavMenusDrawerProps> = (props) => {
  const { selectedKeys } = props

  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const isNavMenuDrawerExpanded = useAppSelector(
    UiSelectors.getIsNavMenuDrawerExpanded
  )

  const closeDrawer = () =>
    dispatch(UiActions.setIsNavMenuDrawerExpanded(false))

  const handleSelect = (e) => {
    const { item } = e

    navigate(item.props.url)
    closeDrawer()
  }

  return (
    <BpdSecondaryMenu
      items={DASHBOARD_MENU_ITEMS}
      visible={isNavMenuDrawerExpanded as unknown as boolean}
      onClose={closeDrawer}
      destroyOnClose
      title={startCase(TITLE)}
      onSelect={handleSelect}
      selectedKeys={selectedKeys}
      defaultOpenKeys={[
        kebabCase(SECONDARY_MENU.PORTFOLIO_ANALYTICS.BASE),
        kebabCase(SECONDARY_MENU.TEAM_ANALYTICS.BASE),
        kebabCase(SECONDARY_MENU.MARKET.BASE),
      ]}
    />
  )
}

export default SecondaryNavMenusDrawer
