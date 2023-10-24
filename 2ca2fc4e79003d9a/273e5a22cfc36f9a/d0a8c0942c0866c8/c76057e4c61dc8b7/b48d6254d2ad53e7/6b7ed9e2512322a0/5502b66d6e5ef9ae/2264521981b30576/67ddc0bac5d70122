import { TREEMAP_COLOR_MAP } from '../constants'

const getTreemapColor = (value: number): string => {
  switch (true) {
    case value < -0.1:
      return TREEMAP_COLOR_MAP.NEG_10.value
    case value < -0.05:
      return TREEMAP_COLOR_MAP.NEG_5.value
    case value < -0.01:
      return TREEMAP_COLOR_MAP.NEG_1.value
    case value > -0.01 && value < 0.01:
      return TREEMAP_COLOR_MAP.POS_0.value
    case value > 0.1:
      return TREEMAP_COLOR_MAP.POS_10.value
    case value > 0.05:
      return TREEMAP_COLOR_MAP.POS_5.value
    case value > 0.01:
      return TREEMAP_COLOR_MAP.POS_1.value
    default:
      return TREEMAP_COLOR_MAP.POS_0.value
  }
}

export default getTreemapColor
