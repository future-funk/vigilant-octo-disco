import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { MsaExposureSelectors } from '../data'

const useGetMsaAssetsArgs = () => {
  const filters = useAppSelector(MsaExposureSelectors.getFilters)

  return {
    ...filters,
  }
}

export default useGetMsaAssetsArgs
