import { camelCase } from 'lodash'
import { readNxJson } from '@nrwl/devkit'
import { titleCase } from '../util-formatting/title-case'
import { upperSnakeCase } from '../util-formatting/upper-snake-case'

export const withUtils = (schema) => ({
  ext: '',
  camelCase,
  titleCase,
  upperSnakeCase,
  camelCasedName: camelCase(schema.name),
  titleCasedName: titleCase(schema.name),
  npmScope: readNxJson().npmScope,
  ...schema,
})
