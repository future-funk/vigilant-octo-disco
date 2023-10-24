import { useLocationChangeListener } from '@bpd/ui/hooks'
import { FC, useEffect } from 'react'
import { isNil } from 'lodash'
import { Popup as MapGlPopup } from 'react-map-gl'
import { useDispatch } from 'react-redux'
import { useCartoSelector } from '../hooks'
import { MapActions, MapSelectors } from '../stores/mapSlice'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdPopover } from '@bpd/bpd-web/shared/ui'

export interface PopupProps {}

const StyledMapGlPopup = withTheme(MapGlPopup)(({ sx, theme }) => ({
  '&&& .mapboxgl-popup-content': {
    borderRadius: theme.spacing(2.5),
    paddingRight: theme.spacing(3.5),
  },
  '&&& .mapboxgl-popup-close-button': {
    width: theme.spacing(2.5),
    fontSize: theme.spacing(2.5),
    top: theme.spacing(0.5),
    right: theme.spacing(0.5),
  },
  '&&& .mapboxgl-popup-close-button:focus': {
    outline: 'none',
  },
}))

const Popup: FC<PopupProps> = () => {
  const dispatch = useDispatch<any>()

  const location = useLocationChangeListener()

  const tooltip = useCartoSelector(MapSelectors.getTooltip)

  const handleClosePopup = () => dispatch(MapActions.setTooltip(null))

  useEffect(() => {
    handleClosePopup()
  }, [location])

  return !isNil(tooltip) ? (
    <StyledMapGlPopup
      longitude={tooltip.longitude}
      latitude={tooltip.latitude}
      closeButton={tooltip?.hideCloseButton ? false : true}
      anchor="bottom"
      onClose={handleClosePopup}
      style={{ zIndex: 3 }}
    >
      {Array.isArray(tooltip.title) ? (
        tooltip.title.map(([label, content]) => (
          <Stack direction="column" py={0.5}>
            {label && <Typography variant="h5">{label}:</Typography>}
            <Typography variant="subtitle2">{content}</Typography>
          </Stack>
        ))
      ) : (
        <BpdPopover {...tooltip} />
      )}
    </StyledMapGlPopup>
  ) : null
}

export default Popup
