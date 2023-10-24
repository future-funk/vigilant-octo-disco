import { get } from 'lodash'
import { RadioChangeEvent } from 'antd'
import { Stack } from '@gic/battlefield-ui-pack'
import { setViewState } from '@carto/react-redux'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'
import { ESGPortalRequestPayload } from '@bpd/esg-portal/shared/data-access'
import { BpdCardWithThumbnail } from '@bpd/bpd-web/shared/ui'
import { useGetCardProps } from '../hooks'
import { EsgPortalActions } from '../data'

const StyledContainer = withTheme(Stack)({
  cursor: 'pointer',
  flexGrow: 0,
  flexShrink: 0,
})

export interface CardProps {
  item: ESGPortalRequestPayload
  selectedRecordId?: number
}

const Card = (props: CardProps) => {
  const { item, selectedRecordId } = props

  const dispatch = useAppDispatch()

  const handleCardClick = (id: number, event: RadioChangeEvent) => {
    dispatch(EsgPortalActions.setSelectedCaseStudyId(id))
    event.stopPropagation()
  }

  const handleClick = (location: ESGPortalRequestPayload) => {
    dispatch(
      setViewState({ latitude: location?.lat, longitude: location?.lng })
    )
    dispatch(EsgPortalActions.setSelectedRecord(location))
  }

  const { config } = useGetCardProps({
    record: item,
    onHandleClick: handleCardClick,
  })

  return (
    <StyledContainer
      onClick={() => handleClick(item)}
      sx={{ width: { xxl: '238px', xl: '338px', lg: '375px' } }}
    >
      <BpdCardWithThumbnail
        selectedRecordId={selectedRecordId}
        {...get(config, 'default')}
      />
    </StyledContainer>
  )
}

export default Card
