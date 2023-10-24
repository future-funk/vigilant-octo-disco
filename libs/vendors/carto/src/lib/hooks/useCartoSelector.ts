import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { MapState } from '../stores'
import { CartoState } from '../types'

export type RootState = { carto: CartoState; map: MapState }

const useCartoSelector: TypedUseSelectorHook<RootState> = useSelector

export default useCartoSelector
