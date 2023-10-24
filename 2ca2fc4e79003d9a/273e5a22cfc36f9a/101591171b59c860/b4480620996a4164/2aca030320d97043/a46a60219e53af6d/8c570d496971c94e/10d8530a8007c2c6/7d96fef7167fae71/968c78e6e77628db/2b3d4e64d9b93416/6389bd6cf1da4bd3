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
        componentProps: {
          placeholder: 'Search for GIC GP/Operating partner',
        },
      },
    ],
  },
  {
    uiWidget: 'GroupBox',
    orientation: SchemaFormTypes.Orientation.Horizontal,
    items: [
      {
        key: 'projects[].counterParty.legalRep',
        uiWidget: 'CounterPartyWidget',
        props: {
          title: 'GIC Legal Rep',
          asyncTooltip: true,
        },
        componentProps: {
          placeholder: 'Search for GIC Legal Rep',
        },
      },
      {
        uiWidget: 'BpdEmptyWidget',
      },
      {
        uiWidget: 'BpdEmptyWidget',
      },
    ],
  },
]

export default uiSchema
