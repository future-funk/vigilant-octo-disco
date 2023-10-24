import { DrawerLayout, Map, DirectoryDrawerFilters, DirectoryCoreDrawer } from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import { Route, Routes } from 'react-router-dom'

const slots = {
    left: (
      <Routes>
        <Route element={<DrawerLayout />}>
          <Route path="" element={<DirectoryCoreDrawer />} />
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