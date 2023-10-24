import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { some } from 'lodash'

const useGetUserCardSelectionApiRunning = () => {
  return useAppSelector((state) =>
    some(state.blueprintApi.mutations, {
      endpointName: 'postEuLogisticsUserCardSelections',
      status: 'pending',
    })
  )
}
export default useGetUserCardSelectionApiRunning
