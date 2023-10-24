import { isArray, compact, isNil, get } from 'lodash'
import { getTeamEligibility } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import {
  searchPreset,
  searchPresetProps,
  sqlOperator,
  TypeOf,
  chartTypeConfig,
} from '../configs'
import { currencyMappingByTeam, TYPE } from '../constants'

interface InsightQueryHelperProps {
  selectedFilterValues: Record<string, any>
  viewport: string
  team: string
  geoField?: string
  type?: string
}

interface InsightTopQueryProps extends InsightQueryHelperProps {
  field: string
}

const generateEqClause = (
  field: string,
  value: string | number,
  typeOf: TypeOf
) => {
  if (typeOf === 'number') return `${field} = ${value}`

  return `${field} = '${value}'`
}

const generateInClause = (field: string, values: string[], typeOf: TypeOf) => {
  if (isArray(values) && values.length > 0) {
    if (typeOf === 'number') return `${field} IN ${values.join()}`

    return `${field} IN (${values.map((value) => `'${value}'`)})`
  }
  return ''
}

const generateBetweenClause = (
  field: string,
  operator: string,
  value: string | number,
  typeOf: TypeOf
) => {
  if (typeOf === 'number') return `${field} ${operator} ${value}`

  return `${field} ${operator} '${value}'`
}

const getValuationField = (currency: string) => {
  switch (currency) {
    case 'USD':
      return 'prop_valuation_usd'
    case 'EUR':
      return 'prop_valuation_eur'
    case 'KRW':
      return 'prop_valuation'
    default:
      return 'prop_valuation'
  }
}

const generateGeoClause = (field: string, viewport: string) => {
  return `${field} && ST_MakeEnvelope(${viewport},4326)`
}

const subQueryGenerator = ({
  selectedFilterValues,
  viewport,
  geoField,
  team,
}: InsightQueryHelperProps) => {
  const conditions: string[] = []
  const { bpInvStatus } = selectedFilterValues

  if (geoField && viewport)
    conditions.push(generateGeoClause(geoField, viewport))
  if (team && !isNil(getTeamEligibility(team)))
    conditions.push(generateEqClause('lower(team)', team, 'string'))

  searchPreset
    .filter((condition: searchPresetProps) => {
      return condition.applicableTypes.some((type) =>
        bpInvStatus.includes(type)
      )
    })
    .forEach((condition: searchPresetProps) => {
      const { filter, operator, column, typeOf } = condition
      const selectedValue = selectedFilterValues[filter]

      if (selectedValue) {
        switch (operator) {
          case sqlOperator.EQ: {
            conditions.push(generateEqClause(column, selectedValue, typeOf))
            break
          }
          case sqlOperator.IN: {
            conditions.push(generateInClause(column, selectedValue, typeOf))
            break
          }
          case sqlOperator.GTE:
          case sqlOperator.LTE: {
            conditions.push(
              generateBetweenClause(column, operator, selectedValue, typeOf)
            )
            break
          }
        }
      }
    })

  const selectQuery = `SELECT * FROM VW_DIRECTORY`
  const whereCondition =
    conditions.length > 0 ? compact(conditions).join(' AND ') : '1=1'
  return `${selectQuery} WHERE ${whereCondition}`
}

const metricQueryGenerator = ({
  team,
  type,
  selectedFilterValues,
  viewport,
}: InsightQueryHelperProps) => {
  const currency = currencyMappingByTeam[team] || 'USD'
  const valuationField = getValuationField(currency)

  let selectClause = ''

  switch (type) {
    case TYPE.MARKET_AVG_CAP_RATE:
      selectClause = `SELECT SUM(t.deal_trade_close_cap_rate * t.${valuationField})/SUM(t.${valuationField}) as value, count(1) AS dealcount, '${currency}' AS currency`
      break
    case TYPE.MARKET_AVG_PSF:
      selectClause = `SELECT SUM(t.${valuationField})/SUM(t.prop_sqft) AS value, count(1) AS dealcount, '${currency}' AS currency`
      break
    case TYPE.MARKET_AVG_PSM:
      selectClause = `SELECT SUM(t.${valuationField})/SUM(t.prop_sqm) AS value, count(1) AS dealcount, '${currency}' AS currency`
  }

  let additionalWhereClause = `AND t.prop_sqft IS NOT NULL AND t.prop_sqm IS NOT NULL`
  if (type === TYPE.MARKET_AVG_CAP_RATE)
    additionalWhereClause = 'AND t.deal_trade_close_cap_rate IS NOT NULL'

  return `${selectClause} FROM (${subQueryGenerator({
    selectedFilterValues,
    viewport,
    geoField: 'the_geom',
    team,
  })}) t WHERE t.bp_inv_status='Market' AND t.${valuationField} IS NOT NULL AND t.deal_trade_close_dt > CURRENT_DATE - INTERVAL '12 months' ${additionalWhereClause}`
}

const topItemsQueryGenerator = ({
  selectedFilterValues,
  viewport,
  team,
  field,
}: InsightTopQueryProps) => {
  const currency = currencyMappingByTeam[team] || 'USD'
  const valuationField = getValuationField(currency)

  let additionalWhere = `AND t.${field} NOT IN ('N/A', 'NA', '-') AND t.${field} IS NOT NULL`
  if (field === 'proj_sector') additionalWhere = ''

  return `SELECT t.${field} AS name, count(t.${field}) AS dealcount, SUM(t.${valuationField}) as valuation, '${currency}' AS currency
    FROM (${subQueryGenerator({
      selectedFilterValues,
      viewport,
      geoField: 'the_geom',
      team,
    })}) t  WHERE t.bp_inv_status='Market' AND t.${valuationField} IS NOT NULL ${additionalWhere} GROUP BY t.${field} ORDER BY valuation DESC LIMIT 5`
}

const chartQueryGenerator = ({
  type,
  team,
  selectedFilterValues,
  viewport,
}: InsightQueryHelperProps) => {
  if (!type) return ''
  const chartConfig = chartTypeConfig[type]
  if (isNil(chartConfig)) return

  const { binRanges } = get(chartConfig?.options, team)
    ? chartConfig.options[team]
    : chartConfig.options['default']

  const currency = currencyMappingByTeam[team] || 'USD'
  let valuationField = getValuationField(currency)

  let selectClause = ''

  switch (type) {
    case TYPE.CHART_DEAL_SIZE: {
      selectClause = `SELECT MINCR, MAXCR, count(cartodb_id) FROM `
      binRanges.forEach(
        (
          element: { min: string | number; max: string | number },
          index: number
        ) => {
          if (index === 0)
            selectClause += `(SELECT ${element.min} AS MINCR, ${element.max} AS MAXCR `
          else if (index === binRanges.length - 1)
            selectClause += `UNION ALL SELECT ${element.min}, MAX(${valuationField})`
          else
            selectClause += `UNION ALL SELECT ${element.min}, ${element.max} `
        }
      )
      break
    }
    case TYPE.CHART_PSM: {
      valuationField = `${valuationField}/prop_sqm`
      selectClause = `SELECT MINCR, MAXCR, count(cartodb_id) FROM `
      binRanges.forEach(
        (
          element: { min: string | number; max: string | number },
          index: number
        ) => {
          if (index === 0)
            selectClause += `(SELECT ${element.min} AS MINCR, ${element.max} AS MAXCR `
          else if (index === binRanges.length - 1)
            selectClause += `UNION ALL SELECT ${element.min}, MAX(${valuationField})`
          else
            selectClause += `UNION ALL SELECT ${element.min}, ${element.max} `
        }
      )
      break
    }
    case TYPE.CHART_PSF: {
      valuationField = `${valuationField}/prop_sqft`
      selectClause = `SELECT MINCR, MAXCR, count(cartodb_id) FROM `
      binRanges.forEach(
        (
          element: { min: string | number; max: string | number },
          index: number
        ) => {
          if (index === 0)
            selectClause += `(SELECT ${element.min} AS MINCR, ${element.max} AS MAXCR `
          else if (index === binRanges.length - 1)
            selectClause += `UNION ALL SELECT ${element.min}, MAX(${valuationField})`
          else
            selectClause += `UNION ALL SELECT ${element.min}, ${element.max} `
        }
      )
      break
    }
    case TYPE.CHART_CAP_RATE: {
      valuationField = 'bp_cap_rate'
      selectClause = `SELECT MINCR, MAXCR, count(cartodb_id) FROM `
      binRanges.forEach(
        (
          element: { min: string | number; max: string | number },
          index: number
        ) => {
          if (index === 0)
            selectClause += `(SELECT ${element.min} AS MINCR, ${element.max} AS MAXCR `
          else if (index === binRanges.length - 1)
            selectClause += `UNION ALL SELECT ${element.min}, MAX(${valuationField})`
          else
            selectClause += `UNION ALL SELECT ${element.min}, ${element.max} `
        }
      )
      break
    }
    case TYPE.CHART_DEAL_DATE: {
      valuationField = 'deal_vintage_dt'
      selectClause = `SELECT MINCR, MAXCR, count(cartodb_id) FROM
      (SELECT CURRENT_DATE - INTERVAL '3 months' AS MINCR, CURRENT_DATE AS MAXCR 
        UNION ALL SELECT CURRENT_DATE - INTERVAL '12 months', CURRENT_DATE - INTERVAL '3 months'
        UNION ALL SELECT CURRENT_DATE - INTERVAL '36 months', CURRENT_DATE - INTERVAL '12 months' 
        UNION ALL SELECT CURRENT_DATE - INTERVAL '60 months', CURRENT_DATE - INTERVAL '36 months' 
        UNION ALL SELECT MIN(${valuationField}), CURRENT_DATE - INTERVAL '60 months'`
      break
    }
    default:
      break
  }

  const whereClause = ` FROM VW_DIRECTORY where lower(team) = '${team}') buckets
        LEFT OUTER JOIN (${subQueryGenerator({
          selectedFilterValues,
          viewport,
          geoField: 'the_geom',
          team,
        })}) d
        ON d.${valuationField} BETWEEN mincr and maxcr AND bp_inv_status = 'Market'
        GROUP BY MINCR, MAXCR
        ORDER BY MINCR`

  return selectClause + whereClause
}

export {
  metricQueryGenerator,
  topItemsQueryGenerator,
  chartQueryGenerator,
  subQueryGenerator,
  getValuationField,
}
