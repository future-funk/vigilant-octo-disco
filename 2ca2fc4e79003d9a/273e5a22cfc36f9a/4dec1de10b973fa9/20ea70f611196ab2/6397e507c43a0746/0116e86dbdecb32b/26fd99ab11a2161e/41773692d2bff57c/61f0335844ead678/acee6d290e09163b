import dayjs, { Dayjs } from 'dayjs'
import Highcharts from 'highcharts'
import { formatRelativeNumber, formatPercent } from '@bpd/utils/formatters'
import { TYPE } from '../constants'

const chartConfig: Highcharts.Options = {
  title: {
    align: 'left',
    margin: 0,
    style: { fontSize: '16px', fontWeight: '600', lineHeight: '22px' },
  },
  legend: {
    enabled: false,
  },
  chart: { type: 'column', height: '200px' },
  yAxis: {
    type: 'category',
    minorTickInterval: 'auto',
    labels: {
      enabled: false,
    },
    // endOnTick: false,
  },
  xAxis: {
    tickInterval: 500000000,
    showLastLabel: true,
  },
  tooltip: {
    backgroundColor: 'common.black',
    borderRadius: 10,
    shadow: false,
    style: { color: 'white' },
    outside: true,
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      groupPadding: 0,
      borderWidth: 1,
      pointPlacement: 'between',
      opacity: 0.8,
    },
  },
  noData: {
    style: {
      fontWeight: 'bold',
      fontSize: '15px',
    },
  },
}

const chartTypeConfig: Record<
  string,
  Highcharts.Options & {
    options: {
      [key: string]: {
        maxLimit?: number | Dayjs
        tickInterval?: number
        binRanges?: { min: string | number; max: string | number }[]
      }
    }
  }
> = {
  [TYPE.CHART_DEAL_SIZE]: {
    ...chartConfig,
    xAxis: {
      tickInterval: 500000000,
      showLastLabel: true,
      labels: {
        formatter(this: Highcharts.AxisLabelsFormatterContextObject) {
          return formatRelativeNumber(this.value as number, 0)
        },
      },
    },
    options: {
      default: {
        maxLimit: 1000000000,
        binRanges: [
          { min: 0, max: 200000000 },
          { min: 200000001, max: 400000000 },
          { min: 400000001, max: 600000000 },
          { min: 600000001, max: 800000000 },
          { min: 800000001, max: 1000000000 },
        ],
      },
      jp: {
        tickInterval: 50000000000,
        maxLimit: 100000000000,
        binRanges: [
          { min: 0, max: 20000000000 },
          { min: 20000000001, max: 40000000000 },
          { min: 40000000001, max: 60000000000 },
          { min: 60000000001, max: 80000000000 },
          { min: 80000000001, max: 100000000000 },
        ],
      },
      kr: {
        tickInterval: 500000000000,
        maxLimit: 1000000000000,
        binRanges: [
          { min: 0, max: 200000000000 },
          { min: 200000000001, max: 400000000000 },
          { min: 400000000001, max: 600000000000 },
          { min: 600000000001, max: 800000000000 },
          { min: 800000000001, max: 1000000000000 },
        ],
      },
    },
  },
  [TYPE.CHART_PSM]: {
    ...chartConfig,
    xAxis: {
      tickInterval: 5000,
      labels: {
        formatter(this: Highcharts.AxisLabelsFormatterContextObject) {
          return formatRelativeNumber(this.value as number, 0)
        },
      },
    },
    options: {
      default: {
        maxLimit: 2000,
        binRanges: [
          { min: 0, max: 2000 },
          { min: 2001, max: 4000 },
          { min: 4001, max: 6000 },
          { min: 6001, max: 8000 },
          { min: 8001, max: 10000 },
        ],
      },
      jp: {
        maxLimit: 1000000,
        tickInterval: 500000,
        binRanges: [
          { min: 0, max: 200000 },
          { min: 200001, max: 400000 },
          { min: 400001, max: 600000 },
          { min: 600001, max: 800000 },
          { min: 800001, max: 1000000 },
        ],
      },
      kr: {
        maxLimit: 10000000,
        tickInterval: 5000000,
        binRanges: [
          { min: 0, max: 200000 },
          { min: 2000001, max: 4000000 },
          { min: 4000001, max: 6000000 },
          { min: 6000001, max: 8000000 },
          { min: 8000001, max: 10000000 },
        ],
      },
    },
  },
  [TYPE.CHART_PSF]: {
    ...chartConfig,
    xAxis: {
      tickInterval: 500,
      labels: {
        formatter(this: Highcharts.AxisLabelsFormatterContextObject) {
          return formatRelativeNumber(this.value as number, 0)
        },
      },
    },
    options: {
      default: {
        maxLimit: 2000,
        binRanges: [
          { min: 0, max: 400 },
          { min: 401, max: 800 },
          { min: 801, max: 1200 },
          { min: 1201, max: 1600 },
          { min: 1601, max: 2000 },
        ],
      },
    },
  },
  [TYPE.CHART_CAP_RATE]: {
    ...chartConfig,
    xAxis: {
      tickInterval: 0.05,
      labels: {
        formatter(this: Highcharts.AxisLabelsFormatterContextObject) {
          return formatPercent(this.value as number, 0)
        },
      },
    },
    options: {
      default: {
        maxLimit: 0.1,
        binRanges: [
          { min: 0, max: 0.02 },
          { min: 0.02, max: 0.04 },
          { min: 0.04, max: 0.06 },
          { min: 0.06, max: 0.08 },
          { min: 0.08, max: 0.1 },
        ],
      },
    },
  },
  [TYPE.CHART_DEAL_DATE]: {
    ...chartConfig,
    xAxis: {
      showEmpty: false,
      startOnTick: true,
      showLastLabel: true,
      tickInterval: 2,
    },
    options: {
      default: {
        maxLimit: dayjs().subtract(6, 'year'),
        binRanges: [
          {
            min: `CURRENT_DATE - INTERVAL '3 months'`,
            max: `CURRENT_DATE - INTERVAL '12 months'`,
          },
          {
            min: `CURRENT_DATE - INTERVAL '12 months'`,
            max: `CURRENT_DATE - INTERVAL '36 months'`,
          },
          {
            min: `CURRENT_DATE - INTERVAL '36 months'`,
            max: `CURRENT_DATE - INTERVAL '60 months'`,
          },
          {
            min: `CURRENT_DATE - INTERVAL '60 months'`,
            max: `CURRENT_DATE - INTERVAL '72 months'`,
          },
        ],
      },
    },
  },
}

export default chartTypeConfig
