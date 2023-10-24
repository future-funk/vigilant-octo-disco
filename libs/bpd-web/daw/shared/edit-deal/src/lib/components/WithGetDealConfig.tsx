import { BpdSpinner } from '@bpd/bpd-web/shared/ui'
import React, { FC, ReactElement } from 'react'
import { useGetDealConfig } from '../hooks'

export interface WithGetDealConfigProps {
  children: ReactElement | null
}

const WithGetDealConfig: FC<WithGetDealConfigProps> = ({ children }) => {
  const { isFetching } = useGetDealConfig()
  return React.cloneElement(children!, { isFetching })
}

export default WithGetDealConfig
