import {
  getMapBoundarySource,
  getMarketsSource,
  getHoldingSource,
  getSearchSource,
} from '../sources'

const Sources = {
  getMapBoundary: getMapBoundarySource,
  getMarket: getMarketsSource,
  getHolding: getHoldingSource,
  getDirectories: getSearchSource,
}

export default Sources
