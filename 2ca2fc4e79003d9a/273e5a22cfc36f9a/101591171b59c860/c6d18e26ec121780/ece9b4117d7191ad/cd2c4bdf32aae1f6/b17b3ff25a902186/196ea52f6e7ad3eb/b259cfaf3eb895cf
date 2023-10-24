import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'
import { FC } from 'react'
import { dealStaffingSchema } from '../configs'
import DawSchemaForm from './DawSchemaForm'

export interface DealStaffingProps {
  uiSchema?: SchemaFormTypes.SchemaForm
}

const DealStaffing: FC<DealStaffingProps> = ({
  uiSchema = dealStaffingSchema,
}) => {
  return <DawSchemaForm {...{ uiSchema }} />
}

export default DealStaffing
