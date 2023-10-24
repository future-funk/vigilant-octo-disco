import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdModal } from '@bpd/bpd-web/shared/ui'
import {
  DirectorySelectors,
  DirectoryActions,
} from '../data'
import GeneralInfo from './DirectoryModal/GeneralInfo'
import WarehouseInfo from './DirectoryModal/WarehouseInfo'
import UnderwritingAssumption from './DirectoryModal/UnderwritingAssumption'
import OperationInfo from './DirectoryModal/OperationInfo'
import LocationInfo from './DirectoryModal/LocationInfo'

const StyledModal = withTheme(BpdModal)(({ theme }) => ({
  maxWidth: '900px',
  height: '500px',
  width: 'auto !important',
  '&&& .ant-modal-body': {
    padding: '16px 24px 24px',
  },
  '&&& .ant-modal-close-x': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '&&& .ant-modal-content': {
    backgroundColor: theme.palette.background.modal,
  },
  '&&& .ant-modal-header': {
    backgroundColor: theme.palette.background.modal,
  },
}))

const DirectoryOverviewDrawerModal: FC = () => {
  const dispatch = useAppDispatch()

  const selectedDirectory = useAppSelector(
    DirectorySelectors.getSelectedDirectory
  )

  if (!selectedDirectory) {
    return null
  }

  const { assetName, city, cityTier } = selectedDirectory || {}

  const handleModalClose = () => {
    dispatch(DirectoryActions.setSelectedDirectory(null))
  }

  return (
    <StyledModal
      visible
      destroyOnClose
      disableFooter
      title={`${assetName || 'NA'}, ${city} ${
        cityTier ? `• ${cityTier}` : null
      }`}
      onCancel={handleModalClose}
    >
      <GeneralInfo selectedDirectory={selectedDirectory} />
      <WarehouseInfo selectedDirectory={selectedDirectory} />
      <UnderwritingAssumption selectedDirectory={selectedDirectory} />
      <OperationInfo selectedDirectory={selectedDirectory} />
      <LocationInfo selectedDirectory={selectedDirectory} />
    </StyledModal>
  )
}

export default DirectoryOverviewDrawerModal
