import { chain } from 'lodash'
import { UiSelectors, useAppSelector } from '@bpd/bpd-web/shared/store'
import { MvIrrQueries } from '@bpd/mv-irr/shared/data-access'
import { MvIrrSelectors } from '../data'

const useGetPortfolioSummary = () => {
  const team = useAppSelector(UiSelectors.getTeam)

  const {
    currency,
    fiscalYear,
    activeProjCcy: projectCurrency,
  } = useAppSelector(MvIrrSelectors.getFilters)

  const params = {
    team,
    fiscalYear,
    currency,
    projectCurrency,
  }

  return MvIrrQueries.useGetPortfolioSummary(params, {
    skip: !chain(params).values().every().value(),
  })
}

export default useGetPortfolioSummary
