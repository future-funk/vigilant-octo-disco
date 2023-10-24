import { Card, Stack } from '@gic/battlefield-ui-pack'
import { FC, useCallback, useMemo, useState } from 'react'
import { useGrid } from '@bpd/vendors/ag-grid'
import { chain, filter } from 'lodash'
import CompanyGrid from './CompanyGrid'
import CompanyMetrics from './CompanyMetrics'
import TopBuyersSellersActionBar from './TopBuyersSellersActionBar'
import { BUYERS_SELLERS, DEFAULT_COMPANY } from '../constants'
import { useGetBuyersSellers } from '../hooks'
import { CompanyParams } from '../types'

export interface TopBuyersSellersProps {}

const TopBuyersSellers: FC<TopBuyersSellersProps> = () => {
  const { ref } = useGrid()

  const [buyersSellersType, setBuyersSellersType] = useState<string>(
    BUYERS_SELLERS.TOP_NET_BUYERS
  )

  const handleChangeBuyersSellers = (key: string, val: string) => {
    setBuyersSellersType(val)
  }

  const [{ selectedCompanyCountries, timeframe }, setCompanyParams] =
    useState<CompanyParams>({
      selectedCompanyCountries: [],
      timeframe: DEFAULT_COMPANY.timeframe,
    })

  const handleClickExport = useCallback(() => {
    if (ref) {
      ref.api.exportDataAsExcel({
        fileName: `market-transactions-${buyersSellersType}`,
      })
    }
  }, [ref, buyersSellersType])

  const { data, isFetching, isError, isLoading } = useGetBuyersSellers({
    buyersSellersType,
    timeframe,
  })

  const companyCountries = useMemo(() => {
    return chain(data).map('companyCountry').uniq().sort().value()
  }, [data])

  const filteredRows = useMemo(() => {
    return filter(data, ({ companyCountry }) =>
      selectedCompanyCountries?.includes(companyCountry)
    )
  }, [data, selectedCompanyCountries])

  return (
    <Card
      title="Buyers / Sellers"
      stretch
      divider
      size="small"
      disableBorder
      leftActions={
        <TopBuyersSellersActionBar
          {...{
            buyersSellersType,
            handleChangeBuyersSellers,
            handleClickExport,
          }}
        />
      }
    >
      <Stack spacing={1}>
        <CompanyMetrics {...{ companyCountries, setCompanyParams }} />
        <CompanyGrid
          {...{
            data: filteredRows,
            isFetching,
            isError,
            isLoading,
          }}
        />
      </Stack>
    </Card>
  )
}

export default TopBuyersSellers
