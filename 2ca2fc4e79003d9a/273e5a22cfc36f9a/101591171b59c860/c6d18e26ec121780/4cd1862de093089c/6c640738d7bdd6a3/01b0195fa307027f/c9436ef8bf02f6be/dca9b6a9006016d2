import {
  TopBar,
  DawForm,
  LayoutBody,
  createModules,
  UseConfig,
  DawFormProps,
  DealReqestTypeSelect,
  DEAL_REQ_TYPE_BY_URL_MAP,
  FormFooter,
} from '@bpd/daw/shared/core'
import { BpdButton } from '@bpd/bpd-web/shared/ui'
import {
  DEFAULT_PROJECT_REQ_TYPE_TITLE_MAP,
  PROJECT_DEFAULT_FORM_VALUES,
} from '../constants'
import { Box } from '@gic/battlefield-ui-pack'
import { DealReqType, DEAL_REQ_TYPE } from '@bpd/ui/constants'
import { ProjectContent, ProjectQuickForm } from '../component'

import {
  createProjectZodSchema,
  CREATE_PROJECT_STEPS,
  quickProjectSchema,
} from '../configs'
import { useProjectFormFooter } from '../hooks'

const projectFormConfig: DawFormProps['config'] = {
  validationSchema: createProjectZodSchema,
}

const utilGetUseConfig =
  ({
    defaultState,
    baseRoutePath,
  }: {
    defaultState: any
    baseRoutePath: string
  }): UseConfig =>
  () => {
    return {
      page: {
        path: `/${
          DEAL_REQ_TYPE_BY_URL_MAP[DEAL_REQ_TYPE.OTHERS as DealReqType]
        }`,
        modules: createModules({
          defaultUiState: {
            ...defaultState,
            requestType: DEAL_REQ_TYPE.OTHERS as DealReqType,
            pageTitle: 'Create New Project',
          },
        }),
        slots: {
          wrapper: (
            <DawForm
              defaultValues={{ ...PROJECT_DEFAULT_FORM_VALUES }}
              config={projectFormConfig}
            />
          ),
          top: (
            <TopBar
              headerExtraContent={
                <BpdButton
                  htmlType="submit"
                  title={'Create Project'}
                ></BpdButton>
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
                        baseRoutePath={`${baseRoutePath}/create`}
                      />
                    }
                  />
                ),
                right: (
                  <Box sx={{ flexGrow: 1 }}>
                    <ProjectContent steps={CREATE_PROJECT_STEPS} />
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

export default utilGetUseConfig
