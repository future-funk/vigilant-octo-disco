import { isNil } from 'lodash'
import { FC, useMemo } from 'react'
import { WarningOutlined } from '@ant-design/icons'
import { CashflowSummary } from '@bpd/mv-irr/shared/data-access'
import { formatNumber, formatPercent } from '@bpd/utils/formatters'
import {
  BpdHorizontalDivider,
  BpdIcon,
  BpdLink,
  BpdVerticalDivider,
} from '@bpd/bpd-web/shared/ui'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { getFiscalYearDates } from '@bpd/utils/fiscal-year'
import {
  Box,
  Card,
  Col,
  Row,
  Stack,
  Tooltip,
  Typography,
} from '@gic/battlefield-ui-pack'
import ListItem from './ListItem'
import { IRR_MISSING_CONFLUENCE, MESSAGE } from '../../constants'

export interface ProjectPerformanceProps {
  data: CashflowSummary
  fiscalYear: string
  activeCurrency: string
}

const StyledHeader = withTheme(Box)(({ theme }) => {
  return {
    ...theme.typography.body3,
    textAlign: 'center',
    color: theme.palette.null.main,
  }
})

const StyledValue = withTheme(Box)(({ theme }) => {
  return {
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontWeight: 600,
  }
})

const ProjectPerformance: FC<ProjectPerformanceProps> = (props) => {
  const { data, fiscalYear, activeCurrency } = props
  const { currentFy, previousFy } = getFiscalYearDates(fiscalYear, 'YY')
  const ccy = useMemo(
    () => (activeCurrency === 'USD' ? '$' : 'LCY'),
    [activeCurrency]
  )

  const {
    lfyIrr,
    irrX,
    aprXPercent,
    incXPercent,
    expXPercent,
    irr,
    aprPercent,
    incPercent,
    expPercent,
    bmv,
    cc,
    roc,
    apr,
    emv,
    ifo,
    pe,
    errorCode,
    l3fyIrr,
    l5fyIrr,
    l7fyIrr,
    inceptionIrr,
  } = data || {}

  return (
    <Stack direction="column" spacing={2}>
      <Card
        title={<Typography variant="subtitle1">Mar-{previousFy}</Typography>}
        stretch
        divider
        size="small"
      >
        <Row justify="space-between" wrap={true} gutter={16}>
          <Col span={5}>
            <ListItem
              {...{
                header: '1Y IRR',
                value: !isNil(lfyIrr) ? formatPercent(lfyIrr, 2) : '-',
              }}
            />
          </Col>
          <Col span={5}>
            <ListItem
              {...{
                header: `3Y IRR`,
                value: !isNil(l3fyIrr) ? formatPercent(l3fyIrr, 2) : '-',
              }}
            />
          </Col>
          <Col span={5}>
            <ListItem
              {...{
                header: `5Y IRR`,
                value: !isNil(l5fyIrr) ? formatPercent(l5fyIrr, 2) : '-',
              }}
            />
          </Col>
          <Col span={5}>
            <ListItem
              {...{
                header: `7Y IRR`,
                value: !isNil(l7fyIrr) ? formatPercent(l7fyIrr, 2) : '-',
              }}
            />
          </Col>

          <Col span={4}>
            <ListItem
              {...{
                header: `Since Inception IRR`,
                value: !isNil(inceptionIrr)
                  ? formatPercent(inceptionIrr, 2)
                  : '-',
              }}
              noDivider
            />
          </Col>
        </Row>
      </Card>

      <Card
        title={`Mar-${currentFy} Projections`}
        leftActions={
          errorCode && (
            <Tooltip placement="topRight" title={MESSAGE.WHY_NO_IRR[errorCode]}>
              <BpdLink
                color="error"
                target="_blank"
                href={IRR_MISSING_CONFLUENCE}
                title={'Why no IRR?'}
                startIcon={<BpdIcon icon={<WarningOutlined />} />}
              />
            </Tooltip>
          )
        }
        stretch
        divider
        size="small"
      >
        <Stack justifyContent={'space-between'} direction="row">
          <StyledHeader width={'5%'}></StyledHeader>
          <StyledHeader width={'10%'}>1Y IRR</StyledHeader>
          <StyledHeader width={'5%'}>=</StyledHeader>
          <StyledHeader width={'20%'}>Return from Appreciation</StyledHeader>
          <StyledHeader width={'5%'}>+</StyledHeader>
          <StyledHeader width={'20%'}>Return from Income</StyledHeader>
          <StyledHeader width={'5%'}>+</StyledHeader>
          <StyledHeader width={'30%'}>
            Return from Portfolio Expenses
          </StyledHeader>
        </Stack>

        <Stack justifyContent={'space-between'} direction="row">
          <StyledHeader width={'5%'}>XIRR</StyledHeader>
          <StyledValue width={'10%'}>
            {!isNil(irrX) ? formatPercent(irrX, 2) : '-'}
          </StyledValue>
          <Box width={'5%'} textAlign={'center'}>
            =
          </Box>
          <StyledValue width={'20%'}>
            {!isNil(aprXPercent) ? formatPercent(aprXPercent, 2) : '-'}
          </StyledValue>
          <Box width={'5%'} textAlign={'center'}>
            +
          </Box>
          <StyledValue width={'20%'}>
            {!isNil(incXPercent) ? formatPercent(incXPercent, 2) : '-'}
          </StyledValue>
          <Box width={'5%'} textAlign={'center'}>
            +
          </Box>
          <StyledValue width={'30%'}>
            {!isNil(expXPercent) ? formatPercent(expXPercent, 2) : '-'}
          </StyledValue>
        </Stack>

        <Stack justifyContent={'space-between'} direction="row">
          <StyledHeader width={'5%'}>Official</StyledHeader>
          <StyledValue width={'10%'}>
            {!isNil(irr) ? formatPercent(irr, 2) : '-'}
          </StyledValue>
          <Box width={'5%'} textAlign={'center'}>
            =
          </Box>
          <StyledValue width={'20%'}>
            {!isNil(aprPercent) ? formatPercent(aprPercent, 2) : '-'}
          </StyledValue>
          <Box width={'5%'} textAlign={'center'}>
            +
          </Box>
          <StyledValue width={'20%'}>
            {!isNil(incPercent) ? formatPercent(incPercent, 2) : '-'}
          </StyledValue>
          <Box width={'5%'} textAlign={'center'}>
            +
          </Box>
          <StyledValue width={'30%'}>
            {!isNil(expPercent) ? formatPercent(expPercent, 2) : '-'}
          </StyledValue>
        </Stack>

        <Box my={2}>
          <BpdHorizontalDivider />
        </Box>

        <Stack justifyContent={'space-between'} direction="row">
          <StyledHeader width={'5%'}></StyledHeader>
          <StyledHeader width={'15%'}>Starting MV</StyledHeader>
          <StyledHeader width={'5%'}>+</StyledHeader>
          <StyledHeader width={'15%'}>Capital Calls</StyledHeader>
          <StyledHeader width={'5%'}>+</StyledHeader>
          <StyledHeader width={'15%'}>Return of Capital</StyledHeader>
          <StyledHeader width={'5%'}>+</StyledHeader>
          <StyledHeader width={'15%'}>Appreciation</StyledHeader>
          <StyledHeader width={'5%'}>=</StyledHeader>
          <StyledHeader width={'10%'}>Ending</StyledHeader>
        </Stack>

        <Stack justifyContent={'space-between'} direction="row">
          <StyledHeader width={'5%'}>{ccy}</StyledHeader>
          <StyledValue width={'15%'}>
            {!isNil(bmv) ? formatNumber(bmv) : '-'}
          </StyledValue>
          <Box width={'5%'} textAlign={'center'}>
            +
          </Box>
          <StyledValue width={'15%'}>
            {!isNil(cc) ? formatNumber(cc) : '-'}
          </StyledValue>
          <Box width={'5%'} textAlign={'center'}>
            +
          </Box>
          <StyledValue width={'15%'}>
            {!isNil(roc) ? formatNumber(roc) : '-'}
          </StyledValue>
          <Box width={'5%'} textAlign={'center'}>
            +
          </Box>
          <StyledValue width={'15%'}>
            {!isNil(apr) ? formatNumber(apr) : '-'}
          </StyledValue>
          <Box width={'5%'} textAlign={'center'}>
            =
          </Box>
          <StyledValue width={'10%'}>
            {!isNil(emv) ? formatNumber(emv) : '-'}
          </StyledValue>
        </Stack>

        <Box my={2}>
          <BpdHorizontalDivider />
        </Box>

        <Stack direction="row" justifyContent={'space-evenly'}>
          <ListItem
            {...{
              header: `Income from Operations (${ccy})`,
              value: !isNil(ifo) ? formatNumber(ifo) : '-',
            }}
            noDivider
          />
          <Box>
            <BpdVerticalDivider />
          </Box>
          <ListItem
            {...{
              header: `Portfolio Expenses (${ccy})`,
              value: !isNil(pe) ? formatNumber(pe) : '-',
            }}
            noDivider
          />
        </Stack>
      </Card>
    </Stack>
  )
}

export default ProjectPerformance
