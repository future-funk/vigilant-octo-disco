import { FC, useMemo } from 'react'
import { Stack, Tag, Typography } from '@gic/battlefield-ui-pack'
import { formatRelativeNumber, formatNumber } from '@bpd/utils/formatters'
import { map } from 'lodash'
import { Company } from '@bpd/market-transactions/shared/data-access'

interface SubTagsProps {
  selectedRow: Company
}

const SubTags: FC<SubTagsProps> = (props) => {
  const { selectedRow } = props
  const {
    buyTotalPriceUsd,
    sellTotalPriceUsd,
    buyTxnCount,
    sellTxnCount,
    netTotalPriceUsd,
    netTxnCount,
  } = selectedRow

  const fieldMapping = useMemo(
    () => ({
      total: [
        {
          label: 'Total (USD)',
          value: formatRelativeNumber(buyTotalPriceUsd + sellTotalPriceUsd),
          tooltip: 'Bought + Sold',
        },
        {
          label: '# Deal',
          value: formatNumber(buyTxnCount + sellTxnCount),
        },
      ],
      buy_total: [
        {
          label: 'Buyer Total (USD)',
          value: formatRelativeNumber(buyTotalPriceUsd),
        },
        {
          label: '# Deal',
          value: formatNumber(buyTxnCount),
        },
      ],
      sell_total: [
        {
          label: 'Seller Total (USD)',
          value: formatRelativeNumber(sellTotalPriceUsd),
        },
        {
          label: '# Deal',
          value: formatNumber(sellTxnCount),
        },
      ],
      net_total: [
        {
          label: 'Net Total (USD)',
          value: formatRelativeNumber(netTotalPriceUsd),
          tooltip: 'Bought - Sold',
        },
        {
          label: '# Deal',
          value: formatNumber(netTxnCount),
        },
      ],
    }),
    [selectedRow]
  )

  return (
    <Stack direction="row" gap={3}>
      {Object.entries(fieldMapping).map(([key, items]) => (
        <Tag color="blue" key={key} sx={{ p: 0.2, minWidth: 160 }}>
          {map(
            items,
            (item: { label: string; value: string; tooltip?: string }) => (
              <Stack
                key={`${key}-${item.label}`}
                title={item.tooltip}
                justifyContent={'flex-end'}
                direction="row"
                alignItems={'center'}
                gap={0.5}
                px={0.5}
              >
                <Typography variant="body3">{item.label} :</Typography>
                <Typography
                  variant="body3"
                  sx={{ minWidth: 40, textAlign: 'right' }}
                >
                  {item.value}
                </Typography>
              </Stack>
            )
          )}
        </Tag>
      ))}
    </Stack>
  )
}

export default SubTags
