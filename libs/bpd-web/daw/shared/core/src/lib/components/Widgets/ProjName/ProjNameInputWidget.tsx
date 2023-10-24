import { BpdInputWidget, BpdInputWidgetProps } from '@bpd/bpd-web/shared/ui'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

export interface ProjNameInputWidgetProps extends BpdInputWidgetProps {}

const ProjNameInputWidget: FC<ProjNameInputWidgetProps> = ({
  onChange,
  ...props
}) => {
  const { setValue } = useFormContext()

  const handleChange = (value: string) => {
    setValue('name', value)
    onChange(value)
  }
  return <BpdInputWidget {...props} onChange={handleChange} />
}
export default ProjNameInputWidget
