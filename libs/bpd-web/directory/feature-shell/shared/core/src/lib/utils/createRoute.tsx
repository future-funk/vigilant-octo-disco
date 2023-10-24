import { chain } from 'lodash'
import { ReactElement } from 'react'
import { Route } from 'react-router-dom'

type Path = string

type Slots = { [key: string]: ReactElement }

const createRoute = <T extends Record<Path, Slots>>(config: T, slot: string) =>
  chain(config)
    .toPairs()
    .map(([path, config]) => (
      <Route key={path} path={`${path}/*`} element={config[slot]} />
    ))
    .value()

export default createRoute