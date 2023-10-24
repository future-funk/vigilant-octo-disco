import * as React from 'react'
import usePage from './usePage'

export interface PageProps {
  children: React.ReactNode
}

const Page: React.FC<PageProps> = ({ children }) => {
  const { onLoad } = usePage()

  const render = React.useMemo(() => {
    return <>{children}</>
  }, [children])

  React.useEffect(() => {
    onLoad(render)
  }, [onLoad, render])

  return render
}

export default Page
