import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'
import { DEAL_REQ_TYPE } from '@bpd/ui/constants'

const uiSchema: SchemaFormTypes.SchemaForm = [
  {
    uiWidget: 'GroupBox',
    orientation: SchemaFormTypes.Orientation.Horizontal,
    items: [
      {
        key: 'subTeam',
        uiWidget: 'BpdSelect',
        props: {
          title: 'Team',
          asyncTooltip: true,
        },
        rule: {
          validationRule: {
            required: [
              {
                field: 'requestType',
                type: 'NEQ',
                value: [DEAL_REQ_TYPE.OTHERS],
              },
            ],
          },
        },
        componentProps: {
          placeholder: 'Select',
          items: [
            {
              label: 'UK',
              value: 'UK',
            },
            {
              label: 'FRAGR',
              value: 'FRAGR',
            },
            {
              label: 'Tactical',
              value: 'Tactical',
            },
            {
              label: 'Debt',
              value: 'Debt',
            },
            {
              label: 'Other',
              value: 'Other',
            },
          ],
        },
      },
      {
        key: 'intensity',
        uiWidget: 'BpdRadioButtonGroup',
        props: {
          title: 'Deal Intensity',
        },
        rule: {
          visibilityRule: [
            {
              field: 'requestType',
              type: 'NEQ',
              value: [DEAL_REQ_TYPE.OTHERS],
            },
          ],
        },
        componentProps: {
          optionType: 'button',
          buttonStyle: 'solid',
          size: 'middle',
          fitToParent: true,
          options: [
            {
              label: 'High',
              value: 'High',
            },
            {
              label: 'Medium',
              value: 'Medium',
            },
            {
              label: 'Low',
              value: 'Low',
            },
          ],
        },
      },
    ],
    sx: {
      '&&& > div:first-of-type': {
        flexBasis: 'calc(33.33% - 8px)',
        flexGrow: 0,
      },
    },
  },
  {
    uiWidget: 'GroupBox',
    items: [
      {
        uiWidget: 'FormArray',
        key: 'staffs',
        type: 'array',
        items: [
          {
            uiWidget: 'GroupBox',
            orientation: SchemaFormTypes.Orientation.Horizontal,
            items: [
              {
                key: 'staffs[].ntid',
                uiWidget: 'StaffFieldWidget',
                rule: {
                  validationRule: {
                    required: [
                      {
                        field: 'staffs[].role',
                        type: 'EQ',
                        value: ['teamlead'],
                      },
                    ],
                  },
                },
                componentProps: {
                  placeholder: 'Search staff',
                  optionFilterProp: 'label',
                },
              },
              {
                key: 'staffs[].commitment',
                uiWidget: 'StaffCommitment',
                props: {
                  title: 'Workload',
                },
                componentProps: {
                  max: { value: 1.4 },
                  min: { value: 0 },
                  step: 0.1,
                  tooltipVisible: false,
                },
              },
            ],
          },
        ],
        sx: {
          '& > div > div:first-of-type > div:first-of-type': {
            flexBasis: 'calc(33.33% - 8px)',
            flexGrow: 0,
          },
        },
      } as SchemaFormTypes.FormArray,
    ],
  },
  {
    uiWidget: 'StaffSearchSelectWidget',
    key: 'extAugStaffs',
    props: {
      title: 'Other Region IMs',
    },
    rule: {
      visibilityRule: [
        {
          field: 'requestType',
          type: 'NEQ',
          value: [DEAL_REQ_TYPE.OTHERS],
        },
      ],
    },
    componentProps: {
      placeholder: 'Search staff',
    },
  },
  {
    uiWidget: 'RpoSelectWidget',
    key: 'participants.rpo',
    props: {
      title: 'RPO',
    },
    rule: {
      visibilityRule: [
        {
          field: 'requestType',
          type: 'NEQ',
          value: [DEAL_REQ_TYPE.OTHERS],
        },
      ],
      validationRule: {
        required: true,
      },
    },
    componentProps: {
      placeholder: 'Select RPO',
      showArrow: true,
    },
  },
]

export default uiSchema
