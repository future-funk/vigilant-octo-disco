import { createCartoSlice } from '@carto/react-redux'
import { InitialCartoState } from '../types'
import getInitialState from './getInitialState'

const createSlice = (viewState: InitialCartoState['viewState']) => {
  const initialState = getInitialState({ viewState })
  return createCartoSlice(initialState)
}

export default createSlice
