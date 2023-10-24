import { upperSnakeCase } from './upper-snake-case'

export const apiSliceKeyName = (name: string) =>
  `${upperSnakeCase(name)}_API_SLICE_KEY`
