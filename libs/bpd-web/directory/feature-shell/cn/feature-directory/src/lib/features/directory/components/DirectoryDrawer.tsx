import { FC } from 'react'
import { DirectoryDrawerSort } from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import DirectoryOverviewDrawer from './DirectoryOverviewDrawer'
import { sortingConfig } from '../configs'

const DirectoryDrawer: FC = () => {
  return (
    <DirectoryOverviewDrawer
      filter={<DirectoryDrawerSort config={sortingConfig} />}
    />
  )
}

export default DirectoryDrawer
