import { useEffect, useRef } from 'react'

const useIsMount = () => {
  const { current: _local } = useRef({ isMounted: false })
  useEffect(() => {
    _local.isMounted = true
  }, [])
  return _local.isMounted
}

export default useIsMount
