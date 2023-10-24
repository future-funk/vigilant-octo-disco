import { useGrid } from '@bpd/vendors/ag-grid'
import { Card, Stack } from '@gic/battlefield-ui-pack'
import { chain, filter } from 'lodash'
import { FC, useCallback, useMemo, useState } from 'react'
import { DEFAULT_COMPANY } from '../constants'
import { useGetTopCompanies } from '../hooks'
import { CompanyParams } from '../types'
import CompanyGrid from './CompanyGrid'
import CompanyMetrics from './CompanyMetrics'
import TopCompaniesActionBar from './TopCompaniesActionBar'

export interface TopCompaniesProps {}

const TopCompanies: FC<TopCompaniesProps> = () => {
  const { ref } = useGrid()

  const [companySearch, setCompanySearch] = useState<string>('')

  const handleCompanySearch = (val: string) => {
    setCompanySearch(val)
  }

  const [{ selectedCompanyCountries, timeframe }, setCompanyParams] =
    useState<CompanyParams>({
      selectedCompanyCountries: [],
      timeframe: DEFAULT_COMPANY.timeframe,
    })

  const handleClickExport = useCallback(() => {
    if (ref) {
      ref.api.exportDataAsExcel({
        fileName: `market-transactions-company`,
      })
    }
  }, [ref])

  const { data, isFetching, isError, isLoading } = useGetTopCompanies({
    timeframe,
    search: companySearch,
  })

  const companyCountries = useMemo(() => {
    return chain(data).map('companyCountry').uniq().sort().value()
  }, [data])

  const filteredRows = useMemo(() => {
    return filter(data, ({ companyName, companyCountry }) => {
      const hasCountry = selectedCompanyCountries?.includes(companyCountry)
      return (
        (!companySearch ||
          companyName.toLowerCase().includes(companySearch.toLowerCase())) &&
        hasCountry
      )
    })
  }, [data, companySearch, selectedCompanyCountries])

  return (
    <Card
      title="Company"
      stretch
      divider
      size="small"
      disableBorder
      leftActions={
        <TopCompaniesActionBar
          {...{
            handleCompanySearch,
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

export default TopCompanies
