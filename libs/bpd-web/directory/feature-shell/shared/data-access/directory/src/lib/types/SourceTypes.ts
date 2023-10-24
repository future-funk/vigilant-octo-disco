export interface SourceLayerTypes {
    team?: string,
    viewport?: string
    pointerCoordinates?: {
      longitude: number
      latitude: number
    } | null
    limit?: number
}