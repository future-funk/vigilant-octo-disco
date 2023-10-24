import Axios from 'axios'
import { useContext, useRef } from 'react'

import { IKCContext, KCContext } from './kc.context'

export interface IuseKCAuthIntercepterOpts {
  skipToSetAuthTokenFn?: (url?: string) => boolean
}
export function useKCAuthAxiosIntercepter(
  opts?: IuseKCAuthIntercepterOpts
): void {
  const { skipToSetAuthTokenFn } = opts || {}
  const authContext = useContext(KCContext) as IKCContext
  const { current: _local }: { current: any } = useRef({
    isInitialized: false,
  })
  if (!_local.isInitialized) {
    Axios.interceptors.request.use(
      (config) => {
        // RAP-4418: Remove rhsso token from carto calls in FE
        if (!!skipToSetAuthTokenFn && skipToSetAuthTokenFn(config.url)) {
          return new Promise((resolve) => {
            resolve(config)
          })
        }

        return authContext.getAuthTokenHeader(config)
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    _local.isInitialized = true
  }
}
