export interface Project {
  name?: string
  category?: string
  calendar?: string
  calendarBreakdowns?: {
    calendar?:
      | {
          item?: string
          itemDatetimeValue?: string //holds moment object
        }[]
      | null
  } | null
  projectRegion?: string
  country?: string
  sector?: string
}

export interface Staff {
  role?: string
  ntid?: string
}

export interface ResearchFormData {
  category?: string
  requestType?: string
  status?: string
  name?: string
  description?: string
  edmsFolder?: string

  vintageDt?: string
  rschTargetCompletionDt?: string | null
  projects: Project[]
  staffs: Staff[]
  workspace?: string | null
  comment?: string
}
