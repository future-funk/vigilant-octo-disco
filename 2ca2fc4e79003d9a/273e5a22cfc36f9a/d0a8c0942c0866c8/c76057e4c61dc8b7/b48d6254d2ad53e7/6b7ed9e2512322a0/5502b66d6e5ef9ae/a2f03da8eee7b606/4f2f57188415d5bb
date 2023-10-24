import { DownloadOutlined } from '@ant-design/icons'
import {
  BpdLink,
  BpdSearchBar,
  BpdVerticalDivider,
} from '@bpd/bpd-web/shared/ui'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { FC } from 'react'

export interface TopCompaniesActionBarProps {
  handleCompanySearch: (value: string) => void
  handleClickExport: () => void
}

const TopCompaniesActionBar: FC<TopCompaniesActionBarProps> = (props) => {
  const { handleClickExport, handleCompanySearch } = props

  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="body2">Company:</Typography>
      <BpdSearchBar
        placeholder="Enter company name"
        onChangeDebounce={150}
        sx={{ minWidth: 300 }}
        onChange={handleCompanySearch}
      />
      <BpdVerticalDivider />
      <BpdLink
        startIcon={<DownloadOutlined />}
        onClick={handleClickExport}
        title="Download"
        sx={{ height: 28 }}
      />
    </Stack>
  )
}

export default TopCompaniesActionBar
