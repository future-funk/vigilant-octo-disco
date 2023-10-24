import { ICellRendererParams } from 'ag-grid-community'

const SourceCellRenderer = (props: { params: ICellRendererParams }) => {
  const { params } = props
  const { data } = params
  const { source, lastUpdateUserInitials, lastUpdateUserName } = data

  return source === 'USER' ? (
    <span>
      Uploaded by
      <span style={{ marginLeft: 4 }} title={lastUpdateUserName}>
        {lastUpdateUserInitials}
      </span>
    </span>
  ) : (
    source
  )
}

export default SourceCellRenderer
