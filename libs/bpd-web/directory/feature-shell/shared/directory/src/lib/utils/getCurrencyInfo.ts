import { find } from 'lodash'

const getCurrencyDisplayByCurrencyCode = (
  currency: string,
  currencyDisplay: string
) =>
  find(
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      currencyDisplay,
    }).formatToParts(),
    { type: 'currency' }
  )?.value || '-'

const getCurrencyInfo = (currency: string) => {
  if(!currency) return {}  
  return {
    symbol: getCurrencyDisplayByCurrencyCode(currency, 'symbol'),
    name: getCurrencyDisplayByCurrencyCode(currency, 'name'),
  }
}

export default getCurrencyInfo
