import { setViewState } from '@carto/react-redux'
import { ViewStateChangeEvent } from 'react-map-gl'
import { useDispatch } from 'react-redux'

const CURSORS = {
  default: 'grab',
  hover: 'pointer',
}

const useMapHooks = () => {
  const dispatch = useDispatch<any>()

  const handleGetCursor = ({ isHovering }: { isHovering: boolean }) =>
    isHovering ? CURSORS.hover : CURSORS.default

  const handleViewStateChange = (event: ViewStateChangeEvent) => {
    dispatch(setViewState(event.viewState))
  }

  return {
    handleGetCursor,
    handleViewStateChange,
  }
}

export default useMapHooks
