import { FC, useMemo } from 'react'
import { AgGridProps, AgGrid } from '@bpd/vendors/ag-grid'
import {
  MsaAsset,
  MsaExposureCartoQueries,
} from '@bpd/msa-exposure/shared/data-access'
import { omit, chain, find, some } from 'lodash'
import { useGetMsaAssetsArgs } from '../../../hooks'
import getSectorExposureTableConfig from './getSectorExposureTableConfig'

const columnDefs: AgGridProps['columnDefs'] = getSectorExposureTableConfig()

const PortfolioCardSectorExposureTable: FC = () => {
  const params = useGetMsaAssetsArgs()

  const {
    data: rowData,
    isError,
    isFetching,
  } = MsaExposureCartoQueries.useGetMsaAssets(
    {
      ...omit(params, 'top'),
    },
    { skip: some([!params?.years, !params?.sectors]) }
  )

  const mergedRowData = useMemo(
    () =>
      chain(rowData)
        .groupBy('sector')
        .map((sectorData, sector) => {
          const primaryMrktRow = find(sectorData, {
            type: 'Primary Market',
          }) as MsaAsset
          const topMsaRow = find(sectorData, { type: 'Top 25 MSA' }) as MsaAsset
          return {
            sector: sector,
            primaryMarketAssetNmvUsd: primaryMrktRow.assetNmvUsd,
            top25MsaAssetNmvUsd: topMsaRow.assetNmvUsd,
            primaryMarketPercent: primaryMrktRow.percent,
            top25MsaPercent: topMsaRow.percent,
          }
        })
        .value(),
    [rowData]
  )

  const defaultColDef = useMemo(() => {
    return {
      resizable: true,
    }
  }, [])
  return (
    <AgGrid
      containerProps={{ bordered: true, minHeight: '98%', height: '98%' }}
      rowData={mergedRowData}
      columnDefs={columnDefs}
      defaultColDef={defaultColDef}
      suppressRowTransform={true}
      isLoading={isFetching}
      isError={isError}
    />
  )
}

export default PortfolioCardSectorExposureTable
