import { FC } from 'react'
import {
  BaseMap,
  createLayers,
  MarkerLayer,
  BaseMapProps,
  Coordinate,
} from '@bpd/vendors/carto'
import { HighwayLayer, PoiLayer } from '../../layers'
import { ViewState } from '@carto/react-redux'

export interface ModalMapProps extends Omit<BaseMapProps, 'viewState'> {
  markerCoordinate: Coordinate
  viewState: Required<Pick<ViewState, 'latitude' | 'longitude'>>
}

const ModalMap: FC<ModalMapProps> = (props) => {
  const { markerCoordinate, viewState } = props

  const layers = createLayers([
    HighwayLayer({ visibility: true }),
    PoiLayer({ visibility: true }),
    MarkerLayer({
      coordinate: {
        latitude: markerCoordinate.latitude,
        longitude: markerCoordinate.longitude,
      },
    }),
  ])

  return (
    <>
      <BaseMap
        layers={layers}
        viewState={{ ...viewState, zoom: 8.9 }}
        hideZoomControl={true}
      />
    </>
  )
}

export default ModalMap
