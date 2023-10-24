import { FileAddOutlined } from '@ant-design/icons'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { UiSelectors, useAppSelector } from '@bpd/bpd-web/shared/store'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdButton, BpdButtonProps } from '@bpd/bpd-web/shared/ui'
import { upperCase } from 'lodash'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export interface CreateDealButtonModalProps {
  buttonProps?: BpdButtonProps
  title?: string
  category?: 'deals' | 'project'
}

const StyledBpdButton = withTheme(BpdButton)(() => {
  return {
    alignSelf: 'flex-end',
  }
})

export const CreateDealButtonModal: FC<CreateDealButtonModalProps> = (
  props
) => {
  const { buttonProps, category = 'deals', title = 'Create New Deal' } = props

  const team = useAppSelector(UiSelectors.getTeam)

  const navigate = useNavigate()

  const handleClick = () => {
    if (category === 'deals') {
      const base =
        ROUTES.INVESTMENT_PROCESS[upperCase(team)]?.DEALS ??
        ROUTES.INVESTMENT_PROCESS.US.DEALS
      navigate(`${base}/create/inv`)
    } else {
      const base =
        ROUTES.INVESTMENT_PROCESS[upperCase(team)]?.TRACKER ??
        ROUTES.INVESTMENT_PROCESS.US.TRACKER

      navigate(`${base}/create/project`)
    }
  }

  return (
    <>
      <StyledBpdButton
        title={title}
        startIcon={<FileAddOutlined />}
        onClick={handleClick}
        {...buttonProps}
      />
    </>
  )
}

export default CreateDealButtonModal
