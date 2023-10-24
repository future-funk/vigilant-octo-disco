import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export interface UseInfiniteScroll {
  resetOn?: unknown[]
}

const useInfiniteScroll = (
  options?: UseInfiniteScroll
): [number, Dispatch<SetStateAction<number>>] => {
  const { resetOn } = options || {}

  const [cursor, setCursor] = useState(0)

  useEffect(() => {
    if (resetOn) setCursor(0)
    return () => setCursor(0)
  }, [...(resetOn ?? [])])

  return [cursor, setCursor]
}

export default useInfiniteScroll
