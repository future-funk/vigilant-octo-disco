import { DashboardTemplate, Stack } from '@gic/battlefield-ui-pack'

const HomeLayoutSkeleton = () => {
  return (
    <DashboardTemplate
      disableFooter
      defaultLeftAsideOpen={true}
      breadcrumbs={[]}
      headerProps={{
        breadcrumbsProps: { sx: { '& li': { display: 'inherit' } } },
        sx: {
          height: 76,
          overflow: 'hidden',
          '& .ant-card-bordered': { border: 0 },
        },
      }}
      logoTitle={'BLUEPRINT'}
      leftAsideMenu={{
        topItems: [{ title: 'Workspace', key: 'work-space' }],
        bottomItems: [],
      }}
      userAvatarProps={{ children: 'SL' }}
    >
      <Stack>Authorizing and retrieving user information.</Stack>
    </DashboardTemplate>
  )
}
export default HomeLayoutSkeleton
