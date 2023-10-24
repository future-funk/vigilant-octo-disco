import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import PageTemplate, { PageConfig } from './PageTemplate'

export interface PageProps {
  configs?: PageConfig[]
}

const Page: FC<PageProps> = ({ configs }) => {
  return (
    <>
      <Routes>
        {configs?.map((config) => (
          <Route
            path={config.path}
            element={<PageTemplate {...{ config }} />}
          />
        ))}
      </Routes>
    </>
  )
}

export default Page
