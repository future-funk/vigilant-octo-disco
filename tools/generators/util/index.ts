import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  joinPathFragments,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit'
import { libraryGenerator } from '@nrwl/workspace/generators'
import { withUtils } from '../feature/src/utils/with-utils'

interface Schema {
  name: string
  directory?: string
}

const parseProjectName = (directory: string, name: string) =>
  [directory.replace(/\//g, '-'), name].filter(Boolean).join('-')

export default async function (tree: Tree, schema: Schema) {
  const directoryPath = schema.directory
  const isRootLibray = directoryPath === '/'
  const directory = isRootLibray ? '' : directoryPath
  const libraryName = schema.name

  // generate library
  await libraryGenerator(tree, {
    name: libraryName,
    directory,
  })

  const projectName = parseProjectName(directory, libraryName)
  const libraryRoot = readProjectConfiguration(tree, projectName).root

  // rename auto-generated lib files
  const defaultFileRelativePath = `${schema.name}.ts`
  const defaultFileAbsolutePath = `${libraryRoot}/src/lib/${defaultFileRelativePath}`

  tree.delete(`${libraryRoot}/src/index.ts`)
  tree.rename(
    `${libraryRoot}/src/lib/${projectName}.ts`,
    defaultFileAbsolutePath
  )
  tree.rename(
    `${libraryRoot}/src/lib/${projectName}.spec.ts`,
    `${libraryRoot}/src/lib/${defaultFileRelativePath}.spec.ts`
  )

  // generate additional files
  await generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    libraryRoot,
    withUtils(schema)
  )

  await formatFiles(tree)

  return () => {
    installPackagesTask(tree)
  }
}
