import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'
import { StaffFieldWidgetProps } from '@bpd/daw/shared/core'

const uiSchema: SchemaFormTypes.SchemaForm = [
  {
    uiWidget: 'FormArray',
    key: 'staffs',
    type: 'array',
    orientation: SchemaFormTypes.Orientation.Horizontal,
    items: [
      {
        key: 'staffs[].ntid',
        uiWidget: 'StaffFieldWidget',
        componentProps: {
          placeholder: 'Search staff',
          optionFilterProp: 'label',
          labelByRole: {
            teamlead: 'Project Lead #1',
            teamlead2: 'Project Lead #2',
          },
        } as Partial<StaffFieldWidgetProps>,
      },
    ],
    sx: {
      '&&& > .sf-grp-bx': {
        flexBasis: 'calc(33.33% - 12px)',
        flexGrow: 0,
      },
      flexWrap: 'wrap',
    },
  } as SchemaFormTypes.FormArray,
]

export default uiSchema
