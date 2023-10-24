import { FC, useMemo } from 'react'
import { AgGridProps, AgGrid } from '@bpd/vendors/ag-grid'
import { MsaExposureCartoQueries } from '@bpd/msa-exposure/shared/data-access'
import { useGetMsaAssetsArgs } from '../../../hooks'
import geMsaExposureTableConfig from './geMsaExposureTableConfig'
import { some } from 'lodash'

const columnDefs: AgGridProps['columnDefs'] = geMsaExposureTableConfig()

const PortfolioCardMsaExposureTable: FC = () => {
  const params = useGetMsaAssetsArgs()

  const {
    data: rowData,
    isError,
    isFetching,
  } = MsaExposureCartoQueries.useGetTopMsaAssets(
    {
      ...params,
    },
    { skip: some([!params?.years, !params?.top, !params?.sectors]) }
  )

  const defaultColDef = useMemo(() => {
    return {
      resizable: true,
    }
  }, [])
  return (
    <AgGrid
      containerProps={{ bordered: true, minHeight: '98%', height: '98%' }}
      rowData={rowData}
      columnDefs={columnDefs}
      defaultColDef={defaultColDef}
      suppressRowTransform={true}
      isLoading={isFetching}
      isError={isError}
    />
  )
}

export default PortfolioCardMsaExposureTable
