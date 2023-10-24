import {
  AdfsOidcAuthProvider,
  useAdfsOidcAuthAxiosIntercepter,
} from '@bpd/auth-adfs-oidc'
import { BPAuthzProvider, HttpError } from '@bpd/auth-authorization'
import { Unauthorized } from '@bpd/auth/components'
import { RouterProvider } from '@bpd/bpd-web/shared/routing'
import { StoreProvider } from '@bpd/bpd-web/shared/store'
import { ThemeProvider } from '@bpd/bpd-web/shared/theme'
import { AgGridProvider } from '@bpd/vendors/ag-grid'
import { Toaster } from 'react-hot-toast'
import './App.css'

const App = () => {
  useAdfsOidcAuthAxiosIntercepter()

  return (
    <>
      <Toaster />
      <StoreProvider>
        <ThemeProvider>
          <AdfsOidcAuthProvider
            fallback={(error: HttpError) =>
              (['408'].includes(error?.status) && (
                <Unauthorized to={error.status} />
              )) || <Unauthorized to="401" />
            }
          >
            <BPAuthzProvider
              onError={(error: HttpError) =>
                ['401', '403'].includes(error?.status) && (
                  <Unauthorized to={error.status} />
                )
              }
            >
              <AgGridProvider>
                <RouterProvider />
              </AgGridProvider>
            </BPAuthzProvider>
          </AdfsOidcAuthProvider>
        </ThemeProvider>
      </StoreProvider>
    </>
  )
}

export default App
