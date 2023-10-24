import { FC, useMemo } from 'react'
import { find } from 'lodash'
import { MapActions } from '@bpd/vendors/carto'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'
import {
  AgGrid,
  ColumnDefs,
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
import { getPopupProps } from '../utils'
import { ColorString } from 'highcharts'
import StyledAgGrid from './StyledAGgGrid'

export interface DirectoryOverviewTableDrawerProps {
  items: any[]
  columnDefs?: ColumnDefs
  team: ColorString
  isError: boolean
  isLoading: boolean
}

const DirectoryOverviewTableDrawer: FC<DirectoryOverviewTableDrawerProps> = (
  props
) => {
  const { items, team, isError, isLoading, columnDefs: propColumnDefs } = props

  const dispatch = useAppDispatch()

  const { CellFormattingTypes } = AgGridUtils

  const SideBarConfig = find(
    DEFAULT_SIDE_BAR_DEFS?.toolPanels,
    (panel: ToolPanelDef) => panel?.id === 'columns'
  )

  const columnDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Project Name',
      field: 'propName',
      pinned: 'left',
      width: 200,
    },
    {
      headerName: 'Type',
      field: 'bpStatusWType',
    },
    {
      headerName: 'Sector',
      field: 'propType',
    },
    {
      headerName: 'Valuation',
      field: 'bpValuation',
      type: 'rightAligned',
      cellStyle: { 'justify-content': 'flex-end' },
      ...CellFormattingTypes.currency,
    },
    {
      headerName: 'Cap Rate',
      field: 'bpCapRate',
      type: 'rightAligned',
      cellStyle: { 'justify-content': 'flex-end' },
      ...CellFormattingTypes.percentage,
    },
    {
      headerName: 'Date',
      field: 'acqVintageDt',
      ...CellFormattingTypes.date,
    },
  ]

  const defaultColDef = useMemo(() => {
    return {
      wrapHeaderText: true,
      autoHeaderHeight: true,
      sortable: true,
      autoHeight: false,
    }
  }, [])

  const handleCellClicked = (items: BaseCellClickedEvent) => {
    const { data: item } = items

    dispatch(
      MapActions.setTooltip({
        ...getPopupProps({ item, team }),
        latitude: item.lat,
        longitude: item.lng,
      })
    )
  }

  return (
    <StyledAgGrid
      containerProps={{ height: '100%', width: '100%' }}
      defaultColDef={defaultColDef}
      columnDefs={propColumnDefs ? propColumnDefs : columnDefs}
      sideBar={{ toolPanels: [SideBarConfig] }}
      rowData={items}
      onCellClicked={handleCellClicked}
      isError={isError}
      isLoading={isLoading}
      setupScrollbarPropsItems={[]}
      rowBuffer={10}
    />
  )
}

export default DirectoryOverviewTableDrawer
