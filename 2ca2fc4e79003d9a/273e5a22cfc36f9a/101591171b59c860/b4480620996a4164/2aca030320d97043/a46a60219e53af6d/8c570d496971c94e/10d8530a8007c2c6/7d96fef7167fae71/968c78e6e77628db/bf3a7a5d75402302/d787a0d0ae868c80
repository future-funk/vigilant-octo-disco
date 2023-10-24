import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'
import {
  BreakdownInputNumberPercentageProps,
  DEAL_ASSET_TYPE_TITLE_MAP,
  DEAL_SECTORS_TITLE_MAP,
} from '@bpd/daw/shared/core'
import {
  COUNTRY_LIST,
  DEAL_COUNTRY_LIST_BY_TEAM,
  SUB_SECTORS_BY_SECTOR,
  DEAL_REQ_TYPE,
} from '@bpd/ui/constants'
import { keys, map, uniq } from 'lodash'

const uiSchema: SchemaFormTypes.SchemaForm = [
  {
    uiWidget: 'GroupBox',
    items: [
      {
        uiWidget: 'GroupBox',
        orientation: SchemaFormTypes.Orientation.Horizontal,
        items: [
          {
            key: 'projects[].sector',
            uiWidget: 'SectorMultiSelectBreakdownWidget',
            props: {
              asyncTooltip: true,
            },
            rule: {
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
              validationRule: {
                required: [
                  {
                    field: 'requestType',
                    type: 'EQ',
                    value: [
                      DEAL_REQ_TYPE.DIRECT_INVESTMENT,
                      DEAL_REQ_TYPE.PRGM_JV_SUB_DEAL,
                    ],
                  },
                ],
              },
            },
            componentProps: {
              placeholder: 'Select',
              items: DEAL_SECTORS_TITLE_MAP,
            },
          },
          {
            key: 'projects[].country',
            uiWidget: 'CountryMultiSelectBreakdownWidget',
            props: {
              title: 'Country',
              asyncTooltip: true,
            },
            rule: {
              validationRule: {
                required: [
                  {
                    field: 'requestType',
                    type: 'EQ',
                    value: [
                      DEAL_REQ_TYPE.DIRECT_INVESTMENT,
                      DEAL_REQ_TYPE.PRGM_JV_SUB_DEAL,
                    ],
                  },
                ],
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
              items: map(
                uniq([...DEAL_COUNTRY_LIST_BY_TEAM.EU, ...COUNTRY_LIST]),
                (country) => ({
                  label: country,
                  value: country,
                })
              ),
            },
          },
          {
            key: 'projects[].assetType',
            uiWidget: 'AssetMultiSelectBreakdownWidget',
            props: {
              title: 'Asset Type',
              asyncTooltip: true,
            },
            componentProps: {
              disabled: true,
              placeholder: 'Select',
              items: DEAL_ASSET_TYPE_TITLE_MAP,
            },
          },
        ],
      },
      {
        uiWidget: 'GroupBox',
        orientation: SchemaFormTypes.Orientation.Horizontal,
        items: [
          {
            uiWidget: 'FormArray',
            key: 'projects[].aumBreakdowns.sector',
            type: 'array',
            props: {
              filterConfig: [{ field: 'isDeleted', type: 'NEQ', value: true }],
              validateOnFieldChange: true,
              keepSpaceIfEmpty: true,
            },
            items: [
              {
                uiWidget: 'GroupBox',
                orientation: SchemaFormTypes.Orientation.Horizontal,
                items: [
                  {
                    key: 'projects[].aumBreakdowns.sector[].item',
                    uiWidget: 'SectorInputTextWidget',
                    componentProps: {
                      disabled: true,
                    },
                  },
                  {
                    key: 'projects[].aumBreakdowns.sector[].itemAumPct',
                    uiWidget: 'BreakdownInputNumberPercentage',
                    componentProps: {
                      placeholder: 'Weight',
                      breakdownField: 'projects[].sector',
                    } as Partial<BreakdownInputNumberPercentageProps>,
                    rule: {
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
          {
            uiWidget: 'FormArray',
            key: 'projects[].aumBreakdowns.country',
            type: 'array',
            props: {
              validateOnFieldChange: true,
              keepSpaceIfEmpty: true,
            },
            items: [
              {
                uiWidget: 'GroupBox',
                orientation: SchemaFormTypes.Orientation.Horizontal,
                items: [
                  {
                    key: 'projects[].aumBreakdowns.country[].item',
                    uiWidget: 'BpdInputWidget',
                    componentProps: {
                      disabled: true,
                    },
                  },
                  {
                    key: 'projects[].aumBreakdowns.country[].itemAumPct',
                    uiWidget: 'BreakdownInputNumberPercentage',
                    componentProps: {
                      placeholder: 'Weight',
                      breakdownField: 'projects[].country',
                    } as Partial<BreakdownInputNumberPercentageProps>,
                    rule: {
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
          {
            uiWidget: 'FormArray',
            key: 'projects[].aumBreakdowns.assetType',
            type: 'array',
            props: {
              keepSpaceIfEmpty: true,
            },
            items: [
              {
                uiWidget: 'GroupBox',
                orientation: SchemaFormTypes.Orientation.Horizontal,
                items: [
                  {
                    key: 'projects[].aumBreakdowns.assetType[].item',
                    uiWidget: 'BpdInputWidget',
                    componentProps: {
                      disabled: true,
                    },
                  },
                  {
                    key: 'projects[].aumBreakdowns.assetType[].itemAumPct',
                    uiWidget: 'BreakdownInputNumberPercentage',
                    componentProps: {
                      disabled: true,
                      placeholder: 'Weight',
                      breakdownField: 'projects[].assetType',
                    } as Partial<BreakdownInputNumberPercentageProps>,
                  },
                ],
              },
            ],
          } as SchemaFormTypes.FormArray,
        ],
        sx: {
          '&&&.sf-grp-bx > div': {
            flexBasis: 'calc(33.33% - 10px)',
            flexGrow: 0,
            gap: 0.5,
          },
        },
      },
    ],
    sx: {
      gap: 0.5,
    },
  },
  {
    uiWidget: 'GroupBox',
    orientation: SchemaFormTypes.Orientation.Horizontal,
    items: [
      {
        key: 'projects[].subSector',
        uiWidget: 'SubSectorFieldWidget',
        rule: {
          disableRule: [
            [
              {
                field: 'requestType',
                type: 'EQ',
                value: [DEAL_REQ_TYPE.DIVESTMENT],
              },
              {
                field: 'projects[].sector',
                type: 'NEQ',
                value: keys(SUB_SECTORS_BY_SECTOR),
              },
            ],
          ],
          visibilityRule: [
            {
              field: 'projects[].sector',
              type: 'NEQ',
              value: 'Others',
            },
            {
              field: 'projects[].aumBreakdowns.sector',
              filters: [
                {
                  field: 'item',
                  type: 'EQ',
                  value: 'Others',
                },
                { field: 'isDeleted', type: 'NEQ', value: true },
              ],
              type: 'SIZE_LTE',
              value: 0,
            },
          ],
        },
        props: {
          title: 'Sub Sector',
          asyncTooltip: true,
        },
        componentProps: {
          placeholder: 'Select',
          items: [],
        },
      },
      {
        key: 'projects[].sectorOthers',
        uiWidget: 'BpdInputWidget',
        rule: {
          visibilityRule: [
            [
              {
                field: 'projects[].sector',
                type: 'EQ',
                value: 'Others',
              },
              {
                field: 'projects[].aumBreakdowns.sector',
                filters: [
                  {
                    field: 'item',
                    type: 'EQ',
                    value: 'Others',
                  },
                  { field: 'isDeleted', type: 'NEQ', value: true },
                ],
                type: 'SIZE_GTE',
                value: 1,
              },
            ],
          ],
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
        props: {
          title: 'Details of Others',
          asyncTooltip: true,
        },
        componentProps: {
          placeholder: 'Enter details of others',
        },
      },
      {
        key: 'projects[].city',
        uiWidget: 'BpdInputWidget',
        rule: {
          disableRule: [
            [
              {
                field: 'requestType',
                type: 'EQ',
                value: [DEAL_REQ_TYPE.DIVESTMENT],
              },
              {
                field: 'projects[].country',
                type: 'EQ',
                value: [null, '', undefined],
              },
            ],
          ],
        },
        props: {
          title: 'City',
          asyncTooltip: true,
        },
        componentProps: {
          placeholder: 'Enter City',
        },
      },
      {
        uiWidget: 'BpdEmptyWidget',
      },
    ],
  },
]

export default uiSchema
