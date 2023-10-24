import {
  BpdSelectProps,
  BpdCheckboxProps,
  BpdMultiSelectProps,
  BpdInputNumberProps,
  BpdAutoCompleteProps,
  BpdInputProps,
} from '@bpd/bpd-web/shared/ui'
import { SxProps } from '@gic/battlefield-ui-pack'
import { boolean } from 'zod'

export enum GroupWidgetTypeEnum {
  GroupBox = 'GroupBox',
  GroupWidget = 'GroupWidget',
}

export interface GroupWidget {
  uiWidget: GroupWidgetTypeEnum
  items: (GroupWidget | FormElement)[]
  className?: string
  style?: SxProps
}

export type FormElementType =
  | 'BpdSelect'
  | 'MultiSelect'
  | 'Checkbox'
  | 'Input'
  | 'AutoComplete'
  | 'Custom'

export type DataType = 'string' | 'object' | 'number' | 'boolean' | 'array'

export interface FormElement {
  key: string
  uiWidget: FormElementType
  title: string
  type?: DataType
  asyncTooltip?: true;
  toolTipId?: (true extends typeof boolean ? string : never);
  shouldUnRegister?: boolean
  validation?: {
    required?: boolean
    min?: number
    max?: number
    pattern?: string
    validationMsgs?: {
      '302': string
      '304': string
    }
  }
  componentProps?:
    | BpdSelectProps
    | BpdCheckboxProps
    | BpdMultiSelectProps
    | BpdInputNumberProps
    | BpdAutoCompleteProps
    | BpdInputProps
}

export type SchemaFormType = (GroupWidget | FormElement)[]
