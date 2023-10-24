import { renderSlot, Slot } from '@bpd/ui/libs/react-slots'
import { FC, ReactNode } from 'react'
import {
  Stack,
  StackProps,
  withStyledTheme,
  Card,
  CardProps,
} from '@gic/battlefield-ui-pack'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdTypographyTitle, BpdSuspense } from '@bpd/bpd-web/shared/ui'
import { Directory } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { PerfectScrollbar } from '@bpd/vendors/perfect-scrollbar'
import { useInfiniteScroll } from '@bpd/ui/hooks'

export interface BaseDrawerProps<T = unknown> extends StackProps {
  error?: boolean
  loading?: boolean
  items: Directory[]
  title?: string
  disableHeader?: boolean
  renderHeaderBody?: Slot
  renderContentBody?: Slot
  renderItem?: (item: T) => ReactNode
}

const StyledContainer = withTheme(Stack)(({ sx, theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.common.white,
  ...sx,
}))

const StyledHeaderContainer: FC<CardProps> = withTheme(Card)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  position: 'sticky',
  top: 0,
  zIndex: 2,
  padding: theme.spacing(2),
  border: 0,
  borderBottom: `1px solid ${theme.palette.null.border}`,
}))

const StyledHeader = withTheme(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const StyledHeaderBody = withStyledTheme(Stack)({
  paddingTop: 0,
})

const StyledListContainer = withTheme(Stack)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px',
  padding: '10px'
})

const DEFAULT_STEP = 18

const BaseDrawer = <T,>(props: BaseDrawerProps) => {
  const {
    items = [],
    title,
    error,
    disableHeader,
    loading,
    renderHeaderBody,
    renderContentBody,
    renderItem,
    ...rest
  } = props

  const [cursor, setCursor] = useInfiniteScroll({
    resetOn: [JSON.stringify(items)],
  })

  const handleReachEnd = () => {
    if (cursor + DEFAULT_STEP < items.length) setCursor(cursor + DEFAULT_STEP)
  }

  return (
    <StyledContainer {...rest}>
      {renderHeaderBody ? (
        <StyledHeaderContainer disableBodyPadding>
          <StyledHeader>
            {title && <BpdTypographyTitle>{title}</BpdTypographyTitle>}
          </StyledHeader>
          {renderSlot(renderHeaderBody, { wrapper: StyledHeaderBody })}
        </StyledHeaderContainer>
      ) : null}

      {renderSlot(renderContentBody)}
      {renderItem ? (
        <BpdSuspense error={error} loading={loading}>
          <PerfectScrollbar onReachEnd={handleReachEnd}>
            <StyledListContainer>
              {items
                ?.slice(0, cursor + DEFAULT_STEP)
                ?.map((item) => renderItem(item))}
            </StyledListContainer>
          </PerfectScrollbar>
        </BpdSuspense>
      ) : null}
    </StyledContainer>
  )
}

export default BaseDrawer
