export interface FilterDto {
  [key: string]: string | number
}

export interface LocationDto {
  cartodbId: number
  distance: number
  name: string
  nameEn: string
  poiType: string
}
