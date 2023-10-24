import React, { ReactElement } from 'react'
import { PageConfig } from './PageTemplate'
import { useConfig, UseConfigProps } from '../hooks'

export type Config = PageConfig

export interface WithConfigProps extends UseConfigProps {
  children: ReactElement
}

const WithConfig: React.FC<WithConfigProps> = (props) => {
  const { children } = props
  useConfig(props)
  return children
}

export default WithConfig
