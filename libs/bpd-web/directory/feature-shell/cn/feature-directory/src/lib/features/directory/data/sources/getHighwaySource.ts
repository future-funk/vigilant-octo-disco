import { scopeId } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { createCartoQuery } from '@bpd/vendors/carto'

export const HIGHWAY_SOURCE_ID = scopeId('HIGHWAY_SOURCE_ID')

const getHighwaySource = () =>
  createCartoQuery(
    HIGHWAY_SOURCE_ID,
    `SELECT * FROM road4 WHERE (gb > 420000 AND gb < 420300)`
  )

export default getHighwaySource
