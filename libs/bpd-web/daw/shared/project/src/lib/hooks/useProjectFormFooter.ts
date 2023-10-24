import { useCreateDealFooter } from '@bpd/daw/shared/core'
import { assign, chain, map } from 'lodash'

export interface useResearchFormFooterProps {}

const useProjectFormFooter = (props?: unknown) => {
  const { handleSubmit, formActionProps } = useCreateDealFooter()

  const modifiedFormActionProps = chain(formActionProps)
    .update('okButtonProps.title', () => 'Create Project')
    .update('extraButtonsRight', (buttons) =>
      map(buttons, (button) =>
        assign({}, button, { title: 'Create Project and Close' })
      )
    )
    .value()

  return {
    handleSubmit,
    formActionProps: modifiedFormActionProps,
  }
}

export default useProjectFormFooter
