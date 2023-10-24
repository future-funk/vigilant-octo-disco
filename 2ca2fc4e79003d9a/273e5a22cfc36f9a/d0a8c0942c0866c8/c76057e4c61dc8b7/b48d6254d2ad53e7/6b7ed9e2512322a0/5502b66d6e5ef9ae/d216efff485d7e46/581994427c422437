import { AgGridProps, utils as AgGridUtils } from '@bpd/vendors/ag-grid'
import { CellClassParams } from 'ag-grid-community'

const { CellFormattingTypes } = AgGridUtils

const cellClassRenderer = (params: CellClassParams) => {
  const color = params.value <= 0 ? '#f56565' : '#4299e1'
  return { justifyContent: 'flex-end', color }
}

const useGetTxnGridColDef = (props: {
  ytdHeader: string
  lastHeader: string
}): AgGridProps['columnDefs'] => {
  const { lastHeader, ytdHeader } = props

  return [
    {
      headerName: '',
      children: [{ field: 'dimension', headerName: '' }],
    },
    {
      headerName: lastHeader,
      children: [
        {
          field: 'lastPriceUsd',
          headerName: 'Vol ($M)',
          ...CellFormattingTypes.millionWithoutUnit,
          cellStyle: { justifyContent: 'flex-end' },
          maxWidth: 100,
        },
        {
          field: 'lastWeightPercent',
          headerName: '% Total',
          ...CellFormattingTypes.percentage1Dp,
          cellStyle: { justifyContent: 'flex-end' },
          maxWidth: 80,
        },
        {
          field: 'lastPriceYoyPercent',
          headerName: 'YoY, %',
          ...CellFormattingTypes.percentage1Dp,
          cellStyle: cellClassRenderer,
          maxWidth: 80,
        },
      ],
    },
    {
      headerName: ytdHeader,
      children: [
        {
          field: 'ytdPriceUsd',
          headerName: 'Vol ($M)',
          ...CellFormattingTypes.millionWithoutUnit,
          cellStyle: {
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(190, 227, 248, 0.2)',
          },
          maxWidth: 100,
        },
        {
          field: 'ytdPriceYoyPercent',
          headerName: 'YoY, %',
          ...CellFormattingTypes.percentage1Dp,
          cellStyle: (params) => ({
            ...cellClassRenderer(params),
            backgroundColor: 'rgba(190, 227, 248, 0.2)',
          }),
          maxWidth: 80,
        },
      ],
    },
  ]
}
export default useGetTxnGridColDef
