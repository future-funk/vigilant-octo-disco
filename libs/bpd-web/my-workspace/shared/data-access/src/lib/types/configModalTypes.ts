export interface PortfolioAnalyticsOverview {
  enabled: boolean
  managementTeams?: string[]
  managementRegions?: string[]
}

export interface DealsOverview {
  enabled: boolean
  managementTeam?: string
  ownership?: string
}
export interface ProjectsOverview {
  enabled: boolean
  managementTeam?: string
  ownership?: string
}

export interface Tasks {
  enabled: boolean
}

export interface Trackers {
  enabled: boolean
  team?: string
}

export interface WorkspaceConfig {
  portfolioAnalyticsOverview: PortfolioAnalyticsOverview
  projectsOverview: ProjectsOverview
  dealsOverview: DealsOverview
  tasks: Tasks
  trackers: Trackers
}
