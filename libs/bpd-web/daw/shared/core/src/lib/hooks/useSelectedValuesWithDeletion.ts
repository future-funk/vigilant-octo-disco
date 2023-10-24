import { find, isEqual, map, reject } from 'lodash'
import { useMemo } from 'react'

type EncodeFn<T> = (value: T) => string
type DecodeFn<T> = (value: string) => T

export interface useSelectedValuesWithDeletionProps<T> {
  values: T[]
  onChange: (values: T[] | null) => void
  encode: EncodeFn<T>
  decode: DecodeFn<T>
}
const useSelectedValuesWithDeletion = <
  T extends { id?: number; isDeleted?: boolean }
>({
  values,
  onChange,
  encode,
  decode,
}: useSelectedValuesWithDeletionProps<T>): [
  string[],
  (values: string[]) => void
] => {
  const handleOnChange = (newSelectedEncodedValues: string[]) => {
    const encodedInitialValues = values.filter((v) => v.id).map(encode)

    const deleted = encodedInitialValues
      .filter((ev) => !newSelectedEncodedValues.includes(ev))
      .map((sv) => ({
        ...decode(sv),
        id: (find(values, decode(sv)) as T)?.id,
        isDeleted: true,
      }))

    const updated = newSelectedEncodedValues.map((sv) => ({
      ...decode(sv),
      ...(encodedInitialValues.includes(sv)
        ? {
            id: (find(values, decode(sv)) as T)?.id,
          }
        : {}),
    }))

    onChange([...updated, ...deleted])
  }

  const formattedValues = useMemo(() => {
    return map(reject(values, { isDeleted: true }), (selectedVal: T) =>
      encode(selectedVal)
    ) as unknown as string[]
  }, [values])
  return [formattedValues, handleOnChange]
}

export default useSelectedValuesWithDeletion
