import { PageConfig, ExpertsTable, ExpertFilters } from '../components'

const slots: PageConfig['slots'] = {
  top: <ExpertFilters />,
  main: <ExpertsTable />,
}

export default slots
