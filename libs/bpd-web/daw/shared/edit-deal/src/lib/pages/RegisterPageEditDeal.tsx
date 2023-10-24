import {
  PageConfig,
  RegisterPageProps,
  RegisterProps,
} from '@bpd/bpd-web/shared/core'
import { useGetConfigFromLocation } from '@bpd/bpd-web/shared/data-access'
import { DynamicReducer } from '@bpd/bpd-web/shared/store'
import { FC, ReactElement } from 'react'
import { WithGetDealConfig } from '../components'

const RegisterPageEditDeal = <T extends { page: PageConfig }>(
  props: RegisterPageProps<T>
) => {
  const { config, page: Page } = props

  const Config = useGetConfigFromLocation({ config }) as FC<{
    children: ({ useConfig }: RegisterProps<T>) => ReactElement
  }>

  return (
    <>
      {Config ? (
        <Config>
          {({ useConfig: getConfig }: RegisterProps<T>) => {
            return (
              <DynamicReducer
                destroyWhenUnmount={true}
                configs={getConfig()?.page?.modules}
              >
                <WithGetDealConfig>
                  <Page key="edit-page" {...(getConfig() as unknown as T)} />
                </WithGetDealConfig>
              </DynamicReducer>
            )
          }}
        </Config>
      ) : null}
    </>
  )
}
export default RegisterPageEditDeal
