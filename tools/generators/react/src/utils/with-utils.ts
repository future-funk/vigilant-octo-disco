import { camelCase } from 'lodash'
import { titleCase } from '../util-formatting/title-case'
import { upperSnakeCase } from '../util-formatting/upper-snake-case'

export const withUtils = (schema) => ({
  ext: '',
  titleCasedName: titleCase(schema.name),
  camelCase,
  titleCase,
  upperSnakeCase,
  ...schema,
})
