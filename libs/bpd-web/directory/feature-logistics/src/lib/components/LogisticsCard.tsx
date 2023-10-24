import { get, filter, includes } from 'lodash'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'
import { Stack } from '@gic/battlefield-ui-pack'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { MapActions } from '@bpd/vendors/carto'
import { BpdCardWithThumbnail } from '@bpd/bpd-web/shared/ui'
import { useGetLogisticsCardProps } from '../hooks'
import { getPopupProps } from '../utils'

const StyledContainer = withTheme(Stack)({
  cursor: 'pointer',
  flexGrow: 0,
  flexShrink: 0,
})

const LogisticsCard = (props) => {
  const { item, checkedList, setCheckedList } = props

  const dispatch = useAppDispatch()

  const handleCardClick = () => {
    if (!item) return
    dispatch(
      MapActions.setTooltip({
        ...getPopupProps(item),
        latitude: item.lat,
        longitude: item.lng,
      })
    )
  }

  const handleCardSelect = (e) => {
    const { name } = e?.target || {}

    setCheckedList(
      includes(checkedList, name)
        ? filter(checkedList, (item) => item !== name)
        : [...checkedList, name]
    )
  }

  const { config } = useGetLogisticsCardProps(
    item,
    checkedList,
    handleCardSelect,
    (e) => e.stopPropagation()
  )

  return (
    <StyledContainer
      onClick={handleCardClick}
      sx={{ width: { xxl: '305px', xl: '338px', lg: '375px' } }}
    >
      <BpdCardWithThumbnail {...get(config, 'default')?.logisticCardProps} />
    </StyledContainer>
  )
}

export default LogisticsCard
