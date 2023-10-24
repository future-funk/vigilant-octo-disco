import Highcharts from 'highcharts'
import {
  chain,
  find,
  get,
  filter,
  isNull,
  sumBy,
  map,
  differenceBy,
} from 'lodash'
import { formatNumber, formatRelativeNumber } from '@bpd/utils/formatters'
import { AnalyticsChartProps } from './AnalyticsChart'
import {
  TOTAL_GLA_CHART,
  TOTAL_ASSETS_CHART,
  TOTAL_RENT_CHART,
  REVERSION_POTENTIAL_CHART,
  OCCUPANCY_CHART,
  AVERAGE_WALE,
  TENANT_EXPOSURE_CHART_BY_SECTOR,
  TENANT_EXPOSURE_CHART_BY_COUNTRY,
  TENANCY_WALE_PROFILE_CHART_BY_SPACE,
  TENANCY_WALE_PROFILE_CHART_BY_RENT,
  TENANCY_WALE_PROFILE_CHART_BY_PROPERTIES,
} from '../../constants'
import { AnalyticsResponseDto } from '../../data'

interface GetAnalyticsChartConfigProps
  extends Omit<AnalyticsChartProps, 'isError' | 'isLoading'> {}

// TODO: remove hardcode & get colors from colorPalette
const TENET_CHART_COLORS = {
  'Real Estate': '#243a81',
  Other: '#E76EA1',
  'IT/Electronics': '#FFA729',
  Pharmaceutic: '#3997BC',
  Retail: '#4B6EB2',
  Logistics: '#BCA380',
  Postal: '#008755',
  'Printing & Packaging': '#00B0F0',
  Automotive: '#48607c',
}

const chartConfig: Highcharts.Options = {
  title: {
    align: 'left',
    margin: 0,
    style: { fontSize: '12px', fontWeight: '600', lineHeight: '22px' },
  },
  legend: {
    enabled: false,
  },
  yAxis: {
    tickInterval: 2000000,
  },
  chart: { type: 'bar', marginTop: 20 },
}

const sortingOrder = {
  [TOTAL_GLA_CHART]: [
    [(item) => isNull(item.totalGlaSqm), 'totalGlaSqm'],
    ['asc', 'desc'],
  ],
  [TOTAL_RENT_CHART]: [
    [(item) => isNull(item.totalRentPaEur), 'totalRentPaEur'],
    ['asc', 'desc'],
  ],
  [TOTAL_ASSETS_CHART]: [
    [(item) => isNull(item.totalAssets), 'totalAssets'],
    ['asc', 'desc'],
  ],
  [REVERSION_POTENTIAL_CHART]: [
    [(item) => isNull(item.reversionPotential), 'reversionPotential'],
    ['asc', 'desc'],
  ],
  [OCCUPANCY_CHART]: [
    [(item) => isNull(item.occupancy), 'occupancy'],
    ['asc', 'desc'],
  ],
  [AVERAGE_WALE]: [
    [(item) => isNull(item.wale), (item) => isNull(item.walb), 'wale', 'walb'],
    ['asc', 'asc', 'desc', 'desc'],
  ],
  [TENANCY_WALE_PROFILE_CHART_BY_SPACE]: [
    [(item) => isNull(item.year), 'year'],
    ['desc', 'asc'],
  ],
  [TENANCY_WALE_PROFILE_CHART_BY_RENT]: [
    [(item) => isNull(item.year), (item) => isNull(item.year), 'year'],
    ['asc', 'desc'],
  ],
  [TENANCY_WALE_PROFILE_CHART_BY_PROPERTIES]: [
    [(item) => isNull(item.year), (item) => isNull(item.year), 'year'],
    ['asc', 'desc'],
  ],
}

const getAnalyticsChartConfig = (props: GetAnalyticsChartConfigProps) => {
  const { title, type, records } = props

  const orderedRecords = sortingOrder[type]
    ? chain(records)
        .filter(
          (record) => record?.country !== 'Total' && record?.type !== 'WALE'
        )
        .orderBy(sortingOrder[type][0], sortingOrder[type][1])
        .value()
    : filter(
        records,
        (record) => record?.country !== 'Total' && record?.type !== 'WALE'
      )

  switch (type) {
    case TOTAL_GLA_CHART:
      return {
        ...chartConfig,
        title: { ...chartConfig.title, text: title },
        xAxis: {
          categories: map(orderedRecords, (record) => record?.country),
        },
        yAxis: {
          title: { text: 'Sqm' },
          type: 'numeric',
        },
        series: [
          {
            name: 'Total GLA (sqm)',
            data: map(orderedRecords, (record) => record?.totalGlaSqm),
            color: '#243a81',
          },
        ],
      }
    case TOTAL_RENT_CHART:
      return {
        ...chartConfig,
        title: { ...chartConfig.title, text: title },
        xAxis: {
          categories: map(orderedRecords, (record) => record?.country),
        },
        yAxis: {
          title: { text: 'EUR' },
          type: 'numeric',
        },
        series: [
          {
            name: 'Total Rent',
            data: map(orderedRecords, (record) => record?.totalRentPaEur),
            color: '#243a81',
          },
        ],
      }
    case TOTAL_ASSETS_CHART:
      return {
        ...chartConfig,
        title: { ...chartConfig.title, text: title },
        xAxis: {
          categories: map(orderedRecords, (record) => record?.country),
        },
        yAxis: {
          type: 'numeric',
        },
        series: [
          {
            name: 'No. of Leases',
            data: map(orderedRecords, (record) => record?.totalAssets),
            color: '#243a81',
          },
        ],
      }
    case REVERSION_POTENTIAL_CHART:
      return {
        ...chartConfig,
        title: { ...chartConfig.title, text: title },
        xAxis: {
          categories: map(orderedRecords, (record) => record?.country),
        },
        yAxis: { type: 'percent', tickInterval: 0.05 },
        series: [
          {
            name: 'Reversion Potential',
            data: map(orderedRecords, (record) => record?.reversionPotential),
            color: '#243a81',
          },
        ],
      }
    case OCCUPANCY_CHART:
      return {
        ...chartConfig,
        title: { ...chartConfig.title, text: title },
        xAxis: {
          categories: map(orderedRecords, (record) => record?.country),
        },
        yAxis: { type: 'percent', endOnTick: false },
        series: [
          {
            name: 'occupancy rate',
            data: map(orderedRecords, (record) => record?.occupancy),
            color: '#243a81',
          },
        ],
      }
    case AVERAGE_WALE:
      return {
        ...chartConfig,
        title: { ...chartConfig.title, text: title },
        tooltip: {
          valueDecimals: 2,
        },
        xAxis: {
          categories: map(orderedRecords, (record) => record?.country),
        },
        yAxis: {
          title: { text: 'Years' },
          plotLines: [
            {
              dashStyle: 'dash',
              value: find(records, (record) => record.country === 'Total')
                ?.wale,
              width: 1,
              zIndex: 5,
            },
          ],
        },
        series: [
          {
            name: 'wale',
            data: map(orderedRecords, (record) => record?.wale),
            color: '#243a81',
          },
          {
            name: 'walb',
            data: map(orderedRecords, (record) => record?.walb),
            color: '#BCA380',
          },
        ],
      }
    case TENANT_EXPOSURE_CHART_BY_COUNTRY: {
      const sortedCategories = chain(orderedRecords)
        .groupBy('country')
        .mapValues((records) => sumBy(records, 'totalGlaSqm'))
        .toPairs()
        .orderBy([1], ['desc'])
        .map((pair) => pair[0])
        .uniq()
        .value()

      return {
        ...chartConfig,
        chart: { ...chartConfig.chart, height: 600 },
        title: { ...chartConfig.title, text: title },
        xAxis: {
          categories: sortedCategories,
        },
        yAxis: {
          type: 'numeric',
        },
        legend: {
          enabled: true,
          padding: 0,
          width: '100%',
          x: 0,
        },
        series: chain(orderedRecords)
          .groupBy('keyTenantIndustry')
          .map((projectAnalyticsByIndustry, key) => ({
            name: key,
            data: chain([
              ...projectAnalyticsByIndustry,
              ...map(
                differenceBy(
                  sortedCategories,
                  map(projectAnalyticsByIndustry, 'country')
                ),
                (country) => ({ country, totalGlaSqm: 0 })
              ),
            ])
              .orderBy(
                (record) => sortedCategories.indexOf(record.country),
                'asc'
              )
              .map(
                (record: Partial<AnalyticsResponseDto>) => record.totalGlaSqm
              )
              .value(),
            color: get(TENET_CHART_COLORS, key),
          }))
          .value(),
        plotOptions: {
          series: {
            stacking: 'normal',
            marginTop: 40, // Add 40 pixels of margin between the title and the bars
          },
        },
      }
    }
    case TENANT_EXPOSURE_CHART_BY_SECTOR: {
      const sortedCategories = chain(orderedRecords)
        .groupBy('keyTenantIndustry')
        .mapValues((records) => sumBy(records, 'totalGlaSqm'))
        .toPairs()
        .orderBy([1], ['desc'])
        .map((pair) => pair[0])
        .uniq()
        .value()

      return {
        ...chartConfig,
        chart: { ...chartConfig.chart, height: 600 },
        title: { ...chartConfig.title, text: title },
        xAxis: {
          categories: sortedCategories,
        },
        yAxis: {
          type: 'numeric',
        },
        legend: {
          enabled: true,
          padding: 0,
          width: '100%',
          x: 0,
        },
        series: chain(orderedRecords)
          .groupBy('country')
          .map((projectAnalyticsByIndustry, key) => ({
            name: key,
            data: chain([
              ...projectAnalyticsByIndustry,
              ...map(
                differenceBy(
                  sortedCategories,
                  map(projectAnalyticsByIndustry, 'keyTenantIndustry')
                ),
                (keyTenantIndustry) => ({ keyTenantIndustry, totalGlaSqm: 0 })
              ),
            ])
              .orderBy(
                (record) => sortedCategories.indexOf(record.keyTenantIndustry),
                'asc'
              )
              .map(
                (record: Partial<AnalyticsResponseDto>) => record.totalGlaSqm
              )
              .value(),
            color: get(TENET_CHART_COLORS, key),
          }))
          .value(),
        plotOptions: {
          series: {
            stacking: 'normal',
            marginTop: 40, // Add 40 pixels of margin between the title and the bars
          },
        },
      }
    }
    case TENANCY_WALE_PROFILE_CHART_BY_SPACE: {
      const spacePlotLine = formatNumber(
        find(records, (record) => record.type === 'WALE')?.totalGlaSqm,
        2
      )
      return {
        ...chartConfig,
        title: { ...chartConfig.title, text: title },
        chart: { type: 'column' },
        yAxis: { type: 'numeric', title: { text: 'Space, million, sqm' } },
        xAxis: {
          title: { text: 'Lease Expiry (Years)' },
          categories: map(orderedRecords, (record) => record?.year),
          plotLines: [
            {
              dashStyle: 'dash',
              value: find(records, (record) => record.type === 'WALE')
                ?.totalGlaSqm,
              width: 1,
              zIndex: 5,
              label: {
                text: `WALE(Space) : ${spacePlotLine} yrs`,
                verticalAlign: 'middle',
                rotation: 270,
                x: -5,
              },
            },
          ],
        },
        series: [
          {
            name: 'Space, million, sqm',
            data: map(orderedRecords, (record) => record?.totalGlaSqm),
            color: '#243a81',
          },
        ],
        tooltip: {
          useHTML: true,
          headerFormat: '<b>Lease Expiry (Years): {point.key} </b></br>',
          pointFormatter: function () {
            return `<span style="color:${this.color}">\u25CF</span> ${
              this?.series?.name
            }: <b>${formatRelativeNumber(this?.y)}</b>`
          },
        },
      }
    }
    case TENANCY_WALE_PROFILE_CHART_BY_RENT: {
      const rentPlotLine = formatNumber(
        find(records, (record) => record.type === 'WALE')?.totalRentPaEur,
        2
      )
      return {
        ...chartConfig,
        title: { ...chartConfig.title, text: title },
        chart: { type: 'column' },
        yAxis: { type: 'numeric', title: { text: 'Rent, million, EUR' } },
        xAxis: {
          title: { text: 'Lease Expiry (Years)' },
          categories: map(orderedRecords, (record) => record?.year),
          plotLines: [
            {
              dashStyle: 'dash',
              value: rentPlotLine,
              width: 1,
              zIndex: 5,
              label: {
                text: `WALE(Rent) : ${rentPlotLine} yrs`,
                verticalAlign: 'middle',
                rotation: 270,
                x: -5,
              },
            },
          ],
        },
        series: [
          {
            name: 'Rent, million, EUR',
            data: map(orderedRecords, (record) => record?.totalRentPaEur),
            color: '#243a81',
          },
        ],
        tooltip: {
          useHTML: true,
          headerFormat: '<b>Lease Expiry (Years): {point.key} </b></br>',
          pointFormatter: function () {
            return `<span style="color:${this.color}">\u25CF</span> ${
              this?.series?.name
            }: <b>${formatRelativeNumber(this?.y)}</b>`
          },
        },
      }
    }
    case TENANCY_WALE_PROFILE_CHART_BY_PROPERTIES: {
      const rentPlotLine = formatNumber(
        find(records, (record) => record.type === 'WALE')?.totalAssets,
        2
      )
      return {
        ...chartConfig,
        title: { ...chartConfig.title, text: title },
        chart: { type: 'column' },
        yAxis: { type: 'numeric', title: { text: 'No of Properties' } },
        xAxis: {
          title: { text: 'Lease Expiry (Years)' },
          categories: map(orderedRecords, (record) => record?.year),
          plotLines: [
            {
              dashStyle: 'dash',
              value: rentPlotLine,
              width: 1,
              zIndex: 5,
              label: {
                text: `WALE(No of Properties) : ${rentPlotLine} yrs`,
                verticalAlign: 'middle',
                rotation: 270,
                x: -5,
              },
            },
          ],
        },
        series: [
          {
            name: 'No of Properties',
            data: map(orderedRecords, (record) => record?.totalAssets),
            color: '#243a81',
          },
        ],
        tooltip: {
          useHTML: true,
          headerFormat: '<b>Lease Expiry (Years): {point.key} </b></br>',
          pointFormatter: function () {
            console.log(this)
            return `<span style="color:${this.color}">\u25CF</span> ${
              this?.series?.name
            }: <b>${formatRelativeNumber(this?.y)}</b>`
          },
        },
      }
    }
  }
}

export default getAnalyticsChartConfig
