import { FC } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
import { isEmpty, replace } from 'lodash'
import { MenuProps } from '@gic/battlefield-ui-pack'
import {
  UiActions,
  UiSelectors,
  useAppDispatch,
  useAppSelector,
} from '@bpd/bpd-web/shared/store'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { TEAM_ANALYTICS_NAV_MENU_ITEMS } from '../constants'
import type { NavMenuType } from '../types'
import { BpdSecondaryMenu } from '@bpd/bpd-web/shared/ui'

export interface SecondaryNavMenusDrawerProps {
  selectedKeys: string[]
}

const extractActualKey = (keyPath: string[]): string | null => {
  if (isEmpty(keyPath)) {
    return null // Return null for empty or invalid input
  }

  const hierarchyHead = keyPath.at(-1)
  return replace(keyPath.at(0)!, `${hierarchyHead}-`, '')
}

const SecondaryNavMenusDrawer: FC<SecondaryNavMenusDrawerProps> = ({
  selectedKeys,
}) => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const isNavMenuDrawerExpanded = useAppSelector(
    UiSelectors.getIsNavMenuDrawerExpanded
  )

  const closeDrawer = () =>
    dispatch(UiActions.setIsNavMenuDrawerExpanded(false))

  const handleSelect: MenuProps['onSelect'] = (e) => {
    const url = generatePath(`${ROUTES.TEAM_ANALYSIS.BASE}/:team`, {
      team: extractActualKey(e.keyPath) as NavMenuType,
    })
    navigate(url)
  }

  return (
    <BpdSecondaryMenu
      items={TEAM_ANALYTICS_NAV_MENU_ITEMS}
      visible={isNavMenuDrawerExpanded as unknown as boolean}
      onClose={closeDrawer}
      destroyOnClose
      title="Team Analytics"
      onSelect={handleSelect}
      selectedKeys={selectedKeys}
      defaultOpenKeys={['regions']}
    />
  )
}

export default SecondaryNavMenusDrawer
