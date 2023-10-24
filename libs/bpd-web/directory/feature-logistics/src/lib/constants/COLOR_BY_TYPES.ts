interface ColorByTypes {
  [key: string]: { name: string; value: string; legendName: string }
}

const PROJECT: ColorByTypes = {
  MELCOMBE: { name: 'Melcombe', value: 'Melcombe', legendName: 'Melcombe' },
  MILEWAY: { name: 'Mileway', value: 'Mileway', legendName: 'Mileway' },
  'EXETER-SMA I': {
    name: 'Exeter - SMA I',
    value: 'Exeter - SMA I',
    legendName: 'Exeter - SMA I',
  },
  'EXETER-SMA II': {
    name: 'Exeter - SMA II',
    value: 'Exeter - SMA II',
    legendName: 'Exeter - SMA II',
  },
  'EXETER-SMA III': {
    name: 'Exeter - SMA III',
    value: 'Exeter - SMA III',
    legendName: 'Exeter - SMA III',
  },
  'KW Cella JV1': {
    name: 'KW Cella JV1',
    value: 'KW_Cella_JV1',
    legendName: 'KW Cella JV1',
  },
  'KW Alpha JV2': {
    name: 'KW Alpha JV2',
    value: 'KW_Alpha_JV2',
    legendName: 'KW Alpha JV2',
  },
  'P3 Logistics': {
    name: 'P3 Logistics',
    value: 'P3 Logistics',
    legendName: 'P3 Logistics',
  },
}

const COUNTRY: ColorByTypes = {
  AUSTRIA: { name: 'Austria', value: 'Austria', legendName: 'Austria' },
  FINLAND: { name: 'Finland', value: 'Finland', legendName: 'Finland' },
  FRANCE: { name: 'France', value: 'France', legendName: 'France' },
  GERMANY: { name: 'Germany', value: 'Germany', legendName: 'Germany' },
  ROMANIA: { name: 'Romania', value: 'Romania', legendName: 'Romania' },
  NETHERLANDS: {
    name: 'Netherlands',
    value: 'Netherlands',
    legendName: 'Netherlands',
  },
  BELGIUM: { name: 'Belgium', value: 'Belgium', legendName: 'Belgium' },
  DENMARK: { name: 'Denmark', value: 'Denmark', legendName: 'Denmark' },
  IRELAND: { name: 'Ireland', value: 'Ireland', legendName: 'Ireland' },
  SPAIN: { name: 'Spain', value: 'Spain', legendName: 'Spain' },
  SWEDEN: { name: 'Sweden', value: 'Sweden', legendName: 'Sweden' },
  SLOVAKIA: { name: 'Slovakia', value: 'Slovakia', legendName: 'Slovakia' },
  ITALY: { name: 'Italy', value: 'Italy', legendName: 'Italy' },
  POLAND: { name: 'Poland', value: 'Poland', legendName: 'Poland'},
  'CZECH REPUBLIC': {
    name: 'Czech Republic',
    value: 'Czech Republic',
    legendName: 'Czech Republic',
  },
  'UNITED KINGDOM': {
    name: 'United Kingdom',
    value: 'United Kingdom',
    legendName: 'United Kingdom',
  },
}

const ASSET_TYPE: ColorByTypes = {
  CONTAINER: { name: 'Container', value: 'Container', legendName: 'Container' },
  HOSTEL: { name: 'Hostel', value: 'Hostel', legendName: 'Hostel' },
  OFFICE: { name: 'Office', value: 'Office', legendName: 'Office' },
  LAND: { name: 'Land', value: 'Land', legendName: 'Land' },
  CANTEEN: { name: 'Canteen', value: 'Canteen', legendName: 'Canteen' },
  WAREHOUSE: { name: 'Warehouse', value: 'Warehouse', legendName: 'Warehouse' },
  'WAREHOUSE UNDER CONSTRUCTION': {
    name: 'Warehouse Under construction',
    value: 'Warehouse under construction',
    legendName: 'Warehouse Under Construction',
  },
}

const STATUS: ColorByTypes = {
  DEVELOPMENT: {
    name: 'Development',
    value: 'Development',
    legendName: 'Development',
  },
  YIELDING: { name: 'Yielding', value: 'Yielding', legendName: 'Yielding' },
  VACANT: { name: 'Vacant', value: 'Vacant', legendName: 'Vacant' },
}

export const COLOR_BY_TYPES = {
  PROJECT,
  COUNTRY,
  ASSET_TYPE,
  STATUS,
}
