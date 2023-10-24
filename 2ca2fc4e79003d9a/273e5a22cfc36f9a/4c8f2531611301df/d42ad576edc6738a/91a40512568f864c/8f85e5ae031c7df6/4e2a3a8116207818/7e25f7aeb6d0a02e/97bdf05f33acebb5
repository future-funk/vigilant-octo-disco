import {
  DealDto,
  queries,
} from '@bpd/bpd-web/investment-process/shared/data-access'
import {
  ActivityType,
  BpdLastUpdatedCellRenderer,
  BpdPastActivityModal,
} from '@bpd/bpd-web/shared/ui'
import { ColumnDefs } from '@bpd/vendors/ag-grid'
import { ColDef, ColumnApi } from 'ag-grid-community'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import { camelCase, find, flatMap, get, has, isEqual, isNil, map } from 'lodash'
import { FC, useState } from 'react'
import ModalTitle from './ModalTitle'

export interface PastActivityModalProps {
  data: DealDto
  api: ColumnApi
}

const getColDefFromField = (field: string, colDefs: ColumnDefs | undefined) => {
  if (isNil(colDefs) || isNil(field)) return ''
  const camelCaseField = camelCase(field)
  const column = find(colDefs, (colDef) =>
    isEqual(get(colDef, 'field'), camelCaseField)
  )

  return get(column, 'headerName') ?? ''
}

const PastActivityModal: FC<PastActivityModalProps> = (props) => {
  dayjs.extend(relativeTime)
  dayjs.extend(utc)
  const { data, api } = props
  const { id, lastUpdateDt, lastUpdateUserName } = data

  // Obtaining column definition
  const columnDefs = flatMap(
    get(api, 'columnModel.columnDefs'),
    (colDef: ColDef) =>
      has(colDef, 'children') ? get(colDef, 'children') : colDef
  )

  const [visible, setVisible] = useState(false)

  const { data: histories, isLoading } = queries.useGetHistory(
    { url: { id } },
    { skip: !visible }
  )

  const toggleVisible = () => setVisible(!visible)

  const activities = map(
    histories,
    ({
      lastUpdateDt,
      lastUpdateUser,
      lastUpdateUserName,
      newVal,
      oldVal,
      lastUpdateInd,
      field,
    }) => {
      const lastUpdateDtDayJs = dayjs.utc(lastUpdateDt).local()

      const isRelative = lastUpdateDtDayJs.diff(dayjs(), 'day') > -1

      return {
        author: lastUpdateUserName || lastUpdateUser,
        title: newVal,
        oldTitle: oldVal,
        date: isRelative
          ? lastUpdateDtDayJs.fromNow()
          : lastUpdateDtDayJs.format('DD MMM YYYY, hh:mm A').toString(),
        type: lastUpdateInd as ActivityType,
        field,
        headerName: getColDefFromField(field, columnDefs as ColumnDefs),
      }
    }
  )

  return (
    <>
      {visible && (
        <BpdPastActivityModal
          visible
          activities={activities}
          loading={isLoading}
          title={<ModalTitle data={data} />}
          onCancel={toggleVisible}
        />
      )}
      <BpdLastUpdatedCellRenderer
        author={lastUpdateUserName}
        date={dayjs
          .utc(lastUpdateDt)
          .local()
          .format('DD MMM YYYY hh:mm A')
          .toString()}
        onClick={toggleVisible}
      />
    </>
  )
}

export default PastActivityModal
