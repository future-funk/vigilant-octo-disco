import { useAppDispatch } from '@bpd/bpd-web/shared/store'
import {
  DawBlueprintApiQueries,
  DawUiActions,
} from '@bpd/daw/shared/data-access'
import { first } from 'lodash'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const useGetDealConfig = () => {
  const dispatch = useAppDispatch()

  const { '*': dealId } = useParams()

  const { data, isFetching } = DawBlueprintApiQueries.useGetDealById(
    {
      dealId,
    },
    {
      skip: !dealId,
    }
  )

  useEffect(() => {
    if (!dealId) return
    dispatch(DawUiActions.setDealId(dealId))
  }, [dealId])

  useEffect(() => {
    if (!data) return
    const { requestType, approvalStatus, status, name } = data
    dispatch(DawUiActions.setStatuses({ requestType, approvalStatus, status }))
    dispatch(DawUiActions.setPageTitle(name))
  }, [data])

  return {
    data,
    isFetching,
  }
}

export default useGetDealConfig
