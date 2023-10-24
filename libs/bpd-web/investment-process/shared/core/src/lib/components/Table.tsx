import { DealDto } from '@bpd/bpd-web/investment-process/shared/data-access'
import {
  Table as CoreTable,
  TableProps as CoreTableProps,
} from '@bpd/bpd-web/shared/core'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'
import { FC, useEffect, useState } from 'react'
import { InvestmentProcessActions } from '../data'

export const Table: FC<CoreTableProps<DealDto[]>> = (props) => {
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const handleOnFetch = (isFetching: boolean) => {
    setIsFetching(isFetching)
  }

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(InvestmentProcessActions.setIsFetching(isFetching))
  }, [isFetching])

  return <CoreTable onFetch={handleOnFetch} {...props} />
}

export default Table
