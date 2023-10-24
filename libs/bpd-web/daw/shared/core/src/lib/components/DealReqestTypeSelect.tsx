import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdSelect, BpdSelectProps } from '@bpd/bpd-web/shared/ui'
import { DawUiActions, DawUiSelectors } from '@bpd/daw/shared/data-access'
import { DealReqType, DEAL_REQ_TYPE } from '@bpd/ui/constants'
import { Stack } from '@gic/battlefield-ui-pack'
import { first, map } from 'lodash'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { generatePath, useNavigate } from 'react-router-dom'
import { DEAL_REQ_TYPE_BY_URL_MAP } from '../constants'

export interface DealReqestTypeSelectProps {
  baseRoutePath?: string
  options?: BpdSelectProps['items']
}

const StyledContainer = withTheme(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#D4DFEA',
}))

const DEFAULT_OPTIONS = map(
  [
    DEAL_REQ_TYPE.DIRECT_INVESTMENT,
    DEAL_REQ_TYPE.PRGM_JV_SUB_DEAL,
    DEAL_REQ_TYPE.ADD_COMMITMENT,
    DEAL_REQ_TYPE.DIVESTMENT,
    DEAL_REQ_TYPE.SOFT_COMMITMENT_RELEASE,
  ],
  (type: DealReqType) => ({ label: type, key: type, value: type })
) as unknown as BpdSelectProps['items']

const DealReqestTypeSelect: FC<DealReqestTypeSelectProps> = ({
  baseRoutePath,
  options = DEFAULT_OPTIONS,
}) => {
  const dispatch = useAppDispatch()

  const { setValue } = useFormContext()

  const navigate = useNavigate()

  const requestType = useAppSelector(DawUiSelectors.getRequestType)

  const handleChange = (newReqType: DealReqType) => {
    dispatch(DawUiActions.setRequestType(newReqType))
    setValue('requestType', newReqType)
    baseRoutePath &&
      navigate(
        generatePath(`${baseRoutePath}/:type`, {
          type:
            DEAL_REQ_TYPE_BY_URL_MAP[newReqType] ??
            DEAL_REQ_TYPE_BY_URL_MAP[first(options)?.value as DealReqType],
        })
      )
  }

  return (
    <StyledContainer>
      <BpdSelect
        label={'Request Type'}
        required
        value={requestType}
        items={options}
        onChange={handleChange}
      />
    </StyledContainer>
  )
}

export default DealReqestTypeSelect
