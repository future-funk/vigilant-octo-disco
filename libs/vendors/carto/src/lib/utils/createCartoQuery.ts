import { MAP_TYPES } from '@deck.gl/carto/typed'
import { Source } from '../types'

const createCartoQuery = (id: string, data: string): Source => ({
  id,
  data,
  type: MAP_TYPES.QUERY,
})

export default createCartoQuery
