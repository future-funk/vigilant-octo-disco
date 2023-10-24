import { insertInFile } from '../util-fs/insert-in-file'
import { Tree } from '@nrwl/devkit'

export interface Transformation {
  content: string
  line: (file: string) => number
}

export type Transformations = Transformation[]

export const writeToTree = async ({
  path,
  transformations,
  tree,
}: {
  path: string
  transformations: Transformations
  tree: Tree
}) => {
  const content = tree.read(path).toString()

  const newContent = transformations.reduce(
    (file, { content, line }) =>
      insertInFile({ content, file, line: line(file) }),
    content
  )

  if (content !== newContent) await tree.write(path, newContent)
}
