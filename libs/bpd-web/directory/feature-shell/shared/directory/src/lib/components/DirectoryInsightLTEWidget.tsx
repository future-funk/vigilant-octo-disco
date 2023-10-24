import { FC } from 'react'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { formatPercent, formatCurrency } from '@bpd/utils/formatters'
import { BpdSuspense } from '@bpd/bpd-web/shared/ui'

type displayType = 'currency' | 'percent'

interface DirectoryInsightLTEWidgetProps {
  title: string
  value: number
  currency?: string
  dealsCount: number
  type: displayType
  loading?: boolean
  error?: boolean
  sx?: any
}

const WidgetWrapper = withTheme(Stack)({
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 6,
})

const DirectoryInsightLTEWidget: FC<DirectoryInsightLTEWidgetProps> = (props) => {
  const { title, value, currency, dealsCount, type, loading, error, sx } = props

  return (
    <WidgetWrapper {...sx}>
      <BpdSuspense loading={loading} empty={ !loading && !value } error={error}> 
      <Typography
        color="text.caption"
        sx={{ fontSize: '12px', lineHeight: '14px' }}
      >
        {title}
      </Typography>
      <Typography variant="h3">
        {type === 'currency'
          ? formatCurrency(value, currency || '')
          : formatPercent(value || 0)}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 400 }}>
        {`based on ${dealsCount || 0} deals`}
      </Typography>
      </BpdSuspense> 
    </WidgetWrapper>
  )
}

export default DirectoryInsightLTEWidget
