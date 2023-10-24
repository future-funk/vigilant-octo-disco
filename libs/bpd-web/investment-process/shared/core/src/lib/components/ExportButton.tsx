import { useDownload } from '@bpd/bpd-web/shared/hooks'
import { BpdExportButton, ExportOptions } from '@bpd/bpd-web/shared/ui'
import { useGrid } from '@bpd/vendors/ag-grid'
import { get, isEqual, isNil, startCase } from 'lodash'
import { RAW_DATA_KEY } from '../constants'
import { usePageContext } from '@bpd/bpd-web/shared/core'

export interface ExportButtonProps {
  exportOptions: ExportOptions
}
const ExportButton = (props) => {
  const { exportOptions: baseExportOptions } = props

  const { context } = usePageContext()
  const path = get(context, 'page.path')

  const exportOptions = [
    ...baseExportOptions,
    {
      label: `Raw Data${!isNil(path) ? ` (${startCase(path)})` : ''}`,
      key: RAW_DATA_KEY,
      value: RAW_DATA_KEY,
    },
  ]

  const [download, { isFetching }] = useDownload()

  const { ref } = useGrid()

  const handleDownload = async (url: string, filename?: string) => {
    if (isEqual(url, RAW_DATA_KEY)) {
      const gridApi = ref?.api
      if (!isNil(gridApi)) {
        gridApi.exportDataAsExcel({
          fileName: filename ?? 'Exported Table',
        })
      }
    } else {
      await download({
        url,
        filename: !isNil(filename)
          ? `${startCase(filename)} Document`
          : 'Blueprint Document',
      })
    }
  }

  return (
    <BpdExportButton
      loading={isFetching}
      options={exportOptions}
      onDownload={handleDownload}
    />
  )
}

export default ExportButton
