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
    items: [],
    sx: {
      paddingTop: 2,
      borderBottom: '1px solid',
      borderColor: 'null.border',
    },
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
  {
    uiWidget: 'GroupBox',
    orientation: SchemaFormTypes.Orientation.Horizontal,
    items: [
      {
        key: 'projects[].uw.projectIrrBmk',
        uiWidget: 'BpdInputNumberPercentage',
        props: {
          title: 'Project IRR (BMK)',
          asyncTooltip: true,
        },
        componentProps: {},
      },
      {
        key: 'projects[].uw.netEquityIrrBmk',
        uiWidget: 'BpdInputNumberPercentage',
        props: {
          title: 'Net Equity IRR (BMK)',
          asyncTooltip: true,
        },
        componentProps: {},
      },
      {
        key: 'projects[].uw.hurdleRateBmk',
        uiWidget: 'BpdInputNumberPercentage',
        props: {
          title: 'Risk-Adj Hurdle Rate (BMK)',
          asyncTooltip: true,
        },
        componentProps: {},
      },
    ],
  },
]

export default uiSchema
