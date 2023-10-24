import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdHorizontalDivider } from '@bpd/bpd-web/shared/ui'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { map, reduce, trim } from 'lodash'
import { FC, ReactElement } from 'react'

export interface DealStaffingTooltipProps {}

const StyledTypography = withTheme(Typography)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.text.secondary,
}))

const WORKLOADS: [string, string[][]][] = [
  ['Workload', [['% Util', 'Total number of hours / 50-hours work week']]],
  [
    'Level of Commitment',
    [
      [
        '0',
        'No active time requirement',
        "Example: awaiting information, ball in counterparty's court, etc.",
      ],
      [
        '1',
        '1 hour | of weekly time',
        'Example: deal tracking, miscellaneous deal upkeep / PM duties, etc.',
      ],
      [
        '2',
        '5 hours | (0.5 days) of weekly time',
        'Example: miscellaneous deal upkeep / PM duties.',
      ],
      [
        '3',
        '10 hours | (1 day) of weekly time',
        'Example: high level desktop on low priority deal, etc.',
      ],
      [
        '4',
        '20 hours | (2 days) of weekly time',
        'Example: full detailed desktop on a high priority deal.',
      ],
      [
        '5',
        '35 hours | (3.5 days) of weekly time',
        'Example: urgent live deal with quick turnarounds / approvals, SAPs.',
      ],
    ],
  ],
]

const renderVerticalRow = (output: ReactElement, element: ReactElement) => (
  <>
    {output}
    <BpdHorizontalDivider />
    {element}
  </>
)

const DealStaffingTooltip: FC<DealStaffingTooltipProps> = () => {
  return (
    <Stack spacing={1}>
      {reduce(
        map(WORKLOADS, ([header, items]) => {
          return (
            <>
              <StyledTypography variant="h4">{header}</StyledTypography>
              {map(items, ([subHeader, desc, info]) => {
                const [prefix, content] = desc.split('|')
                return (
                  <Stack spacing={2} flexDirection="row">
                    <StyledTypography variant="h4" sx={{ flexBasis: 38 }}>
                      {subHeader}
                    </StyledTypography>
                    <Stack>
                      <StyledTypography variant="body3">
                        {content ? (
                          <>
                            <StyledTypography
                              variant="span"
                              sx={{ fontWeight: 600 }}
                            >
                              {trim(prefix)}{' '}
                            </StyledTypography>
                            {trim(content)}
                          </>
                        ) : (
                          prefix
                        )}
                      </StyledTypography>
                      {info && (
                        <StyledTypography
                          variant="body3"
                          sx={{
                            color: 'text.result',
                          }}
                        >
                          {info}
                        </StyledTypography>
                      )}
                    </Stack>
                  </Stack>
                )
              })}
            </>
          )
        }),
        renderVerticalRow
      )}
    </Stack>
  )
}

export default DealStaffingTooltip
