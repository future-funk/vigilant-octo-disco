import { chain } from 'lodash'
import { UiSelectors, useAppSelector } from '@bpd/bpd-web/shared/store'
import { MvIrrQueries } from '@bpd/mv-irr/shared/data-access'
import { MvIrrSelectors } from '../data'

interface GetProjectCashflowProps {
  projId: string
  activeCurrency: string
}

const useGetProjectCashflow = ({
  projId,
  activeCurrency,
}: GetProjectCashflowProps) => {
  const team = useAppSelector(UiSelectors.getTeam)

  const { fiscalYear } = useAppSelector(MvIrrSelectors.getFilters)

  const params = { team, fiscalYear, projId, activeCurrency }

  return MvIrrQueries.useGetProjectCashflow(params, {
    skip: !chain(params).values().every().value(),
  })
}

export default useGetProjectCashflow
