import { FC, ReactElement } from 'react'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Stack } from '@gic/battlefield-ui-pack'
import { SchemaFormTypes } from '@bpd/bpd-web/shared/ui'
import { quickProjectSchema } from '../configs'
import { renderSlot } from '@bpd/ui/libs/react-slots'
import { DealReqestTypeSelect } from '@bpd/daw/shared/core'
import ProjectSchemaForm from './ProjectSchemaForm'

export interface ProjectQuickFormProps {
  uiSchema?: SchemaFormTypes.SchemaForm
  topExtraContent?: ReactElement
}

const StyledContainer = withTheme(Stack)(({ theme }) => ({
  minWidth: 400,
  maxWidth: 400,
  backgroundColor: theme.palette.background.colorBgDawModal,
}))

const DEFAULTS_TOP_EXTRA_CONTENT = <DealReqestTypeSelect />

const ProjectQuickForm: FC<ProjectQuickFormProps> = ({
  uiSchema = quickProjectSchema,
  topExtraContent = DEFAULTS_TOP_EXTRA_CONTENT,
}) => {
  return (
    <StyledContainer>
      <Stack flexDirection="column">
        {renderSlot(topExtraContent)}
        <ProjectSchemaForm name="research" uiSchema={uiSchema} />
      </Stack>
    </StyledContainer>
  )
}

export default ProjectQuickForm