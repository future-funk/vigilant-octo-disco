import { ReactNode, useEffect } from 'react'
import { useGetAuthorizationQuery } from './authz.slice'
import styles from './BPAuthzProvider.module.less'
import HomeLayoutSkeleton from './HomeLayoutSkeleton'

export interface HttpError {
  status: string
}

export interface IBPAuthzProviderProps {
  children?: ReactNode
  onError?: (error: HttpError) => ReactNode
}

export function BPAuthzProvider(opts: IBPAuthzProviderProps) {
  const { children, onError } = opts

  const { error, data, isLoading } = useGetAuthorizationQuery('userid')

  useEffect(() => {
    //Will be removed this useEffect once we moved to Carto 3 account.
  }, [data])

  return (
    //no need to check authentication here, because, if app is not authenticated, this component wont be initialized.
    <>
      {!!isLoading && <HomeLayoutSkeleton />}
      {!!data && children}
      {!!error && !!onError && onError(error as unknown as HttpError)}
      {!!error && (
        <div className={styles['error']}>
          Error occured while authorizing it. Please contact support team.
        </div>
      )}
    </>
  )
}
