import { get, isEmpty, compact } from 'lodash'

const generateQueryCondition = (
  filter: Record<string, string[]>,
  viewport: string | null,
  userId?: string | null
) => {
  const fields = ['projectName', 'country', 'assetType', 'status'] // should be in BE expected order
  const queryParams = []

  fields.forEach((field) => {
    const values = get(filter, field)

    if (!isEmpty(values)) {
      queryParams.push(
        `ARRAY[${values.map((value) => `'${value}'`).join(', ')}]`
      )
    } else {
      queryParams.push('NULL')
    }
  })

  queryParams.push(userId ? `'${userId}'` : 'NULL')
  queryParams.push(viewport)

  return compact(queryParams).join(' , ')
}

export default generateQueryCondition
