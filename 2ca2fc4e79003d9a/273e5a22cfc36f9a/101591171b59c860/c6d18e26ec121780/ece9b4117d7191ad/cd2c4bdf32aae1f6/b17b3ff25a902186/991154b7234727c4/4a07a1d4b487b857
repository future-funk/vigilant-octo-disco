import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { BpdFormActionsProps } from '@bpd/bpd-web/shared/ui'
import { DawUiSelectors } from '@bpd/daw/shared/data-access'
import { BreadcrumbsProps } from '@gic/battlefield-ui-pack'
import { chain, cloneDeep, first } from 'lodash'
import { useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {
  utilHandleBeErrorResponse,
  utilRemoveStaffIfNtidNotThere,
  utilRemoveUndefinedProps,
  utilConvertCheckListKeysToTitleCase,
} from '../utils'
import useCreate, { ErrorResponse } from './useCreate'

export interface useCreateDealFooterProps {}

export interface useFormFooterRetunType {
  formActionProps: BpdFormActionsProps
  handleSubmit: (formData: any) => void
}

type ActionType = 'submitAndCancel' | 'cancel' | 'submit'

const useCreateDealFooter = (
  props?: useCreateDealFooterProps
): useFormFooterRetunType => {
  const breadcrumbs = useAppSelector(
    DawUiSelectors.getBreadcrumbs
  ) as BreadcrumbsProps['items']
  const { current: _local } = useRef<{ actionType: ActionType | null }>({
    actionType: null,
  })

  const { setError, handleSubmit } = useFormContext()

  const navigate = useNavigate()

  const [postDeal, { isLoading }] = useCreate()

  const onSubmit = async (formData: any) => {
    const modifiedFormData = chain(formData)
      .thru(cloneDeep)
      .thru(utilRemoveUndefinedProps)
      .thru(utilRemoveStaffIfNtidNotThere)
      .thru(utilConvertCheckListKeysToTitleCase)
      .value()
    const response = await postDeal(modifiedFormData)
    if ((response as unknown as ErrorResponse)?.error) {
      utilHandleBeErrorResponse({
        errorResponse: (response as unknown as ErrorResponse)?.error?.data,
        setError,
      })
    }
    return response
  }

  const handleCancelClick = () => {
    _local.actionType = 'cancel'
    if (first(breadcrumbs)?.href) navigate(first(breadcrumbs)?.href ?? '')
  }

  const handleCreateClick = async (formData: any) => {
    _local.actionType = 'submit'
    await onSubmit(formData)
  }

  const handleCreateAndCancelClick = async (formData: any) => {
    _local.actionType = 'submitAndCancel'
    const response = await onSubmit(formData)
    !(response as ErrorResponse)?.error && handleCancelClick()
  }

  const isSubmitLoading = _local.actionType === 'submit' && isLoading

  const isSubmitAndCancelLoading =
    _local.actionType === 'submitAndCancel' && isLoading

  return {
    formActionProps: {
      okButtonProps: {
        title: 'Create Deal',
        loading: isSubmitLoading,
        disabled: isSubmitAndCancelLoading,
        onClick: handleSubmit(handleCreateClick),
      },
      cancelButtonProps: {
        title: 'Cancel',
        onClick: handleCancelClick,
        disabled: isLoading,
      },
      extraButtonsRight: [
        {
          title: 'Create Deal and Close',
          onClick: handleSubmit(handleCreateAndCancelClick),
          loading: isSubmitAndCancelLoading,
          disabled: isSubmitLoading,
        },
      ],
    },
    handleSubmit,
  }
}

export default useCreateDealFooter
