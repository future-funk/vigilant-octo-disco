import { FC, Fragment } from 'react'
import { Layout, LayoutBody } from '@bpd/daw/shared/core'
import { Skeleton } from 'antd'
import { Stack } from '@gic/battlefield-ui-pack'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdSelect } from '@bpd/bpd-web/shared/ui'

export interface LayoutSkeletonProps {}

const StyledContainer = withTheme(Stack)(({ theme }) => ({
  minWidth: 400,
  maxWidth: 400,
  minHeight: `calc(100vh - 190px)`,
  backgroundColor: theme.palette.background.colorBgDawModal,
}))

const StyledSelectContainer = withTheme(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#D4DFEA',
}))

const LayoutSkeleton: FC<LayoutSkeletonProps> = () => {
  return (
    <Layout
      top={
        <Stack paddingX={3} spacing={0.25} marginTop={0.6}>
          <Skeleton.Button
            active
            block
            size="small"
            style={{ height: '1rem', width: '7rem' }}
          />
          <Skeleton.Button
            active
            block
            size="small"
            style={{ height: '1.1rem', width: '12rem' }}
          />
        </Stack>
      }
      main={
        <LayoutBody
          main={{
            left: (
              <StyledContainer spacing={1} padding={3}>
                <StyledSelectContainer>
                  <BpdSelect label="Request Type" required />
                </StyledSelectContainer>

                <Skeleton active />
                <Skeleton active />
              </StyledContainer>
            ),
            right: (
              <Stack>
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
              </Stack>
            ),
          }}
        />
      }
      bottom={
        <Stack
          spacing={2}
          justifyContent="end"
          flexDirection={'row'}
          paddingRight={3}
        >
          <Skeleton.Button />
          <Skeleton.Button />
          <Skeleton.Button />
        </Stack>
      }
    />
  )
}

export default LayoutSkeleton
