import { DirectoryMapColorGroup } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { filter, values, map } from 'lodash'
import { LegendData} from '@bpd/vendors/carto'

export interface getFilteredLegendsProps {
    legends: Record<string, LegendData>,
    type: DirectoryMapColorGroup
}

const useGetLegends = ({ legends, type}: getFilteredLegendsProps) => {


    const activeLegends = filter(values(legends), {type: type})
    const activeLegendsNames = map(activeLegends, 'label')

    return {
        activeLegends,
        activeLegendsNames,
        column: type 
    }
}

export default useGetLegends