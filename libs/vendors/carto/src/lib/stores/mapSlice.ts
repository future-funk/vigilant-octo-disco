import createMapSlice, { createMapSelectors } from './createMapSlice'

const mapSlice = createMapSlice()

export const MapSelectors = createMapSelectors()

export const MapActions = mapSlice.actions

export const mapReducer = mapSlice.reducer

export default mapSlice
