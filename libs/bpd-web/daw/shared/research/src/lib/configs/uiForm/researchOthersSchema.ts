import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'

const uiSchema: SchemaFormTypes.SchemaForm = [
  {
    key: 'comment',
    uiWidget: 'BpdTextAreaWidget',
    props: {
      title: 'Project Updates',
    },
    rule: {
      validationRule: {
        required: true,
      },
    },
    componentProps: {
      placeholder: 'Project updates',
      showCount: true,
      rows: 3,
      maxLength: 4000,
    },
  },
]

export default uiSchema
