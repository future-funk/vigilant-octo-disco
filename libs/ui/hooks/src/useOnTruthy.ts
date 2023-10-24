import { every } from 'lodash'
import { useEffect } from 'react'

const useOnTruthy = (fn: VoidFunction, deps: unknown[]) => {
  useEffect(() => {
    if (!every(deps)) return
    fn()
  }, deps)
}

export default useOnTruthy
