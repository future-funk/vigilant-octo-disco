const fromOne = <T extends string>(key: string, value: T) => {
  if (!value) return ''
  return `${key}=${encodeURIComponent(value)}`
}

const fromMany = <T extends string>(key: string, values: T[]) => {
  if (!values?.length) return ''
  return `${key}=${values.map(encodeURIComponent)}`
}

const createURIComponent = <T extends string | number | boolean>(
  key: string,
  value: T | T[]
) =>
  Array.isArray(value)
    ? fromMany(key, value as string[])
    : fromOne(key, value as string)

export default createURIComponent
