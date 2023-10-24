import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId } from '../utils'
import { chain, join } from 'lodash'

export interface GetTopMsaAssetsSource {
  years: number[] | null
  minProjectNmv: number | null
  minAssetNmv: number | null
  sectors: string[] | null
  top: number | null
}

export const TOP_MSA_ASSETS = scopeId('TOP_MSA_ASSETS')

const getTopMsaAssetsSource = ({
  years,
  minProjectNmv,
  minAssetNmv,
  sectors,
  top,
}: GetTopMsaAssetsSource) => {
  const yearsArray = years?.length ? `ARRAY[${join(years, ',')}]` : 'null'
  const sectorsArray = sectors?.length
    ? `ARRAY[${chain(sectors)
        .map((str) => `'${str}'`)
        .join(',')
        .value()}]`
    : 'null'
  return createCartoQuery(
    TOP_MSA_ASSETS,
    `SELECT * FROM carto.fn_app_us_msa_get_by_msas(${yearsArray}, ${minProjectNmv}, ${minAssetNmv}, ${sectorsArray}, ${top})`
  )
}

export default getTopMsaAssetsSource
