import { get, map, sum } from 'lodash'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import useGetFilterSelectedValues from './useGetFilterSelectedValues'
import { DirectorySelectors } from '../data'
import { useBPAuthz } from '@bpd/auth-authorization'
import { useMemo } from 'react'

interface UseOverviewQueryArgsResult {
  showSelectedCards: boolean
  viewport?: string | null
  filters?: Record<string, string[]>
  userId?: string | null
  forceToUpdate?: string
}
const useOverviewQueryArgs = (): UseOverviewQueryArgsResult => {
  const user = useBPAuthz()

  const currentViewport =
  useAppSelector((state) => state?.carto?.viewport || '')

  const filters = useAppSelector(DirectorySelectors.getSelectedDirectoryFilters)

  const selectedFilterValues = useGetFilterSelectedValues({ filters })

  const showSelectedCards = !!get(filters, 'showSelectedCards')

  const selectedCardIds = map(
    useAppSelector(DirectorySelectors.getSelectedAssets),
    'cartodbId'
  )

  const forceToUpdate = useMemo(() => {
    return `${sum(selectedCardIds)}-forceToUpdate`
  }, [selectedCardIds.join(',')])

  return useMemo(() => {
    return {
      filters: selectedFilterValues,
      showSelectedCards,
      ...(showSelectedCards
        ? { userId: user?.ntid, viewport: null, forceToUpdate }
        : { viewport: currentViewport, userId: null }),
    }
  }, [selectedFilterValues, showSelectedCards, currentViewport, forceToUpdate])
}

export default useOverviewQueryArgs
