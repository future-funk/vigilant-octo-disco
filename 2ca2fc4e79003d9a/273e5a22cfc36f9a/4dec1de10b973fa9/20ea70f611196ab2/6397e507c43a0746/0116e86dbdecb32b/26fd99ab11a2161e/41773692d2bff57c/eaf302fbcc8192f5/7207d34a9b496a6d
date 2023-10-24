import { csvExportConfig } from '../configs/csv'
import { csvHelper } from '../utils'

const useGetCSVDownloadData = <T>(
  records: T[],
  config: typeof csvExportConfig
) => {
  const blob = csvHelper(records, config)
  return window.URL.createObjectURL(blob)
}

export default useGetCSVDownloadData
