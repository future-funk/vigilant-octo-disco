import { useEffect, useMemo } from 'react'
import { map, initial, chain } from 'lodash'
import { useDispatch } from 'react-redux'
import { MsaExposureCartoQueries } from '@bpd/msa-exposure/shared/data-access'
import { MsaExposureActions } from '../data'
import { FilterItem } from '../components'

const useGetSectorFilter = (props: Pick<FilterItem, 'key' | 'label'>) => {
  const { key, label } = props

  const dispatch = useDispatch()
  const { data } = MsaExposureCartoQueries.useGetMsaSectors({})

  const items = useMemo(
    () =>
      chain(data)
        .map('sector')
        .uniq()
        .map((sector) => ({ label: sector, value: sector }))
        .value(),
    [data]
  )

  useEffect(() => {
    if (!data) return
    dispatch(MsaExposureActions.addFilter({ [key]: map(items, 'value') }))
  }, [data])

  return useMemo(() => ({ key, label, componentProps: { items } }), [items])
}

export default useGetSectorFilter
