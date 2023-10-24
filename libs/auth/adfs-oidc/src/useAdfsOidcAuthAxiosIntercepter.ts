import Axios, { AxiosRequestConfig } from 'axios'
import { useContext, useRef } from 'react'

import { IAdfsOidcContext, AdfsOidcContext } from './AdfsOidcContext'

export interface IuseAdfsOidcAuthIntercepterOpts {
  skipToSetAuthTokenFn?: (url?: string) => boolean
}
export function useAdfsOidcAuthAxiosIntercepter(
  opts?: IuseAdfsOidcAuthIntercepterOpts
): Promise<AxiosRequestConfig> | void {
  const { skipToSetAuthTokenFn } = opts || {}
  const authContext = useContext(AdfsOidcContext) as IAdfsOidcContext
  const { current: _local }: { current: { isInitialized: boolean } } = useRef({
    isInitialized: false,
  })
  if (!_local.isInitialized) {
    Axios.interceptors.request.use(
      (config: AxiosRequestConfig) => {
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
