import { chain, split } from 'lodash'
import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'
import { useAppDispatch, UiActions } from '@bpd/bpd-web/shared/store'
import { BpdButton } from '@bpd/bpd-web/shared/ui'
import SecondaryNavMenusDrawer from './SecondaryNavMenusDrawer'
import {
  DATA_DOWNLOADER_MENU_ITEMS,
  SECONDARY_MENU_TITLE,
} from '../constants'

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

const HeaderExtraContentRight = () => {
  const dispatch = useAppDispatch()

  const location = useLocation()

  const getSelectedKeys = useCallback(() => {
    try {
      const pathTokens = split(location.pathname, '/').reverse()
      const selectedKeys = []

      for (let i = 0; i < pathTokens.length; i++) {
        const token = pathTokens[i]
        const selectedKey = getSelectedKey(
          DATA_DOWNLOADER_MENU_ITEMS,
          token
        )

        if (selectedKey) {
          selectedKeys.push(selectedKey)
          break
        }
      }

      return selectedKeys
    } catch (error) {
      console.error(error)
      return []
    }
  }, [location.pathname])

  const handleClickMenu = useCallback(() => {
    dispatch(UiActions.setIsNavMenuDrawerExpanded(true))
  }, [])

  return (
    <>
      <BpdButton
        variant="outlined"
        title={SECONDARY_MENU_TITLE}
        disableBorder
        onClick={handleClickMenu}
        endIcon={<RightOutlined />}
        sx={{
          boxShadow: 'none',
          '&&& .battlefield-typography-root': {
            fontWeight: 600,
          },
        }}
      />

      <SecondaryNavMenusDrawer selectedKeys={getSelectedKeys()} />
    </>
  )
}

export default HeaderExtraContentRight
