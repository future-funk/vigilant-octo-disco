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
import { EU_ADD_COMMIT_CREATE_DEAL_STEPS, addCommitZodSchema } from '../config'
import { Box } from '@gic/battlefield-ui-pack'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { quickDealSchema } from '@bpd/daw/eu/shared/core'
import { DealReqType, DEAL_REQ_TYPE } from '@bpd/ui/constants'

const dawFormConfig: DawFormProps['config'] = {
  validationSchema: addCommitZodSchema,
}

const useConfig: UseConfig = () => {
  return {
    page: {
      path: `/${
        DEAL_REQ_TYPE_BY_URL_MAP[DEAL_REQ_TYPE.ADD_COMMITMENT as DealReqType]
      }`,
      modules: createModules({
        defaultUiState: {
          ...DEFAULT_STATE,
          requestType: DEAL_REQ_TYPE.ADD_COMMITMENT as DealReqType,
        },
      }),
      slots: {
        wrapper: (
          <DawForm
            defaultValues={{
              ...DEFAULT_FORM_VALUES,
              requestType: DEAL_REQ_TYPE.ADD_COMMITMENT,
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
                      baseRoutePath={`${ROUTES.INVESTMENT_PROCESS.EU.DEALS}/create`}
                    />
                  }
                />
              ),
              right: (
                <Box sx={{ flexGrow: 1 }}>
                  <DealContent steps={EU_ADD_COMMIT_CREATE_DEAL_STEPS} />
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
