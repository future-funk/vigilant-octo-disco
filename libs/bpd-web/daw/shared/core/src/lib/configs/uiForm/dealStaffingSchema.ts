import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'

const uiSchema: SchemaFormTypes.SchemaForm = [
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
                  title: 'Level of Commitment',
                },
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
                  max: { value: 5 },
                  min: { value: 0 },
                  step: 1,
                  marks: { '0': '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
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
      validationRule: {
        required: true,
      },
    },
    componentProps: {
      showArrow: true,
      placeholder: 'Select RPO',
    },
  },
]

export default uiSchema
