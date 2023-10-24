import { FC, ReactElement, useState, useEffect } from 'react'
import { IHeaderParams } from 'ag-grid-community'

interface OverviewTableDrawerHeaderProps extends IHeaderParams {
  menuIcon?: ReactElement
}

const OverviewTableDrawerHeader: FC<OverviewTableDrawerHeaderProps> = (
  props
) => {
  const [ascSort, setAscSort] = useState('inactive')
  const [descSort, setDescSort] = useState('inactive')

  const onSortChanged = () => {
    setAscSort(props.column.isSortAscending() ? 'active' : 'inactive')
    setDescSort(props.column.isSortDescending() ? 'active' : 'inactive')
  }

  const onSortRequested = (order: 'asc' | 'desc' | null, event: any) => {
    props.setSort(order, event.shiftKey)
  }

  useEffect(() => {
    props.column.addEventListener('sortChanged', onSortChanged)
    onSortChanged()
  }, [])

  let columnHeader = null
  if (props.enableSorting) {
    columnHeader = (
      <div style={{ display: 'inline-block' }}>
        <div
          onClick={(event) =>
            onSortRequested(
              ascSort === 'inactive' && descSort === 'inactive'
                ? 'asc'
                : ascSort === 'active'
                ? 'desc'
                : null,
              event
            )
          }
          onTouchEnd={(event) => onSortRequested('asc', event)}
          className={`customSortDownLabel ${ascSort}`}
        >
          <div
            className="customHeaderLabel ag-ltr ag-sort-indicator-icon ag-header-cell-label"
            style={{
              gap: 5,
            }}
          >
            {props.displayName} {props?.menuIcon}
            {ascSort === 'active' ? (
              <span className="ag-icon ag-icon-asc"></span>
            ) : (
              ''
            )}
            {descSort === 'active' ? (
              <span className="ag-icon ag-icon-desc"></span>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    )
  }

  return <div>{columnHeader}</div>
}

export default OverviewTableDrawerHeader
