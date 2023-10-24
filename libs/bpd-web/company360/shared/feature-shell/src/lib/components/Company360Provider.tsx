import React from 'react'

const Company360Provider = React.lazy(
  // eslint-disable-next-line
  // @ts-ignore
  () => import('company360/providers/Company360Provider')
)
export default Company360Provider
