import { toast } from 'react-hot-toast'

export interface WithToastOptions<T> {
  action: () => T
  error?: string
  loading: string
  success: string
}

const withToast = async <T>(options: WithToastOptions<T>) => {
  const { action, error, loading, success } = options

  try {
    toast.loading(loading)
    await action()
    toast.dismiss()
    toast.success(success)
  } catch (actionError) {
    console.error(actionError)
    toast.dismiss()
    toast.error(error ?? (actionError as Error).message)
  }
}

export default withToast
