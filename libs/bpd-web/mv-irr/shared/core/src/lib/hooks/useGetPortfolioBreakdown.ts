import { chain } from 'lodash'
import { UiSelectors, useAppSelector } from '@bpd/bpd-web/shared/store'
import { MvIrrQueries } from '@bpd/mv-irr/shared/data-access'
import { MvIrrSelectors } from '../data'

interface GetPortfolioBreakdownProps {
  strategy: string
  projectCurrency: string
  selectedParameter: string
}

const useGetPortfolioBreakdown = ({
  strategy,
  projectCurrency,
  selectedParameter,
}: GetPortfolioBreakdownProps) => {
  const team = useAppSelector(UiSelectors.getTeam)

  const { currency, fiscalYear } = useAppSelector(MvIrrSelectors.getFilters)

  const params = {
    team,
    fiscalYear,
    currency,
    strategy,
    projectCurrency,
    selectedParameter,
  }

  return MvIrrQueries.useGetPortfolioBreakdown(params, {
    skip: !chain(params).values().every().value(),
  })
}

export default useGetPortfolioBreakdown
