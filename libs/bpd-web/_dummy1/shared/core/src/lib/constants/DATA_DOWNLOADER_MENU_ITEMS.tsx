import { kebabCase } from 'lodash'
import { CalculatorOutlined, DatabaseOutlined } from '@ant-design/icons'
import { BpdSecondaryMenuItemProps } from '@bpd/bpd-web/shared/ui'
import { SECONDARY_MENU } from './SECONDARY_MENU'
import { ROUTES } from '@bpd/bpd-web/shared/config'

export const DATA_DOWNLOADER_MENU_ITEMS: BpdSecondaryMenuItemProps[] = [
  {
    key: kebabCase(SECONDARY_MENU.TWR_ENGINE),
    title: SECONDARY_MENU.TWR_ENGINE,
    icon: DatabaseOutlined,
    url: ROUTES.DATA_DOWNLOADER.TWR_ENGINE,
  },
  {
    key: kebabCase(SECONDARY_MENU.IRR_ENGINE),
    title: SECONDARY_MENU.IRR_ENGINE,
    icon: CalculatorOutlined,
    url: ROUTES.DATA_DOWNLOADER.IRR_ENGINE,
  },
]
