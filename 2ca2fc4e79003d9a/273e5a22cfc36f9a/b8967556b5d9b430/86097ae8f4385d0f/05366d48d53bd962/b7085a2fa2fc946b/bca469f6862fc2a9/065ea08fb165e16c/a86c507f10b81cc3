import { FC, useEffect, useState, useMemo } from 'react'
import { Stack } from '@gic/battlefield-ui-pack'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { PerfectScrollbar } from '@bpd/vendors/perfect-scrollbar'
import PortfolioBreakdownGrid from './PortfolioBreakdownGrid'
import PortfolioSummaryGrid from './PortfolioSummaryGrid'
import { MvIrrSelectors } from '../data'

export interface PortfolioProps {}

const Portfolio: FC<PortfolioProps> = () => {
  const [selectedParams, setSelectedParams] = useState({
    strategy: 'All',
    project_currency: 'All',
  })

  const { currency, fiscalYear, activeProjCcy } = useAppSelector(
    MvIrrSelectors.getFilters
  )

  const isLocalCurrency = useMemo(() => currency !== 'USD', [currency])

  useEffect(() => {
    setSelectedParams({
      strategy: 'All',
      project_currency: activeProjCcy || 'All',
    })
  }, [activeProjCcy])

  return (
    <Stack flex={1} height={'100%'} overflow={'auto'}>
      <PerfectScrollbar>
        <Stack flex={1} height={'100%'}>
          <PortfolioSummaryGrid
            {...{
              activeFy: fiscalYear,
              isLocalCurrency,
              setSelectedParams,
            }}
          />

          <Stack minHeight={345} height={'auto'}>
            <PortfolioBreakdownGrid
              {...{
                activeFy: fiscalYear,
                selectedParams,
              }}
            />
          </Stack>
        </Stack>
      </PerfectScrollbar>
    </Stack>
  )
}

export default Portfolio
