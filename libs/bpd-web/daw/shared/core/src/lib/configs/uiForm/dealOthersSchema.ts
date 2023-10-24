import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'

const uiSchema: SchemaFormTypes.SchemaForm = [
  {
    key: 'comment',
    uiWidget: 'BpdTextAreaWidget',
    props: {
      title: 'General Commentary',
    },
    rule: {
      validationRule: {
        required: true,
      },
    },
    componentProps: {
      placeholder: 'General commentary.',
      showCount: true,
      rows: 3,
      maxLength: 4000,
    },
  },
]

export default uiSchema
