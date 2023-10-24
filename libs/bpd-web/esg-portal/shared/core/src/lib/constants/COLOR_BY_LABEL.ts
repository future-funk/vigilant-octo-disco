import {
  BUCKET,
  STORM_SURGE_RR,
  HURRICANE_RR,
  INLAND_FLOOR_RR,
  WILDFIRE_RR,
} from '.'

export const COLOR_BY_LABEL = {
  [STORM_SURGE_RR]: 'Storm Surge Risk Rating',
  [HURRICANE_RR]: 'Hurricane Risk Rating',
  [INLAND_FLOOR_RR]: 'Inland Flood Risk Rating',
  [WILDFIRE_RR]: 'Wildfire Risk Rating',
  [BUCKET]: 'Green Cert Bucket',
}
