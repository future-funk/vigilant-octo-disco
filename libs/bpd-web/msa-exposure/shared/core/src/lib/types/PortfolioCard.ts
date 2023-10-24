import { CARD_VIEW_TYPE } from '../constants'
interface Option<T> {
  label: string
  value: T
  key?: string
  disabled?: boolean
}

export type Options<T> = Option<T>[]
export type CardViewType = keyof typeof CARD_VIEW_TYPE
