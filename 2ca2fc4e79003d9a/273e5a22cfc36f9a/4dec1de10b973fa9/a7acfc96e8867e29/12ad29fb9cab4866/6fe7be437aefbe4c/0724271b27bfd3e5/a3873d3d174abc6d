import { BpdCheckbox } from '@bpd/bpd-web/shared/ui'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import { DirectoryActions, DirectorySelectors } from '../data'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { ANALYTICS_CHART_TYPE } from '../constants'

interface LogisticsAnalyticsPortfolioActionProps {
  type: ANALYTICS_CHART_TYPE
}

const StyledBpdCheckbox = withTheme(BpdCheckbox)(({ theme }) => ({
  width: 'max-content',
  color: theme.palette.text.dark,
  fontSize: theme.typography.body3.fontSize,
}))

const LogisticsAnalyticsPortfolioAction: React.FC<
  LogisticsAnalyticsPortfolioActionProps
> = ({ type }) => {
  const dispatch = useAppDispatch()

  const selectedMapAssetType = useAppSelector(
    DirectorySelectors.getSelectedMapAssetType
  )

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    dispatch(
      DirectoryActions.setSelectedMapAssetType(e.target?.checked ? type : null)
    )
  }

  return (
    <StyledBpdCheckbox
      title="Underlying Assets"
      onChange={handleCheckboxChange}
      checked={selectedMapAssetType === type}
    />
  )
}

export default LogisticsAnalyticsPortfolioAction
