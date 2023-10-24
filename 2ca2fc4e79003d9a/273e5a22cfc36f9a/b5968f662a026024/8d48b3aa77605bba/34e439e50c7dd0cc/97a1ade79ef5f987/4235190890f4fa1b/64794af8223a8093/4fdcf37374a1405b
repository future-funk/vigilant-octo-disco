import {
  createSlice,
  SectorExpert,
  BaseFilter,
  DEAL_TYPE,
  VIEW_TYPE,
  PERIOD_TYPE,
  TOP_N_TYPE,
} from '@bpd/bpd-web/experts/shared/data-access'
import { CORP_TITLE } from '@bpd/bpd-web/shared/core'

export interface SliceState {
  baseFilters: BaseFilter
  isDealModalOpen: boolean
  selectedExpertId: string | null
  hoveredExpert: SectorExpert | null
}

export const INITIAL_STATE: SliceState = {
  baseFilters: {
    viewBy: VIEW_TYPE.TEAM,
    period: PERIOD_TYPE.LAST_12_MTH,
    dealStatus: [DEAL_TYPE.LIVE],
    corporateTitle: [CORP_TITLE.ASSOCIATE, CORP_TITLE.ASSISTANT_VICE_PRESIDENT],
    topN: TOP_N_TYPE.TOP_3,
  },
  isDealModalOpen: false,
  selectedExpertId: null,
  hoveredExpert: null,
}

export const slice = createSlice({
  defaultState: INITIAL_STATE,
  reducers: {},
})

export const ExpertActions = slice.actions

export const ExpertSelectors = slice.selectors

export default slice
