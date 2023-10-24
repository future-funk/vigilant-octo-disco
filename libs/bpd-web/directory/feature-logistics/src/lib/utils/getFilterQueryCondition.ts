import { forEach, isEmpty, snakeCase } from 'lodash'

/**
 * Generates a filter query string from a filter object.
 * @param {Object} filter - The filter object.
 * @param {string[]} filter.projectName - The project names to filter on.
 * @param {string[]} filter.status - The statuses to filter on.
 * @param {string[]} filter.country - The countries to filter on.
 * @param {string[]} filter.assetType - The asset types to filter on.
 * @returns {string} The filter query string.
 */
function generateFilterQuery(filter: Record<string, string[]>): string {
  const conditions: string[] = []
  forEach(filter, (value, key) => {
    if (!isEmpty(value)) {
      //value = Array.isArray(value) && isEmpty(value) ? ['null'] : value
      conditions.push(
        `${snakeCase(key)} in (${value.map((v) => `'${v}'`).join(', ')})`
      )
    }
  })
  return conditions.join(' and ')
}
export default generateFilterQuery
