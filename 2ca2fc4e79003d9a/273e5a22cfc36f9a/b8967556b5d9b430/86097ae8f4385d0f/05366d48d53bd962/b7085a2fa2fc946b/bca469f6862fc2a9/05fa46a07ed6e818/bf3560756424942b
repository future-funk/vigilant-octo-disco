import { formatDate, formatNumber, formatPercent } from '@bpd/utils/formatters'
import { FIELD_NAME_PAIRS } from '../constants'
import { ICellRendererParams, ValueGetterParams } from 'ag-grid-community'
import { chain, filter } from 'lodash'

export const getInitialsByRole = ({
  params,
  roleName,
}: {
  params: ValueGetterParams<any>
  roleName: string
}): string => {
  const { staffs } = params.data
  const items = filter(staffs, (staff) => staff.roleName === roleName)
  return chain(items)
    .map((item) => item.initials)
    .compact()
    .join(', ')
    .value()
}

export const getNameByField = (params: ICellRendererParams) => {
  return FIELD_NAME_PAIRS[params.value]?.name
}
type FormatType = 'percentage' | 'number' | 'date' | 'bool'

type FormatByFieldType = (value: any, formatType: FormatType) => any

export const formatByField: FormatByFieldType = (value, formatType) => {
  if (value === undefined || value === null) return null

  switch (formatType) {
    case 'percentage':
      return formatPercent(value, 1)
    case 'number':
      return formatNumber(value)
    case 'date':
      return formatDate(value)
    case 'bool':
      return value ? 'true' : 'false'
    default:
      return value
  }
}

type GetFormatValueByFieldType = (params: ICellRendererParams) => any
export const getFormatValueByField: GetFormatValueByFieldType = (params) => {
  const { format } = FIELD_NAME_PAIRS[params.data.field] || {}
  return formatByField(params.value, format)
}
