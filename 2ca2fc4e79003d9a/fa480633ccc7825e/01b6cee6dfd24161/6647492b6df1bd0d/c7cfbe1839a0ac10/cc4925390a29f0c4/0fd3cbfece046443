import { every } from 'lodash'
import getLogScale, { Extent } from './getLogScale'

const createGetPointRadius = (domain: Extent, range: Extent = [0.5, 8]) => {
  return every(domain)
    ? getLogScale({
        domain,
        range,
      })
    : () => 0
}

export default createGetPointRadius
