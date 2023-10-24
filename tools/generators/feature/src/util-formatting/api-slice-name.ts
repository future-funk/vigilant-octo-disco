import { camelCase } from 'lodash'

export const apiSliceName = (name: string) => `${camelCase(name)}ApiReducer`
