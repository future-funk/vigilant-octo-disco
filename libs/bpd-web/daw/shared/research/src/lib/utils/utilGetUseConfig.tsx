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
import { Box } from '@gic/battlefield-ui-pack'
import { DealReqType, DEAL_REQ_TYPE } from '@bpd/ui/constants'
import { ResearchContent, ResearchQuickForm } from '../component'
import { createResearchZodSchema } from '../configs'
import {
  DEFAULT_RESEARCH_REQ_TYPE_TITLE_MAP,
  RESEARCH_DEFAULT_FORM_VALUES,
} from '../constants'
import { useResearchFormFooter } from '../hooks'

const researchFormConfig: DawFormProps['config'] = {
  validationSchema: createResearchZodSchema,
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
        path: `/${DEAL_REQ_TYPE_BY_URL_MAP[DEAL_REQ_TYPE.GIPS as DealReqType]}`,
        modules: createModules({
          defaultUiState: {
            ...defaultState,
            requestType: DEAL_REQ_TYPE.GIPS as DealReqType,
            pageTitle: 'Create New Research Project',
          },
        }),
        slots: {
          wrapper: (
            <DawForm
              defaultValues={RESEARCH_DEFAULT_FORM_VALUES}
              config={researchFormConfig}
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
                  <ResearchQuickForm
                    topExtraContent={
                      <DealReqestTypeSelect
                        options={DEFAULT_RESEARCH_REQ_TYPE_TITLE_MAP}
                        baseRoutePath={`${baseRoutePath}/create`}
                      />
                    }
                  />
                ),
                right: (
                  <Box sx={{ flexGrow: 1 }}>
                    <ResearchContent />
                  </Box>
                ),
              }}
            />
          ),
          bottom: <FormFooter useFormFooter={useResearchFormFooter} />,
        },
      },
    }
  }

export default utilGetUseConfig
