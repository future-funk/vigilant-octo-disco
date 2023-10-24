import { transformQueries } from '@bpd/bpd-web/shared/data-access'
import { blueprintApiSlice } from '@bpd/bpd-web/shared/store'
import { values } from 'lodash'
import { DAW_TAG } from '../constants'
import {
  getExchangeRate,
  getChecklist,
  getCounterParties,
  getStaffs,
  getTooltip,
  getSearchStaffs,
  getSearchParticipants,
  getSearchRekiProjects,
  getRekiProjectDetails,
  postDeal,
  getDeal,
  getScrValidate,
} from '../queries'

const api = blueprintApiSlice
  .enhanceEndpoints({ addTagTypes: values(DAW_TAG) })
  .injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
      getDawExchangeRate: getExchangeRate(builder),
      getDawChecklist: getChecklist(builder),
      getDawCounterParties: getCounterParties(builder),
      getDawStaffs: getStaffs(builder),
      getDawTooltip: getTooltip(builder),
      getDawSearchStaffs: getSearchStaffs(builder),
      getDawSearchParticipants: getSearchParticipants(builder),
      getDawSearchRekiProjects: getSearchRekiProjects(builder),
      getDawRekiProjectDetails: getRekiProjectDetails(builder),
      postDawDeal: postDeal(builder),
      getDawDealById: getDeal(builder),
      getDawScrValidate: getScrValidate(builder),
    }),
  })

export const DawBlueprintApiQueries = transformQueries(api, 'Daw')

export default api
