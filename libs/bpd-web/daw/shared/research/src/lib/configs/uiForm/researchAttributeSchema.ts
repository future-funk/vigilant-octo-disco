import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'
import { DEAL_SECTORS_TITLE_MAP } from '@bpd/daw/shared/core'
import { COUNTRY_LIST } from '@bpd/ui/constants'
import { map } from 'lodash'

const uiSchema: SchemaFormTypes.SchemaForm = [
  {
    uiWidget: SchemaFormTypes.GroupWidgetTypeEnum.GroupBox,
    orientation: SchemaFormTypes.Orientation.Horizontal,
    items: [
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
        key: 'rschTargetCompletionDt',
        uiWidget: 'BpdDatePickerWidget',
        props: {
          title: 'Target Completion Date',
          asyncTooltip: true,
        },
        rule: {
          validationRule: {
            required: true,
          },
        },
      },
    ],
  },
  {
    uiWidget: SchemaFormTypes.GroupWidgetTypeEnum.GroupBox,
    orientation: SchemaFormTypes.Orientation.Horizontal,
    items: [
      {
        key: 'projects[].projectRegion',
        uiWidget: 'BpdSelect',
        props: {
          title: 'Region',
        },
        rule: {
          validationRule: {
            required: true,
          },
        },
        componentProps: {
          placeholder: 'Select',
          items: [
            { label: 'Global', value: 'Global' },
            { label: 'Americas', value: 'Americas' },
            { label: 'Greater China', value: 'Greater China' },
            { label: 'Europe', value: 'Europe' },
            { label: 'Asia', value: 'Asia' },
          ],
        },
      },
      {
        key: 'projects[].country',
        uiWidget: 'BpdSelect',
        props: {
          title: 'Country',
        },
        componentProps: {
          placeholder: 'Select',
          optionFilterProp: 'label',
          showSearch: true,
          items: map(COUNTRY_LIST, (country) => ({
            label: country,
            value: country,
          })),
        },
      },
      {
        key: 'projects[].sector',
        uiWidget: 'BpdSelect',
        props: {
          title: 'Sector',
        },
        componentProps: {
          placeholder: 'Select',
          optionFilterProp: 'label',
          showSearch: true,
          items: DEAL_SECTORS_TITLE_MAP,
        },
      },
    ],
  },
  {
    key: 'workspace',
    uiWidget: 'WorkspaceTagSelectWidget',
    props: {
      title: 'Workspace',
    },
    componentProps: {
      placeholder: 'Select Workspace',
      items: [
        { key: 'ANZ', label: 'ANZ', value: 'anz' },
        { key: 'ASIG', label: 'ASIG', value: 'asig' },
        { key: 'CHINA', label: 'CHINA', value: 'cn' },
        { key: 'EUROPE', label: 'EUROPE', value: 'eu' },
        { key: 'INDIA', label: 'INDIA', value: 'in' },
        { key: 'JAPAN', label: 'JAPAN', value: 'jp' },
        { key: 'KOREA', label: 'KOREA', value: 'kr' },
        { key: 'USA', label: 'USA', value: 'us' },
      ],
    },
  },
]

export default uiSchema
