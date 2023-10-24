import {
  GetProjectSummaryResult,
  ProjectSummary,
} from '@bpd/mv-irr/shared/data-access'
import { FC, useMemo, useRef, useState } from 'react'
import { DEFAULT_COLUMN_DEFS } from '@bpd/vendors/ag-grid'
import { Card, Stack } from '@gic/battlefield-ui-pack'
import { AgGridReact } from 'ag-grid-react'
import { BpdLink, BpdSearchBar } from '@bpd/bpd-web/shared/ui'
import { DownloadOutlined } from '@ant-design/icons'
import ProjectModal from './ProjectModal'
import ProjectHistoryModal from './ProjectHistoryModal'
import { ASSET_MGR_TYPES } from '../constants'
import {
  HistoryCellRenderer,
  NameCellRenderer,
  StaffingCellRenderer,
} from './CellRenderers'
import { RowDoubleClickedEvent } from 'ag-grid-community'
import { getProjectSummaryColDef } from '../utils'
import StyledAgGrid from './StyledAgGrid'

export interface ProjectSummaryGridProps {
  data: GetProjectSummaryResult
  isFetching: boolean
  isError: boolean
  isLoading: boolean
  activeFy: string
}

const ROW_HEIGHT = 28

const ProjectSummaryGrid: FC<ProjectSummaryGridProps> = (props) => {
  const { data, isFetching, isError, isLoading, activeFy } = props
  const gridRef = useRef<AgGridReact>()
  const [selectedProject, setSelectedProject] = useState<ProjectSummary>(null)
  const [historyProject, setHistoryProject] = useState<ProjectSummary>(null)

  const columnDefs = useMemo(
    () => getProjectSummaryColDef(activeFy),
    [activeFy]
  )

  const handleClickExport = () => {
    if (gridRef) {
      gridRef.current.api.exportDataAsExcel({
        fileName: `IRR-project-summary`,
      })
    }
  }

  const handleProjModal = (data: ProjectSummary) => {
    setSelectedProject(data)
  }

  const handleHistoryModal = (data: ProjectSummary) => {
    setHistoryProject(data)
  }

  const onRowDoubleClicked = (params: RowDoubleClickedEvent) => {
    if (params && params.data) {
      setSelectedProject(params.data)
    }
  }

  const handleSearch = (e) => {
    if (gridRef) {
      gridRef.current.api.setQuickFilter(e)
    }
  }

  const components = useMemo(() => {
    return {
      projectNameRenderer: (params) =>
        NameCellRenderer({ params, handleProjModal }),
      renderActionLogCell: (params) =>
        HistoryCellRenderer({ params, handleHistoryModal }),
      renderTeamLeadCell: (params) =>
        StaffingCellRenderer({
          params,
          roleName: ASSET_MGR_TYPES.TEAM_LEADER,
        }),
      renderPrimaryAssetMgrCell: (params) =>
        StaffingCellRenderer({
          params,
          roleName: ASSET_MGR_TYPES.PRIMARY,
        }),
      renderSecondaryAssetMgrCell: (params) =>
        StaffingCellRenderer({
          params,
          roleName: ASSET_MGR_TYPES.SECONDARY,
        }),
    }
  }, [])

  return (
    <Card
      title="Projects"
      stretch
      size="small"
      disableBorder
      wrapperSx={{ '& .battlefield-card-body': { paddingBottom: 2 } }}
      leftActions={
        <BpdLink
          startIcon={<DownloadOutlined />}
          onClick={handleClickExport}
          title="Download"
        />
      }
    >
      <Stack spacing={1} flex={1}>
        <BpdSearchBar
          placeholder="Search for any columns"
          onChangeDebounce={150}
          onChange={handleSearch}
        />

        <StyledAgGrid
          ref={gridRef}
          columnDefs={columnDefs}
          containerProps={{
            bordered: true,
            width: '100%',
            height: '100%',
          }}
          defaultColDef={{
            ...DEFAULT_COLUMN_DEFS,
            wrapHeaderText: true,
            autoHeaderHeight: true,
            autoHeight: false,
            flex: 0,
          }}
          setupScrollbarPropsItems={[]}
          rowBuffer={10}
          isFetching={isFetching}
          isError={isError}
          isLoading={isLoading}
          rowData={data}
          rowHeight={ROW_HEIGHT}
          components={components}
          cacheQuickFilter={true}
          onRowDoubleClicked={onRowDoubleClicked}
        />
      </Stack>

      {selectedProject && (
        <ProjectModal
          {...{ selectedProject, onCloseModal: () => setSelectedProject(null) }}
        />
      )}

      {historyProject && (
        <ProjectHistoryModal
          {...{
            selectedProject: historyProject,
            onCloseModal: () => setHistoryProject(null),
          }}
        />
      )}
    </Card>
  )
}

export default ProjectSummaryGrid
