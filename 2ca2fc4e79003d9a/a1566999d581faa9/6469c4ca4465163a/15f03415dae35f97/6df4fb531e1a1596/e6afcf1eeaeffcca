import { isObject, snakeCase, transform } from 'lodash'

const snakeCaseTransformer = <T extends {}>(data: T): T =>
  transform(
    data as any,
    (normalizedData: any, value: T | unknown, key: string) => {
      normalizedData[snakeCase(key)] = isObject(value)
        ? snakeCaseTransformer(value)
        : value
      return normalizedData
    }
  )

export default snakeCaseTransformer
