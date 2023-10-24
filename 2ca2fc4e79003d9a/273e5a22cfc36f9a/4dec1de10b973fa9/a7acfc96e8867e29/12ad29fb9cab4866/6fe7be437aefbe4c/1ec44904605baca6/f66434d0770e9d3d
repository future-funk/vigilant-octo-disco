import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { DirectorySelectors } from '../data'
import { useMemo } from 'react'
import useGetShowSelectedCards from './useGetShowSelectedCards'

const useSelectedCardsManager = () => {
  const showSelectedCards = useGetShowSelectedCards()

  const selectedCards = useAppSelector(DirectorySelectors.getSelectedAssets)

  return useMemo(
    () => ({ selectedCards, showSelectedCards }),
    [selectedCards, showSelectedCards]
  )
}

export default useSelectedCardsManager
