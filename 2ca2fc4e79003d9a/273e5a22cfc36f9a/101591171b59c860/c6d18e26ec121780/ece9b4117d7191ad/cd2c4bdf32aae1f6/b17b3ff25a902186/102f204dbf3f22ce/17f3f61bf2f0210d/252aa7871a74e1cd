import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'

const uiSchema: SchemaFormTypes.SchemaForm = [
  {
    uiWidget: 'FormArray',
    key: 'checkList.preDeal',
    type: 'array',
    items: [
      {
        uiWidget: 'GroupBox',
        orientation: SchemaFormTypes.Orientation.Horizontal,
        items: [
          {
            key: 'checkList.preDeal[].value',
            uiWidget: 'BpdSelect',
            componentProps: {
              placeholder: 'Select Status',
              sx: {
                minWidth: 125,
              },
              items: [
                { key: 'notapplicable', label: 'N/A', value: 'notapplicable' },
                {
                  key: 'inprogress',
                  label: 'In Progress',
                  value: 'inprogress',
                },
                { key: 'done', label: 'Done', value: 'done' },
              ],
            },
          },
          {
            key: 'checkList.preDeal[].description',
            uiWidget: 'ChecklistDescription',
          },
        ],
        sx: {
          gap: '8px',
          '&&& > div:first-of-type': {
            flexBasis: '10%',
            flexGrow: 0,
          },
        },
      },
    ],
  } as SchemaFormTypes.FormArray,
]

export default uiSchema
