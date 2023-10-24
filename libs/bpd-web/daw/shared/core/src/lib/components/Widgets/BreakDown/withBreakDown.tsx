import { FC } from 'react'
import { MultiSelectBreakdownProps } from './MultiSelectBreakdown'

export type WithBreakDownOptions = {
  component: FC<MultiSelectBreakdownProps>
} & MultiSelectBreakdownProps['breakDnOptions']

const withBreakdown =
  (options: WithBreakDownOptions) => (props: MultiSelectBreakdownProps) => {
    const {
      component: WrapperComponent,
      breakDnKey,
      multiSelectLabel,
      minThreshold,
    } = options

    return (
      <WrapperComponent
        {...{
          ...props,
          breakDnOptions: { breakDnKey, multiSelectLabel, minThreshold },
        }}
      />
    )
  }

export default withBreakdown
