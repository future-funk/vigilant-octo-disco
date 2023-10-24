export type Region = 'us' | 'eu' | 'cn' | 'kr' | 'jp' | 'asig' | 'in' | 'anz'

type RegionNavMenuType<T extends Region> = `regions-${T}`

export type NavMenuType = RegionNavMenuType<Region> | 'cmt' | 'fund' | 'regions'

export type TeamAnalyticsNavMenuItem = {
  key: NavMenuType
  title: string
  items?: { key: Region; title: string }[]
}
