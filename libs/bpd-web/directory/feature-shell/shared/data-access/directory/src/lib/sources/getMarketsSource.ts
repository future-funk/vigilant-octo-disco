import { isNil } from 'lodash'
import { createCartoQuery } from '@bpd/vendors/carto'
import { scopeId, getTeamEligibility } from '../utils'
import { SourceLayerTypes } from '../types'

export const MARKET_SOURCE_ID = scopeId('MARKET')

const getMarketsSource = ({
  viewport,
  team,
  pointerCoordinates,
  limit,
}: SourceLayerTypes) =>
  createCartoQuery(
    MARKET_SOURCE_ID,
    `
    SELECT 
    acq_vintage_dt,
    cartodb_id,
    team,
    the_geom,
    prop_name,
    prop_address,
    prop_type,
    prop_valuation_usd,
    deal_seller,
    deal_asking_shareholding,
    deal_trade_close_buyer,
    deal_trade_close_dt,
    prop_uom,
    proj_curr,
    deal_trade_close_price,
    bp_cap_rate,
    proj_name,
    proj_id,
    proj_fwd_lvg_irr,
    proj_sector,
    prop_valuation_dt,
    prop_valuation_curr,
    bp_valuation,
    bp_valuation_puom,
    bp_status_w_type,
    source,
    bp_inv_status,
    prop_nra,
    prop_wale_area_yr,
    deal_area_uom,
    prop_thumbnail_url,
    lat,
    lng,
    the_geom_webmercator
    ${
      pointerCoordinates
        ? `, ROUND(CAST(ST_Distance(ST_GeomFromText('POINT(${pointerCoordinates.longitude} ${pointerCoordinates.latitude})'), geography(the_geom))*0.000621371 as numeric), 2) AS distance`
        : ``
    } from VW_DIRECTORY 
    WHERE bp_inv_status = 'Market'
    ${!isNil(getTeamEligibility(team)) ? `AND lower(team)='${team}'` : ''}
    ${viewport ? `AND (the_geom && ST_MakeEnvelope(${viewport}))` : ``} 
    ${limit ? `LIMIT ${limit}` : ``}`
  )

export default getMarketsSource
