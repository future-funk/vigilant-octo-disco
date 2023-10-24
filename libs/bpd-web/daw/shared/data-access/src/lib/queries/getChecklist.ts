import { Builder, QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { fromPairs, sortBy, toPairs } from 'lodash'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, DAW_TAG } from '../constants'

export type ChecklistItem = {
  id: number
  type: 'status' | 'checkbox'
  description: string
  displayIndex: number
  isEnabled: boolean
  value?: string
}

export type GetChecklistResult = {
  checkList: Record<string, ChecklistItem[]>
}

export type GetChecklistPayload = {
  dealId: string
}

const getChecklist = (builder: Builder) =>
  QueryBuilder.get<GetChecklistResult, GetChecklistPayload>(
    builder,
    ({ dealId }) => ({
      url: `${generatePath(ENDPOINTS.CHECKLIST, { dealId })}`,
    }),
    [DAW_TAG],
    {
      transformResponse: (result: GetChecklistResult) => ({
        checkList: fromPairs(
          sortBy(toPairs(result.checkList), ([key, value]) =>
            sortBy(value, 'displayIndex')
          )
        ),
      }),
    }
  )

export default getChecklist
