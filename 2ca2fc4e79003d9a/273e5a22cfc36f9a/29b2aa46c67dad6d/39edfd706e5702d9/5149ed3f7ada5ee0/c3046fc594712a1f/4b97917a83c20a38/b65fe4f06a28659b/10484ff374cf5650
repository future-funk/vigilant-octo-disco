import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'
import { chain, join } from 'lodash'

export interface GetMsaAssetsSource {
  years: number[] | null
  minProjectNmv: number | null
  minAssetNmv: number | null
  sectors: string[] | null
}

export const MSA_ASSETS = scopeId('MSA_ASSETS')

const getMsaAssetsSource = ({
  years,
  minProjectNmv,
  minAssetNmv,
  sectors,
}: GetMsaAssetsSource) => {
  const yearsArray = years?.length ? `ARRAY[${join(years, ',')}]` : 'null'
  const sectorsArray = sectors?.length
    ? `ARRAY[${chain(sectors)
        .map((str) => `'${str}'`)
        .join(',')
        .value()}]`
    : 'null'
  return createCartoQuery(
    MSA_ASSETS,
    `SELECT * FROM carto.fn_app_us_msa_get_by_sectors(${yearsArray}, ${minProjectNmv}, ${minAssetNmv}, ${sectorsArray})`
  )
}

export default getMsaAssetsSource
