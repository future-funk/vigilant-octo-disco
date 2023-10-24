import {
  BpdAutoCompleteWidgetProps,
  SchemaFormTypes,
} from '@bpd/bpd-web/shared/ui'
import { MasterProjAutoCompleteProps } from '../../../components'
import { DEAL_STRATEGY, CURRENCIES, DEAL_REQ_TYPE } from '@bpd/ui/constants'
import { map } from 'lodash'

const uiSchema: SchemaFormTypes.SchemaForm = [
  {
    uiWidget: SchemaFormTypes.GroupWidgetTypeEnum.GroupBox,
    items: [
      {
        uiWidget: SchemaFormTypes.GroupWidgetTypeEnum.GroupBox,
        orientation: SchemaFormTypes.Orientation.Horizontal,
        items: [
          {
            key: 'projects[].masterProjectCode',
            uiWidget: 'MasterProjAutoCompleteWidget',
            props: {
              title: 'Master Project',
              asyncTooltip: true,
            },
            rule: {
              validationRule: {
                required: true,
              },
            },
            componentProps: {
              placeholder: 'Search for Owned Deal',
              projImpactFields: [
                ['approval.nec', 'projApp.netEquityCommitment'],
                ['approval.tic', 'projApp.cumulativeTotalInvCmt'],
                ['name', 'projAttr.name'],
                ['embeddedOpco', 'projAttr.embeddedOpco'],
                ['discretionAbilityScale', 'projAttr.discretionAbilityScale'],
                ['developmentAum', 'projAttr.developmentAum'],
                ['parentGroupId', 'projAttr.parentGroupId'],
                ['programmaticJv', 'projAttr.programmaticJv'],
                ['promoteStructure', 'projAttr.promoteStructure'],
                ['promoteCurrency', 'projAttr.promoteCurrency'],
                ['mgmtTeam', 'projAttr.mgmtTeam'],
                ['approval.originalNec', 'projApp.netEquityCommitment'],
                ['approval.originalNecUsd', 'projApp.netEquityCommitmentUsd'],
                ['approval.originalTic', 'projApp.cumulativeTotalInvCmt'],
                ['approval.originalTicUsd', 'projApp.cumulativeTotalInvCmtUsd'],
                ['uw.netEquityIrr', 'projApp.equityIrr'],
                ['uw.riskHurdleRate', 'projApp.hurdleRate'],
                ['uw.gicInterest', 'projAttr.gicSharehldg'],
                ['masterProjectName', 'projAttr.name'],
                ['strategy', 'projAttr.strategy'],
                ['aumBreakdowns.assetType', 'projAttr.breakdowns.assetType'],
                ['aumBreakdowns.sector', 'projAttr.breakdowns.sector'],
                ['aumBreakdowns.country', 'projAttr.breakdowns.country'],
                ['sector', 'projAttr.sector'],
                ['currency', 'projAttr.currency'],
                ['country', 'projAttr.country'],
                ['assetType', 'projAttr.assetType'],
                ['investmentVehicle', 'projAttr.investmentVehicle'],
                ['approval.divAum', 'projFe.aum'],
                ['approval.divGaum', 'projFe.gaum'],
              ],
              nonProjImpactFields: [['name', 'projAttr.name']],
            } as BpdAutoCompleteWidgetProps & MasterProjAutoCompleteProps,
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
            key: 'isMnpi',
            uiWidget: 'BpdRadioButtonGroup',
            props: {
              title: 'MNPI',
              tipIcon: 'warningRed',
              tooltipProps: {
                title: 'Please make sure MNPI is correctly declared.',
                //: true,
              },
            },
            rule: {
              validationRule: {
                required: true,
              },
            },
            componentProps: {
              optionType: 'button',
              buttonStyle: 'solid',
              size: 'middle',
              fitToParent: true,
              options: [
                {
                  label: 'Yes',
                  value: true,
                },
                {
                  label: 'No',
                  value: false,
                },
              ],
            },
          },
        ],
      },
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
              placeholder: 'Enter Deal Name',
            },
          },
          {
            key: 'projects[].strategy',
            uiWidget: 'BpdSelect',
            props: {
              title: 'Strategy',
              asyncTooltip: true,
            },
            rule: {
              validationRule: {
                required: true,
              },
              disableRule: [
                {
                  field: 'requestType',
                  type: 'EQ',
                  value: [
                    DEAL_REQ_TYPE.ADD_COMMITMENT,
                    DEAL_REQ_TYPE.SOFT_COMMITMENT_RELEASE,
                    DEAL_REQ_TYPE.DIVESTMENT,
                  ],
                },
              ],
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
              asyncTooltip: true,
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
            key: 'projects[].currency',
            uiWidget: 'CurrencyAutoCompleteWidget',
            props: {
              title: 'Project Currency',
              asyncTooltip: true,
            },
            rule: {
              validationRule: {
                required: true,
              },
              disableRule: [
                {
                  field: 'requestType',
                  type: 'EQ',
                  value: [
                    DEAL_REQ_TYPE.ADD_COMMITMENT,
                    DEAL_REQ_TYPE.SOFT_COMMITMENT_RELEASE,
                    DEAL_REQ_TYPE.DIVESTMENT,
                  ],
                },
              ],
            },
            componentProps: {
              placeholder: 'Search currency',
              options: map(CURRENCIES, (item) => ({
                label: item,
                value: item,
              })),
            },
          },
          {
            key: 'projects[].approval.exchangeRate',
            uiWidget: 'ExRateFieldWidget',
            props: {
              asyncTooltip: true,
            },
            rule: {
              validationRule: {
                required: true,
              },
            },
          },
        ],
        sx: {
          '&&&.sf-grp-bx > div': {
            flexBasis: 'calc(33.33% - 11px)',
            flexGrow: 0,
          },
          flexWrap: 'wrap',
        },
      },
    ],
  },
  {
    key: 'description',
    uiWidget: 'BpdTextAreaWidget',
    props: {
      title: 'Investment Proposal Description',
      asyncTooltip: true,
    },
    componentProps: {
      placeholder:
        'If left blank, it will be populated with the first entry of General Commentary.',
      showCount: true,
      rows: 3,
      maxLength: 4000,
    },
  },
]

export default uiSchema
