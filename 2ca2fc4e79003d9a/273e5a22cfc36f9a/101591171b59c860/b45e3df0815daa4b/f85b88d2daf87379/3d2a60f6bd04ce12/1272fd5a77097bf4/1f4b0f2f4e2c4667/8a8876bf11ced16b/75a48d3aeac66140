import {
  TopBar,
  DawForm,
  LayoutBody,
  createModules,
  UseConfig,
  DawFormProps,
  DealQuickForm,
  DealContent,
  DealReqestTypeSelect,
  DEAL_REQ_TYPE_BY_URL_MAP,
  FormFooter,
} from '@bpd/daw/shared/core'
import { BpdButton } from '@bpd/bpd-web/shared/ui'
import { DEFAULT_STATE, DEFAULT_FORM_VALUES } from '../constants'
import { pjvZodSchema, US_PJV_CREATE_DEAL_STEPS } from '../config'
import { Box } from '@gic/battlefield-ui-pack'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { DealReqType, DEAL_REQ_TYPE } from '@bpd/ui/constants'
import { quickDealSchema } from '@bpd/daw/us/shared/core'

const dawFormConfig: DawFormProps['config'] = {
  validationSchema: pjvZodSchema,
}

const useConfig: UseConfig = () => {
  return {
    page: {
      path: `/${
        DEAL_REQ_TYPE_BY_URL_MAP[DEAL_REQ_TYPE.PRGM_JV_SUB_DEAL as DealReqType]
      }`,
      modules: createModules({
        defaultUiState: {
          ...DEFAULT_STATE,
          requestType: DEAL_REQ_TYPE.PRGM_JV_SUB_DEAL as DealReqType,
        },
      }),
      slots: {
        wrapper: (
          <DawForm
            defaultValues={{
              ...DEFAULT_FORM_VALUES,
              requestType: DEAL_REQ_TYPE.PRGM_JV_SUB_DEAL,
            }}
            config={dawFormConfig}
          />
        ),
        top: (
          <TopBar
            headerExtraContent={
              <BpdButton htmlType="submit" title={'Create Deal'}></BpdButton>
            }
          />
        ),
        main: (
          <LayoutBody
            main={{
              left: (
                <DealQuickForm
                  uiSchema={quickDealSchema}
                  topExtraContent={
                    <DealReqestTypeSelect
                      baseRoutePath={`${ROUTES.INVESTMENT_PROCESS.US.DEALS}/create`}
                    />
                  }
                />
              ),
              right: (
                <Box sx={{ flexGrow: 1 }}>
                  <DealContent steps={US_PJV_CREATE_DEAL_STEPS} />
                </Box>
              ),
            }}
          />
        ),
        bottom: <FormFooter />,
      },
    },
  }
}

export default useConfig
