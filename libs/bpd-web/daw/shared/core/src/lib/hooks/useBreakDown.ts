import { chain, find, map, size, uniqBy } from 'lodash'
import { useFieldArray, useFormContext } from 'react-hook-form'

export interface useBreakDownProps {
  breakDnKey: string
  minThreshold?: number //Represents the minimum threshold value for triggering the "breakdown" logic.
}

interface BreakDown {
  refId: string
  id?: string
  item: string
  itemAumPct: number
  isDeleted?: boolean
}

const useBreakDown = ({ breakDnKey, minThreshold = 2 }: useBreakDownProps) => {
  // const fields = useWatch({ name: breakDnKey })
  const { getValues } = useFormContext()

  const { fields, replace } = useFieldArray({
    name: breakDnKey,
    keyName: 'refId',
  })

  const handleInternalChange = (selectionArray: string[]) => {
    const currentFields = getValues(breakDnKey)

    if (size(selectionArray) >= minThreshold) {
      const mergedFields = uniqBy(
        [...currentFields, ...map(selectionArray, (item) => ({ item }))],
        'item'
      )
      replace(
        chain(mergedFields as BreakDown[])
          .reject(
            (breakdownItem) =>
              !breakdownItem.id && !selectionArray.includes(breakdownItem.item)
          )
          .map(({ isDeleted, ...breakdownItem }) => ({
            ...breakdownItem,
            refId: (find(fields, { item: breakdownItem.item }) as any)?.refId,
            ...(breakdownItem.id && !selectionArray.includes(breakdownItem.item)
              ? { isDeleted: true }
              : {}),
          }))
          .value()
      )
    } else {
      replace(
        chain(currentFields as BreakDown[])
          .filter((breakdownItem) => !!breakdownItem.id)
          .map((breakdownItem) => ({ ...breakdownItem, isDeleted: true }))
          .value()
      )
    }
  }

  const selectedValue = chain(fields as BreakDown[])
    .reject((obj) => !!obj.isDeleted)
    .map('item')
    .value() as string[]

  return {
    breakDnFields: fields,
    handleInternalChange,
    selectedValue: size(selectedValue) >= minThreshold ? selectedValue : null,
  }
}

export default useBreakDown
