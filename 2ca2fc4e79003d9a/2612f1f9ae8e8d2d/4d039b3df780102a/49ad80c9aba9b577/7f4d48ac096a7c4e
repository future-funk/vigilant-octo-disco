import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

export const LOCATION_CHANGE_ACTION_TYPE = '@@router/LOCATION_CHANGE'

const useLocationChangeListener = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: LOCATION_CHANGE_ACTION_TYPE, payload: { location } })
  }, [location.pathname])

  return location
}

export default useLocationChangeListener
