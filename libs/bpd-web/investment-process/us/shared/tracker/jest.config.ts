/* eslint-disable */
export default {
  displayName: 'bpd-web-investment-process-us-shared-tracker',
  preset: '../../../../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../../../coverage/libs/bpd-web/investment-process/us/shared/tracker',
}
