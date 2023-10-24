import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'

export const MSA_LAT_UPDATE_DT = scopeId('MSA_LAT_UPDATE_DT')

export interface GetMsaLastUpdateDtSource {}

const getMsaLastUpdateDtSource = (props: GetMsaLastUpdateDtSource) => {
  return createCartoQuery(
    MSA_LAT_UPDATE_DT,
    `select max(last_update_dt) as last_update_dt from carto.mv_dm_us_msa_assets`
  )
}

export default getMsaLastUpdateDtSource
