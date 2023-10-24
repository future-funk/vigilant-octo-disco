import { RadioChangeEvent } from 'antd'
import { FC, useState } from 'react'
import { ProjectSummary, MvIrrQueries } from '@bpd/mv-irr/shared/data-access'
import { UiSelectors, useAppSelector } from '@bpd/bpd-web/shared/store'
import { BpdSuspense } from '@bpd/bpd-web/shared/ui'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { withToast } from '@bpd/vendors/react-hot-toast'
import { Modal } from '@gic/battlefield-ui-pack'
import ProjectAttributes from './ProjectAttributes'
import ProjectCashFlow from './ProjectCashFlow'
import ProjectTitle from './ProjectTitle'
import { MvIrrSelectors } from '../../data'
import { useGetProjectCashflow } from '../../hooks'

export interface ProjectModalProps {
  selectedProject: ProjectSummary
  onCloseModal: () => void
}

const StyledModal = withTheme(Modal)(({ theme }) => ({
  '&&& .ant-modal-content': {
    backgroundColor: theme.palette.background.modal,
  },
  '&&& .ant-modal-header': {
    backgroundColor: theme.palette.background.modal,
  },
}))

const ProjectModal: FC<ProjectModalProps> = (props) => {
  const { onCloseModal, selectedProject } = props
  const { projId } = selectedProject

  const team = useAppSelector(UiSelectors.getTeam)

  const { currency, fiscalYear } = useAppSelector(MvIrrSelectors.getFilters)
  const [activeCurrency, setActiveCurrency] = useState(currency)

  const handleChangeCurrency = (e: RadioChangeEvent) => {
    setActiveCurrency(e.target.value)
  }

  const {
    data: projectCashflowData,
    isFetching: projCashFetching,
    isError: projCashError,
    refetch: refetchProjectCashflowData,
  } = useGetProjectCashflow({ projId, activeCurrency })

  const [
    postRefreshProject,
    { isLoading: isRefreshLoading, isError: isRefreshError },
  ] = MvIrrQueries.usePostRefreshProject()

  const refreshProject = () => {
    withToast({
      action: async () => {
        await postRefreshProject({
          url: { projId, fiscalYear, team },
        })
        refetchProjectCashflowData()
      },
      loading: 'Refreshing Project',
      success: 'Project has been successfully Refreshed',
    })
  }

  return (
    <StyledModal
      visible
      destroyOnClose
      disableFooter
      width={1024}
      bodyStyle={{ minHeight: 500, paddingTop: 16 }}
      title={
        <ProjectTitle
          {...{
            selectedProject,
            activeCurrency,
            handleChangeCurrency,
            refreshProject,
          }}
        />
      }
      onCancel={onCloseModal}
    >
      <BpdSuspense error={isRefreshError} loading={isRefreshLoading}>
        <ProjectAttributes projectId={projId} />

        <BpdSuspense error={projCashError} loading={projCashFetching}>
          <ProjectCashFlow
            {...{
              projectCashflowData,
              fiscalYear,
              activeCurrency,
              projId,
              team,
            }}
          />
        </BpdSuspense>
      </BpdSuspense>
    </StyledModal>
  )
}

export default ProjectModal
