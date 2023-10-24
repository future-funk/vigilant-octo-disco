import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'

const uiSchema: SchemaFormTypes.SchemaForm = [
  {
    uiWidget: 'GroupBox',
    orientation: SchemaFormTypes.Orientation.Horizontal,
    items: [
      {
        key: 'projects[].approval.nec',
        uiWidget: 'ProjCurrencySymbolWithXeUsdInfoWidget',
        props: {
          title: 'NEC to be released',
          asyncTooltip: true,
        },
        rule: {
          validationRule: {
            required: true,
          },
        },
      },
      {
        key: 'projects[].approval.tic',
        uiWidget: 'SoftCommitmentTicInputWidget',
        props: {
          title: 'TIC to be released',
          asyncTooltip: true,
        },
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
      },
      {
        uiWidget: 'BpdEmptyWidget',
      },
    ],
  },
]

export default uiSchema
