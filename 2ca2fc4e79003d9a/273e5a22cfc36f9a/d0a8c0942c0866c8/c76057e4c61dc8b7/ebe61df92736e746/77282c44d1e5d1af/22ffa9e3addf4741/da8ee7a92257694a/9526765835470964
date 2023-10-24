import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'

export const SECTORS = scopeId('SECTORS')

const getBaseSectorsSource = () => {
  return createCartoQuery(
    SECTORS,
    `SELECT DISTINCT sector FROM carto.mv_dm_rca_txn_prices`
  )
}

export default getBaseSectorsSource
