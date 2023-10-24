import { snakeCase, toUpper } from 'lodash'

export const upperSnakeCase = (value: string) => toUpper(snakeCase(value))
