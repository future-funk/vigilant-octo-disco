import { get, upperCase } from 'lodash'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { Legend as CoreLegend } from '@bpd/vendors/carto'
import { ESG_LANDSCAPE_LAYER_ID } from '../layers'
import { COLOR_BY_LABEL } from '../constants'
import { EsgPortalSelectors } from '../data'

const Legend = () => {
  const selectedColorBy = useAppSelector(EsgPortalSelectors.getColorByValue)

  return (
    <CoreLegend
      displayIntent={[ESG_LANDSCAPE_LAYER_ID]}
      title={upperCase(get(COLOR_BY_LABEL, selectedColorBy))}
    />
  )
}

export default Legend
