import { Route, Routes } from 'react-router-dom'
import { DrawerLayout } from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import { LogisticsDrawerFilter, CoreLogisticsDrawer } from '../components'
import Map from '../components/Map'

const slots = {
  left: (
    <Routes>
      <Route element={<DrawerLayout />}>
        <Route path="" element={<CoreLogisticsDrawer />} />
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
      <Route path="" element={<LogisticsDrawerFilter />} />
    </Routes>
  ),
}

export default slots
