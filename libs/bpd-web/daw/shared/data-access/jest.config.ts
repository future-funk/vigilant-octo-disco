/* eslint-disable */
export default {
  displayName: 'bpd-web-daw-shared-data-access',
  preset: '../../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../../coverage/libs/bpd-web/daw/shared/data-access',
}