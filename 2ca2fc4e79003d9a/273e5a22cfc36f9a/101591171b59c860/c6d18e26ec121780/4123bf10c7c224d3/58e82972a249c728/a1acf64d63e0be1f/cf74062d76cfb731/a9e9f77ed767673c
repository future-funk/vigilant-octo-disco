import {
    Builder,
    QueryBuilder,
  } from '@bpd/bpd-web/shared/data-access'
  import { Team } from '@bpd/ui/constants'
  import { generatePath } from 'react-router-dom'
  import { ENDPOINTS, DAW_TAG } from '../constants'
  
  export interface Tooltip {
    "id": number,
    "code":string,
    "group": string,
    "content": string,
    "is_deleted": boolean,
    "name":string,
    "created_dt": string,
    "created_user": string,
    "last_update_dt": string,
    "last_update_user": string
  }
  export type GetTooltipResult = Tooltip
  
  export type GetTooltipPayload = {
    tooltipId:string
  }
  
  const getTooltip = (builder: Builder) =>
    QueryBuilder.get<GetTooltipResult, GetTooltipPayload>(
      builder,
      ({ tooltipId }) => ({
        url: `${generatePath(ENDPOINTS.TOOLTIP, {tooltipId})}`,
      }),
      [DAW_TAG]
    )
  
  export default getTooltip
  