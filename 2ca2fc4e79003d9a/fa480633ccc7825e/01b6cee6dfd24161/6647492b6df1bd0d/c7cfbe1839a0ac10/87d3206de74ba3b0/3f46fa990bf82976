//@ts-ignore
import { AggregationTypes, _filtersToSQL } from '@carto/react-core';
//@ts-ignore
import { MAP_TYPES, API_VERSIONS } from '@deck.gl/carto';

export function wrapModelCall(props: any, fromLocal: any, fromRemote: any) {
  const { source, global } = props;

  if (global) {
    if (source.type === MAP_TYPES.TILESET)
      throw new Error('Tileset sources are not supported in global mode.');

    if (source.credentials.apiVersion === API_VERSIONS.V2) {
      throw new Error(
        'CARTO 2 cannot be used in global mode. Upgrade to CARTO 3, please.'
      );
    }

    if (!fromRemote) {
      throw new Error(`Global mode isn't supported for this widget`);
    }

    return fromRemote(props);
  }

  return fromLocal(props);
}
