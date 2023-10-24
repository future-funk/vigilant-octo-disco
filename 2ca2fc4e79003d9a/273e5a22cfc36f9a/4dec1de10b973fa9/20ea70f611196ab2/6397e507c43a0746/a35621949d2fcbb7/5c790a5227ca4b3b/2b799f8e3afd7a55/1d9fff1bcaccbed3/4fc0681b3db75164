import { UiActions, useAppDispatch } from '@bpd/bpd-web/shared/store'
import { first, values } from 'lodash'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Page } from '../components/PageTemplate'
import { WithConfigProps } from '../components'

export interface UseConfigProps
  extends Pick<Page, 'breadcrumbs' | 'title' | 'scope'> {}

const useConfig = (config: WithConfigProps) => {
  const { breadcrumbs, scope, title } = config

  const dispatch = useAppDispatch()

  const { '*': url } = useParams()

  const appBpId = first(url?.match(/BPA\d*(?=\/)/))

  useEffect(() => {
    if (!appBpId) return
    dispatch(UiActions.setAppBpId(appBpId))
  }, [appBpId])

  useEffect(() => {
    if (!scope) return
    dispatch(UiActions.setTeam(scope.team))
  }, [JSON.stringify(values(scope))])

  useEffect(() => {
    if (!breadcrumbs?.length) return
    dispatch(UiActions.setBreadcrumbs(breadcrumbs))
  }, [JSON.stringify(breadcrumbs)])

  useEffect(() => {
    if (!title?.length) return
    dispatch(UiActions.setPageTitle(title))
  }, [title])
}

export default useConfig
