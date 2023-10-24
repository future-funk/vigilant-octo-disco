import { getCaseStudy } from '@bpd/esg-ade-portal/shared/data-access'
import { find } from 'lodash'

export const getCaseStudyById = (id: string) => {
  return find(getCaseStudy(), { id })
}
