import { withAuthMvIrr } from '@bpd/access-control'
import { BpdLink, BpdVerticalDivider } from '@bpd/bpd-web/shared/ui'
import { Stack } from '@gic/battlefield-ui-pack'
import DownloadCashFlows from './DownloadCashFlows'

const MvActionBar = () => {
  return (
    <Stack direction="row" flexWrap="wrap" alignItems="flex-end" spacing={1}>
      <DownloadCashFlows />
      <BpdVerticalDivider />
      <BpdLink
        title="User Guide"
        href="http://s-conf001p:8090/display/RSPDADPUB/US%3A+IRR+Projections+Dashboard"
        target="_blank"
      />
    </Stack>
  )
}

export default withAuthMvIrr(MvActionBar)
