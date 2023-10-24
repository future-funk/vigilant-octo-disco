import { FC, ReactElement } from 'react'
import { Box } from '@gic/battlefield-ui-pack'
import PortfolioMsaExposure from './PortfolioMsaExposure'

interface PortfolioDashboardProps {
  children?: ReactElement
}

const PortfolioDashboard: FC<PortfolioDashboardProps> = () => {
  return (
    <Box sx={{ padding: 2, width: '100%' }}>
      <PortfolioMsaExposure />
    </Box>
  )
}
export default PortfolioDashboard
