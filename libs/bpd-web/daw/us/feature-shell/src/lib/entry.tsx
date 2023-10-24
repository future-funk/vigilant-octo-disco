import { Page, RegisterPage } from '@bpd/daw/shared/core'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import loadable from '@loadable/component'
import { Navigate, Route, Routes } from 'react-router-dom'
import {
  Page as EditPage,
  RegisterPageEditDeal,
} from '@bpd/daw/shared/edit-deal'

const CreateDeal = loadable.lib(() => import('@bpd/daw/us/shared/create-deal'))

const CreateProject = loadable.lib(
  () => import('@bpd/daw/us/shared/create-project')
)

const EditDeal = loadable.lib(() => import('@bpd/daw/us/shared/edit-deal'))

const Entry = () => {
  return (
    <Routes>
      <Route
        path="/create/*"
        element={
          <RegisterPage
            page={Page}
            config={{
              [ROUTES.INVESTMENT_PROCESS.US.CREATE_DEAL]: CreateDeal,
              [ROUTES.INVESTMENT_PROCESS.US.CREATE_TRACKER]: CreateProject,
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
              [ROUTES.INVESTMENT_PROCESS.US.EDIT_DEAL]: EditDeal,
            }}
          />
        }
      />
      <Route path="/create" element={<Navigate to={'inv'} />} />
    </Routes>
  )
}

export default Entry
