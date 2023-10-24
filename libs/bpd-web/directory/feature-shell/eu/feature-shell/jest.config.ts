/* eslint-disable */
export default {
  displayName: 'bpd-web-directory-feature-shell-eu-feature-shell',
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
    '../../../../../../coverage/libs/bpd-web/directory/feature-shell/eu/feature-shell',
}
