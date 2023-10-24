import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'
import { PROJECT_STATUS } from '@bpd/ui/constants'
import { map, omit } from 'lodash'

const uiSchema: SchemaFormTypes.SchemaForm = [
  {
    uiWidget: SchemaFormTypes.GroupWidgetTypeEnum.GroupBox,
    items: [
      {
        key: 'status',
        uiWidget: 'BpdSelect',
        props: {
          title: 'Project Status',
        },
        rule: {
          validationRule: {
            required: true,
          },
        },
        componentProps: {
          placeholder: 'Select',
          items: map(omit(PROJECT_STATUS, 'RECURRING'), (value) => ({
            label: value,
            value,
          })),
        },
      },
      {
        key: 'projects[].name',
        uiWidget: 'ProjNameInputWidget',
        props: {
          title: 'Name',
          asyncTooltip: true,
        },
        rule: {
          validationRule: {
            required: true,
            validationMsgs: {
              '302': 'Required',
            },
          },
        },
        componentProps: {
          placeholder: 'Enter Project Name',
        },
      },
      {
        key: 'vintageDt',
        uiWidget: 'BpdDatePickerWidget',
        props: {
          title: 'Date Added',
          asyncTooltip: true,
        },
        rule: {
          validationRule: {
            required: true,
          },
        },
      },
      {
        key: 'edmsFolder',
        uiWidget: 'BpdInputWidget',
        props: {
          title: 'EDMS Folder',
          asyncTooltip: true,
        },
        componentProps: {
          placeholder: 'e.g. http://edms.gic.com.sg',
          prefixIcon: 'folder',
        },
      },
      {
        key: 'dealSharedFolder',
        uiWidget: 'BpdInputWidget',
        props: {
          title: 'Project Shared Folder',
          asyncTooltip: true,
        },
        componentProps: {
          placeholder: 'e.g. X:\\your-project-folder',
          prefixIcon: 'folder',
        },
      },
    ],
    sx: {
      padding: 3,
    },
  },
]

export default uiSchema
