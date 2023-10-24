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
import { createDealZodSchema, US_CREATE_DEAL_STEPS } from '../config'
import { Box } from '@gic/battlefield-ui-pack'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { DealReqType, DEAL_REQ_TYPE } from '@bpd/ui/constants'
import { quickDealSchema } from '@bpd/daw/us/shared/core'

const dawFormConfig: DawFormProps['config'] = {
  validationSchema: createDealZodSchema,
}

const useConfig: UseConfig = () => {
  return {
    page: {
      path: `/${
        DEAL_REQ_TYPE_BY_URL_MAP[DEAL_REQ_TYPE.DIRECT_INVESTMENT as DealReqType]
      }`,
      modules: createModules({ defaultUiState: DEFAULT_STATE }),
      slots: {
        wrapper: (
          <DawForm defaultValues={DEFAULT_FORM_VALUES} config={dawFormConfig} />
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
                  <DealContent steps={US_CREATE_DEAL_STEPS} />
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
