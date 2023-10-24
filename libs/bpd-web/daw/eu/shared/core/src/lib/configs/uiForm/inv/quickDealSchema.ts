import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'
import {
  DEAL_INVESTMENT_TYPE,
  DEAL_STATUS,
  DEAL_INVESTEMENT_THEME,
} from '@bpd/ui/constants'

const uiSchema: SchemaFormTypes.SchemaForm = [
  {
    uiWidget: SchemaFormTypes.GroupWidgetTypeEnum.GroupBox,
    items: [
      {
        key: 'status',
        uiWidget: 'BpdSelect',
        props: {
          title: 'Deal Stage',
        },
        rule: {
          validationRule: {
            required: true,
          },
        },
        componentProps: {
          placeholder: 'Select',
          items: [
            {
              label: DEAL_STATUS.NEW_DEAL_FOR_DISCUSSION,
              value: DEAL_STATUS.NEW_DEAL_FOR_DISCUSSION,
            },
            {
              label: DEAL_STATUS.UNDER_CONSIDERATION,
              value: DEAL_STATUS.UNDER_CONSIDERATION,
            },
            { label: DEAL_STATUS.KIV, value: DEAL_STATUS.KIV },
            { label: DEAL_STATUS.DEAD, value: DEAL_STATUS.DEAD },
          ],
        },
      },
      {
        key: 'investmentType',
        uiWidget: 'BpdSelect',
        props: {
          title: 'Investment Type',
        },
        rule: {
          validationRule: {
            required: true,
          },
        },
        componentProps: {
          placeholder: 'Select',
          items: [
            {
              label: DEAL_INVESTMENT_TYPE.EQUITY,
              value: DEAL_INVESTMENT_TYPE.EQUITY,
            },
            {
              label: DEAL_INVESTMENT_TYPE.PREFERRED_EQUITY,
              value: DEAL_INVESTMENT_TYPE.PREFERRED_EQUITY,
            },
            {
              label: DEAL_INVESTMENT_TYPE.DEBT,
              value: DEAL_INVESTMENT_TYPE.DEBT,
            },
            {
              label: DEAL_INVESTMENT_TYPE.LISTED_EQUITY,
              value: DEAL_INVESTMENT_TYPE.LISTED_EQUITY,
            },
          ],
        },
      },
      {
        key: 'investmentTheme',
        uiWidget: 'BpdSelect',
        props: {
          title: 'Investment Theme',
        },
        rule: {
          validationRule: {
            required: true,
          },
        },
        componentProps: {
          placeholder: 'Select',
          items: [
            {
              label: DEAL_INVESTEMENT_THEME.TAILWIND_SECTORS,
              value: DEAL_INVESTEMENT_THEME.TAILWIND_SECTORS,
            },
            {
              label: DEAL_INVESTEMENT_THEME.MISPRICED_MARKETS,
              value: DEAL_INVESTEMENT_THEME.MISPRICED_MARKETS,
            },
            {
              label: DEAL_INVESTEMENT_THEME.MANAGEMENT_ALPHA,
              value: DEAL_INVESTEMENT_THEME.MANAGEMENT_ALPHA,
            },
            {
              label: DEAL_INVESTEMENT_THEME.OPPORTUNISTIC_TRANSACTIONS,
              value: DEAL_INVESTEMENT_THEME.OPPORTUNISTIC_TRANSACTIONS,
            },
            {
              label: DEAL_INVESTEMENT_THEME.OTHERS,
              value: DEAL_INVESTEMENT_THEME.OTHERS,
            },
          ],
        },
      },
      {
        key: 'successProbability',
        uiWidget: 'BpdSelect',
        props: {
          title: '% Probability of Success',
        },
        rule: {
          validationRule: {
            required: true,
          },
        },
        componentProps: {
          placeholder: 'Select',
          items: [
            { label: '0-25%', value: '0-25%' },
            { label: '25-50%', value: '25-50%' },
            { label: '50-75%', value: '50-75%' },
            { label: '75-100%', value: '75-100%' },
          ],
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
    ],
    sx: {
      padding: 3,
    },
  },
]

export default uiSchema
