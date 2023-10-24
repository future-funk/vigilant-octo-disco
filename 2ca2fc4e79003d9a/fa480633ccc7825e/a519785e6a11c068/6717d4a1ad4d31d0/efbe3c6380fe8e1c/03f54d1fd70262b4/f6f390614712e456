import { SearchOutlined } from '@ant-design/icons'
import { BpdIcon } from '@bpd/bpd-web/shared/ui'
import { ChangeEvent, FC } from 'react'
import { AgGridProps } from './AgGrid'

export interface HeaderSearchProps extends AgGridProps {
  field: string
}

export const HeaderSearch: FC<HeaderSearchProps> = (props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const filter = event.target.value
    props.api!.setFilterModel({
      [props.field]: {
        filterType: 'text',
        type: 'contains',
        filter,
      },
    })
  }

  return (
    <div className="eSearchContainer">
      <input
        className="eSearchInput"
        placeholder="Search Measure"
        onChange={handleChange}
      />
      <BpdIcon icon={<SearchOutlined />} />
    </div>
  )
}

export default HeaderSearch
