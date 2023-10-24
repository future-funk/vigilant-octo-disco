import { createSelector } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from './types'

export const AUTHORIZATION_API_SLICE_KEY = 'user'

export const authzSlice = createApi({
  reducerPath: AUTHORIZATION_API_SLICE_KEY, // optional
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env['NX_REACT_APP_SERVER_URL']}/api`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).auth?.token

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  tagTypes: ['Authz'],
  endpoints: (builder) => ({
    getAuthorization: builder.query<User, string>({
      query: (authzDest) => ({
        url: `/${authzDest}`,
      }),
      providesTags: ['Authz'],
    }),
  }),
})

export const { useGetAuthorizationQuery } = authzSlice

export const getUserInfo = createSelector(
  authzSlice.endpoints.getAuthorization.select('userid'),
  (userInfo) => userInfo.data
)

export const AuthSelectors = {
  getUser: getUserInfo,
}
