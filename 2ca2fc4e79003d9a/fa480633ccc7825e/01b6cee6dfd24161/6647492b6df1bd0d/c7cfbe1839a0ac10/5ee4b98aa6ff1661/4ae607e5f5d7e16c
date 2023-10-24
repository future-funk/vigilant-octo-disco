import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { setViewState } from '@carto/react-redux'
import { Button } from '@gic/battlefield-ui-pack'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { DEFAULT_MIN_ZOOM } from '../constants'
import { useZoomLevel } from '../hooks'

const StyledButton = withTheme(Button)({ padding: 0,border:0 })

const incrementZoom = (zoomLevel: number) => zoomLevel + 1

const decrementZoom = (zoomLevel: number) =>
  zoomLevel <= DEFAULT_MIN_ZOOM ? zoomLevel : zoomLevel - 1

const ZoomControl = () => {
  const dispatch = useDispatch<any>()

  const zoomLevel = useZoomLevel()

  const increaseZoom = useCallback(
    () => dispatch(setViewState({ zoom: incrementZoom(zoomLevel) })),
    [dispatch, zoomLevel]
  )

  const decreaseZoom = useCallback(
    () => dispatch(setViewState({ zoom: decrementZoom(zoomLevel) })),
    [dispatch, zoomLevel]
  )

  return (
    <>
      <StyledButton
        icon={<MinusOutlined />}
        onClick={decreaseZoom}
      />
      <StyledButton
        icon={<PlusOutlined />}
        onClick={increaseZoom}
      />
    </>
  )
}

export default ZoomControl
