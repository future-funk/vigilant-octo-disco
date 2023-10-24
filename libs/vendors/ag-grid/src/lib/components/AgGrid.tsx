import { FirstDataRenderedEvent } from 'ag-grid-community'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { LicenseManager } from 'ag-grid-enterprise'
import { AgGridReact, AgGridReactProps } from 'ag-grid-react'
import { compact, find, flow, isEmpty, isEqual, isNil, map } from 'lodash'
import PerfectScrollbar from 'perfect-scrollbar'
import {
  MutableRefObject,
  forwardRef,
  useContext,
  useEffect,
  useRef,
} from 'react'
import { AgGridContext } from '../providers'
import './AgGrid.css'
import AgGridContainer, { AgGridContainerProps } from './AgGridContainer'
import { DEFAULT_COLUMN_DEFS, DEFAULT_GRID_OPTIONS } from '../constants'

LicenseManager.setLicenseKey(
  `${process.env['NX_REACT_APP_AG_GRID_LICENSE_KEY']}`
)

const setupScrollbar = (
  selector: string | Element,
  wheelPropagation: boolean,
  options?: PerfectScrollbar.Options
) => {
  return new PerfectScrollbar(selector, { wheelPropagation, ...options })
}

export interface SetupScrollbarProps {
  selector: string | Element
  wheelPropagation?: boolean
  options?: PerfectScrollbar.Options
}

export interface AgGridProps extends AgGridReactProps {
  isError?: boolean
  isLoading?: boolean
  isFetching?: boolean
  isSuccess?: boolean
  isEmpty?: boolean
  containerProps: Omit<AgGridContainerProps, 'children' | 'isGridReady'>
  wheelPropagation?: boolean
  perfectScrollbarOptions?: PerfectScrollbar.Options
  viewportId?: string
  onDisplayedRowUpdated?: VoidFunction
  setupScrollbarPropsItems?: SetupScrollbarProps[]
}

const AgGrid = forwardRef<AgGridReact, AgGridProps>((props, injectedRef) => {
  const {
    containerProps,
    onFirstDataRendered,
    defaultColDef,
    isError,
    isLoading,
    isFetching,
    isSuccess,
    wheelPropagation = false,
    viewportId,
    onDisplayedRowUpdated,
    onFilterChanged,
    onRowDataUpdated: injectedOnRowDataUpdated,
    perfectScrollbarOptions,
    setupScrollbarPropsItems,
    rowData,
    ...rest
  } = props

  const localRef = useRef<AgGridReact>()

  const ref = (injectedRef ?? localRef) as MutableRefObject<AgGridReact>

  const { setContext, setRef } = useContext(AgGridContext)

  const handleFirstDataRendered = (event: FirstDataRenderedEvent<unknown>) => {
    if (isNil(setupScrollbarPropsItems)) {
      // Default
      /* Vertical */
      const verticalViewports = document.getElementsByClassName(
        'ag-body-viewport ag-row-no-animation ag-layout-normal'
      )
      // Filter out viewports with scrollbar already set
      const verticalViewportElement = find(verticalViewports, (viewport) => {
        return isEqual(
          viewport.className,
          'ag-body-viewport ag-row-no-animation ag-layout-normal'
        )
      })

      if (verticalViewportElement) {
        setupScrollbar(
          verticalViewportElement,
          wheelPropagation,
          perfectScrollbarOptions
        )
      }
    } else {
      map(setupScrollbarPropsItems, (scrollbarProps) => {
        const { selector, wheelPropagation, options } = scrollbarProps
        return setupScrollbar(selector, wheelPropagation, options)
      })
    }

    onFirstDataRendered?.(event)
  }

  useEffect(() => {
    setRef(ref.current)
    return () => {
      setContext(null)
    }
  }, [])

  useEffect(() => {
    if (ref?.current?.api) {
      // Loading
      if (isLoading || isFetching) {
        ref.current.api.showLoadingOverlay()
      } else if (isEmpty(rowData)) {
        ref.current.api.showNoRowsOverlay()
      } else {
        ref.current.api.hideOverlay()
      }
    }
  }, [rowData, isFetching, isLoading])

  return (
    <AgGridContainer className="ag-theme-alpine" {...containerProps}>
      <AgGridReact
        {...{
          ...DEFAULT_GRID_OPTIONS,
          defaultColDef: { ...DEFAULT_COLUMN_DEFS, ...defaultColDef },
          ref,
          rowData,
          ...rest,
          onFirstDataRendered: handleFirstDataRendered,
          onFilterChanged: flow(
            compact([onDisplayedRowUpdated, onFilterChanged])
          ),
          onRowDataUpdated: flow(
            compact([onDisplayedRowUpdated, injectedOnRowDataUpdated])
          ),
        }}
      />
    </AgGridContainer>
  )
})

export default AgGrid
