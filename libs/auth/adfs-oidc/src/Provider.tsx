/* eslint-disable no-async-promise-executor */
import { ReactNode } from 'react'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IAuthState, AdfsOidcContext } from './AdfsOidcContext'
import adfsOidcAuthSlice from './adfsOidcAuthSlice'
import { AdfsOidcClient } from './AdfsOidcClient'
import styles from './Provider.module.less'
import { HttpError } from '@bpd/auth-authorization'
import { AxiosRequestConfig } from 'axios'

const { setAuthState } = adfsOidcAuthSlice.actions
export interface IAdfsOidcProviderProps {
  children?: ReactNode
  fallback?: (error: HttpError) => ReactNode
}

export function AdfsOidcAuthProvider(opts: IAdfsOidcProviderProps) {
  const { children, fallback, ...clientOpts } = opts
  const dispatch = useDispatch()
  const { current: _local } = useRef<{
    client: AdfsOidcClient | null
    didInitialise: boolean
    isAuthenticated: boolean
    token: string | null
  }>({
    client: null,
    didInitialise: false,
    isAuthenticated: false,
    token: '',
  })

  const authState: IAuthState = useSelector(
    (state: { auth: IAuthState }) =>
      state.auth || {
        isAuthenticated: false,
        user: undefined,
        isLoading: true,
        error: undefined,
      }
  )

  const onInit = useCallback(async () => {
    try {
      _local.client = new AdfsOidcClient({
        ...clientOpts,
        onUpdateToken: (token) => dispatchSetAuthState({ token }),
      })
      const authenticated = await _local.client.checkSession()

      if (authenticated) {
        _local.isAuthenticated = authenticated
        _local.token = _local.client.getToken()
        if (!_local.token) {
          _local.client.login()
          return
        }
        dispatchSetAuthState({
          token: _local.token,
          isAuthenticated: authenticated,
          user: undefined,
          isLoading: false,
          error: undefined,
        })
      } else {
        dispatchSetAuthState({
          isAuthenticated: authenticated,
          user: undefined,
          isLoading: false,
          error: {
            name: 'Error',
            message: 'Failed to authenticate',
            status: '401',
          },
        })
      }
    } catch (e) {
      console.log('Token API failed.', e)
      throw e
    }
  }, [])

  const dispatchSetAuthState = useCallback((authState: IAuthState) => {
    dispatch(setAuthState(authState))
  }, [])

  useEffect(() => {
    _local.didInitialise = true
    onInit()
  }, [])

  const getAuthTokenHeader = useCallback(
    async (config: AxiosRequestConfig): Promise<AxiosRequestConfig | void> => {
      const newConfig = config || {}
      if (_local.client?.isLoggedIn()) {
        return new Promise(async (resolve, reject) => {
          if (_local.client?.isTokenExpired()) {
            try {
              await _local.client.updateToken()

              newConfig.headers = {
                ...newConfig.headers,
                ...{ Authorization: `Bearer ${_local.client.getToken()}` },
              }
              return resolve(newConfig)
            } catch (e) {
              reject()
              return _local.client.login()
            }
          } else {
            newConfig.headers = {
              ...newConfig.headers,
              ...{ Authorization: `Bearer ${_local.client?.getToken()}` },
            }
            resolve(newConfig)
          }
        })
      } else {
        _local.client?.login()
      }
    },
    []
  )

  const contextValue = useMemo(() => {
    return {
      getAuthTokenHeader: getAuthTokenHeader,
    }
  }, [authState.isLoading])

  return (
    <AdfsOidcContext.Provider value={contextValue}>
      {!authState.isAuthenticated && (
        <div>
          <div className={styles['loader']}>
            <span>
              <i className="fas fa-circle-notch fa-spin"></i> Authenticating...{' '}
            </span>
          </div>
        </div>
      )}
      {!!authState.isAuthenticated && !!_local.token && children}
      {!!authState.error && fallback && fallback(authState.error)}
    </AdfsOidcContext.Provider>
  )
}
