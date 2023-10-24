import { Legend as CoreLegend } from '@bpd/vendors/carto'
import { useGetShowSelectedCards } from '../hooks'
import { ASSETS_LAYER_ID, SELECTED_ASSETS_LAYER } from '../layers'

const Legend = () => {
  const showSelectedCards = useGetShowSelectedCards()

  return (
    <CoreLegend
      displayIntent={[
        showSelectedCards ? SELECTED_ASSETS_LAYER : ASSETS_LAYER_ID,
      ]}
    />
  )
}

export default Legend
