import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'
import { DEAL_INVESTMENT_TYPE, DEAL_STATUS } from '@bpd/ui/constants'

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
