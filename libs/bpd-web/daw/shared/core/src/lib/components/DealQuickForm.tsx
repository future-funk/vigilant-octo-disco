import { FC, ReactElement } from 'react'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Stack } from '@gic/battlefield-ui-pack'
import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'
import { quickDealSchema } from '../configs'
import DealReqestTypeSelect from './DealReqestTypeSelect'
import { renderSlot } from '@bpd/ui/libs/react-slots'
import DawSchemaForm from './DawSchemaForm'

export interface DealQuickFormProps {
  uiSchema?: SchemaFormTypes.SchemaForm
  topExtraContent?: ReactElement
  bottomExtraContent?: ReactElement
}

const StyledContainer = withTheme(Stack)(({ theme }) => ({
  minWidth: 400,
  maxWidth: 400,
  backgroundColor: theme.palette.background.colorBgDawModal,
}))

const DEFAULTS_TOP_EXTRA_CONTENT = <DealReqestTypeSelect />

const DealQuickForm: FC<DealQuickFormProps> = ({
  uiSchema = quickDealSchema,
  bottomExtraContent,
  topExtraContent = DEFAULTS_TOP_EXTRA_CONTENT,
}) => {
  return (
    <StyledContainer>
      <Stack flexDirection="column">
        {renderSlot(topExtraContent)}
        <DawSchemaForm name="deal" uiSchema={uiSchema} />
        {renderSlot(bottomExtraContent)}
      </Stack>
    </StyledContainer>
  )
}

export default DealQuickForm
