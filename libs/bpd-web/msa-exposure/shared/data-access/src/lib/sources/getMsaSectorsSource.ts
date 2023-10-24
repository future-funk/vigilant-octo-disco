import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'
export interface GetMsaSectorsSource {}

export const MSA_SECTORS = scopeId('MSA_SECTORS')

const getMsaSectorsSource = () => {
  return createCartoQuery(
    MSA_SECTORS,
    `SELECT DISTINCT sector FROM carto.mv_dm_us_msa_assets_top25primary order by sector`
  )
}

export default getMsaSectorsSource
