import { filter, values, map } from 'lodash'
import { LegendData } from '@bpd/vendors/carto'

export interface getFilteredLegendsProps {
  legends: Record<string, LegendData>
  type: string
}

const useGetLegends = ({ legends, type }: getFilteredLegendsProps) => {
  const activeLegends = filter(values(legends), { type: type })
  const activeLegendsNames = map(activeLegends, 'label')

  return {
    activeLegends,
    activeLegendsNames,
    column: type,
  }
}

export default useGetLegends
