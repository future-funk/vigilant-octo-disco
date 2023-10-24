import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'

const uiSchema: SchemaFormTypes.SchemaForm = [
  {
    uiWidget: 'GroupBox',
    orientation: SchemaFormTypes.Orientation.Horizontal,
    items: [
      {
        key: 'projects[].counterParty.seller',
        uiWidget: 'CounterPartyWidget',
        props: {
          title: 'Seller',
          asyncTooltip: true,
        },
        componentProps: {
          placeholder: 'Search for seller',
        },
      },
      {
        key: 'projects[].counterParty.broker',
        uiWidget: 'CounterPartyWidget',
        props: {
          title: 'Broker/Banker',
          asyncTooltip: true,
        },
        rule: {
          validationRule: {
            required: true,
          },
        },
        componentProps: {
          placeholder: 'Search for broker/banker',
        },
      },
      {
        key: 'projects[].counterParty.generalPartner',
        uiWidget: 'CounterPartyWidget',
        props: {
          title: 'GIC GP/Operating Partner',
          tooltipProps: {
            title:
              'New GIC GP/Operating Partner will be created once this is saved, please ensure all details are accurate prior to saving.',
            //: true,
          },
        },
        rule: {
          validationRule: {
            required: true,
          },
        },
        componentProps: {
          placeholder: 'Search for GIC GP/Operating partner',
        },
      },
    ],
  },
]

export default uiSchema
