import { chain } from 'lodash'
import { UiSelectors, useAppSelector } from '@bpd/bpd-web/shared/store'
import { MvIrrQueries } from '@bpd/mv-irr/shared/data-access'
import { MvIrrSelectors } from '../data'

const useGetProjectById = (projId: string) => {
  const team = useAppSelector(UiSelectors.getTeam)

  const { fiscalYear } = useAppSelector(MvIrrSelectors.getFilters)

  const params = { team, fiscalYear, projId }

  return MvIrrQueries.useGetProjectById(params, {
    skip: !chain(params).values().every().value(),
  })
}

export default useGetProjectById
