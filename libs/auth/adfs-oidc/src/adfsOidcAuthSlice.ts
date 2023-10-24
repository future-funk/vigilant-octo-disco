import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IAuthState, initialAuthState } from './AdfsOidcContext'

const ADFS_OIDC_AUTH_SLICE_KEY = 'auth'

const adfsOidcAuthSlice = createSlice({
  name: ADFS_OIDC_AUTH_SLICE_KEY,
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
export default adfsOidcAuthSlice
