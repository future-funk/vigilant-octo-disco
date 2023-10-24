import { FieldProps } from '@bpd/bpd-web/shared/ui'
import { DawBlueprintApiQueries } from '@bpd/daw/shared/data-access'
import { valueType } from 'antd/lib/statistic/utils'
import { first, isNumber } from 'lodash'
import { useEffect, useRef } from 'react'
import {
  useFormContext,
  UseFormSetValue,
  UseFormTrigger,
  useWatch,
} from 'react-hook-form'

type UseValidateScrTicReturnType = [
  validateTicValue: () => void,
  isValidating: boolean,
  setValue: UseFormSetValue<any>,
  trigger: UseFormTrigger<any>
]
const useValidateScrTic = ({
  name,
  value,
}: {
  name: FieldProps['input']['name']
  value?: valueType
}): UseValidateScrTicReturnType => {
  const baseKey = first(name.split('.'))

  const {
    setValue,
    trigger,
    formState: { isSubmitted },
  } = useFormContext()

  const masterProjectCode = useWatch({
    name: [baseKey, 'masterProjectCode'].join('.'),
  })

  const { current: _local } = useRef({ isSubmitted })

  _local.isSubmitted = isSubmitted

  const [validateScr, { data, isFetching: isValidating, error }] =
    DawBlueprintApiQueries.useLazyGetScrValidate()

  const validateTicValue = () => {
    masterProjectCode &&
      isNumber(value) &&
      validateScr({
        projectId: '',
        masterProject: masterProjectCode,
        tic: value as unknown as number,
      })
  }

  useEffect(() => {
    validateTicValue()
  }, [masterProjectCode])

  useEffect(() => {
    setValue(
      [baseKey, 'scrValidate'].join('.'),
      isValidating ? 'validating' : error ? 'error' : data?.scrValidate?.isValid
    )
    isNumber(value) &&
      masterProjectCode &&
      trigger([
        [baseKey, 'approval', 'tic'].join('.'),
        [baseKey, 'scrValidate'].join('.'),
      ])
  }, [data, isValidating, error])

  return [validateTicValue, isValidating, setValue, trigger]
}

export default useValidateScrTic
