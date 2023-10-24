import {
  Builder,
  createQueryParams,
  QueryBuilder,
} from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, DAW_TAG } from '../constants'

export interface RekiProject {
  projAttr: {
    uId: string
    id: string
    reporting_date: string | null
    name: string
    strategy: string
    investment_vehicle: string
    reki_mgmt_team: string
    mgmt_team: string
    income_producing_pctg: number
    gic_sharehldg: number
    investment_start_date: string | null
    investment_end_date: string | null
    region: string
    country: string
    currency: string
    sector: string
    public_private: string
    risk_score_category_current: string | null
    re_edms: string
    deep_link: string
    general_partner_name: string | null
    asset_type: string
    embedded_opco: boolean
    discretion_ability_scale: string | null
    development_aum: string | null
    parent_group_id: string | null
    programmatic_jv: boolean
    promote_structure: boolean
    promote_currency: string | null
    breakdowns: {
      sector: { item: string; itemAumPct: number }[] | null
      country: { item: string; itemAumPct: number }[] | null
      asset_type: { item: string; itemAumPct: number }[] | null
    }
  }
  proj_app: {
    uid: string
    id: string
    approval_date: string
    link_to_daw: string
    type: string
    transaction_amount: number | null
    net_equity_commitment: number
    net_equity_commitment_usd: number
    cumulative_total_inv_cmt: number
    cumulative_total_inv_cmt_usd: number
    project_irr: number | null
    equity_irr: number | null
    hurdle_rate: number | null
    hold_irr: number | null
    hold_hurdle_rate: number | null
    development_irr: number | null
    development_hurdle_rate: number | null
    dqm_loan_amount: number | null
    dqm_loan_amount_usd: number | null
    date_refresh: string
    equity_multiple_lcy: number | null
    updated_by_user_id: number | null
    updated_date: string | null
    added_by_user_id: string | null
    added_date: string | null
  }
  proj_fe: {
    uid: string
    projectid: string
    reportingdate: string
    gmv: number | null
    nmv: number | null
    fec: number | null
    aum: number | null
    gaum: number | null
    directloans: number | null
    indirectloaneffctrls: number | null
    fcc: number | null
    swapvaluation: number | null
    gmvbfdeftax: number | null
    deferredtax: number | null
    indirectloanwoeffctr: number | null
    presales: string | null
  }
}

export type GetRekiProjectDetailsResult = RekiProject

export type GetRekiProjectDetailsPayload = {
  projCode: string
}

const getRekiProjectDetails = (builder: Builder) =>
  QueryBuilder.get<GetRekiProjectDetailsResult, GetRekiProjectDetailsPayload>(
    builder,
    ({ projCode }) => ({
      url: `${generatePath(ENDPOINTS.REKI_PROJECT_DETAILS, { projCode })}`,
    }),
    [DAW_TAG]
  )

export default getRekiProjectDetails
