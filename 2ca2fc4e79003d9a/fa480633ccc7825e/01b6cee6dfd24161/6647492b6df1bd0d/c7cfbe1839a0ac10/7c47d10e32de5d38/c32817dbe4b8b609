import { AtLeast } from '@bpd/utils/typescript-utils'
import { IconLayer } from '@deck.gl/layers/typed'
import { Color, CompositeLayer } from 'deck.gl/typed'
import { Icon } from '../types'
import { CreateCartoLayer, createCartoLayer, OnFeaturesLoad } from '../utils'

const ICON = {
  x: 0,
  y: 0,
  width: 16,
  height: 16,
  mask: true,
}

export interface IconData {
  coordinates: [number, number]
}

export interface ClusterIconLayerProps<T extends object> {
  data: CreateCartoLayer<T>
  icon: AtLeast<Icon, 'url'> & {
    data?: IconData[]
    visible?: boolean
    getColor?: Color
    getData?: (data: T[]) => IconData[]
  }
}

export const LAYER_IDS = {
  data: 'data' as const,
  icon: 'icon' as const,
}

class ClusterIconLayer<T extends object> extends CompositeLayer<
  ClusterIconLayerProps<T>
> {
  constructor(props: ClusterIconLayerProps<T>) {
    // eslint-disable-next-line
    // @ts-ignore
    super(props)
    this.handleFeaturesLoad = this.handleFeaturesLoad.bind(this)
    this.state = { data: null }
  }

  handleFeaturesLoad: OnFeaturesLoad<T> = (data) => {
    this.setState({ data })
    this.renderLayers()
  }

  getData() {
    const { data } = this.state
    const { icon } = this.props
    return icon?.getData ? icon?.getData(data) : icon?.data
  }

  // eslint-disable-next-line
  // @ts-ignore
  renderLayers() {
    return [
      createCartoLayer(
        this.getSubLayerProps({
          // eslint-disable-next-line
          // @ts-ignore
          ...this.props.data,
          id: LAYER_IDS.data,
          onFeaturesLoad: this.handleFeaturesLoad,
        })
      ),
      new IconLayer(
        this.getSubLayerProps({
          ...this.props.icon,
          id: LAYER_IDS.icon,
          data: this.getData(),
          parameters: { depthTest: false },
          getIcon: () => ({ ...ICON, ...this.props?.icon }),
          getSize: this.props.icon?.visible ?? true ? 12 : 0,
          getPosition: (data: IconData) => data.coordinates,
        })
      ),
    ]
  }
}

export default ClusterIconLayer

ClusterIconLayer.layerName = 'ClusterIconLayer'
