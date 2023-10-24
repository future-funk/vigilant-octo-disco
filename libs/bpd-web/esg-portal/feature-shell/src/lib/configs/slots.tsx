import { PageConfig, Map, CoreDrawer, FilterBar } from '@bpd/esg-portal/shared/core'

const slots: PageConfig['slots'] = {
  top: <FilterBar />,
  left: <CoreDrawer />,
  center: <Map />,
}

export default slots
