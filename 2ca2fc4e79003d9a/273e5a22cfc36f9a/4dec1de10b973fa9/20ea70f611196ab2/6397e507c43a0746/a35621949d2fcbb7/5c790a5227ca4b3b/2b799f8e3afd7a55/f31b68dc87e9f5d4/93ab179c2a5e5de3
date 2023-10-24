import { SearchOutlined } from '@ant-design/icons'
import { BpdVerticalDivider, BpdButton } from '@bpd/bpd-web/shared/ui'
import { Stack, Box } from '@gic/battlefield-ui-pack'
import { FC, ReactElement } from 'react'

export interface TabBarExtraContentLeft {
  drawer: ReactElement
  active?: boolean
  left?: ReactElement
}

const TabBarExtraContentLeft: FC<TabBarExtraContentLeft> = (props) => {
  const { active } = props

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Box my={0.125}>
          <BpdButton
            disabled
            variant="outlined"
            title="Overview"
            color="primary"
            disableBorder
            backgroundColor={active ? 'primary.lightAlt' : 'transparent'}
            startIcon={<SearchOutlined />}
          />
        </Box>
        <BpdVerticalDivider sx={{ mx: '8px !important' }} />
      </Stack>
    </>
  )
}

export default TabBarExtraContentLeft
