import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import {
  BpdModal,
  FormProvider,
  FormProviderProps,
} from '@bpd/bpd-web/shared/ui'
import { createDealZodSchema } from '../configs'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { noop } from 'lodash'
export interface DawFormProps {
  injectedPath?: string
  defaultValues: FormProviderProps['useFormProps']['defaultValues']
  updateDefaultValuesOn?: FormProviderProps['updateDefaultValuesOn']
  config?: {
    validationSchema: z.ZodType<any>
  }
}

const breakpointValues = {
  lg: 1024,
  xl: 1280,
  xxl: 1538,
  xxxl: 1920,
}

const StyledModal = withTheme(BpdModal)(({ theme }) => ({
  '&&& .ant-modal-body': {
    padding: 0,
  },
  '&&& .ant-modal-header': {
    padding: 0,
    border: 'none',
  },
  [`${theme.breakpoints.down?.(breakpointValues.lg)}`]: {
    top: theme.spacing(3),
    minWidth: `960px`,
  },
  [`${theme.breakpoints.up?.(breakpointValues.lg)}`]: {
    top: theme.spacing(3),
    minWidth: `calc(100vw - ${theme.spacing(2 * 5)})`,
  },
  [`${theme.breakpoints.up?.(breakpointValues.xxl)}`]: {
    top: theme.spacing(5),
    minWidth: `1500px`,
  },
}))

const DawForm: FC<DawFormProps> = ({
  injectedPath,
  defaultValues,
  config,
  updateDefaultValuesOn,
}) => {
  const { validationSchema = createDealZodSchema } = config ?? {}

  const formProviderProps: FormProviderProps = {
    form: 'deal',
    useFormProps: {
      onSubmit: noop,
      defaultValues,
      resolver: zodResolver(validationSchema),
    },
    validationSchema,
    updateDefaultValuesOn,
  }

  return (
    <StyledModal visible disableFooter closable={false}>
      <FormProvider key={injectedPath} {...formProviderProps}>
        <Outlet />
      </FormProvider>
    </StyledModal>
  )
}

export default DawForm
