import MultiSelectBreakdown from './MultiSelectBreakdown'
import { default as withBreakdown } from './withBreakDown'

const AssetMultiSelectWidget = withBreakdown({
  component: MultiSelectBreakdown,
  breakDnKey: 'projects[].aumBreakdowns.assetType',
  multiSelectLabel: 'Mixed',
})

export default AssetMultiSelectWidget
