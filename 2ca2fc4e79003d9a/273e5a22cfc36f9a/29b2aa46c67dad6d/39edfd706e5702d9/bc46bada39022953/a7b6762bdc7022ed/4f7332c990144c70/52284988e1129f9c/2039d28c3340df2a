import React, { useState, useCallback } from 'react'
import { useMatch } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { BpdButton } from '@bpd/bpd-web/shared/ui'
import SecondaryNavMenusDrawer from './SecondaryNavMenusDrawer'
import { TEAM_ANALYTICS_NAV_MENU_ITEMS } from '../constants'
import { chain, get } from 'lodash'
import { useAppDispatch, UiActions } from '@bpd/bpd-web/shared/store'

interface MenuItem {
  key: string
  title?: string
  items?: MenuItem[]
}

const getSelectedKey = (
  menuData: MenuItem[],
  selectedKey: string,
  parentKey: string | null = null
): string =>
  chain(menuData)
    .flatMapDeep((item: MenuItem) => {
      if (item.key === selectedKey) {
        return parentKey ? `${parentKey}-${selectedKey}` : selectedKey
      } else if (item.items) {
        return getSelectedKey(item.items, selectedKey, item.key)
      } else {
        return ''
      }
    })
    .find()
    .value()

const findItemByKey = (arr: MenuItem[], key: string): MenuItem | undefined => {
  return chain(arr)
    .flatMapDeep((item: MenuItem) => [
      item,
      findItemByKey(item.items || [], key),
    ])
    .find(
      (item: MenuItem | undefined): item is MenuItem => get(item, 'key') === key
    )
    .value()
}

const HeaderExtraContentRight = () => {
  const dispatch = useAppDispatch()

  const match = useMatch(`${ROUTES.TEAM_ANALYSIS.BASE}/:team`) // Specify the URL pattern

  const selectedTeam = match?.params?.team ?? ''

  const title = findItemByKey(
    TEAM_ANALYTICS_NAV_MENU_ITEMS,
    selectedTeam
  )?.title

  const selectedKeys = [
    getSelectedKey(TEAM_ANALYTICS_NAV_MENU_ITEMS, selectedTeam),
  ]

  const handleClickMenu = useCallback(() => {
    dispatch(UiActions.setIsNavMenuDrawerExpanded(true))
  }, [])

  return (
    <>
      <BpdButton
        variant="outlined"
        title={title}
        disableBorder
        onClick={handleClickMenu}
        endIcon={<DownOutlined />}
        sx={{
          boxShadow: 'none',
        }}
      />

      <SecondaryNavMenusDrawer
        {...{
          selectedKeys,
        }}
      />
    </>
  )
}

export default HeaderExtraContentRight
