import { FC, ReactElement } from 'react'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Stack } from '@gic/battlefield-ui-pack'
import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'
import { quickResearchSchema } from '../configs'
import { renderSlot } from '@bpd/ui/libs/react-slots'
import { DealReqestTypeSelect } from '@bpd/daw/shared/core'
import ResearchSchemaForm from './ResearchSchemaForm'

export interface ResearchQuickFormProps {
  uiSchema?: SchemaFormTypes.SchemaForm
  topExtraContent?: ReactElement
}

const StyledContainer = withTheme(Stack)(({ theme }) => ({
  minWidth: 400,
  maxWidth: 400,
  backgroundColor: theme.palette.background.colorBgDawModal,
}))

const DEFAULTS_TOP_EXTRA_CONTENT = <DealReqestTypeSelect />

const ResearchQuickForm: FC<ResearchQuickFormProps> = ({
  uiSchema = quickResearchSchema,
  topExtraContent = DEFAULTS_TOP_EXTRA_CONTENT,
}) => {
  return (
    <StyledContainer>
      <Stack flexDirection="column">
        {renderSlot(topExtraContent)}
        <ResearchSchemaForm name="research" uiSchema={uiSchema} />
      </Stack>
    </StyledContainer>
  )
}

export default ResearchQuickForm
