import { useAppPalette } from '@bpd/bpd-web/shared/theme'
import { DashboardTemplate, Stack } from '@gic/battlefield-ui-pack'
import { Skeleton } from 'antd'
import { FC } from 'react'

const C360Skeleton: FC = () => {
  const palette = useAppPalette()

  return (
    <DashboardTemplate
      disableLeft
      disableFooter
      breadcrumbs={[]}
      title={
        <Stack spacing={0.25} marginTop={0.6}>
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
      bodyLayoutSx={{
        ' &&& .ant-layout-content': {
          height: 'calc(100vh - 28px)',
          //background: palette.common.white,
          paddingX: 0,
        },
      }}
    >
      <Stack
        height={'100%'}
        bgcolor="white"
        marginTop={0.6}
        borderRight={`1px solid ${palette.null.border}`}
      >
        <Skeleton active />
      </Stack>
    </DashboardTemplate>
  )
}

export default C360Skeleton
