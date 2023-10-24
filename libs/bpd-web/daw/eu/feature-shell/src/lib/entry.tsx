import { Page, RegisterPage } from '@bpd/daw/shared/core'
import {
  Page as EditPage,
  RegisterPageEditDeal,
} from '@bpd/daw/shared/edit-deal'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import loadable from '@loadable/component'
import { Navigate, Route, Routes } from 'react-router-dom'

const CreateDeal = loadable.lib(() => import('@bpd/daw/eu/shared/create-deal'))

//no need to make another entry lib to hold for project. play with feature-shell here as
//it is packed by lazy
const CreateProject = loadable.lib(
  () => import('@bpd/daw/eu/shared/create-project')
)

const EditDeal = loadable.lib(() => import('@bpd/daw/eu/shared/edit-deal'))

const Entry = () => {
  return (
    <Routes>
      <Route
        path="/create/*"
        element={
          <RegisterPage
            page={Page}
            config={{
              [ROUTES.INVESTMENT_PROCESS.EU.CREATE_DEAL]: CreateDeal,
              [ROUTES.INVESTMENT_PROCESS.EU.CREATE_TRACKER]: CreateProject,
            }}
          />
        }
      />
      <Route
        path="/edit/*"
        element={
          <RegisterPageEditDeal
            page={EditPage}
            config={{
              [ROUTES.INVESTMENT_PROCESS.EU.EDIT_DEAL]: EditDeal,
            }}
          />
        }
      />
      <Route path="/create" element={<Navigate to={'inv'} />} />
    </Routes>
  )
}

export default Entry
