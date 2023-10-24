export interface People {
  id: number
  dealId: string
  name: string
  role: string
  label: string
  initials: string
  emailAddress: string
  sequence: number
  isLeft: boolean
  commitment?: number
  commitmentHours?: number
}

export interface PeopleExtAugmentation {
  id: number
  dealId: string
  name: string
  role: string
  commitment?: number
  commitmentHours?: number
  initials: string
  emailAddress: string
}
