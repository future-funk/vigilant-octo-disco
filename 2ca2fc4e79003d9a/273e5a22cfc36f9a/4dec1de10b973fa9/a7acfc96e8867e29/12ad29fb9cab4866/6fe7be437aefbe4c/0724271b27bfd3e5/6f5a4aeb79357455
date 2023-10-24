import { FC } from 'react'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { useAppSpacing, withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdSuspense } from '@bpd/bpd-web/shared/ui'

const WidgetWrapper = withTheme(Stack)(({ theme }) => ({
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 5,
  border: `1px solid ${theme.palette.null.border}`,
  padding: 10,
  justifyContent: 'space-around',
}))

interface LogisticsAnalyticsProps {
  title: string
  value: number | string
  loading?: boolean
  error?: boolean
}

const LogisticsAnalyticsWidget: FC<LogisticsAnalyticsProps> = (props) => {
  const spacing = useAppSpacing()

  const { title, value, loading, error } = props
  return (
    <WidgetWrapper>
      <BpdSuspense loading={loading} empty={!loading && !value} error={error}>
        <Typography
          color="text.caption"
          sx={{
            fontSize: spacing(1.5),
            lineHeight: spacing(1.75),
            wordSpacing: { xl: '100vw', xxl: 'normal' },
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>
        <Typography variant="h4" sx={{ width: '100%', textAlign: 'center' }}>
          {value}
        </Typography>
      </BpdSuspense>
    </WidgetWrapper>
  )
}

export default LogisticsAnalyticsWidget
