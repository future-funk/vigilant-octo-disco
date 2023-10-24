type PartialAll<T> = T extends object
  ? {
      [P in keyof T]?: PartialAll<T[P]>
    }
  : T

export default PartialAll
