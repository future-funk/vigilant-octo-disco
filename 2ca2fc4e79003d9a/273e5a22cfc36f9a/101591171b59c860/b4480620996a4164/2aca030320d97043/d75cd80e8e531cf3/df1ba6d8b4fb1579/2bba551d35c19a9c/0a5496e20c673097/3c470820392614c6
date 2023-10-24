import {
  TopBar,
  DawForm,
  LayoutBody,
  createModules,
  UseConfig,
  DawFormProps,
  DealReqestTypeSelect,
  FormFooter,
  DEAL_REQ_TYPE_BY_URL_MAP,
} from '@bpd/daw/shared/core'
import { BpdButton } from '@bpd/bpd-web/shared/ui'
import { DEFAULT_STATE, EU_PROJECT_DEFAULT_FORM_VALUES } from '../constants'
import { Box } from '@gic/battlefield-ui-pack'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { DealReqType, DEAL_REQ_TYPE } from '@bpd/ui/constants'
import {
  ProjectContent,
  ProjectQuickForm,
  DEFAULT_PROJECT_REQ_TYPE_TITLE_MAP,
  useProjectFormFooter,
} from '@bpd/daw/shared/project'
import { createEuProjectZodSchema, EU_PROJECT_FORM_STEP } from '../config'
import { quickProjectSchema } from '@bpd/daw/eu/shared/core'

const projectFormConfig: DawFormProps['config'] = {
  validationSchema: createEuProjectZodSchema,
}

const useConfig: UseConfig = () => {
  return {
    page: {
      path: `/${DEAL_REQ_TYPE_BY_URL_MAP[DEAL_REQ_TYPE.OTHERS as DealReqType]}`,
      modules: createModules({
        defaultUiState: {
          ...DEFAULT_STATE,
          requestType: DEAL_REQ_TYPE.OTHERS as DealReqType,
          pageTitle: 'Create New Project',
        },
      }),
      slots: {
        wrapper: (
          <DawForm
            defaultValues={EU_PROJECT_DEFAULT_FORM_VALUES}
            config={projectFormConfig}
          />
        ),
        top: (
          <TopBar
            headerExtraContent={
              <BpdButton htmlType="submit" title={'Create Project'}></BpdButton>
            }
          />
        ),
        main: (
          <LayoutBody
            main={{
              left: (
                <ProjectQuickForm
                  uiSchema={quickProjectSchema}
                  topExtraContent={
                    <DealReqestTypeSelect
                      options={DEFAULT_PROJECT_REQ_TYPE_TITLE_MAP}
                      baseRoutePath={`${ROUTES.INVESTMENT_PROCESS.EU.TRACKER}/create`}
                    />
                  }
                />
              ),
              right: (
                <Box sx={{ flexGrow: 1 }}>
                  <ProjectContent steps={EU_PROJECT_FORM_STEP} />
                </Box>
              ),
            }}
          />
        ),
        bottom: <FormFooter useFormFooter={useProjectFormFooter} />,
      },
    },
  }
}

export default useConfig
