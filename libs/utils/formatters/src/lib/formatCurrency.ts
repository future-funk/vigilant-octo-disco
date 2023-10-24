export interface NumberFormatOptions {
  notation?: 'standard' | 'scientific' | 'engineering' | 'compact'
  compactDisplay?: 'short' | 'long'
}

export const formatCurrency = (
  value: number,
  currency?: string,
  suffix?: string | null,
  otherOptions?: NumberFormatOptions
) => {
  const commonProps = { maximumFractionDigits: 0 }
  const formatter = new Intl.NumberFormat('en-US', {
    style: currency ? 'currency' : 'decimal',
    ...(currency && { currency }),
    ...commonProps,
    ...otherOptions,
  })
  return `${suffix ? `${suffix} ` : ''}${formatter.format(value)}`
}

export default formatCurrency
