import { BpdFilterControlType } from '@bpd/bpd-web/shared/ui'
import { useAppSelector, useAppDispatch } from '@bpd/bpd-web/shared/store'
import { DirectoryActions, DirectorySelectors } from '../../data'
import Filters from './Filters'
import { useGetBaseFilterItems } from '../../hooks'
import { Typography } from '@gic/battlefield-ui-pack'

const LogisticsDrawerFilter = () => {
  const dispatch = useAppDispatch()

  const filters = useAppSelector(DirectorySelectors.getSelectedDirectoryFilters)

  const { assetTypes, projectNames, countries, status } =
    useGetBaseFilterItems()

  const handleChange = (key: string, value: string | string[]) => {
    dispatch(
      DirectoryActions.setSelectedDirectoryFilters({ ...filters, [key]: value })
    )
  }

  return (
    <Filters
      filters={filters}
      handleChange={handleChange}
      options={[
        {
          key: 'projectName',
          label: 'Project Name',
          type: BpdFilterControlType.MultiSelect,
          componentProps: { items: projectNames },
        },
        {
          key: 'country',
          label: 'Country',
          type: BpdFilterControlType.MultiSelect,
          componentProps: { items: countries },
        },
        {
          key: 'assetType',
          label: 'Asset Type',
          type: BpdFilterControlType.MultiSelect,
          componentProps: { items: assetTypes, style: { minWidth: '203px' } },
        },
        {
          key: 'status',
          label: 'Status',
          type: BpdFilterControlType.MultiSelect,
          componentProps: { items: status },
        },
        {
          key: 'showSelectedCards',
          label: (
            <Typography sx={{ minHeight: 20, display: 'block' }}></Typography>
          ),
          type: BpdFilterControlType.Checkbox,
          componentProps: {
            options: [{ label: 'Show selected cards', value: 'yes' }],
          },
        },
      ]}
    />
  )
}

export default LogisticsDrawerFilter
