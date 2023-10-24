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
          title: 'Additional NEC',
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
        uiWidget: 'ProjCurrencySymbolWithXeUsdInfoWidget',
        props: {
          title: 'Additional TIC',
          asyncTooltip: true,
        },
        rule: {
          validationRule: {
            required: true,
          },
        },
      },
      {
        key: 'projects[].approval.isSoftCommitment',
        uiWidget: 'BpdRadioButtonGroup',
        props: {
          title: 'Soft Commitment',
          asyncTooltip: true,
        },
        componentProps: {
          optionType: 'button',
          buttonStyle: 'solid',
          size: 'middle',
          fitToParent: true,
          options: [
            {
              label: 'Yes',
              value: true,
            },
            {
              label: 'No',
              value: false,
            },
          ],
        },
      },
    ],
  },
  {
    uiWidget: 'GroupBox',
    orientation: SchemaFormTypes.Orientation.Horizontal,
    items: [
      {
        key: 'projects[].approval.softNec',
        uiWidget: 'ProjCurrencySymbolWithXeUsdInfoWidget',
        props: {
          title: 'Soft NEC',
          asyncTooltip: true,
        },
        rule: {
          validationRule: {
            required: true,
          },
        },
      },
      {
        key: 'projects[].approval.softTic',
        uiWidget: 'ProjCurrencySymbolWithXeUsdInfoWidget',
        props: {
          title: 'Soft TIC',
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
    rule: {
      visibilityRule: [
        {
          field: 'projects[].approval.isSoftCommitment',
          type: 'EQ',
          value: true,
        },
      ],
    },
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
