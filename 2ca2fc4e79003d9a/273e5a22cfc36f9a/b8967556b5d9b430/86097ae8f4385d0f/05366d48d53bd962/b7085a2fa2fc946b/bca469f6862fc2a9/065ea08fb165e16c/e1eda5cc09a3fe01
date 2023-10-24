import { chain } from 'lodash'
import { useEffect, useMemo, useState } from 'react'
import Filters from './Filters'
import { BpdFilterControlType } from '@bpd/bpd-web/shared/ui'
import { Stack } from '@gic/battlefield-ui-pack'
import { MvIrrActions, MvIrrSelectors } from '../data'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'

const getCurrencyList = (currency: string[]) => {
  return chain(currency)
    .uniq()
    .map((currency) => ({ label: currency, value: currency }))
    .value()
}

const ProjCcySelector = (props) => {
  const { ccList, isLocalCurrency, displayName } = props
  const { currency } = useAppSelector(MvIrrSelectors.getFilters)
  const [defaultList, setDefaultList] = useState(['All'])

  const dispatch = useAppDispatch()

  const { activeProjCcy } = useAppSelector(MvIrrSelectors.getFilters)
  const projCcy = useMemo(() => ({ activeProjCcy }), [activeProjCcy])

  useEffect(() => {
    if (activeProjCcy === 'All') {
      setDefaultList(['All', ...ccList])
    }
  }, [ccList])

  useEffect(() => {
    // always reset to all once currency is changed
    dispatch(MvIrrActions.addFilter({ activeProjCcy: 'All' }))
  }, [currency])

  const currencyItems = useMemo(
    () => getCurrencyList(defaultList),
    [defaultList]
  )

  const handleChange = (key: string, value: unknown) => {
    dispatch(MvIrrActions.addFilter({ [key]: value }))
  }

  if (!isLocalCurrency) {
    return (
      <Stack
        direction="row"
        flexWrap="wrap"
        alignItems="center"
        sx={{ minHeight: 44 }}
      >
        {displayName}
      </Stack>
    )
  }

  return (
    <Stack direction="row" flexWrap="wrap" alignItems="flex-end" sx={{ py: 1 }}>
      <Filters
        filters={projCcy}
        handleChange={handleChange}
        options={[
          {
            key: 'activeProjCcy',
            label: '',
            type: BpdFilterControlType.SingleSelect,
            componentProps: { items: currencyItems },
          },
        ]}
      />
    </Stack>
  )
}
export default ProjCcySelector
