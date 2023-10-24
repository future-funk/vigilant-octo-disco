import { AgGridReact } from 'ag-grid-react'
import { noop } from 'lodash'
import React, { ReactNode, useState } from 'react'

export type AgGridRef = AgGridReact | null

export interface AgGridContextType {
  context: unknown | null
  ref: AgGridRef
  setContext: (context: unknown) => void
  setRef: (value: AgGridRef) => void
}

export const AgGridContext = React.createContext<AgGridContextType>({
  context: null,
  ref: null,
  setContext: noop,
  setRef: noop,
})

export interface GridProviderProps {
  children: ReactNode
}

const AgGridProvider: React.FC<GridProviderProps> = (props) => {
  const { children } = props

  const [context, setContext] = useState<unknown | null>(null)

  const [ref, setRef] = useState<AgGridRef>(null)

  const handleContext = (context: unknown | null) => {
    if (ref) ref.context = context
    setContext(context)
  }

  return (
    <AgGridContext.Provider
      value={{ context, ref, setContext: handleContext, setRef }}
    >
      {children}
    </AgGridContext.Provider>
  )
}

export default AgGridProvider
