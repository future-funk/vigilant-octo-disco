import { renderIf } from '@bpd/ui/libs/react-slots'
import { ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'

export interface CreateRoute {
  element?: ReactNode
  path?: string
}

const createRoute = (props: CreateRoute) => {
  const { element, path = '' } = props
  return renderIf(
    element,
    <Routes>
      <Route path={path} element={element} />
    </Routes>
  )
}

export default createRoute
