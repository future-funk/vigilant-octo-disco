import { withTheme } from '@bpd/bpd-web/shared/theme'
import { Spin } from '@gic/battlefield-ui-pack'
import { FC } from 'react'

export interface CellLoaderProps {}

const StyledSpin = withTheme(Spin)({
  '& .anticon-loading': {
    display: 'flex',
    fontSize: '14px !important',
  },
})

export const CellLoader: FC<CellLoaderProps> = () => {
  return <StyledSpin />
}

export default CellLoader
