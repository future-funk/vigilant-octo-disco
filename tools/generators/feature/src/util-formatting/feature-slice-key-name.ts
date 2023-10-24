import { upperSnakeCase } from './upper-snake-case'

export const featureSliceKeyName = (name: string) =>
  `${upperSnakeCase(name)}_SLICE_KEY`
