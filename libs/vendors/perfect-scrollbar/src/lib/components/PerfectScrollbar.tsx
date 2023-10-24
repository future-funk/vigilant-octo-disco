import { CSSProperties, FC } from 'react'
import ReactPerfectScrollbar, { ScrollBarProps } from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './styles.css'

export interface PerfectScrollbarProps extends ScrollBarProps {
  sx?: CSSProperties
  onReachEnd?: () => void
}

export const PerfectScrollbar: FC<PerfectScrollbarProps> = (props) => {
  const { children = <div />, onReachEnd, sx, ...rest } = props

  const handleReachEnd = (element: HTMLElement) => {
    const isActiveScroll = element.classList.contains('ps--active-y')
    if (!isActiveScroll) return
    onReachEnd?.()
  }

  return (
    <ReactPerfectScrollbar
      {...rest}
      options={{
        minScrollbarLength: 25,
        maxScrollbarLength: 75,
        ...rest?.options,
      }}
      style={sx}
      onYReachEnd={handleReachEnd}
    >
      {children}
    </ReactPerfectScrollbar>
  )
}

export default PerfectScrollbar
