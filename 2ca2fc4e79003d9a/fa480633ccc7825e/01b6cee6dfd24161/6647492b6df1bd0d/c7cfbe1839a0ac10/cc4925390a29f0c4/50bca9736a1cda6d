import { Methods, executeTask } from '@carto/react-workers';
import { wrapModelCall } from '../helper/layerSupportHelper';

export function getLayerData(props: any) {
  return wrapModelCall(props, fromLocal, null);
}

function fromLocal(props: any) {
  const { source, rowsPerPage, page, sortBy, sortDirection } = props;

  return executeTask(source.id, Methods.FEATURES_RAW, {
    //@ts-ignore
    filters: source.filters,
    filtersLogicalOperator: source.filtersLogicalOperator,
    limit: rowsPerPage,
    page,
    sortBy,
    sortByDirection: sortDirection,
  });
}


//LayerData