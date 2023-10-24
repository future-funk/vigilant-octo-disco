import { DECOMP_VIEW_TYPE } from '../constants'

const getIsNetFlowView = (viewType: string): boolean => {
  return DECOMP_VIEW_TYPE.NET_FLOW === viewType
}

export default getIsNetFlowView
