import { createSlice } from '@bpd/msa-exposure/shared/data-access'
import { BpdFilterConfig } from '@bpd/bpd-web/shared/ui'

export interface SliceState {
  filters: {
    years: number[] | null
    minProjectNmv: number | null
    minAssetNmv: number | null
    sectors: string[] | null
    top: number | null
  }
}

export const defaultMsaExposureState: SliceState = {
  filters: {
    years: null,
    minProjectNmv: null,
    minAssetNmv: null,
    sectors: null,
    top: 10,
  },
}

const slice = createSlice({
  defaultState: defaultMsaExposureState,
  reducers: {},
})

export const MsaExposureActions = slice.actions

export const MsaExposureSelectors = slice.selectors

export default slice
