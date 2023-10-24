import { SwapOutlined } from '@ant-design/icons'
import { useAppPalette, withTheme } from '@bpd/bpd-web/shared/theme'
import {
  BpdInputNumber,
  BpdInputNumberProps,
  SfErrorContainer,
  FieldProps,
  SchemaFieldHeader,
} from '@bpd/bpd-web/shared/ui'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { useEffect } from 'react'
import { formatNumber } from '@bpd/utils/formatters'
import { useExchangeRate } from '../../../hooks'

export interface ExRateFieldWidgetProps
  extends BpdInputNumberProps,
    FieldProps {}

const StyledBpdInputNumber = withTheme(BpdInputNumber)(({ theme }) => ({}))

const ExRateFieldWidget: FC<ExRateFieldWidgetProps> = ({
  input: { name, hasError },
  uiField: { rule },
  value,
  ...componentProps
}) => {
  const palette = useAppPalette()

  const { setValue } = useFormContext()

  const { validationRule } = rule ?? {}

  const {
    baseCurrency,
    targetCurrency,
    lcToUsdRate,
    lcToUsdRatePathString,
    shouldSwapTargetCurrency,
  } = useExchangeRate({ name })

  useEffect(() => {
    const newExchangeRate = (value ?? 1) as number
    const lcConverted = value
      ? formatNumber(
          shouldSwapTargetCurrency ? newExchangeRate : 1 / newExchangeRate,
          6
        )
      : 0
    setValue(lcToUsdRatePathString, lcConverted)
  }, [value])

  const sourceCurrency = shouldSwapTargetCurrency
    ? baseCurrency
    : targetCurrency

  const destinationCurrency = shouldSwapTargetCurrency
    ? targetCurrency
    : baseCurrency

  return (
    <Stack spacing={0.5}>
      <SchemaFieldHeader
        required={validationRule?.required}
        title={`Exchange Rate (${baseCurrency} to ${targetCurrency})`}
      />
      <SfErrorContainer hasError={hasError}>
        <StyledBpdInputNumber
          addonAfter={<SwapOutlined />}
          value={value}
          {...componentProps}
        />
      </SfErrorContainer>

      {lcToUsdRate && sourceCurrency !== destinationCurrency ? (
        <Stack position="relative">
          <Typography
            variant="body2"
            sx={{ color: palette.text.caption, right: 0, position: 'absolute' }}
          >
            {`1 ${sourceCurrency} = ${formatNumber(
              lcToUsdRate,
              6
            )} ${destinationCurrency}`}
          </Typography>
        </Stack>
      ) : null}
    </Stack>
  )
}

export default ExRateFieldWidget
