import { FC, useMemo } from 'react'
import { UiSelectors, useAppSelector } from '@bpd/bpd-web/shared/store'
import { MvIrrSelectors } from '../data'
import { MvIrrQueries } from '@bpd/mv-irr/shared/data-access'
import ProjectSummaryGrid from './ProjectSummaryGrid'

export interface ProjectProps {}

const Project: FC<ProjectProps> = () => {
  const team = useAppSelector(UiSelectors.getTeam)

  const { currency, fiscalYear, activeProjCcy } = useAppSelector(
    MvIrrSelectors.getFilters
  )

  const projectSummaryParams = useMemo(
    () => ({
      currency,
      fiscalYear,
      team,
    }),
    [currency, activeProjCcy, fiscalYear, team]
  )

  const {
    data: projectSummaryList,
    isFetching,
    isError,
    isLoading,
  } = MvIrrQueries.useGetProjectSummary(projectSummaryParams)

  return (
    <ProjectSummaryGrid
      {...{
        data: projectSummaryList,
        isFetching,
        isError,
        isLoading,
        activeFy: fiscalYear,
      }}
    />
  )
}

export default Project
