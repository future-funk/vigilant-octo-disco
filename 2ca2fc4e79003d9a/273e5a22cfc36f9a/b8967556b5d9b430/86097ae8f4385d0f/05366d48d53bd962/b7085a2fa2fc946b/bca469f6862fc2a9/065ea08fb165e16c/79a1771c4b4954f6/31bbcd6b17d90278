import { AgGridReact } from 'ag-grid-react'
import { FC, useMemo, useRef } from 'react'
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons'
import { BpdLink, BpdVerticalDivider } from '@bpd/bpd-web/shared/ui'
import { getFiscalYearDates } from '@bpd/utils/fiscal-year'
import { DEFAULT_COLUMN_DEFS } from '@bpd/vendors/ag-grid'
import { useToggle } from '@bpd/ui/hooks'
import { Card, Stack, Typography } from '@gic/battlefield-ui-pack'
import AtlasCfClassification from './AtlasCfClassification'
import CashflowUploadModal from './CashflowUploadModal'
import RecategorizedUploadModal from './RecategorizedUploadModal'
import { useGetMvAndCfAccessFlags } from '../../hooks'
import { getCashFlowColDef } from '../../utils'
import StyledAgGrid from '../StyledAgGrid'

interface CashflowGridProps {
  fiscalYear: string
  team: string
  data: any
  projId: string
  activeCurrency: string
}

const CashflowGrid: FC<CashflowGridProps> = (props) => {
  const { data, activeCurrency, projId, team, fiscalYear } = props

  const [isOpenRecategorizedModal, toggleIsOpenRecategorizedModal] =
    useToggle(false)
  const [isOpenCfModal, toggleIsOpenCfModal] = useToggle(false)
  const gridRef = useRef<AgGridReact>()

  const { doShowCfBtn } = useGetMvAndCfAccessFlags()

  const ccy = useMemo(
    () => (activeCurrency === 'USD' ? '$' : 'LCY'),
    [activeCurrency]
  )
  const columnDefs = useMemo(() => getCashFlowColDef(ccy), [ccy])

  const handleClickExport = () => {
    if (gridRef) {
      gridRef.current?.api.exportDataAsExcel({
        fileName: `Cash Flows`,
      })
    }
  }

  const { previousFy } = getFiscalYearDates(fiscalYear, 'YY')

  return (
    <Stack mt={2}>
      <Stack
        direction="row"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" color="text.subHeading">
          CASH FLOWS
        </Typography>

        <Stack direction="row" spacing={2} alignItems={'center'}>
          <BpdLink
            title="Recategorize ATLAS CFs"
            startIcon={<UploadOutlined />}
            onClick={() => toggleIsOpenRecategorizedModal()}
          />
          {doShowCfBtn && <BpdVerticalDivider />}
          {doShowCfBtn && (
            <BpdLink
              title="Upload CF"
              startIcon={<UploadOutlined />}
              onClick={() => toggleIsOpenCfModal()}
            />
          )}

          <BpdVerticalDivider />

          <AtlasCfClassification />
          <BpdVerticalDivider />

          <BpdLink
            title="Download Data"
            startIcon={<DownloadOutlined />}
            onClick={handleClickExport}
            sx={{ height: 28 }}
          />
        </Stack>
      </Stack>

      <Card
        wrapperSx={{ marginTop: 2 }}
        title={<Typography variant="subtitle1">Mar-{previousFy}</Typography>}
        stretch
        divider
        size="small"
      >
        <Stack>
          <StyledAgGrid
            ref={gridRef}
            columnDefs={columnDefs}
            containerProps={{
              bordered: true,
              width: '100%',
              height: 300,
              minHeight: 'unset',
            }}
            defaultColDef={{
              ...DEFAULT_COLUMN_DEFS,
              wrapHeaderText: true,
              autoHeaderHeight: true,
              flex: 0,
            }}
            rowData={data}
            rowHeight={28}
            headerHeight={40}
          />
        </Stack>

        {isOpenRecategorizedModal && (
          <RecategorizedUploadModal
            {...{
              onCloseModal: toggleIsOpenRecategorizedModal,
              fiscalYear,
              team,
              projId,
            }}
          />
        )}

        {isOpenCfModal && (
          <CashflowUploadModal
            {...{
              onCloseModal: toggleIsOpenCfModal,
              fiscalYear,
              team,
              projId,
            }}
          />
        )}
      </Card>
    </Stack>
  )
}
export default CashflowGrid
