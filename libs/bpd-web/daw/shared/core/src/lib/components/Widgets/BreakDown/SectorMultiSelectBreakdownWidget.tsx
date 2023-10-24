import SectorMultiSelectBreakdown from './SectorMultiSelectBreakdown'
import { default as withBreakdown } from './withBreakDown'

const SectorMultiSelectBreakdownWidget = withBreakdown({
  component: SectorMultiSelectBreakdown,
  breakDnKey: 'projects[].aumBreakdowns.sector',
})

export default SectorMultiSelectBreakdownWidget
