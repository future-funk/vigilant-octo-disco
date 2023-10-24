import { defaults } from 'lodash'
import {
  Attributes,
  Children,
  cloneElement,
  FC,
  Fragment,
  isValidElement,
  ReactNode,
} from 'react'
import type { Slot } from '../types'

export interface RenderSlotOptions {
  defaultProps?: Partial<any> & Attributes
  wrapper?: FC
}

const renderSlot = (slot: Slot, options?: RenderSlotOptions) => {
  const { wrapper: Component = Fragment, defaultProps } = options || {}

  const withProps = (component: ReactNode) =>
    Children.map(component, (child, index) =>
      isValidElement(child)
        ? cloneElement(
            child,
            defaults(defaultProps, child.props, { key: index })
          )
        : child
    )

  return (
    slot && (
      <Component>
        {withProps(typeof slot === 'function' ? slot() : slot)}
      </Component>
    )
  )
}

export default renderSlot
