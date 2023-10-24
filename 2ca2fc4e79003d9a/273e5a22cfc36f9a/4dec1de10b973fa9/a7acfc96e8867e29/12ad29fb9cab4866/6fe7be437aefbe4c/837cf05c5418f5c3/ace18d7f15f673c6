import { FilterType } from '@bpd/bpd-web/shared/ui'
import {
  TOTAL_GLA_CHART,
  TOTAL_RENT_CHART,
  REVERSION_POTENTIAL_CHART,
  AVERAGE_WALE,
  OCCUPANCY_CHART,
  TENANT_EXPOSURE_CHART_BY_SECTOR,
  TENANT_EXPOSURE_CHART_BY_COUNTRY,
  TENANCY_WALE_PROFILE_CHART_BY_SPACE,
  TENANCY_WALE_PROFILE_CHART_BY_RENT,
  TENANCY_WALE_PROFILE_CHART_BY_PROPERTIES,
} from './ANALYTICS_CHART_TYPES'

export const MAP_ASSET_TYPE_FILTER: Record<
  string,
  [string, FilterType, any][]
> = {
  [TOTAL_GLA_CHART]: [
    ['totalGlaSqm', 'NEQ', null],
    ['totalGlaSqm', 'NEQ', undefined],
  ],
  [TOTAL_RENT_CHART]: [
    ['totalRentPaEur', 'NEQ', null],
    ['totalRentPaEur', 'NEQ', undefined],
  ],
  [REVERSION_POTENTIAL_CHART]: [
    ['reversionPotential', 'NEQ', null],
    ['reversionPotential', 'NEQ', undefined],
  ],
  [OCCUPANCY_CHART]: [
    ['occupancy', 'NEQ', null],
    ['occupancy', 'NEQ', undefined],
  ],
  [AVERAGE_WALE]: [
    ['wale', 'NEQ', null],
    ['walb', 'NEQ', null],
    ['wale', 'NEQ', undefined],
    ['walb', 'NEQ', undefined],
  ],
  [TENANT_EXPOSURE_CHART_BY_SECTOR]: [
    ['totalGlaSqm', 'NEQ', null],
    ['totalGlaSqm', 'NEQ', undefined],
  ],
  [TENANT_EXPOSURE_CHART_BY_COUNTRY]: [
    ['totalGlaSqm', 'NEQ', null],
    ['totalGlaSqm', 'NEQ', undefined],
  ],
  [TENANCY_WALE_PROFILE_CHART_BY_SPACE]: [
    ['totalGlaSqm', 'NEQ', null],
    ['totalGlaSqm', 'NEQ', undefined],
  ],
  [TENANCY_WALE_PROFILE_CHART_BY_RENT]: [
    ['totalRentPaEur', 'NEQ', null],
    ['totalRentPaEur', 'NEQ', undefined],
  ],
  [TENANCY_WALE_PROFILE_CHART_BY_PROPERTIES]: [['leasesCount', 'GT', 0]],
}
