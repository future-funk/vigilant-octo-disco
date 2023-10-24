import { BpdFormActions } from '@bpd/bpd-web/shared/ui'
import { FC } from 'react'
import { useCreateDealFooter, useFormFooterRetunType } from '../hooks'

export interface FormFooterProps {
  useFormFooter?: (props: unknown) => useFormFooterRetunType
}

const FormFooter: FC<FormFooterProps> = ({
  useFormFooter = useCreateDealFooter,
}) => {
  const { handleSubmit, formActionProps } = useFormFooter()

  return (
    <BpdFormActions
      {...{
        containerSx: { marginRight: 3 },
        ...formActionProps,
      }}
    />
  )
}

export default FormFooter
