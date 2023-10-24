import {
  TopBar,
  LayoutBody,
  createModules,
  UseConfig,
  DealQuickForm,
  DealContent,
  DealReqestTypeSelect,
  FormFooter,
} from '@bpd/daw/shared/core'
import { BpdButton } from '@bpd/bpd-web/shared/ui'
import { DEFAULT_STATE } from '../constants'
import { Box } from '@gic/battlefield-ui-pack'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { quickDealSchema } from '@bpd/daw/eu/shared/core'
import { EditDawForm } from '@bpd/daw/shared/edit-deal'

const useConfig: UseConfig = () => {
  return {
    page: {
      path: `/:dealId`,
      modules: createModules({ defaultUiState: DEFAULT_STATE }),
      slots: {
        wrapper: <EditDawForm />,
        top: (
          <TopBar
            headerExtraContent={
              <BpdButton htmlType="submit" title={'Save Deal'}></BpdButton>
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
                      baseRoutePath={`${ROUTES.INVESTMENT_PROCESS.EU.DEALS}/edit/:dealId`}
                    />
                  }
                />
              ),
              right: (
                <Box sx={{ flexGrow: 1 }}>
                  <DealContent steps={[]} />
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
