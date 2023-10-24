import { BpdSuspense } from '@bpd/bpd-web/shared/ui'
import {
  GetCompanyDecompByDimensionResult,
  GetCompanyDecompByNetFlowResult,
} from '@bpd/market-transactions/shared/data-access'
import { Card, Stack, Typography } from '@gic/battlefield-ui-pack'
import { orderBy, upperCase } from 'lodash'
import { FC, useMemo } from 'react'
import { VIEW_TYPE_MAP } from '../../constants'
import { useGetDecomposition } from '../../hooks'
import { getIsNetFlowView } from '../../utils'
import DecompGrid from './DecompGrid'
import PieChart from './PieChart'
import Waterfall from './WaterfallChart'

export interface DecomByDimensionProps {
  viewType: string
  dimension: string
  timeframe: number
  companyName: string
  companyCountry: string
}

type ResultType =
  | GetCompanyDecompByNetFlowResult
  | GetCompanyDecompByDimensionResult

const DecomByDimension: FC<DecomByDimensionProps> = (props) => {
  const { dimension, viewType, timeframe, companyName, companyCountry } = props

  const isNetFlowView = getIsNetFlowView(viewType)

  const { data, isFetching, isError, isLoading } = useGetDecomposition({
    dimension: upperCase(dimension),
    companyName,
    companyCountry,
    timeframe,
    isNetFlowView,
  })

  const sortedItems = useMemo<ResultType>(() => {
    const orderedItems = orderBy(
      data,
      VIEW_TYPE_MAP[viewType].priceField,
      'desc'
    )
    if (isNetFlowView) {
      return [
        ...orderedItems.filter((item) => item.dimension !== 'Others'),
        ...orderedItems.filter((item) => item.dimension === 'Others'),
      ]
    }
    return orderedItems
  }, [data, viewType])

  return (
    <Card
      title={
        <Typography variant="subtitle1">
          Decomposition by {dimension}
        </Typography>
      }
      size="small"
      divider
      disableBorder
    >
      <BpdSuspense error={isError} loading={isFetching || isLoading}>
        <Stack
          direction="row"
          justifyContent={'space-between'}
          alignItems={'flex-start'}
        >
          {isNetFlowView ? (
            <Waterfall
              {...{
                items: sortedItems as GetCompanyDecompByNetFlowResult,
              }}
            />
          ) : (
            <PieChart
              {...{
                items: sortedItems as GetCompanyDecompByDimensionResult,
                viewType,
              }}
            />
          )}

          <DecompGrid {...{ rowData: data, dimension, viewType }} />
        </Stack>
      </BpdSuspense>
    </Card>
  )
}

export default DecomByDimension
