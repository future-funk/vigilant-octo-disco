import { createSlice as createBaseSlice } from '@bpd/bpd-web/shared/data-access'
import { DealReqType, Team } from '@bpd/ui/constants'
import { createSelector, PayloadAction } from '@reduxjs/toolkit'

export interface UiState {
  breadcrumbs: any | null
  pageTitle: string
  team: Team | null
  requestType: DealReqType | null
  dealId?: string
  approvalStatus?: string
  status?: string
}

const initialState: UiState = {
  breadcrumbs: null,
  pageTitle: '',
  team: null,
  requestType: null,
}

export const UI_SLICE_KEY = 'dawUi'

const uiSlice = createBaseSlice({
  sliceName: UI_SLICE_KEY,
  defaultState: initialState,
  reducers: {
    setBreadcrumbs(state, action: PayloadAction<any>) {
      state.breadcrumbs = action.payload
    },
    setPageTitle(state, action: PayloadAction<string>) {
      state.pageTitle = action.payload
    },
    setTeam(state, action: PayloadAction<UiState['team']>) {
      state.team = action.payload
    },
    setRequestType(state, action: PayloadAction<UiState['requestType']>) {
      state.requestType = action.payload
    },
    setDealId(state, action: PayloadAction<UiState['dealId']>) {
      state.dealId = action.payload
    },
    setApprovalStatus(state, action: PayloadAction<UiState['approvalStatus']>) {
      state.approvalStatus = action.payload
    },
    setStatuses(
      state,
      action: PayloadAction<{
        status: UiState['status']
        approvalStatus: UiState['approvalStatus']
        requestType: UiState['requestType']
      }>
    ) {
      state.status = action.payload.status
      state.approvalStatus = action.payload.approvalStatus
      state.requestType = action.payload.requestType
    },
  },
})

export const DawUiActions = uiSlice.actions

// eslint-disable-next-line
export const getDawUiRootState = (rootState: any): UiState =>
  rootState[UI_SLICE_KEY]

export const DawUiSelectors = {
  getBreadcrumbs: createSelector(
    getDawUiRootState,
    (state) => state?.breadcrumbs
  ),
  getPageTitle: createSelector(getDawUiRootState, (state) => state?.pageTitle),
  getTeam: createSelector(getDawUiRootState, (state) => state?.team),
  getRequestType: createSelector(
    getDawUiRootState,
    (state) => state?.requestType
  ),
  getDealId: createSelector(getDawUiRootState, (state) => state?.dealId),
  getApprovalStatus: createSelector(
    getDawUiRootState,
    (state) => state?.approvalStatus
  ),
  getStatus: createSelector(getDawUiRootState, (state) => state?.status),
}

export default uiSlice
