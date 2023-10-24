import { INVESTMENT_PROCESS_ROUTES } from '@bpd/bpd-web/shared/config'
import { chain, find } from 'lodash'
import { matchPath, PathMatch } from 'react-router-dom'

const patterns = [
  INVESTMENT_PROCESS_ROUTES.EU.CREATE_DEAL.replace('eu', ':team'),
  INVESTMENT_PROCESS_ROUTES.EU.CREATE_TRACKER.replace('eu', ':team'),
]

export interface utilGetReqTypeFromLocationProps {
  fullpath: string
}
const utilGetReqTypeFromLocation = ({
  fullpath,
}: utilGetReqTypeFromLocationProps) => {
  return chain(patterns)
    .find((pattern) => Boolean(matchPath(pattern, fullpath)))
    .thru((pattern) =>
      pattern ? matchPath(pattern, fullpath)?.params['type'] : null
    )
    .value()
}
export default utilGetReqTypeFromLocation
