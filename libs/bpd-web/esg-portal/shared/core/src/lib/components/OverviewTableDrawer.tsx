import { FC, useMemo, useRef } from 'react'
import { find } from 'lodash'
import { Stack } from '@gic/battlefield-ui-pack'
import { AgGridReact } from 'ag-grid-react'
import { QuestionCircleFilled } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import { formatNumber } from '@bpd/utils/formatters'
import {
  AgGrid,
  utils as AgGridUtils,
  DEFAULT_SIDE_BAR_DEFS,
} from '@bpd/vendors/ag-grid'
import {
  ColDef,
  ColGroupDef,
  ToolPanelDef,
  CellClickedEvent as BaseCellClickedEvent,
  RowClassParams,
} from 'ag-grid-community'
import { withTheme, decomposeColorValues } from '@bpd/bpd-web/shared/theme'
import { ESGPortalRequestPayload } from '@bpd/esg-portal/shared/data-access'
import { EsgPortalActions, EsgPortalSelectors } from '../data'
import OverviewTableDrawerHeader from './OverviewTableDrawerHeader'
import { TOOLTIP } from '../constants'

export interface OverviewTableDrawerProps {
  records: ESGPortalRequestPayload[]
  isError: boolean
  isLoading: boolean
}

const StyledAgGrid = withTheme(AgGrid)({
  '&&& .bg-yellow': {
    backgroundColor: `rgba(${decomposeColorValues('#FFFFCC', 1)}) !important`,
  },
})

const StyledTableContainer = withTheme(Stack)({
  height: '100%',
  '&&& .ag-cell-last-left-pinned': {
    borderRightWidth: '1px',
  },
  '&&& .ag-header-cell-label': {
    gap: '8px',
  },
})

const OverviewTableDrawer: FC<OverviewTableDrawerProps> = (props) => {
  const { records, isError, isLoading } = props

  const dispatch = useAppDispatch()

  const ref = useRef<AgGridReact>(null)

  const selectedRecord = useAppSelector(EsgPortalSelectors.getSelectedRecord)

  const { CellFormattingTypes } = AgGridUtils

  const SideBarConfig = find(
    DEFAULT_SIDE_BAR_DEFS?.toolPanels,
    (panel: ToolPanelDef) => panel?.id === 'columns'
  )

  const components = useMemo(() => {
    return {
      agColumnHeader: OverviewTableDrawerHeader,
    }
  }, [])

  const columnDefs: (ColDef | ColGroupDef)[] = useMemo(
    () => [
      {
        headerName: 'Property Name',
        field: 'propName',
        pinned: 'left',
        width: 220,
      },
      {
        headerName: 'Sector',
        field: 'propType',
        pinned: 'left',
        width: 120,
      },
      {
        headerName: 'Region',
        field: 'propRegion',
        pinned: 'left',
        width: 120,
      },
      {
        headerName: 'Built Year',
        field: 'builtYear',
        type: 'rightAligned',
        cellStyle: { 'justify-content': 'flex-end' },
      },
      {
        headerName: 'GFA (sqm)',
        field: 'gfaSqm',
        type: 'rightAligned',
        cellStyle: { 'justify-content': 'flex-end' },
        ...CellFormattingTypes.number,
      },
      {
        headerName: 'Acquisition Date',
        field: 'acquisitionDt',
        width: 150,
        ...CellFormattingTypes.date,
      },
      {
        headerName: 'Quality',
        field: 'quality',
        width: 120,
      },
      {
        headerName: 'Capacity',
        field: 'capacity',
        cellStyle: { 'justify-content': 'flex-end' },
        cellRenderer: ({ data }) => {
          const { capacity, capacityUom } = data
          return capacity ? `${formatNumber(capacity)} ${capacityUom}` : ''
        },
      },
      {
        headerName: 'Green Cert',
        field: 'greenCert',
        width: 200,
      },
      {
        headerName: 'Bucket',
        field: 'bucket',
      },
      {
        headerName: 'Horizon',
        field: 'horizon',
      },
      {
        headerName: 'Storm Surge',
        field: 'stormSurge',
        cellStyle: { 'justify-content': 'flex-end' },
        ...CellFormattingTypes.number,
      },
      {
        headerName: 'Storm Surge Risk Rating',
        field: 'stormSurgeRr',
        cellStyle: { 'justify-content': 'flex-end' },
        width: 170,
        ...CellFormattingTypes.number,
      },
      {
        headerName: 'Hurricane',
        field: 'hurricane',
        cellStyle: { 'justify-content': 'flex-end' },
        ...CellFormattingTypes.number,
      },
      {
        headerName: 'Hurricane Risk Rating',
        field: 'hurricaneRr',
        cellStyle: { 'justify-content': 'flex-end' },
        width: 150,
        ...CellFormattingTypes.number,
      },
      {
        headerName: 'Inland Flood',
        field: 'inlandFlood',
        cellStyle: { 'justify-content': 'flex-end' },
        ...CellFormattingTypes.number,
      },
      {
        headerName: 'Inland Flood Risk Rating',
        field: 'inlandFloodRr',
        cellStyle: { 'justify-content': 'flex-end' },
        width: 170,
        ...CellFormattingTypes.number,
      },
      {
        headerName: 'Wildfire',
        field: 'wildfire',
        cellStyle: { 'justify-content': 'flex-end' },
        ...CellFormattingTypes.number,
      },
      {
        headerName: 'Wildfire Risk Rating',
        field: 'wildfireRr',
        cellStyle: { 'justify-content': 'flex-end' },
        width: 150,
        ...CellFormattingTypes.number,
      },
      {
        headerName: 'Project Id',
        field: 'projId',
      },
      {
        headerName: 'Project Name',
        field: 'projName',
        width: 200,
      },
      {
        headerName: 'GIC Share',
        field: 'gicShare',
        cellStyle: { 'justify-content': 'flex-end' },
        ...CellFormattingTypes.percentage,
      },
      {
        headerName: 'Project NMV (USD)',
        field: 'nmvUsd',
        cellStyle: { 'justify-content': 'flex-end' },
        ...CellFormattingTypes.number,
      },
      {
        headerName: 'Property NMV (USD)',
        field: 'propNmv',
        cellStyle: { 'justify-content': 'flex-end' },
        headerTooltip: TOOLTIP,
        headerComponentParams: {
          menuIcon: <QuestionCircleFilled />,
        },
        width: 180,
        ...CellFormattingTypes.number,
      },
    ],
    []
  )

  const defaultColDef = useMemo(() => {
    return {
      flex: 0,
      autoHeight: false,
      sortable: true,
    }
  }, [])

  const gridOptions = useMemo(() => {
    return {
      rowClassRules: {
        'bg-yellow': (params: RowClassParams) => {
          const { selectedRowId } = params.context
          if (params.data.id === selectedRowId) {
            params.api.ensureIndexVisible(+params.rowIndex, 'middle')
            return true
          }
        },
      },
    }
  }, [])

  const handleCellClicked = (row: BaseCellClickedEvent) => {
    const { data } = row

    dispatch(EsgPortalActions.setSelectedRecord(data))
  }

  return (
    <StyledTableContainer>
      <StyledAgGrid
        ref={ref}
        containerProps={{ height: '100%' }}
        defaultColDef={defaultColDef}
        columnDefs={columnDefs}
        sideBar={{ toolPanels: [SideBarConfig] }}
        rowData={records}
        onCellClicked={handleCellClicked}
        components={components}
        isError={isError}
        isLoading={isLoading}
        setupScrollbarPropsItems={[]}
        rowBuffer={10}
        gridOptions={gridOptions}
        context={{
          selectedRowId: selectedRecord?.id,
        }}
      />
    </StyledTableContainer>
  )
}

export default OverviewTableDrawer
