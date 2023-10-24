import { camelCase, isArray, isObject, transform } from 'lodash'

const camelCaseTransformer = (obj: any) =>
  typeof obj !== 'object'
    ? obj
    : transform(obj, (acc: any, value: any, key: any, target: any) => {
        const camelKey = isArray(target) ? key : camelCase(key)
        acc[camelKey] = isObject(value) ? camelCaseTransformer(value) : value
      })

export default camelCaseTransformer
