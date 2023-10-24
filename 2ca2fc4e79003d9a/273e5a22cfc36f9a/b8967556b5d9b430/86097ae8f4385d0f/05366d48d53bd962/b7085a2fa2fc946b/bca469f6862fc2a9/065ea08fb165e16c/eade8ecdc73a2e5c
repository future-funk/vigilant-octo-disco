import { Chip, Stack, Typography } from '@gic/battlefield-ui-pack'
import { SelectedParams } from '../types'

const PortfolioTitle = (props: {
  selectedParams: SelectedParams
  label: string
}) => {
  const {
    selectedParams,
    selectedParams: { strategy, project_currency },
    label,
  } = props

  const doShowSelectedParams =
    Boolean(selectedParams) &&
    !(strategy === 'All' && project_currency === 'All')

  return (
    <Stack direction="row" spacing={1} alignItems={'center'}>
      <Typography variant="subtitle1">{label}</Typography>
      {doShowSelectedParams && (
        <>
          <Chip
            title={strategy}
            variant="outlined"
            sx={{ borderRadius: 2, height: 18 }}
          />
          <Chip
            title={project_currency}
            variant="outlined"
            sx={{ borderRadius: 2, height: 18 }}
          />
        </>
      )}
    </Stack>
  )
}
export default PortfolioTitle
