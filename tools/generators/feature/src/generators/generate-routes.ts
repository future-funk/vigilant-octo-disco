import { readNxJson, Tree } from '@nrwl/devkit'
import { first, split, tail } from 'lodash'
import {
  ROUTING_CONFIG_PATH,
  ROUTING_CONSTANTS_PATH,
  ROUTING_INJECTOR_PATTERN_CONFIG,
  ROUTING_INJECTOR_PATTERN_IMPORT,
  ROUTING_INJECTOR_PATTERN_PATH,
} from '../constants'
import { importString } from '../util-formatting/import-string'
import { pageName } from '../util-formatting/page-name'
import { titleCase } from '../util-formatting/title-case'
import { upperSnakeCase } from '../util-formatting/upper-snake-case'
import { findLineInFile } from '../util-fs/find-line-in-file'
import { writeToTree } from '../utils/write-to-tree'

interface Schema {
  directory: string
  name: string
  libraryName: string
}

const getPathString = (name: string, path: string) =>
  `${upperSnakeCase(name)}: '${path}',`

const getImportString = (name: string, path: string) =>
  importString(pageName(name), path)

const getRouteConfigString = (name: string, component: string) =>
  `
    {
      path: ROUTE_PATHS.${upperSnakeCase(name)},
      element: <${component}Page />,
    },
  \n`

export const generateRoutes = async (tree: Tree, options: Schema) => {
  const { directory, name, libraryName } = options

  const appPath = first(split(directory, '/'))
  const libraryPath = tail(split(directory, '/')).join('/')
  const workspaceName = readNxJson().npmScope

  await writeToTree({
    tree,
    path: `/libs/${appPath}/${ROUTING_CONSTANTS_PATH}`,
    transformations: [
      {
        content: getPathString(
          name,
          `@${workspaceName}/${directory}/${libraryName}`
        ),
        line: (file: string) =>
          findLineInFile(file, ROUTING_INJECTOR_PATTERN_PATH),
      },
    ],
  })

  await writeToTree({
    tree,
    path: `/libs/${appPath}/${ROUTING_CONFIG_PATH}`,
    transformations: [
      {
        content: getImportString(
          name,
          `@${workspaceName}/${directory}/${libraryName}`
        ),
        line: (file: string) =>
          findLineInFile(file, ROUTING_INJECTOR_PATTERN_IMPORT),
      },
      {
        content: getRouteConfigString(name, titleCase(name)),
        line: (file: string) =>
          findLineInFile(file, ROUTING_INJECTOR_PATTERN_CONFIG),
      },
    ],
  })
}
