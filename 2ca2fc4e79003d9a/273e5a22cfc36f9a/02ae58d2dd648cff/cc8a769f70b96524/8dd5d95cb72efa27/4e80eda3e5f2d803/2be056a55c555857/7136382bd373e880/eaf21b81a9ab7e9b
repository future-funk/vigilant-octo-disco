import { FC, useRef, useEffect } from 'react'
import { Stack } from '@gic/battlefield-ui-pack'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdSuspense, orderByConfig } from '@bpd/bpd-web/shared/ui'
import { PerfectScrollbar } from '@bpd/vendors/perfect-scrollbar'
import { useInfiniteScroll } from '@bpd/ui/hooks'
import { ESGPortalRequestPayload } from '@bpd/esg-portal/shared/data-access'
import CardModal from './CardModal'
import Card from './Card'
import DrawerBottomBanner from './DrawerBottomBanner'

const StyledListContainer = withTheme(Stack)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px',
  padding: '10px',
})

interface OverviewCardDrawerProps {
  records: ESGPortalRequestPayload[]
  isLoading: boolean
  isError: boolean
  selectedRecordId?: number
}

const DEFAULT_STEP = 18

const OverviewCardDrawer: FC<OverviewCardDrawerProps> = (props) => {
  const { records, isError, isLoading, selectedRecordId } = props

  const scrollRef = useRef<HTMLElement>()

  const sortedLocations = orderByConfig(
    records,
    {
      field: selectedRecordId ? 'distance' : 'propRegion',
      order: 'asc',
    },
    {
      fields: selectedRecordId ? ['distance'] : ['propRegion'],
      shiftTo: 'end',
    }
  )

  const [cursor, setCursor] = useInfiniteScroll({
    resetOn: [JSON.stringify(sortedLocations)],
  })

  useEffect(() => {
    if (scrollRef?.current) scrollRef.current.scrollTop = 0
  }, [selectedRecordId])

  const handleReachEnd = () => {
    if (cursor + DEFAULT_STEP < sortedLocations.length)
      setCursor(cursor + DEFAULT_STEP)
  }

  return (
    <BpdSuspense
      loading={isLoading}
      empty={!isLoading && !(sortedLocations || [])?.length}
      error={isError}
    >
      <PerfectScrollbar
        containerRef={(ref) => (scrollRef.current = ref)}
        onReachEnd={handleReachEnd}
      >
        <StyledListContainer>
          {sortedLocations?.slice(0, cursor + DEFAULT_STEP)?.map((item) => (
            <Card
              selectedRecordId={selectedRecordId}
              item={item}
              key={`overview-card-${item.id}`}
            />
          ))}
        </StyledListContainer>
      </PerfectScrollbar>
      <DrawerBottomBanner />
      <CardModal />
    </BpdSuspense>
  )
}

export default OverviewCardDrawer
