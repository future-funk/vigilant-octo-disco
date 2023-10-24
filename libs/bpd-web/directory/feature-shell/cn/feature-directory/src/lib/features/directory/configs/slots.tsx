import { DrawerLayout } from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import { Route, Routes } from 'react-router-dom'
import { DirectoryDrawer } from '../components'
// import { Drawer } from '../../../shared/components'
import { Map, DirectoryDrawerFilters } from '../components'

const slots = {
    left: (
      <Routes>
        <Route element={<DrawerLayout />}>
          <Route path="" element={<DirectoryDrawer />} />
        </Route>
      </Routes>
    ),
    center: (
      <Routes>
        <Route path="" element={<Map />} />
      </Routes>
    ),
    top: (
      <Routes>
        <Route path="" element={<DirectoryDrawerFilters />} />
      </Routes>
    )
  }

export default slots