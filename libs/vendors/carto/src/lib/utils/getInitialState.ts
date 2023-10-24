import { INITIAL_STATE } from '../constants'
import type { InitialCartoState } from '../types'
import generateId from './generateId'

const getInitialState = (
  options?: Partial<InitialCartoState>
): InitialCartoState => ({
  ...INITIAL_STATE,
  ...options,
  viewState: { ...INITIAL_STATE.viewState, ...options?.viewState },
  id: generateId(),
})

export default getInitialState
