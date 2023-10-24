import { API_BASE_URL, QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { LOGISTICS_BPD_API_TAG } from '../constants'
import type { LogisticsBpdApiBuilder } from '../types'

export interface PostUserCardSelection {
  ids: (string | number)[]
}

export type PostUserCardSelectionResult = string

const postUserCardSelection = (builder: LogisticsBpdApiBuilder) =>
  QueryBuilder.post<PostUserCardSelectionResult, PostUserCardSelection>(
    builder,
    ({ ids }) => ({
      url: `${API_BASE_URL}/eu/eulg/user-selections`,
      body: { ids },
    }),
    [LOGISTICS_BPD_API_TAG]
  )

export default postUserCardSelection
