import { ERROR_MESSAGES } from '../constants'
import { UseFormReturn } from 'react-hook-form'
import { camelCase, chain, get, orderBy } from 'lodash'

interface ErrorResponse {
  isValidateSuccess: boolean
  validationErrors: { field: string; error: string; errorCode: number }[]
}

interface HandleErrorProps {
  errorResponse: ErrorResponse
  setError: UseFormReturn<any>['setError']
  baseKey?: string
  skippedFldNames?: string[]
}

const getErrorMessage = (errorCode: string | number, error: string) => {
  return get(ERROR_MESSAGES, errorCode) || error
}

const VALIDATE_TYPE = 'validate'

const utilHandleBeErrorResponse = ({
  errorResponse,
  setError,
  baseKey,
  skippedFldNames = [],
}: HandleErrorProps) => {
  orderBy(errorResponse?.validationErrors, ['errorCode'], ['desc']).forEach(
    ({ field, error, errorCode }) => {
      const fieldName = baseKey ? `${baseKey}.${field}` : field

      const modifiedFieldName = chain(fieldName)
        .split('.')
        .map((part) => (part.match(/(.+)\[(\d+)\]/) ? part : camelCase(part)))
        .join('.')
        .value()

      if (!skippedFldNames.includes(modifiedFieldName)) {
        setError(modifiedFieldName, {
          type: VALIDATE_TYPE,
          message: getErrorMessage(errorCode, error),
        })
      }
    }
  )
}

export default utilHandleBeErrorResponse
