import { first, split } from 'lodash'
import { readNxJson, Tree } from '@nrwl/devkit'
import { findLineInFile } from '../util-fs/find-line-in-file'
import { featureSliceKeyName } from '../util-formatting/feature-slice-key-name'
import { reducerSliceName } from '../util-formatting/reducer-slice-name'
import { importString } from '../util-formatting/import-string'
import {
  STORE_INJECTOR_PATTERN_IMPORT,
  STORE_INJECTOR_PATTERN_REDUCER,
  STORE_PROVIDER_FILE_PATH,
} from '../constants'
import { writeToTree } from '../utils/write-to-tree'
import { apiSliceKeyName } from '../util-formatting/api-slice-key-name'
import { apiSliceName } from '../util-formatting/api-slice-name'

interface Schema {
  directory: string
  name: string
  libraryName: string
}

const getApiReducerString = (name: string) =>
  `[${apiSliceKeyName(name)}]: ${apiSliceName(name)},`

const getSliceReducerString = (name: string) =>
  `[${featureSliceKeyName(name)}]: ${reducerSliceName(name)},`

const getImportString = (name: string, path: string) =>
  importString(
    [apiSliceKeyName, apiSliceName, featureSliceKeyName, reducerSliceName].map(
      (fn) => fn(name)
    ),
    path
  )

export const generateStore = async (tree: Tree, options: Schema) => {
  const { directory, name, libraryName } = options

  const appPath = first(split(directory, '/'))
  const workspaceName = readNxJson().npmScope

  await writeToTree({
    tree,
    path: `/apps/${appPath}/${STORE_PROVIDER_FILE_PATH}`,
    transformations: [
      // import line
      {
        content: getImportString(
          name,
          `@${workspaceName}/${directory}/${libraryName}`
        ),
        line: (file: string) =>
          findLineInFile(file, STORE_INJECTOR_PATTERN_IMPORT),
      },
      // feature slice line
      {
        content: getSliceReducerString(name),
        line: (file: string) =>
          findLineInFile(file, STORE_INJECTOR_PATTERN_REDUCER),
      },
      // api slice line
      {
        content: getApiReducerString(name),
        line: (file: string) =>
          findLineInFile(file, STORE_INJECTOR_PATTERN_REDUCER),
      },
    ],
  })
}
