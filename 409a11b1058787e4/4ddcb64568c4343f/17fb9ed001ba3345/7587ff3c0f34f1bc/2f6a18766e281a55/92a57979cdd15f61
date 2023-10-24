import { insert } from '../utils/insert'

export const insertInFile = ({
  content,
  file,
  line,
}: {
  content: string
  file: string
  line: number
}) => insert(file.split(/\n/), line, content).join('\n')
