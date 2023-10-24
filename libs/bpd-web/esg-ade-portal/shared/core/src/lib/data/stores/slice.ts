import {
  CaseStudyListItem,
  Research,
  createSlice,
} from '@bpd/esg-ade-portal/shared/data-access'

export interface SliceState {
  selectedResearch: Research | null
  selectedCaseStudy: CaseStudyListItem | null
}

export const INITIAL_STATE: SliceState = {
  selectedResearch: null,
  selectedCaseStudy: null,
}

export const slice = createSlice({
  defaultState: INITIAL_STATE,
  reducers: {},
})

export const EsgAdePortalActions = slice.actions

export const EsgAdeSelectors = slice.selectors

export default slice
