import {
  Filters as CoreFilters,
  TableSearch,
} from '@bpd/bpd-web/investment-process/shared/core'
import { formatNumber } from '@bpd/utils/formatters'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { Fragment } from 'react'

const Filters = () => {
  return (
    <CoreFilters
      search={
        <TableSearch
          label={(context) => (
            <Stack direction="row" spacing={2}>
              <Typography variant="body2">Search</Typography>
              {context?.count ? (
                <>
                  <Typography variant="body2" color="text.result">
                    |
                  </Typography>
                  <Typography variant="body2" color="text.result">
                    Results: {formatNumber(context?.count)} Projects
                  </Typography>
                </>
              ) : (
                <Fragment />
              )}
            </Stack>
          )}
        />
      }
    />
  )
}

export default Filters
