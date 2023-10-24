import useCartoSelector from './useCartoSelector'
const useZoomLevel = () => {
  return useCartoSelector((state) => state.carto.viewState.zoom || 0)
}
export default useZoomLevel
