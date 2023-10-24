import { ReactElement } from 'react'
import { has } from 'lodash'
import { Directory, DirectoryLogisticsDto } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { Drawer } from '@bpd/bpd-web/directory/feature-shell/shared/ui'
import CardItem from './CardItem'
import { directoryTeam } from '../constants'

export interface DrawerProps {
  filter?: ReactElement
  data: Directory[] | DirectoryLogisticsDto[]
  isFetching: boolean
  team: string
  isError: boolean
}

const DirectoryOverviewCardDrawer = (props: DrawerProps) => {
  const { data, isFetching, team, isError } = props

  return (
    <Drawer
      items={has(directoryTeam, team) ? data : []}
      loading={isFetching}
      error={isError}
      itemId="cartodbId"
      item={({ item }: { item: Directory }) => (
        <CardItem
          team={team}
          item={item}
          key={`directory-drawer-${item.cartodbId}`}
        />
      )}
    />
  )
}

export default DirectoryOverviewCardDrawer
