import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { DirectorySelectors } from '../data'
import { get } from 'lodash'
import { useMemo } from 'react'

const useGetShowSelectedCards = () => {
  const filters = useAppSelector(DirectorySelectors.getSelectedDirectoryFilters)

  const showSelectedCards = !!get(filters, 'showSelectedCards')

  return useMemo(() => showSelectedCards, [showSelectedCards])
}

export default useGetShowSelectedCards
