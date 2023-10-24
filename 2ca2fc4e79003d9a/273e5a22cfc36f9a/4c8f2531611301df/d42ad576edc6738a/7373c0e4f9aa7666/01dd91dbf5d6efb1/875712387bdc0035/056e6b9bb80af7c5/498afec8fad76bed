import { transformQueries } from '@bpd/bpd-web/shared/data-access'
import { blueprintApiSlice } from '@bpd/bpd-web/shared/store'
import { values } from 'lodash'
import { TAGS } from '../constants'
import {
  deleteComment,
  getComments,
  getDeals,
  getHistory,
  getStaffIms,
  getStaffsReport,
  postComment,
  putComment,
  putDeal,
} from '../queries'

const api = blueprintApiSlice
  .enhanceEndpoints({ addTagTypes: values(TAGS) })
  .injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
      deleteComment: deleteComment(builder),
      getComments: getComments(builder),
      getDeals: getDeals(builder),
      getHistory: getHistory(builder),
      getStaffIms: getStaffIms(builder),
      getStaffsReport: getStaffsReport(builder),
      postComment: postComment(builder),
      putComment: putComment(builder),
      putDeal: putDeal(builder),
    }),
  })

export const queries = transformQueries(api, '')

export default api
