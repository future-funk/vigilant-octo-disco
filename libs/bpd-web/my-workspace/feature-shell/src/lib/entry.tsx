import { RegisterPage } from '@bpd/bpd-web/shared/core'
import { Page } from '@bpd/my-workspace/shared/core'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import loadable from '@loadable/component'
import { defaults } from './configs'

const entry = loadable.lib(() => import(/* webpackChunkName: "MyWorkspaceEntry" */ './hooks'))

const Entry = () => {
  return (
    <RegisterPage
      page={Page}
      defaults={defaults}
      config={{
        [ROUTES.MY_WORKSPACE]: entry,
      }}
    />
  )
}

export default Entry
