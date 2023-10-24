import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'

export const DATA_SOURCE_INFO = scopeId('DATA_SOURCE_INFO')

const getDataSourceInfoSource = () => {
  return createCartoQuery(
    DATA_SOURCE_INFO,
    `select data_eff_dt, 'RCA' as data_desc from datasource_info where data_name ='DM_RCA_TXN'`
  )
}

export default getDataSourceInfoSource
