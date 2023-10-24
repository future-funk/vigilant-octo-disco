import { FC } from 'react'
import { Stack } from '@gic/battlefield-ui-pack'
import { useAppSelector, useAppDispatch } from '@bpd/bpd-web/shared/store'
import { BpdLink } from '@bpd/bpd-web/shared/ui'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { MapActions, MapSelectors } from '@bpd/vendors/carto'
import { DirectoryActions } from '../data'

const StyledContainer = withTheme(Stack)({
  position: 'absolute',
  top: 10,
  left: 10,
})

const StyledLink = withTheme(BpdLink)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  opacity: 0.7,
  color: theme.palette.common.white,
  padding: 5,
  borderRadius: 3,
  fontSize: 11,
  letterSpacing: 1,
}))

const ResetButton: FC = () => {
  const dispatch = useAppDispatch()

  const isMarkerCoordinatesExist = useAppSelector(
    MapSelectors?.getMarkerCoordinates
  )

  const handleReset = () => {
    dispatch(MapActions.setMarkerCoordinates(null))
    dispatch(
      DirectoryActions.setSelectedDirectorySort({
        field: '',
        order: 'asc',
        label: 'Select',
        value: '',
      })
    )
  }

  return (
    isMarkerCoordinatesExist && (
      <StyledContainer>
        <StyledLink title="RESET LOCATION" onClick={handleReset} />
      </StyledContainer>
    )
  )
}

export default ResetButton
