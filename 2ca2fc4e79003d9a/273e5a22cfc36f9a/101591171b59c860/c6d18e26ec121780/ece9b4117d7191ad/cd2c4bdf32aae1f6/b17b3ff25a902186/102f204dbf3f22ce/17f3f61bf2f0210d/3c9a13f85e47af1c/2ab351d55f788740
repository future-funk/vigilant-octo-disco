import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'

const uiSchema: SchemaFormTypes.SchemaForm = [
  {
    uiWidget: 'GroupBox',
    orientation: SchemaFormTypes.Orientation.Horizontal,
    items: [
      {
        key: 'projects[].uw.gicPrice',
        uiWidget: 'ProjCurrencySymbolWithXeUsdInfoWidget',
        props: {
          title: 'GIC Price',
          asyncTooltip: true,
        },
        componentProps: {},
      },
      {
        key: 'projects[].uw.gicCapRate',
        uiWidget: 'BpdInputNumberPercentage',
        props: {
          title: 'GIC Cap Rate',
          asyncTooltip: true,
        },
        componentProps: {},
      },
      {
        uiWidget: 'BpdEmptyWidget',
      },
    ],
  },
  {
    uiWidget: 'GroupBox',
    orientation: SchemaFormTypes.Orientation.Horizontal,
    items: [
      {
        key: 'projects[].uw.netEquityIrr',
        uiWidget: 'BpdInputNumberPercentage',
        props: {
          title: 'Net Equity IRR (LCL)',
          asyncTooltip: true,
        },
        rule: {
          validationRule: {
            required: true,
          },
        },
        componentProps: {},
      },
      {
        key: 'projects[].uw.riskHurdleRate',
        uiWidget: 'BpdInputNumberPercentage',
        props: {
          title: 'Risk-Adj Hurdle Rate (LCL)',
          asyncTooltip: true,
        },
        componentProps: {},
        rule: {
          validationRule: {
            required: true,
          },
        },
      },
      {
        uiWidget: 'BpdEmptyWidget',
      },
    ],
  },
]

export default uiSchema
