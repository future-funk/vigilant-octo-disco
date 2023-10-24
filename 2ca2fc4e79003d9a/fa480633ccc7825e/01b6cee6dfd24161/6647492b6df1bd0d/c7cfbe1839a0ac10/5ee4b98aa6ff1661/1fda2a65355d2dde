import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BASEMAPS } from '@carto/react-basemaps'
import type { LayersList } from '@deck.gl/core/typed'
import { Box, BoxProps } from '@gic/battlefield-ui-pack'
import { AnyAction } from '@reduxjs/toolkit'
import { FC, ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { useCartoSelector } from '../hooks'
import { CartoSelectors, fetchCartoAuthToken } from '../stores'
import MapRenderSwitch from './MapRenderSwitch'

export interface MapContainerProps extends BoxProps {
  children?: ReactNode
  layers?: LayersList
}

const StyledContainer = withTheme(Box)(({ sx }) => ({
  height: '100%',
  position: 'relative',
  width: '100%',
  ...sx,
}))

const MapContainer: FC<MapContainerProps> = (props) => {
  const { children, ...rest } = props

  const dispatch = useDispatch()

  const cartoToken = useCartoSelector(CartoSelectors.getCredentials)?.apiKey

  const basemap = useCartoSelector(
    (state) => BASEMAPS[state?.carto?.basemap as keyof typeof BASEMAPS]
  )

  useEffect(() => {
    if (!cartoToken && !!basemap) {
      //check carto slice added or not.
      dispatch(fetchCartoAuthToken() as unknown as AnyAction)
    }
  }, [cartoToken, basemap, dispatch])

  const layers = useCartoSelector((state) =>
    cartoToken ? state.map?.layers ?? [] : []
  )

  return basemap ? (
    <StyledContainer {...rest}>
      <MapRenderSwitch type={basemap.type} layers={layers} />
      {children}
      <Outlet />
    </StyledContainer>
  ) : null
}

export default MapContainer
