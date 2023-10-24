import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdSearchBar } from '@bpd/bpd-web/shared/ui'
import { useGrid } from '@bpd/vendors/ag-grid'
import { Stack } from '@gic/battlefield-ui-pack'
import { isFunction } from 'lodash'
import React, { ReactNode, useCallback } from 'react'

export interface TableSearchContext {
  count: number
}

export interface TableSearchProps {
  label: ReactNode | ((context: TableSearchContext) => ReactNode)
}

const StyledBpdSearchBar = withTheme(BpdSearchBar)(({ theme }) => {
  return {
    width: '400px',
  }
})

const TableSearch: React.FC<TableSearchProps> = (props) => {
  const { label: injectedLabel } = props

  const { context, ref } = useGrid()

  const handleChange = useCallback(
    (value: string) => {
      ref?.api?.setQuickFilter(value)
    },
    [ref?.api]
  )

  const label = isFunction(injectedLabel)
    ? injectedLabel(context as TableSearchContext)
    : injectedLabel

  return (
    <Stack spacing={0.5}>
      {label}
      <StyledBpdSearchBar onChange={handleChange} />
    </Stack>
  )
}

export default TableSearch
