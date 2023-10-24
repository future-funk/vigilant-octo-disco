import { FC, useMemo } from 'react'
import { find } from 'lodash'
import { MapActions } from '@bpd/vendors/carto'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'
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
} from 'ag-grid-community'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Stack } from '@gic/battlefield-ui-pack'
import { LogisticsResponseDto } from '../data'
import { getPopupProps } from '../utils'

export interface LogisticsOverviewTableDrawer {
  records: LogisticsResponseDto[]
  isError: boolean
  isLoading: boolean
}

const ICONS: Record<string, () => JSX.Element | string> = {
  sortAscending: () => '<i class="fa fa-arrow-down "/>',
  sortDescending: () => '<i class="fa fa-arrow-up"/>',
}

const StyledTableContainer = withTheme(Stack)({
  height: '100%',
  '&&& .ag-cell-last-left-pinned': {
    borderRightWidth: '1px',
  },
  '&&& .ag-header-cell-label': {
    gap: '8px',
  },
})

const LogisticsOverviewTableDrawer: FC<LogisticsOverviewTableDrawer> = (
  props
) => {
  const { records, isError, isLoading } = props

  const dispatch = useAppDispatch()

  const { CellFormattingTypes } = AgGridUtils

  const SideBarConfig = find(
    DEFAULT_SIDE_BAR_DEFS?.toolPanels,
    (panel: ToolPanelDef) => panel?.id === 'columns'
  )

  const columnDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Asset Name',
      field: 'name',
      pinned: 'left',
      width: 250,
    },
    {
      headerName: 'Project Name',
      field: 'projectName',
      width: 200,
    },
    {
      headerName: 'GLA (sqm)',
      field: 'totalGlaSqm',
      type: 'rightAligned',
      cellStyle: { 'justify-content': 'flex-end' },
      ...CellFormattingTypes.number,
    },
    {
      headerName: 'Rents',
      field: 'totalRentPsmPaLcy',
      type: 'rightAligned',
      cellStyle: { 'justify-content': 'flex-end' },
      ...CellFormattingTypes.currency,
    },
    {
      headerName: 'ERV',
      field: 'totalErvPsmPaLcy',
      type: 'rightAligned',
      cellStyle: { 'justify-content': 'flex-end' },
      ...CellFormattingTypes.currency,
    },
    {
      headerName: 'Currency',
      field: 'currency',
      type: 'rightAligned',
      cellStyle: { 'justify-content': 'flex-end' },
    },
    {
      headerName: 'WALB',
      field: 'walb',
      type: 'rightAligned',
      cellStyle: { 'justify-content': 'flex-end' },
      ...CellFormattingTypes.number1Dp,
    },
    {
      headerName: 'WALE',
      field: 'wale',
      type: 'rightAligned',
      cellStyle: { 'justify-content': 'flex-end' },
      ...CellFormattingTypes.number1Dp,
    },
    {
      headerName: 'Population coverage',
      field: 'popCoverage',
      type: 'rightAligned',
      cellStyle: { 'justify-content': 'flex-end' },
      width: 180,
      ...CellFormattingTypes.formatRelativeNumber,
    },
    {
      headerName: 'Occupancy',
      field: 'occupancy',
      type: 'rightAligned',
      cellStyle: { 'justify-content': 'flex-end' },
      width: 150,
      ...CellFormattingTypes.percentage,
    },
  ]

  const defaultColDef = useMemo(() => {
    return {
      flex: 0,
      autoHeight: false,
      sortable: true,
    }
  }, [])

  const handleCellClicked = (items: BaseCellClickedEvent) => {
    const { data: item } = items

    dispatch(
      MapActions.setTooltip({
        ...getPopupProps(item),
        latitude: item.lat,
        longitude: item.lng,
      })
    )
  }

  return (
    <StyledTableContainer>
      <AgGrid
        containerProps={{ height: '100%' }}
        defaultColDef={defaultColDef}
        columnDefs={columnDefs}
        sideBar={{ toolPanels: [SideBarConfig] }}
        rowData={records}
        icons={ICONS}
        onCellClicked={handleCellClicked}
        isError={isError}
        isLoading={isLoading}
      />
    </StyledTableContainer>
  )
}

export default LogisticsOverviewTableDrawer
