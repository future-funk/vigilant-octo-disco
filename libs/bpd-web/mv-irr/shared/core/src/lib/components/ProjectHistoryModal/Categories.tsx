import { FC } from 'react'
import { Stack } from '@gic/battlefield-ui-pack'
import { MvIrrQueries } from '@bpd/mv-irr/shared/data-access'
import { DEFAULT_COLUMN_DEFS } from '@bpd/vendors/ag-grid'
import { getProjectHistoryCategoriesColDef } from '../../utils'
import StyledAgGrid from '../StyledAgGrid'

interface CategoriesProps {
  params: {
    projId: string
    fiscalYear: string
    team: string
  }
}

const Categories: FC<CategoriesProps> = (props) => {
  const { params } = props

  const { data, isFetching, isError, isLoading } =
    MvIrrQueries.useGetCategoriesHistory(params)

  const columnDefs = getProjectHistoryCategoriesColDef()

  return (
    <Stack flex={1} direction="row" mt={1}>
      <StyledAgGrid
        headerHeight={40}
        columnDefs={columnDefs}
        containerProps={{
          bordered: true,
          width: '100%',
          height: 500,
          minHeight: 'unset',
        }}
        defaultColDef={{
          ...DEFAULT_COLUMN_DEFS,
          wrapHeaderText: true,
          autoHeaderHeight: true,
        }}
        isFetching={isFetching}
        isError={isError}
        isLoading={isLoading}
        rowData={data}
        rowHeight={28}
      />
    </Stack>
  )
}
export default Categories
