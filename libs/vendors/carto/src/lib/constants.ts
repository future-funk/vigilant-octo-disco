import { POSITRON } from '@carto/react-basemaps'
import { API_VERSIONS } from '@deck.gl/carto/typed'
import type { InitialCartoState } from './types'

export const CARTO_SLICE_KEY = 'carto'

export const DEFAULT_MIN_ZOOM = 1.5
export const DEFAULT_BASEMAP = POSITRON
export const DEFAULT_VIEW_STATE = {
  minZoom: DEFAULT_MIN_ZOOM,
  pitch: 0,
  bearing: 0,
  dragRotate: false,
  padding: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
}

export const credentials: InitialCartoState['credentials'] = {
  apiVersion: API_VERSIONS.V1,
  mapsUrl: `${process.env['NX_REACT_APP_CARTO_SERVER_URL']}/api/v1/map`,
  serverUrlTemplate: process.env['NX_REACT_APP_CARTO_SERVER_URL'],
  //apiKey: '5a52340d19ecd80a0338b327164ed817ea877341', //should come from BE

  // apiVersion: API_VERSIONS.V3,
  // apiBaseUrl: 'https://cartodev.gic.com.sg/api',
  // accessToken:
  //   'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImRVNGNZTHAwaThjYnVMNkd0LTE0diJ9.eyJodHRwOi8vYXBwLmNhcnRvLmNvbS9hY2NvdW50X2lkIjoiYWNfeHJkczIwcWYiLCJodHRwOi8vYXBwLmNhcnRvLmNvbS9hY3RpbmdfYXMiOiJhdXRoMHw2MmVjNmEwZjM2NjU0NDNjNThjMmJiZGYiLCJpc3MiOiJodHRwczovL2F1dGguY2FydG8uY29tLyIsInN1YiI6ImpveHl4NkE0Y1JxNEVHVzlNZ3d6aXRqSkVoR1Y0NTdzQGNsaWVudHMiLCJhdWQiOiJjYXJ0by1jbG91ZC1uYXRpdmUtYXBpIiwiaWF0IjoxNjYzMTM3MzU1LCJleHAiOjE2NjMyMjM3NTUsImF6cCI6ImpveHl4NkE0Y1JxNEVHVzlNZ3d6aXRqSkVoR1Y0NTdzIiwic2NvcGUiOiJyZWFkOnRva2VucyB3cml0ZTp0b2tlbnMgcmVhZDppbXBvcnRzIHdyaXRlOmltcG9ydHMgcmVhZDpjb25uZWN0aW9ucyB3cml0ZTpjb25uZWN0aW9ucyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyIsInBlcm1pc3Npb25zIjpbInJlYWQ6dG9rZW5zIiwid3JpdGU6dG9rZW5zIiwicmVhZDppbXBvcnRzIiwid3JpdGU6aW1wb3J0cyIsInJlYWQ6Y29ubmVjdGlvbnMiLCJ3cml0ZTpjb25uZWN0aW9ucyJdfQ.RCdu34ijZIKx4Jn7TFW1DOBrbNMw3uZLHQPRPKBYUwuiigZAVuEYP5QIF2lHVDNI1073uGb4uDp3fNWwBHTCXoBT2kXm5Wk-CAIIe4ftMgb8MXqJlvu_ckBzXZb98x9rHBGwPgp0zvMfKr3Kzex3cqp98LYwyhepVy49xIcWD5imo2gjo7OURhT-hkiRIGYzjxvHkX6vE6Cnhubwh8Q2pcWq2kNPmBP6klwdEDYn91UYHkrGIJZg0mHyvh_DE3KPV9rRCCD6Kz4bmpZYQzaIp5je8-OMf-ES8axIXH6uaMrZdgjWMDBo1l22g-XsUvCLUWFXh0bi4RN80kKJIr4u1Q',
}

export const INITIAL_STATE: InitialCartoState = {
  viewState: DEFAULT_VIEW_STATE,
  basemap: DEFAULT_BASEMAP,
  credentials,
  googleApiKey: `${process.env['NX_REACT_APP_GOOGLE_API_KEY']}`, // only required when using a Google Basemap
  googleMapId: '', // only required when using a Google Custom Basemap
}
