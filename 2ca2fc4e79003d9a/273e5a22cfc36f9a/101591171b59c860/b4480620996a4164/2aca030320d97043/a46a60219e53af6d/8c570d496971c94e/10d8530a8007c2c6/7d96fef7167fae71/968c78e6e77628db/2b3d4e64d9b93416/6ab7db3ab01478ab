import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'
import { DEAL_SECTORS_TITLE_MAP } from '@bpd/daw/shared/core'
import {
  COUNTRY_LIST,
  DEAL_STRATEGY,
  PROJECT_MANAGEMENT_TEAM,
  PROJECT_STATUS,
} from '@bpd/ui/constants'
import { map } from 'lodash'

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
          items: map(PROJECT_STATUS, (value) => ({ label: value, value })),
        },
      },
      {
        key: 'projects[].name',
        uiWidget: 'ProjNameInputWidget',
        props: {
          title: 'Name',
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
        key: 'projects[].strategy',
        uiWidget: 'BpdSelect',
        props: {
          title: 'Strategy',
        },
        componentProps: {
          placeholder: 'Select',
          items: [
            {
              label: DEAL_STRATEGY.RE_BRICKS_AND_MORTAR,
              value: DEAL_STRATEGY.RE_BRICKS_AND_MORTAR,
            },
            {
              label: DEAL_STRATEGY.RE_DEBT,
              value: DEAL_STRATEGY.RE_DEBT,
            },
            {
              label: DEAL_STRATEGY.IMC_SUSTAINABILITY_RE,
              value: DEAL_STRATEGY.IMC_SUSTAINABILITY_RE,
            },
            {
              label: DEAL_STRATEGY.IMC_BRICKS_AND_MORTAR,
              value: DEAL_STRATEGY.IMC_BRICKS_AND_MORTAR,
            },
            {
              label: DEAL_STRATEGY.IMC_DEBT,
              value: DEAL_STRATEGY.IMC_DEBT,
            },
          ],
        },
      },
      {
        key: 'projects[].dqmDebtType',
        uiWidget: 'BpdSelect',
        props: {
          title: 'Core/Non-Core',
        },
        rule: {
          visibilityRule: [
            {
              field: 'projects[].strategy',
              type: 'EQ',
              value: [
                DEAL_STRATEGY.RE_BRICKS_AND_MORTAR,
                DEAL_STRATEGY.IMC_BRICKS_AND_MORTAR,
              ],
            },
          ],
          validationRule: {
            required: [
              {
                field: 'projects[].strategy',
                type: 'EQ',
                value: [
                  DEAL_STRATEGY.RE_BRICKS_AND_MORTAR,
                  DEAL_STRATEGY.IMC_BRICKS_AND_MORTAR,
                ],
              },
            ],
          },
        },
        componentProps: {
          placeholder: 'Select',
          items: [
            {
              label: 'Core',
              value: 'Core',
            },
            {
              label: 'Non-Core (Debt)',
              value: 'Non-Core (Debt)',
            },
            {
              label: 'Non-Core (Unlisted)',
              value: 'Non-Core (Unlisted)',
            },
            {
              label: 'Non-Core (Listed)',
              value: 'Non-Core (Listed)',
            },
          ],
        },
      },
      {
        key: 'projects[].mgmtTeam',
        uiWidget: 'BpdSelect',
        props: {
          title: 'Management Team',
        },
        componentProps: {
          placeholder: 'Select',
          showSearch: true,
          items: map(PROJECT_MANAGEMENT_TEAM, ([label, value]) => ({
            label,
            value,
            key: value,
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
          items: DEAL_SECTORS_TITLE_MAP,
          showSearch: true,
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
          items: map(COUNTRY_LIST, (country) => ({
            label: country,
            value: country,
          })),
        },
      },
      {
        key: 'vintageDt',
        uiWidget: 'BpdDatePickerWidget',
        props: {
          title: 'Date Added',
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
