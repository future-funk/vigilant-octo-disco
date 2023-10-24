import { chain, uniq, map } from 'lodash'
import { MsaAsset } from '@bpd/msa-exposure/shared/data-access'

export interface MsaData {
  perc: number[]
  value: number[]
}

export interface IChartDataResult {
  sectors: string[]
  msaData: Record<string, MsaData>
}

const extractChartDataFromMsaExposure = (
  data: MsaAsset[]
): IChartDataResult => {
  const sectors = uniq(map(data, 'sector'))

  const msaData: Record<string, MsaData> = chain(data)
    .groupBy('type')
    .mapValues((msaData, grp) => {
      const perc = map(msaData, 'percent')
      const value = map(msaData, 'assetNmvUsd')
      return { perc, value }
    })
    .value()

  return {
    sectors,
    msaData,
  }
}

export default extractChartDataFromMsaExposure
