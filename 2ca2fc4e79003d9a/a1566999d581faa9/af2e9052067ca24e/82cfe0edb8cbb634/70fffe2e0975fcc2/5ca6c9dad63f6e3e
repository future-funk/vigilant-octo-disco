import { get, map } from 'lodash'

export interface ApplyRecursiveProps<T, F> {
  items: T[]
  path: string
  flatten?: boolean
  fn: (item: T) => F
}

const applyRecursive = <T, F>({
  items,
  path,
  fn,
  flatten,
}: ApplyRecursiveProps<T, F>): F[] => {
  const result = map(items, (item) => {
    const children = get(item, path)
    const parent = fn(item)
    const child = applyRecursive({ items: children, path, fn })
    const flattened = flatten ? child : { ...parent, [path]: child }
    return children ? flattened : parent
  })

  return (flatten ? result.flat() : result) as F[]
}

export default applyRecursive
