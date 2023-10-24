import { omit } from 'lodash'
import { useContext } from 'react'
import { AgGridContext } from '../providers'

const useGrid = () => {
  const gridContext = useContext(AgGridContext)

  return omit(gridContext, 'setRef')
}

export default useGrid
