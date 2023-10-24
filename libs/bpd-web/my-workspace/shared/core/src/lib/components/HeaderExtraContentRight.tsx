import { SettingOutlined } from '@ant-design/icons'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { BpdButton } from '@bpd/bpd-web/shared/ui'
import { useToggle } from '@bpd/ui/hooks'
import { MyWorkspaceSelectors } from '../data'
import { ConfigModal } from './ConfigModal'

const HeaderExtraContentRight = () => {
  const isLoadingWorkspaceConfig = useAppSelector(
    MyWorkspaceSelectors.getIsLoadingWorkspaceConfig
  )

  const [isOpenModal, toggleIsOpenModal] = useToggle(false)

  return (
    <>
      <BpdButton
        variant="outlined"
        title="Configuration"
        onClick={() => toggleIsOpenModal()}
        startIcon={<SettingOutlined />}
        loading={isLoadingWorkspaceConfig}
      />
      {isOpenModal && <ConfigModal {...{ onCloseModal: toggleIsOpenModal }} />}
    </>
  )
}

export default HeaderExtraContentRight
