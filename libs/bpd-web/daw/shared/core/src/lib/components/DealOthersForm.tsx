import { SchemaFormProps } from '@bpd/bpd-web/shared/ui'
import { FC } from 'react'
import { DawSchemaForm } from '.'
import { dealOthersSchema } from '../configs'

export interface DealOthersFormProps {
  uiSchema?: SchemaFormProps['uiSchema']
}

const DealOthersForm: FC<DealOthersFormProps> = ({
  uiSchema = dealOthersSchema,
}) => {
  return <DawSchemaForm {...{ uiSchema }} />
}

export default DealOthersForm
