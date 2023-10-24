import { useEffect } from 'react'

const useUnmount = (fn: VoidFunction) => {
  useEffect(() => {
    return () => {
      fn()
    }
  }, [])
}

export default useUnmount
