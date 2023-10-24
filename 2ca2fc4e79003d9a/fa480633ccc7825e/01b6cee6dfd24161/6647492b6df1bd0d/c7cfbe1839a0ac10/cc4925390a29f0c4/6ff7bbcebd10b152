import { Point } from '../types'

export interface Project {
    x: number,
    y: number
}

const BOUNDARY = 10

const getViewportOffset = (width: number, height: number, project: Project) : Point | [] => {
  const boundsLeft = BOUNDARY
  const boundsRight =  width - BOUNDARY
  const boundsTop = BOUNDARY
  const boundsBottom = height - BOUNDARY

  if((boundsLeft < project.x && project.x < boundsLeft ) && ( boundsTop < project.y && project.y < boundsBottom)) { return [] }

  if(boundsLeft >= project.x) return [-50,0]
  if(boundsRight <= project.x) return [50, 0]
  if(boundsTop >= project.y) return [0, -50]
  if(boundsBottom <= project.y) return [0, 50]

  return []
}

export default getViewportOffset