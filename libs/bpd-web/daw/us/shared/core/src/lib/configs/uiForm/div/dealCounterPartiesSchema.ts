import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'

const uiSchema: SchemaFormTypes.SchemaForm = [
  {
    uiWidget: 'GroupBox',
    orientation: SchemaFormTypes.Orientation.Horizontal,
    items: [
      {
        key: 'projects[].counterParty.buyer',
        uiWidget: 'CounterPartyWidget',
        props: {
          title: 'Buyer',
          asyncTooltip: true,
        },
        rule: {
          validationRule: {
            required: true,
          },
        },
        componentProps: {
          placeholder: 'Search for buyer',
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
            //defaultVisible: true,
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
