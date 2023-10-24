import { createAsyncThunk } from '@reduxjs/toolkit'
import { credentials } from '../constants'
import { setCredentials } from '@carto/react-redux'
import type { CartoState } from '../types'
import { Mutex } from 'async-mutex'

type RootState = {
  auth: { token: string }
  carto: CartoState & {
    credentials: CartoState['credentials'] & { authToken: string }
  }
}

const BASE_URL = `${process.env['NX_REACT_APP_SERVER_URL']}`
const mutex = new Mutex()

const decodeToken = (token: string) => {
  if (!token) return null
  const [, payload] = token.split('.')
  try {
    return JSON.parse(atob(payload))
  } catch {
    return null
  }
}

export const fetchCartoAuthToken = createAsyncThunk(
  'carto/fetchAuthToken',
  async (_, thunkAPI) => {
    /* - DO NOT REMOVE - THIS WILL BE USED IN CARTO V3 
    await mutex.waitForUnlock()
    const cartoToken = (thunkAPI.getState() as RootState).carto?.credentials
      .authToken
    const tokenParsed = decodeToken(cartoToken)
    const expiresIn =
      Math.max(
        0,
        (tokenParsed?.['exp'] || 0) - Date.now() / 1000 + 180 // 3 mins before
      ) * 1000
    if (expiresIn <= 0) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire()
        try {
          const { token: authToken } = (thunkAPI.getState() as RootState).auth

          const headers = { Authorization: `Bearer ${authToken}` }

          const response = await fetch(
            `${BASE_URL}/api/v2/analysis/location/carto/token`,
            { headers }
          )

          if (!response.ok) {
            throw new Error('Failed to fetch carto token')
          }
          const accessToken = await response.json()
          await thunkAPI.dispatch(
            setCredentials({ ...credentials, accessToken })
          )
          return accessToken
        } catch (error) {
          console.log(error)
          //throw error;
        } finally {
          // release must be called once the mutex should be released again.
          release()
        }
      } else {
        await mutex.waitForUnlock()
        return (thunkAPI.getState() as RootState).carto?.credentials.authToken //get the latest one after being dispatch from refresh token api call.
      }
    } else {
      return cartoToken
    }
*/
    //temp code: till BE support carto V3
    const hasKey = (thunkAPI.getState() as any).carto?.credentials?.apiKey
    const cartoApiKey = (thunkAPI.getState() as any).user?.queries[
      'getAuthorization("userid")'
    ]?.data?.cartoApiKey

    !hasKey &&
      thunkAPI.dispatch(setCredentials({ ...credentials, apiKey: cartoApiKey }))

    return cartoApiKey
  }
)
