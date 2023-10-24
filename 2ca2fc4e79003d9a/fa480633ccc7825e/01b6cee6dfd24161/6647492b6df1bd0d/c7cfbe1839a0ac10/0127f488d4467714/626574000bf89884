import { useState } from 'react'
import { useSelector } from 'react-redux'
import { dequal } from 'dequal'
import { selectAreFeaturesReadyForSource } from '@carto/react-redux'
import { InvalidColumnError } from '@carto/react-core'
import { camelCaseTransformer } from '@bpd/utils/casing'
import { useCustomCompareEffect } from './useCustomCompare'
import { getLayerData } from '../utils/getLayerData'

export interface useMapLayerDataProps {
  dataSource: string
  params?: {
    source?: string
    rowsPerPage?: number
    page?: number
    sortBy?: string
    sortDirection?: string
  }
  global?: boolean
  onError?: <T>(args:T) => void
  enabled?: boolean
}

export interface useMapLayerDataResponse {
  data: any
  isLoading: boolean
}

const useMapLayerData = ({
  dataSource,
  params,
  global,
  onError,
  enabled = true,
}: useMapLayerDataProps) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [warning, setWarning] = useState('')

  const isSourceReady = useSelector(
    (state: any) =>
      global ||
      (state.carto ? selectAreFeaturesReadyForSource(state, dataSource) : null)
  )

  const source = useSelector(
    (state: any) => state?.carto?.dataSources[dataSource] || null
  )

  const executeGetLayerData = () => {
    setIsLoading(true)
    setWarning('')

    if (source && isSourceReady && enabled) {
      getLayerData({
        source,
        ...params,
        global,
      })
        .then((data: any) => {
          if (data !== null && data !== undefined) {
            setData({
              ...data,
              data: (data?.data || []).map((record: any) =>
                camelCaseTransformer(record)
              ),
            })
          }
        })
        .catch((error: any) => {
          if (InvalidColumnError.is(error)) {
            setWarning('DEFAULT_INVALID_COLUMN_ERR')
          } else if (onError) {
            onError(error)
          }
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  // useEffect(executeGetLayerData, [params, source, onError, isSourceReady, global, enabled])
  useCustomCompareEffect(
    executeGetLayerData,
    [params, source, onError, isSourceReady, global, enabled],
    dequal
  )

  return { data, isLoading, isSourceReady, source, warning }
}

export default useMapLayerData
