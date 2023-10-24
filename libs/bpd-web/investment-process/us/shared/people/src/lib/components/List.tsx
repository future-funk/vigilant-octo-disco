import { useAppPalette, withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdSuspense, BpdSuspenseStates } from '@bpd/bpd-web/shared/ui'
import { useInfiniteScroll } from '@bpd/ui/hooks'
import { PerfectScrollbar } from '@bpd/vendors/perfect-scrollbar'
import { Stack, StackProps } from '@gic/battlefield-ui-pack'
import { get, map } from 'lodash'
import { ReactNode } from 'react'

export interface ListPaginationProps {
  size?: number
}

export interface ListProps<T> extends BpdSuspenseStates {
  active?: (item: T) => boolean
  data: T[]
  key: string
  onClick?: (item: T) => void
  renderItem: (item: T) => ReactNode
  sx?: StackProps['sx']
  pagination?: ListPaginationProps
}

const StyledItem = withTheme(Stack)(({ sx, theme }) => ({
  bgcolor: theme.palette.common.white,
  borderBottom: '3px solid',
  borderColor: theme.palette.null.border,
  borderLeftWidth: theme.spacing(0.5),
  borderLeftColor: 'transparent',
  ...sx,
}))

const List = <T,>(props: ListProps<T>) => {
  const {
    active,
    data,
    error,
    loading,
    key,
    onClick,
    renderItem,
    sx = {},
    pagination,
    ...rest
  } = props

  const { size = 20 } = pagination || {}

  const palette = useAppPalette()

  const [cursor, setCursor] = useInfiniteScroll({
    resetOn: map(data, (item: Record<string, unknown>) =>
      item?.[key]?.toString()
    ),
  })

  const handleReachEnd = () => {
    if (cursor + size < data?.length) {
      setCursor(cursor + size)
    }
  }

  return (
    <Stack height="100%" {...rest}>
      <BpdSuspense error={error} empty={data.length <= 0} loading={loading}>
        <PerfectScrollbar onReachEnd={handleReachEnd}>
          {map(data.slice(0, cursor + size), (item, index) => (
            <StyledItem
              key={(get(item, key) ?? index).toString()}
              onClick={() => onClick?.(item)}
              sx={{
                ...(active?.(item)
                  ? {
                      backgroundColor: palette.primary.hoverAlt,
                      borderLeftColor: palette.primary.main,
                    }
                  : {}),
                ...(onClick ? { cursor: 'pointer' } : {}),
                ...sx,
              }}
            >
              {renderItem(item)}
            </StyledItem>
          ))}
        </PerfectScrollbar>
      </BpdSuspense>
    </Stack>
  )
}

export default List
