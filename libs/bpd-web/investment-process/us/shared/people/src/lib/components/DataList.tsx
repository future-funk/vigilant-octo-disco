import { QueryReturn } from '@bpd/bpd-web/shared/data-access'
import List, { ListProps } from './List'

export interface DataListProps<T>
  extends Pick<ListProps<T>, 'active' | 'key' | 'onClick' | 'renderItem'> {
  useQuery: () => QueryReturn<T[]>
}

const DataList = <T,>(props: DataListProps<T>) => {
  const { useQuery, ...rest } = props

  const { data = [], isError, isFetching } = useQuery()

  return <List data={data} error={isError} loading={isFetching} {...rest} />
}

export default DataList
