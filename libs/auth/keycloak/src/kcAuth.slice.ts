import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IAuthState, initialAuthState } from './kc.context'

export const KC_AUTH_SLICE_KEY = 'auth'

export const kcAuthSlice = createSlice({
  name: KC_AUTH_SLICE_KEY,
  initialState: initialAuthState,
  reducers: {
    setAuthState: (state, action: PayloadAction<IAuthState>) => {
      const payload = { ...state, ...action.payload }
      state.token = payload?.token
      state.isAuthenticated = payload?.isAuthenticated
      state.user = payload?.user
      state.isLoading = payload?.isLoading
      state.error = payload?.error
    },
  },
})

// Action creators are generated for each case reducer function
export const kcActions = kcAuthSlice.actions

export const kcAuthReducer = kcAuthSlice.reducer
