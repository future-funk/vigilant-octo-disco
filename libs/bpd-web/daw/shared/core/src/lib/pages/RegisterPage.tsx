import {
  PageConfig,
  RegisterPageProps,
  RegisterProps,
} from '@bpd/bpd-web/shared/core'
import { useGetConfigFromLocation } from '@bpd/bpd-web/shared/data-access'
import { DynamicReducer } from '@bpd/bpd-web/shared/store'
import { upperFirst, get, camelCase } from 'lodash'
import { FC, ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import { utilGetReqTypeFromLocation } from '../utils'

const RegisterPage = <T extends { page: PageConfig }>(
  props: RegisterPageProps<T>
) => {
  const { config, page } = props

  const { pathname } = useLocation()

  const Config = useGetConfigFromLocation({ config }) as FC<{
    children: ({ useConfig }: RegisterProps<T>) => ReactElement
  }>

  const reqType = utilGetReqTypeFromLocation({ fullpath: pathname }) ?? ''

  return (
    <>
      {Config ? (
        <Config>
          {(props: RegisterProps<T>) => {
            const getPageConfig = get(
              props,
              `use${upperFirst(camelCase(reqType))}Config`,
              get(props, 'useConfig')
            )
            return (
              <DynamicReducer
                destroyWhenUnmount={true}
                configs={getPageConfig()?.page?.modules}
                update={[reqType]}
              >
                {page(getPageConfig() as unknown as T)}
              </DynamicReducer>
            )
          }}
        </Config>
      ) : null}
    </>
  )
}
export default RegisterPage
