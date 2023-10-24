import {
  BpdFilterControlType,
  SelectItemInterface,
} from '@bpd/bpd-web/shared/ui'
import {
  MGMT_REGION_OPTIONS,
  MGMT_TEAM_OPTIONS,
  OWNERSHIP_OPTIONS,
  PORTFOLIO_MGMT_TEAM_OPTIONS,
  TRACKER_OPTIONS,
} from '../constants'
import { WorkspaceConfigItem } from '../types'

const PORTFOLIO_ANALYTICS_OVERVIEW = {
  id: 'portfolioAnalyticsOverview',
  title: 'Portfolio Analytics Overview',
  description:
    'It contains a summary of the investment pace, exposure, and performance.',
  filterControls: [
    {
      label: 'Management Team',
      componentProps: {
        items: PORTFOLIO_MGMT_TEAM_OPTIONS as SelectItemInterface[],
        placeholder: 'Select',
      },
      type: BpdFilterControlType.MultiSelect,
      filterKey: 'managementTeams',
    },
    {
      label: 'Management Region',
      componentProps: {
        items: MGMT_REGION_OPTIONS as SelectItemInterface[],
        placeholder: 'Select',
      },
      type: BpdFilterControlType.MultiSelect,
      filterKey: 'managementRegions',
    },
  ],
  enabled: false,
}

const TASKS = {
  id: 'tasks',
  title: 'Tasks',
  filterControls: [],
  description:
    'Show tasks awaiting approval, primarily for the CIO, Regional Head, Country Head and SVP.',
  enabled: false,
}

const DEALS_OVERVIEW = {
  id: 'dealsOverview',
  title: 'Deal Overview',
  description:
    'A quick overview of current deals that are new, ongoing, approved or closed.',
  filterControls: [
    {
      label: 'Management Team',
      componentProps: {
        items: MGMT_TEAM_OPTIONS as SelectItemInterface[],
        placeholder: 'Select',
      },
      type: BpdFilterControlType.SingleSelect,
      filterKey: 'managementTeam',
    },
    {
      label: 'Deal Owner',
      componentProps: {
        items: OWNERSHIP_OPTIONS as SelectItemInterface[],
        placeholder: 'Select',
      },
      type: BpdFilterControlType.SingleSelect,
      filterKey: 'ownership',
    },
  ],
  enabled: false,
}

const PROJECTS_OVERVIEW = {
  id: 'projectsOverview',
  title: 'Project Overview',
  description: 'A quick overview of GIC RE projects',
  filterControls: [
    {
      label: 'Management Team',
      componentProps: {
        items: MGMT_TEAM_OPTIONS as SelectItemInterface[],
        placeholder: 'Select',
      },
      type: BpdFilterControlType.SingleSelect,
      filterKey: 'managementTeam',
    },
    {
      label: 'Deal Owner',
      componentProps: {
        items: OWNERSHIP_OPTIONS as SelectItemInterface[],
        placeholder: 'Select',
      },
      type: BpdFilterControlType.SingleSelect,
      filterKey: 'ownership',
    },
  ],
  enabled: false,
}

const TRACKERS = {
  id: 'trackers',
  title: 'Tracker',
  description: 'This is primarily intended for the CMT, GIPS and Strats teams.',
  filterControls: [
    {
      label: 'Team',
      componentProps: {
        items: TRACKER_OPTIONS as SelectItemInterface[],
        placeholder: 'Select',
      },
      type: BpdFilterControlType.SingleSelect,
      filterKey: 'team',
    },
  ],
  enabled: false,
}

export const WORKSPACE_CONFIG_ITEMS: WorkspaceConfigItem[] = [
  PORTFOLIO_ANALYTICS_OVERVIEW,
  TASKS,
  DEALS_OVERVIEW,
  PROJECTS_OVERVIEW,
  TRACKERS,
]
