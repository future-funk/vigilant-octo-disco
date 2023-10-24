import { AgGridReact } from 'ag-grid-react'
import { FC, useMemo, useRef } from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import { DEFAULT_COLUMN_DEFS } from '@bpd/vendors/ag-grid'
import {
  BpdLink,
  BpdRadioGroup,
  BpdVerticalDivider,
} from '@bpd/bpd-web/shared/ui'
import { useRadioState } from '@bpd/ui/hooks'
import { Card, Stack } from '@gic/battlefield-ui-pack'
import PortfolioTitle from './PortfolioTitle'
import { BREAKDOWN_TYPE, BREAKDOWN_TYPE_OPTIONS } from '../constants'
import { useGetPortfolioBreakdown } from '../hooks'
import { SelectedParams } from '../types'
import { getPortfolioBreakdownColDef } from '../utils'
import StyledAgGrid from './StyledAgGrid'

export interface PortfolioBreakdownGridProps {
  activeFy: string
  selectedParams: SelectedParams
}

const ROW_HEIGHT = 28

const PortfolioBreakdownGrid: FC<PortfolioBreakdownGridProps> = (props) => {
  const { activeFy, selectedParams } = props

  const { value: activeAttribute, onChange: onChangeActiveAttribute } =
    useRadioState(BREAKDOWN_TYPE.COUNTRY)

  const { data, isFetching, isError, isLoading } = useGetPortfolioBreakdown({
    strategy: selectedParams.strategy,
    projectCurrency: selectedParams.project_currency,
    selectedParameter: activeAttribute,
  })

  const gridRef = useRef<AgGridReact>()

  const columnDefs = useMemo(
    () => getPortfolioBreakdownColDef(activeFy, activeAttribute),
    [activeFy, activeAttribute]
  )

  const handleClickExport = () => {
    if (gridRef) {
      gridRef.current.api.exportDataAsExcel({
        fileName: `IRR-portfolio-breakdown`,
      })
    }
  }

  return (
    <Card
      sx={{
        '& .battlefield-card-header > .MuiBox-root': {
          alignItems: 'center',
        },
      }}
      title={
        <PortfolioTitle
          selectedParams={selectedParams}
          label="Portfolio Breakdown"
        />
      }
      stretch
      size="small"
      disableBorder
      leftActions={
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <BpdRadioGroup
            options={BREAKDOWN_TYPE_OPTIONS}
            optionType="button"
            buttonStyle="solid"
            value={activeAttribute}
            onChange={onChangeActiveAttribute}
          />
          <BpdVerticalDivider />

          <BpdLink
            title="Download"
            startIcon={<DownloadOutlined />}
            onClick={handleClickExport}
            sx={{ height: 28 }}
          />
        </Stack>
      }
    >
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
        }}
        isFetching={isFetching}
        isError={isError}
        isLoading={isLoading}
        rowData={data}
        rowHeight={ROW_HEIGHT}
        setupScrollbarPropsItems={[]}
      />
    </Card>
  )
}

export default PortfolioBreakdownGrid
