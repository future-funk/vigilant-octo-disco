import {
  Builder,
  createQueryParams,
  QueryBuilder,
} from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, DAW_TAG } from '../constants'

export type GetScrValidateResult = {
  scrValidate: {
    isValid: false
    dataPoint: {
      headroom: number
      currentProject: number
    }
  }
}

export type GetScrValidatePayload = {
  projectId?: string
  masterProject?: string
  tic: number
}

const getScrValidate = (builder: Builder) =>
  QueryBuilder.get<GetScrValidateResult, GetScrValidatePayload>(
    builder,
    ({ projectId, masterProject, tic }) => ({
      url: `${generatePath(ENDPOINTS.SCR_VALIDATE)}${createQueryParams([
        ['project_id', projectId],
        ['master_project', masterProject],
        ['tic', tic],
      ])}`,
    }),
    [DAW_TAG]
  )

export default getScrValidate
