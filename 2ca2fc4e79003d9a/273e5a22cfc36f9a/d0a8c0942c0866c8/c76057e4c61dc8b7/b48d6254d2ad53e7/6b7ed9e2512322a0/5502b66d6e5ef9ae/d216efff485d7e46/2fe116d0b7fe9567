import { useAppSelector } from '@bpd/bpd-web/shared/store'
import {
  GetBaseRegionCountryResult,
  GetBaseSectorResult,
  MarketTransactionsCartoQueries,
} from '@bpd/market-transactions/shared/data-access'
import { chain, filter, map } from 'lodash'
import { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { MarketTransactionsActions, MarketTransactionsSelectors } from '../data'

const getRegions = (baseRegionsCountries: GetBaseRegionCountryResult) => {
  return chain(baseRegionsCountries)
    .map((baseRegionCountry) => {
      const { region, regionIsSelected } = baseRegionCountry
      return {
        label: region,
        value: region,
        isSelected: regionIsSelected,
      }
    })
    .uniqBy('value')
    .orderBy('value')
    .value()
}

const getCountries = (
  baseRegionsCountries: GetBaseRegionCountryResult,
  regions: string[] = []
) => {
  const filteredItems = filter(baseRegionsCountries, (item) =>
    regions.includes(item.region)
  )

  return chain(filteredItems)
    .map((filterItem) => {
      const { country, countryIsSelected } = filterItem
      return {
        label: country,
        value: country,
        isSelected: countryIsSelected,
      }
    })
    .uniqBy('value')
    .orderBy('value')
    .value()
}

const getSectors = (baseSectors: GetBaseSectorResult) => {
  return chain(baseSectors)
    .map('sector')
    .uniq()
    .map((sector) => ({ label: sector, value: sector }))
    .value()
}

const useGetBaseFilterItems = () => {
  const dispatch = useDispatch()
  const filters = useAppSelector(MarketTransactionsSelectors.getFilters)

  const { data: baseRegionsCountries } =
    MarketTransactionsCartoQueries.useGetBaseRegionsCountries(null)
  const { data: baseSectors } = MarketTransactionsCartoQueries.useGetBaseSectors(null)

  const regionItems = useMemo(
    () => getRegions(baseRegionsCountries),
    [baseRegionsCountries]
  )

  const countryItems = useMemo(
    () => getCountries(baseRegionsCountries, filters?.regions),
    [baseRegionsCountries, filters?.regions]
  )

  const sectorItems = useMemo(() => getSectors(baseSectors), [baseSectors])

  useEffect(() => {
    if (regionItems && sectorItems) {
      const selectedRegions = filter(regionItems, (item) => item.isSelected)

      const filterItems = {
        ...filters,
        regions: map(selectedRegions, 'value'),
        sectors: map(sectorItems, 'value'),
      }
      dispatch(MarketTransactionsActions.setFilters(filterItems))
    }
  }, [regionItems, sectorItems])

  useEffect(() => {
    if (countryItems) {
      const selectedCountries = filter(countryItems, (item) => item.isSelected)

      dispatch(
        MarketTransactionsActions.addFilter({ countries: map(selectedCountries, 'value') })
      )
    }
  }, [countryItems])

  return { regionItems, countryItems, sectorItems }
}

export default useGetBaseFilterItems
