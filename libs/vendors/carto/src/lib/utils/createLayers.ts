import type { LayersList } from '@deck.gl/core/typed'
import { compact } from 'lodash'

const createLayers = (layers: unknown[]) => compact(layers) as LayersList

export default createLayers
