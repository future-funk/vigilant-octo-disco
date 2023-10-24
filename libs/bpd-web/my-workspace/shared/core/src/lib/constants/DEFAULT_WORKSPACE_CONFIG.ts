import { WorkspaceConfig } from '@bpd/my-workspace/shared/data-access'
import { MGMT_TEAM } from './MGMT_TEAM'
import { OWNERSHIP } from './OWNERSHIP'
import { TRACKER } from './TRACKER'

export const DEFAULT_WORKSPACE_CONFIG: WorkspaceConfig = {
  portfolioAnalyticsOverview: {
    enabled: false,
    managementRegions: [],
    managementTeams: [],
  },
  tasks: {
    enabled: false,
  },
  dealsOverview: {
    enabled: false,
    managementTeam: MGMT_TEAM.AMERICAS.key,
    ownership: OWNERSHIP.MY_DEALS,
  },
  projectsOverview: {
    enabled: false,
    managementTeam: MGMT_TEAM.AMERICAS.key,
    ownership: OWNERSHIP.MY_DEALS,
  },
  trackers: {
    enabled: false,
    team: TRACKER.CMT,
  },
}
