import { Drawer } from '@bpd/bpd-web/directory/feature-shell/shared/ui'
import { BpdSuspense } from '@bpd/bpd-web/shared/ui'
import { LogisticsResponseDto } from '../data'
import LogisticsCard from './LogisticsCard'

export interface DrawerProps {
  records: LogisticsResponseDto[]
  isFetching: boolean
  isError: boolean
  checkedList: number[]
  setCheckedList: any
}

const LogisticsOverviewCardDrawer = (props: DrawerProps) => {
  const { records, isError, isFetching, checkedList, setCheckedList } = props

  return (
    <BpdSuspense
      loading={isFetching}
      empty={!isFetching && !(records || [])?.length}
      error={isError}
    >
      <Drawer
        items={records}
        itemId="cartodbId"
        item={({ item }) => (
          <LogisticsCard
            key={`logistics-card-${item.cartodbId}`}
            item={item}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
        )}
      />
    </BpdSuspense>
  )
}

export default LogisticsOverviewCardDrawer
