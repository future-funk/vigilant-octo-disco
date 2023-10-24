import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'
import {
  PROJECT_CATEGORY,
  PROJECT_STATUS,
  RESEARCH_TEAM_CALENDAR,
} from '@bpd/ui/constants'
import { map } from 'lodash'

const uiSchema: SchemaFormTypes.SchemaForm = [
  {
    uiWidget: SchemaFormTypes.GroupWidgetTypeEnum.GroupBox,
    items: [
      {
        key: 'projects[].category',
        uiWidget: 'BpdSelect',
        props: {
          title: 'Project Category',
        },
        rule: {
          validationRule: {
            required: true,
          },
        },
        componentProps: {
          placeholder: 'Select',
          items: map(PROJECT_CATEGORY, (value) => ({ label: value, value })),
        },
      },
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
          items: map(PROJECT_STATUS, (value) => ({ label: value, value })),
        },
      },
      {
        key: 'description',
        uiWidget: 'BpdTextAreaWidget',
        props: {
          title: 'Description',
        },
        rule: {
          validationRule: {
            required: true,
          },
        },
        componentProps: {
          placeholder: 'Enter project description.',
          showCount: true,
          rows: 5,
          maxLength: 4000,
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
        uiWidget: 'GroupBox',
        items: [
          {
            key: 'projects[].calendar',
            uiWidget: 'CalendarMultiSelectBreakdownWidget',
            props: {
              title: 'Calendar',
              asyncTooltip: true,
            },
            componentProps: {
              placeholder: 'Select',
              items: map(RESEARCH_TEAM_CALENDAR, (value) => ({
                label: value,
                value,
              })),
            },
          },
          {
            uiWidget: 'FormArray',
            key: 'projects[].calendarBreakdowns.calendar',
            type: 'array',
            props: {
              filterConfig: [{ field: 'isDeleted', type: 'NEQ', value: true }],
            },
            items: [
              {
                uiWidget: 'GroupBox',
                items: [
                  {
                    key: 'projects[].calendarBreakdowns.calendar[].item',
                    uiWidget: 'BpdInput',
                    componentProps: {
                      disabled: true,
                    },
                  },
                  {
                    key: 'projects[].calendarBreakdowns.calendar[].itemDatetimeValue',
                    uiWidget: 'BpdDatePickerWidget',
                    componentProps: {
                      placeholder: 'Select date',
                    },
                  },
                ],
                sx: {
                  gap: '8px',
                  '&&& > div:first-of-type': {
                    flexBasis: '60%',
                    flexGrow: 0,
                  },
                },
              },
            ],
          } as SchemaFormTypes.FormArray,
        ],
      },
    ],
    sx: {
      padding: 3,
    },
  },
]

export default uiSchema
