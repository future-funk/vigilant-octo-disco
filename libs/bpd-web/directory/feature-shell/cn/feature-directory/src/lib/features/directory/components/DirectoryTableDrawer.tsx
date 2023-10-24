import { FC, useMemo } from 'react'
import { find } from 'lodash'
import { ColorString } from 'highcharts'
import { QuestionCircleFilled } from '@ant-design/icons'
import { MapActions } from '@bpd/vendors/carto'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'
import { BpdLink } from '@bpd/bpd-web/shared/ui'
import {
  ColumnDefs,
  utils as AgGridUtils,
  DEFAULT_SIDE_BAR_DEFS,
} from '@bpd/vendors/ag-grid'
import {
  ToolPanelDef,
  CellClickedEvent as BaseCellClickedEvent,
} from 'ag-grid-community'
import {
  getPopupProps,
  StyledAgGrid,
} from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import { Directory } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import DirectoryTableDrawerHeader from './DirectoryTableDrawerHeader'
import { TOOLTIP } from '../constants'
import { DirectoryActions } from '../data'

export interface DirectoryOverviewTableDrawerProps {
  items: Directory[]
  team: ColorString
  isError: boolean
  isLoading: boolean
}

const DirectoryTableDrawer: FC<DirectoryOverviewTableDrawerProps> = (props) => {
  const { items, team, isError, isLoading } = props

  const dispatch = useAppDispatch()

  const { CellFormattingTypes } = AgGridUtils

  const SideBarConfig = find(
    DEFAULT_SIDE_BAR_DEFS?.toolPanels,
    (panel: ToolPanelDef) => panel?.id === 'columns'
  )

  const components = useMemo(() => {
    return {
      agColumnHeader: DirectoryTableDrawerHeader,
    }
  }, [])

  const handleOnClick = (item: Directory) => {
    dispatch(DirectoryActions.setSelectedDirectory(item))
  }

  const handleCellClicked = (items: BaseCellClickedEvent) => {
    const { data: item, column } = items

    if(column.getColId() === 'assetName') return

    dispatch(
      MapActions.setTooltip({
        ...getPopupProps({ item, team, onClickFn: handleOnClick }),
        latitude: item.lat,
        longitude: item.lng,
        hideCloseButton: true
      })
    )
  }

  const columnDefs: ColumnDefs = useMemo(
    () => [
      {
        headerName: 'General Info',
        children: [
          {
            headerName: 'Project Name',
            field: 'assetName',
            pinned: 'left',
            width: 200,
            cellRenderer: ({ data }) => {
              const { assetName } = data
              return (
                <BpdLink
                  title={assetName}
                  onClick={() => handleOnClick(data)}
                />
              )
            },
          },
        ],
      },
      {
        headerName: 'General Info',
        children: [
          {
            headerName: 'City',
            field: 'city',
            minWidth: 100,
          },
          {
            headerName: 'City Tier',
            field: 'cityTier',
            minWidth: 100,
          },
          {
            headerName: 'Deal Name',
            field: 'dealName',
            minWidth: 150,
          },
          {
            headerName: 'Partner',
            field: 'partner',
            minWidth: 90,
          },
          {
            headerName: 'Deal Status',
            field: 'dealStatus',
            minWidth: 100,
            ...CellFormattingTypes.capitalize,
          },
          {
            headerName: 'Project Currency',
            field: 'projectCurrency',
            minWidth: 100,
          },
          {
            headerName: 'Equity Commitment (LCY mn)',
            field: 'eqCommitmentMn',
            cellStyle: { justifyContent : 'flex-end' },
            minWidth: 150,
            ...CellFormattingTypes.currency,
          },
          {
            headerName: 'Equity Commitment (USD mn)',
            field: 'eqCommitmentUsdMn',
            cellStyle: { justifyContent: 'flex-end' },
            minWidth: 150,
            ...CellFormattingTypes.currency,
          },
          {
            headerName: 'GIC Ownership',
            field: 'gicOwnership',
            cellStyle: { justifyContent: 'flex-end' },
            minWidth: 100,
            ...CellFormattingTypes.percentage2Dp,
          },
          {
            headerName: 'Land Area (sqm)',
            field: 'landAreaSqm',
            cellStyle: { justifyContent: 'flex-end' },
            minWidth: 100,
            ...CellFormattingTypes.number1Dp,
          },
          {
            headerName: 'Land Zoning',
            field: 'landZoning',
            minWidth: 100,
            ...CellFormattingTypes.capitalize,
          },
          {
            headerName: 'Land Tenure Expiry',
            field: 'landTenureExpiry',
            minWidth: 100,
            ...CellFormattingTypes.date,
          },
          {
            headerName: 'Land Acquisition Date',
            field: 'landAcquisitionDate',
            minWidth: 120,
            ...CellFormattingTypes.date,
          },
          {
            headerName: 'Team',
            field: 'team',
            minWidth: 100,
          },
          {
            headerName: 'Last Reported Date (Calender Date)',
            field: 'dateLastReported',
            minWidth: 150,
            ...CellFormattingTypes.date,
          },
          {
            headerName: 'Project Type',
            field: 'assetType',
            minWidth: 100,
            ...CellFormattingTypes.startCase,
          },
          {
            headerName: 'Development Stage',
            field: 'developmentStage',
            minWidth: 120,
            ...CellFormattingTypes.capitalize,
          },
          {
            headerName: 'Development Period',
            field: 'devStartDate',
            minWidth: 120,
            cellRenderer: ({ data }) => {
              const { devStartDate, devCompletionDate } = data || {}
              if (!devStartDate && !devCompletionDate) return null
              if (!devStartDate)
                return <span>{`Till ${devCompletionDate}`}</span>
              return `${devStartDate} - ${devCompletionDate}`
            },
          },
          {
            headerName: 'GFA (SqM)',
            field: 'gfaSqm',
            minWidth: 100,
            cellStyle: { justifyContent: 'flex-end' },
            ...CellFormattingTypes.number1Dp,
          },
          {
            headerName: 'NLA (SqM)',
            field: 'nlaSqm',
            minWidth: 100,
            cellStyle: { justifyContent: 'flex-end' },
            ...CellFormattingTypes.number1Dp,
          },
          {
            headerName: 'Design',
            field: 'warehouseDesign',
            minWidth: 200,
          },
          {
            headerName: 'Land Cost per GFA (psm)',
            field: 'landCostPsmGfa',
            minWidth: 120,
            cellStyle: { justifyContent: 'flex-end' },
            ...CellFormattingTypes.number,
          },
          {
            headerName: 'Construction Cost per GFA (psm)',
            field: 'constructionCostPsmGfa',
            minWidth: 130,
            cellStyle: { justifyContent: 'flex-end' },
            ...CellFormattingTypes.number,
          },
          {
            headerName: 'Development Yield',
            field: 'developmentYieldUw',
            minWidth: 100,
            cellStyle: { justifyContent: 'flex-end' },
            ...CellFormattingTypes.percentage1Dp,
          },
          {
            headerName: 'NER (psm pd)',
            field: 'nerDayUw',
            minWidth: 150,
            cellStyle: { justifyContent: 'flex-end' },
            headerTooltip: TOOLTIP,
            headerComponentParams: {
              menuIcon: <QuestionCircleFilled />,
            },
            ...CellFormattingTypes.formatRelativeNumber2Dp,
          },
          {
            headerName: 'Rent Growth',
            field: 'rentGrowthUw',
            minWidth: 110,
            cellStyle: { justifyContent: 'flex-end' },
            ...CellFormattingTypes.percentage1Dp,
          },
          {
            headerName: 'IRR',
            field: 'irrUw',
            minWidth: 110,
            cellStyle: { justifyContent: 'flex-end' },
            ...CellFormattingTypes.percentage1Dp,
          },
          {
            headerName: 'Exit Cap Rate',
            field: 'exitCapRateUw',
            minWidth: 110,
            cellStyle: { justifyContent: 'flex-end' },
            ...CellFormattingTypes.percentage1Dp,
          },
          {
            headerName: 'Passing NER (psm pd)',
            field: 'passingNerDay',
            minWidth: 120,
            cellStyle: { justifyContent: 'flex-end' },
            headerTooltip: TOOLTIP,
            headerComponentParams: {
              menuIcon: <QuestionCircleFilled />,
            },
            ...CellFormattingTypes.formatRelativeNumber2Dp,
          },
          {
            headerName: 'Market NER (psm pd)',
            field: 'marketNerDay',
            minWidth: 120,
            cellStyle: { justifyContent: 'flex-end' },
            headerTooltip: TOOLTIP,
            headerComponentParams: {
              menuIcon: <QuestionCircleFilled />,
            },
            ...CellFormattingTypes.formatRelativeNumber2Dp,
          },
          {
            headerName: 'Occupancy',
            field: 'currentOccupancy',
            minWidth: 120,
            cellStyle: { justifyContent: 'flex-end' },
            ...CellFormattingTypes.percentage1Dp,
          },
          {
            headerName: 'Key Tenants',
            field: 'keyTenants',
            minWidth: 100,
          },
          {
            headerName: 'Exit Cap Rate',
            field: 'exitCapRateActual',
            minWidth: 120,
            cellStyle: { justifyContent: 'flex-end' },
            ...CellFormattingTypes.percentage1Dp,
          },
        ],
      },
    ],
    []
  )

  const defaultColDef = useMemo(() => {
    return {
      wrapHeaderText: true,
      autoHeaderHeight: true,
      sortable: true,
      autoHeight: false,
    }
  }, [])

  return (
    <StyledAgGrid
      containerProps={{ height: '100%', width: '100%' }}
      defaultColDef={defaultColDef}
      columnDefs={columnDefs}
      sideBar={{ toolPanels: [SideBarConfig] }}
      rowData={items}
      onCellClicked={handleCellClicked}
      components={components}
      isError={isError}
      isLoading={isLoading}
      setupScrollbarPropsItems={[]}
      rowBuffer={10}
    />
  )
}

export default DirectoryTableDrawer
