import React, { ReactNode } from 'react'
import { Card, Typography, Stack, Box } from '@gic/battlefield-ui-pack'
import { BpdRadioGroup } from '@bpd/bpd-web/shared/ui'
import { CARD_VIEW_TYPE, CARD_VIEW_TYPE_OPTIONS } from '../constants'
import { useCardViewType } from '../hooks'

export interface PortfolioCardProps {
  title: string
  subtitle?: string
  slots: {
    chart?: ReactNode
    table?: ReactNode
  }
}
const PortfolioCard = ({ title, subtitle, slots }: PortfolioCardProps) => {
  const { type: cardType, toggleType: toggleCardType } = useCardViewType(
    CARD_VIEW_TYPE.CHART
  )
  const content = (
    <Stack spacing={2} sx={{ height: '100%', minHeight: 400 }}>
      {cardType === CARD_VIEW_TYPE.CHART ? slots.chart : slots.table}
    </Stack>
  )

  return (
    <Card
      stretch
      divider
      disableBorder
      disableBorderWidth
      title={
        <Typography variant="subtitle1" color="text.title">
          {title}
        </Typography>
      }
      subtitle={subtitle}
      typographyProps={{
        subtitle: {
          variant: 'body3',
        },
      }}
      actions={
        <Box width={120}>
          <BpdRadioGroup
            options={CARD_VIEW_TYPE_OPTIONS}
            optionType="button"
            buttonStyle="solid"
            value={cardType}
            onChange={toggleCardType}
          />
        </Box>
      }
    >
      {content}
    </Card>
  )
}

export default PortfolioCard
