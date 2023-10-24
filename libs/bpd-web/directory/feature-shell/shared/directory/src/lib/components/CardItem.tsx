import {
  Directory,
  MARKET,
} from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Stack } from '@gic/battlefield-ui-pack'
import { FC } from 'react'
import { get, lowerCase } from 'lodash'
import { BpdCardWithThumbnail } from '@bpd/bpd-web/shared/ui'
import { MapActions } from '@bpd/vendors/carto'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'
import { useGetDirectoryCardProps } from '../hooks/useGetDirectoryCardProps'
import { DirectoryActions } from '../data'

import { getPopupProps } from '../utils/getPopupProps'

export interface CardItemProps {
  item: Directory
  team: string
}

const StyledContainer = withTheme(Stack)({
  cursor: 'pointer',
  flexGrow: 0,
  flexShrink: 0,
  // flexBasis: '300px'
})

const CardItem: FC<CardItemProps> = (props) => {
  const dispatch = useAppDispatch()
  const { item, team } = props

  const { config } = useGetDirectoryCardProps({
    item,
  })

  const handleMouseEnter = (item: Directory) => {
    if (!item) return
    dispatch(
      MapActions.setTooltip({
        ...getPopupProps({ item, team }),
        latitude: item.lat,
        longitude: item.lng,
        hideCloseButton: true
      })
    )
  }

  const handleMouseLeave = () => {
    dispatch(MapActions.setTooltip(null))
  }

  const handleOnClick = (item: Directory) => {
    dispatch(DirectoryActions.setSelectedDirectory(item))
  }

  return (
    <StyledContainer
      onMouseEnter={() => handleMouseEnter(item)}
      onMouseLeave={() => handleMouseLeave()}
      onClick={() => handleOnClick(item)}
      sx={{ width: { xxl: '305px', xl: '338px', lg: '375px' } }}
    >
      <BpdCardWithThumbnail
        key={`directory-card-item-${item.cartodbId}-${team}`}
        {...(get(config, team)
          ? get(get(config, team), [
              `${lowerCase(item?.bpInvStatus || MARKET)}CardProps`,
            ])
          : get(get(config, 'default'), [
              `${lowerCase(item?.bpInvStatus || MARKET)}CardProps`,
            ]))}
      />
    </StyledContainer>
  )
}

export default CardItem
