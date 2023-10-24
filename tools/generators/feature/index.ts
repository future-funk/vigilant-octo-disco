import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  joinPathFragments,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit'
import { libraryGenerator } from '@nrwl/react'
import { Linter } from '@nrwl/linter'
import * as path from 'path'
import { withUtils } from './src/utils/with-utils'

interface Schema {
  name: string
  directory?: string
}

const parseProjectName = (directory: string, name: string) =>
  [directory.replace(/\//g, '-'), name].filter(Boolean).join('-')

export default async function (tree: Tree, schema: Schema) {
  const libraryName = schema.name
  const directoryPath = schema.directory || ''

  // generate react library
  await libraryGenerator(tree, {
    name: libraryName,
    directory: directoryPath,
    component: false,
    skipTsConfig: false,
    style: 'none',
    skipFormat: false,
    unitTestRunner: 'jest',
    linter: Linter.EsLint,
  })

  const projectName = parseProjectName(directoryPath, libraryName)
  const libraryRoot = readProjectConfiguration(tree, projectName).root

  // generate additional files (components, stores...)
  tree.delete(path.join(libraryRoot, 'src', 'index.ts'))

  await generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    libraryRoot,
    withUtils(schema)
  )

  // format files
  await formatFiles(tree)

  return () => {
    installPackagesTask(tree)
  }
}
