import dayjs from 'dayjs'
import { capitalize, startCase } from 'lodash'
import {
  formatCurrency,
  formatMetres,
  formatNumber,
  formatNumberInMillions,
  formatPercent,
  formatRelativeNumber,
} from '@bpd/utils/formatters'
import { ValueFormatterParams, ColDef } from 'ag-grid-community'

type FormatterDef = Pick<ColDef, 'valueFormatter' | 'comparator'>

interface FormatterTypes {
  date: FormatterDef
  currency: FormatterDef
  distance: FormatterDef
  number: FormatterDef
  number1Dp: FormatterDef
  number2Dp: FormatterDef
  percentage: FormatterDef
  percentage1Dp: FormatterDef
  percentage2Dp: FormatterDef
  yesOrNo: FormatterDef
  million: FormatterDef
  million1Dp: FormatterDef
  million2Dp: FormatterDef
  millionWithoutUnit: FormatterDef
  formatRelativeNumber: FormatterDef
  formatRelativeNumber1Dp: FormatterDef
  formatRelativeNumber2Dp: FormatterDef
  capitalize: FormatterDef
  startCase: FormatterDef
}
const CellFormattingTypes: FormatterTypes = {
  date: {
    valueFormatter: ({ value }: ValueFormatterParams) =>
      value ? dayjs(value).format('DD MMM YYYY') : '',
    comparator: (nodeA: string, nodeB: string): number =>
      dayjs(nodeA).isAfter(dayjs(nodeB)) ? 1 : -1,
  },
  currency: {
    valueFormatter: ({ value }: ValueFormatterParams) => formatCurrency(value),
  },
  million: {
    valueFormatter: ({ value }: ValueFormatterParams) =>
      formatNumberInMillions(value),
  },
  million1Dp: {
    valueFormatter: ({ value }: ValueFormatterParams) =>
      formatNumberInMillions(value, 1),
  },
  million2Dp: {
    valueFormatter: ({ value }: ValueFormatterParams) =>
      formatNumberInMillions(value, 2),
  },
  millionWithoutUnit: {
    valueFormatter: ({ value }: ValueFormatterParams) =>
      formatNumberInMillions(value, 0, false),
  },
  distance: {
    valueFormatter: ({ value }: ValueFormatterParams) =>
      value ? (formatMetres(value) ?? '-').toString() : '-',
  },
  number: {
    valueFormatter: ({ value }: ValueFormatterParams) => formatNumber(value),
  },
  number1Dp: {
    valueFormatter: ({ value }: ValueFormatterParams) => formatNumber(value, 1),
  },
  number2Dp: {
    valueFormatter: ({ value }: ValueFormatterParams) => formatNumber(value, 2),
  },
  percentage: {
    valueFormatter: ({ value }: ValueFormatterParams) =>
      formatPercent(value, 0),
  },
  percentage1Dp: {
    valueFormatter: ({ value }: ValueFormatterParams) =>
      formatPercent(value, 1),
  },
  percentage2Dp: {
    valueFormatter: ({ value }: ValueFormatterParams) =>
      formatPercent(value, 2),
  },
  yesOrNo: {
    valueFormatter: ({ value }: ValueFormatterParams) => (value ? 'Yes' : 'No'),
  },
  formatRelativeNumber: {
    valueFormatter: ({ value }: ValueFormatterParams) =>
      formatRelativeNumber(value),
  },
  formatRelativeNumber1Dp: {
    valueFormatter: ({ value }: ValueFormatterParams) =>
      formatRelativeNumber(value, 1),
  },
  formatRelativeNumber2Dp: {
    valueFormatter: ({ value }: ValueFormatterParams) =>
      formatRelativeNumber(value, 2),
  },
  capitalize: {
    valueFormatter: ({ value }: ValueFormatterParams) => capitalize(value),
  },
  startCase: {
    valueFormatter: ({ value }: ValueFormatterParams) => startCase(value),
  },
}

export default CellFormattingTypes
