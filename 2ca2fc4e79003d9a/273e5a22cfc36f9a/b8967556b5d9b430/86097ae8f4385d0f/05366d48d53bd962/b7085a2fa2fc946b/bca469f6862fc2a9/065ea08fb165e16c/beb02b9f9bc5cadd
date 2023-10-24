import { BpdButton, BpdIcon } from '@bpd/bpd-web/shared/ui'
import { Stack } from '@gic/battlefield-ui-pack'
import { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { UiSelectors, useAppSelector } from '@bpd/bpd-web/shared/store'
import { MvIrrSelectors } from '../data'
import { useGetMvAndCfAccessFlags } from '../hooks'
import MvUploadModal from './MvUploadModal'
import CfUploadModal from './CfUploadModal'

const UploadMvAndCf = () => {
  const team = useAppSelector(UiSelectors.getTeam)

  const { doShowMvBtn, doShowCfBtn } = useGetMvAndCfAccessFlags()

  const { fiscalYear } = useAppSelector(MvIrrSelectors.getFilters)
  const [mvModalOpen, toggleMvModal] = useState(false)
  const [cfModalOpen, toggleCfModal] = useState(false)

  if (!doShowMvBtn && !doShowCfBtn) {
    return null
  }

  return (
    <Stack direction="row" flexWrap="wrap" alignItems="flex-end" spacing={1}>
      {doShowMvBtn && (
        <BpdButton
          variant="contained"
          title="Upload MVs"
          onClick={() => toggleMvModal(true)}
          icon={<BpdIcon mr={0.5} icon={<UploadOutlined />} />}
        />
      )}
      {doShowCfBtn && (
        <BpdButton
          variant="contained"
          title="Upload CFs"
          icon={<BpdIcon mr={0.5} icon={<UploadOutlined />} />}
          onClick={() => toggleCfModal(true)}
        />
      )}

      {mvModalOpen && (
        <MvUploadModal
          {...{ onCloseModal: () => toggleMvModal(false), fiscalYear, team }}
        />
      )}

      {cfModalOpen && (
        <CfUploadModal
          {...{ onCloseModal: () => toggleCfModal(false), fiscalYear, team }}
        />
      )}
    </Stack>
  )
}

export default UploadMvAndCf
