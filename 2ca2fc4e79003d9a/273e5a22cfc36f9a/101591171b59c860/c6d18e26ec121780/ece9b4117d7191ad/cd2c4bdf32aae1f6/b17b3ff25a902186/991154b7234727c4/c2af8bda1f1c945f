import { useAppSelector } from '@bpd/bpd-web/shared/store'
import {
  DawBlueprintApiQueries,
  DawUiSelectors,
} from '@bpd/daw/shared/data-access'

export type ErrorResponse = { error: { data: any; status: number } }

const useCreate = () => {
  const team = useAppSelector(DawUiSelectors.getTeam)

  const [postDeal, result] = DawBlueprintApiQueries.usePostDeal()

  const handler = async (data: unknown) => {
    try {
      return await postDeal({ team, body: data })
    } catch (error) {
      console.error(error)
    }
  }

  return [handler, result] as [
    (data: unknown) => Promise<string | ErrorResponse>,
    typeof result
  ]
}

export default useCreate
