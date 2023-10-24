import { FC, useMemo } from 'react'
import { ICellRendererParams, GridReadyEvent } from 'ag-grid-community'
import { Stack, Typography, Tag } from '@gic/battlefield-ui-pack'
import { ColumnDefs } from '@bpd/vendors/ag-grid'
import {
  useAppSelector,
  useAppDispatch,
  BLUEPRINT_ENDPOINTS,
} from '@bpd/bpd-web/shared/store'
import { BpdModal, BpdLink } from '@bpd/bpd-web/shared/ui'
import { formatDate } from '@bpd/utils/formatters'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { AgGrid } from '@bpd/vendors/ag-grid'
import { ExpertSelectors, ExpertActions } from '../data'

const StyledModal = withTheme(BpdModal)({
  maxWidth: '700px',
  height: '500px',
  width: 'auto !important',
  '&&& .ant-modal-body': {
    padding: '16px 24px 24px',
  },
  '&&& .ant-modal-close-x': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '&&& .ant-modal-content': {
    backgroundColor: 'background.modal',
  },
  '&&& .ant-modal-header': {
    backgroundColor: 'background.modal',
  },
})

const StyledAgGrid = withTheme(AgGrid)(({ theme }) => ({
  '& .ag-provider-cell': {
    borderLeft: `1px solid ${theme.palette.divider}`,
  },
}))

const DealModal: FC = () => {
  const dispatch = useAppDispatch()

  const isDealsModelOpen = useAppSelector(ExpertSelectors.getIsDealModalOpen)

  const hoveredExpert = useAppSelector(ExpertSelectors.getHoveredExpert)

  const columnDefs: ColumnDefs = useMemo(
    () => [
      {
        headerName: 'Name',
        field: 'name',
        cellRenderer: (params: ICellRendererParams) => {
          const { id, team } = params.data
          return (
            <Typography variant="body3">
              <BpdLink
                href={`${
                  BLUEPRINT_ENDPOINTS.BASE_URL
                }/${team}/deal-tracker/default/edit/deal/${id || '#'}`}
                target="_blank"
                title={params?.value}
              />
            </Typography>
          )
        },
      },
      {
        headerName: 'Status',
        field: 'status',
        maxWidth: 150,
      },
      {
        headerName: 'Date Added',
        field: 'vintageDt',
        cellRenderer: (params: ICellRendererParams) => (
          <Typography variant="body3">{formatDate(params?.value)}</Typography>
        ),
        maxWidth: 120,
      },
    ],
    [hoveredExpert]
  )

  const handleGridSizeChanged = (event: GridReadyEvent) => {
    event.api.setDomLayout('normal')
    event.api.sizeColumnsToFit()
  }

  const handleVisibility = () => {
    dispatch(ExpertActions.setIsDealModalOpen(false))
  }

  if (!isDealsModelOpen) {
    return null
  }

  return (
    <StyledModal
      visible
      title={
        <Stack>
          <Typography variant="subtitle1">{hoveredExpert?.name}</Typography>
          <Typography variant="body2" sx={{ color: 'null.main' }}>{`${
            hoveredExpert?.title || '-'
          } - ${hoveredExpert?.division || ''}`}</Typography>
        </Stack>
      }
      onCancel={handleVisibility}
      disableFooter
    >
      <Stack flexDirection={'row'} pb={2}>
        {hoveredExpert?.name && (
          <Tag color={'blue'}>
            <Typography variant="body2">{`Team: ${
              hoveredExpert?.viewBy || '-'
            }`}</Typography>
          </Tag>
        )}
        {hoveredExpert?.department && (
          <Tag color={'blue'}>
            <Typography variant="body2">{`Sector: ${
              hoveredExpert?.sector || '-'
            }`}</Typography>
          </Tag>
        )}
      </Stack>

      <StyledAgGrid
        containerProps={{ display: 'grid', minHeight: '300px' }}
        columnDefs={columnDefs}
        rowData={hoveredExpert?.deals || []}
        rowHeight={25}
        defaultColDef={{
          resizable: true,
        }}
        suppressRowHoverHighlight
        suppressMovableColumns
        onGridSizeChanged={handleGridSizeChanged}
      />
    </StyledModal>
  )
}

export default DealModal
