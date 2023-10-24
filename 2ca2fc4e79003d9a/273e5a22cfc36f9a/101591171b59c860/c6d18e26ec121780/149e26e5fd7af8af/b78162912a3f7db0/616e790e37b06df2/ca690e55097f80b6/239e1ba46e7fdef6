import { DawForm, DawFormProps } from '@bpd/daw/shared/core'
import { FC } from 'react'
import { useGetDealConfig } from '../hooks'

export interface EditDawFormProps extends Omit<DawFormProps, 'defaultValues'> {}

const EditDawForm: FC<EditDawFormProps> = (props) => {
  const { data } = useGetDealConfig()

  return (
    <DawForm {...props} defaultValues={data} updateDefaultValuesOn={[data]} />
  )
}

export default EditDawForm
