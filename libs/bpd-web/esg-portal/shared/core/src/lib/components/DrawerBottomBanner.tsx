import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import { Stack, IconButton } from '@gic/battlefield-ui-pack'
import { CloseOutlined } from '@ant-design/icons'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdIcon } from '@bpd/bpd-web/shared/ui'
import { TOOLTIP } from '../constants'
import { EsgPortalSelectors, EsgPortalActions } from '../data'

const StyledWrapper = withTheme(Stack)(({ theme }) => ({
  flexDirection: 'row',
  backgroundColor: theme.palette.primary.hoverLight,
  padding: '10px 20px',
  position: 'absolute',
  bottom: 0,
  left: 0,
  zIndex: 999,
}))

const DrawerBottomBanner = () => {
  const dispatch = useAppDispatch()
  const isVisible = useAppSelector(EsgPortalSelectors.getIsDrawerBannerVisible)
  if (!isVisible) return

  const handleBannerClose = () => {
    dispatch(EsgPortalActions.toggleIsDrawerBannerVisible())
  }
  return (
    <StyledWrapper>
      <Stack>{TOOLTIP}</Stack>
      <IconButton
        onClick={handleBannerClose}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <BpdIcon icon={<CloseOutlined />} />
      </IconButton>
    </StyledWrapper>
  )
}

export default DrawerBottomBanner
