/* eslint-disable no-async-promise-executor */
/* eslint-disable react-hooks/rules-of-hooks */
import { useDynamicScriptTag } from '@bpd/ui/hooks'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IAuthState, IConfig, KCContext } from './kc.context'
import { kcActions } from './kcAuth.slice'
import { KCClient } from './kcClient'
import styles from './Provider.module.less'

const { setAuthState } = kcActions
export interface IKCProviderProps {
  children?: any
  fallback?: any
}

export function KCAuthProvider(opts: IKCProviderProps) {
  const { children, fallback, ...clientOpts } = opts
  const dispatch = useDispatch()
  const { current: _local } = useRef<any | null>({
    client: null,
    didInitialise: false,
    isAuthenticated: false,
  })
  const authState: IAuthState = useSelector(
    (state: any) =>
      state.auth || {
        isAuthenticated: false,
        user: undefined,
        isLoading: true,
        error: undefined,
      }
  )

  const onKCScriptLoaded = useCallback(async (failedToLoadScript = false) => {
    if (failedToLoadScript) {
      dispatchSetAuthState({
        isAuthenticated: false,
        user: undefined,
        isLoading: false,
        error: {
          name: 'Error',
          message: 'Failed to load keycloak file.',
          status: 408,
        },
      })
    }
    try {
      _local.client = new KCClient({
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
          error: { name: 'Error', message: 'Failed to authenticate' },
        })
      }
    } catch (e) {
      console.log('Token API failed.', e)
      throw e
    }
  }, [])

  !_local.didInitialise &&
    useDynamicScriptTag({
      id: 'keycloak',
      url: `${process.env['NX_REACT_APP_KEYCLOAK_URL']}/auth/js/keycloak.js`,
      callback: onKCScriptLoaded,
    })

  const dispatchSetAuthState = useCallback((authState: IAuthState) => {
    dispatch(setAuthState(authState))
  }, [])

  useEffect(() => {
    _local.didInitialise = true
  }, [])

  const getAuthTokenHeader = useCallback(
    async (config: IConfig | undefined) => {
      const newConfig = config || {}
      if (_local.client.isLoggedIn()) {
        return new Promise(async (resolve, reject) => {
          if (_local.client.isTokenExpired()) {
            try {
              const refreshed = await _local.client.updateToken()
              if (refreshed) {
                console.log('token refreshed.')
              }
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
              ...{ Authorization: `Bearer ${_local.client.getToken()}` },
            }
            resolve(newConfig)
          }
        })
      } else {
        return _local.client.login()
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
    <KCContext.Provider value={contextValue}>
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
      {!!authState.error && fallback(authState.error)}
    </KCContext.Provider>
  )
}
