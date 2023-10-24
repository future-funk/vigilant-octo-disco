import { withAuthMvIrr } from '@bpd/access-control'
import { Stack } from '@gic/battlefield-ui-pack'
import FilterBar from './FilterBar'
import UploadMvAndCf from './UploadMvAndCf'

const MvTopBar = () => {
  return (
    <Stack direction="row" spacing={1}>
      <FilterBar />
      <UploadMvAndCf />
    </Stack>
  )
}

export default withAuthMvIrr(MvTopBar)
