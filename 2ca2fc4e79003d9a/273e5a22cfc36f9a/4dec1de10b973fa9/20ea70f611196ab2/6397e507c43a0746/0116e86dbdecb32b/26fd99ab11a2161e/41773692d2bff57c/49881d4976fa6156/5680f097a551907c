import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import { Typography } from '@gic/battlefield-ui-pack'
import { BpdRadioGroup } from '@bpd/bpd-web/shared/ui'
import { RadioChangeEvent } from 'antd'
import {
  DirectorySelectors,
  DirectoryActions,
} from '../data/stores/directorySlice'
import { updateLayer } from '@carto/react-redux'
import { Options } from '@bpd/bpd-web/shared/data-access'
import { getCartoLayers } from '@bpd/vendors/carto'
import { DirectoryMapColorGroup } from '@bpd/bpd-web/directory/shared/data-access/directory'

const COLOR_BY_OPTIONS: Options<DirectoryMapColorGroup> = [
  {
    label: 'Type',
    value: 'bpStatusWType',
  },
  {
    label: 'Sector',
    value: 'projSector',
  },
]

const MapFilter = () => {
  const dispatch = useAppDispatch()
  const layers = useAppSelector(getCartoLayers)

  const selectedDirectoryColorByValue = useAppSelector(
    DirectorySelectors.getSelectedDirectoryColorByValue
  )

  const handleOptionChange = (event: RadioChangeEvent) => {
    dispatch(
      DirectoryActions.setSelectedDirectoryColorByValue(event.target.value)
    )
  }

  return (
    <>
      <Typography variant="subtitle2">Color By</Typography>
      <BpdRadioGroup
        options={COLOR_BY_OPTIONS}
        onChange={handleOptionChange}
        value={selectedDirectoryColorByValue}
        optionType="default"
        buttonStyle="outline"
        style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
      />
    </>
  )
}

export default MapFilter
