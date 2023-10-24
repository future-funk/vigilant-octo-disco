import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { DirectorySelectors } from '../data'
import { filter } from 'lodash'
import { useMemo } from 'react'
import { conditionHelper } from '../utils'
import useGetFilterSelectedValues from './useGetFilterSelectedValues'
import useSelectedCardsManager from './useSelectedCardsManager'

const useGetSelectedCardsByFilters = () => {
  const filters = useAppSelector(DirectorySelectors.getSelectedDirectoryFilters)

  const selectedFilterValues = useGetFilterSelectedValues({ filters })

  const { selectedCards, showSelectedCards } = useSelectedCardsManager()

  const filteredCards = useMemo(
    () =>
      filter(selectedCards, (logisticsAsset) =>
        conditionHelper(logisticsAsset, selectedFilterValues)
      ),
    [selectedCards, selectedFilterValues]
  )

  return showSelectedCards ? filteredCards : null
}

export default useGetSelectedCardsByFilters
