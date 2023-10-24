import { some } from 'lodash'
import { useEffect } from 'react'

const useOnFalsy = (fn: VoidFunction, deps: unknown[]) => {
  useEffect(() => {
    if (some(deps)) return
    fn()
  }, deps)
}

export default useOnFalsy
