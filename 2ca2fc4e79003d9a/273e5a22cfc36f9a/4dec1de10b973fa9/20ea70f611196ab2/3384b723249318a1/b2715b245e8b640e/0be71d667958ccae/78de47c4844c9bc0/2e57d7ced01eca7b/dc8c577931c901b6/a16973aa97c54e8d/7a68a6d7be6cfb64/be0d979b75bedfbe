import { FC } from 'react'
import {
  Stack,
  Typography,
  Card,
  Row,
  Col,
  Box,
  Tooltip,
} from '@gic/battlefield-ui-pack'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { BpdListItem, BpdHorizontalDivider } from '@bpd/bpd-web/shared/ui'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import {
  formatCurrency,
  formatPercent,
  formatRelativeNumber,
} from '@bpd/utils/formatters'
import { DirectoryLogisticsDto } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { TOOLTIP } from '../../constants'

interface UnderwritingAssumptionProps {
  selectedDirectory: DirectoryLogisticsDto
}

const StyledHeaderWrapper = withTheme(Stack)({
  display: 'flex',
  gap: 4,
  alignItems: 'center',
  flexDirection: 'row',
})

const UnderwritingAssumption: FC<UnderwritingAssumptionProps> = (props) => {
  const {
    landCostPsmGfa,
    projectCurrency,
    constructionCostPsmGfa,
    developmentYieldUw,
    nerDayUw,
    rentGrowthUw,
    irrUw,
    exitCapRateUw,
  } = props.selectedDirectory || {}

  return (
    <Stack>
      <Typography variant="h4" color="text.subHeading" sx={{ my: 2 }}>
        Underwriting Assumption
      </Typography>
      <Card size="small">
        <Stack>
          <Row justify="start">
            <Col span={8}>
              <BpdListItem
                {...{
                  header: 'Land Cost per GFA',
                  value: landCostPsmGfa
                    ? `${formatCurrency(
                        landCostPsmGfa,
                        '',
                        projectCurrency
                      )} psm`
                    : '-',
                }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                {...{
                  header: 'Construction Cost per GFA',
                  value: constructionCostPsmGfa
                    ? `${formatCurrency(
                        constructionCostPsmGfa,
                        '',
                        projectCurrency
                      )} psm`
                    : '-',
                }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                noDivider={true}
                {...{
                  header: 'Development Yield',
                  value: developmentYieldUw
                    ? formatPercent(developmentYieldUw, 1)
                    : '-',
                }}
              />
            </Col>
          </Row>
        </Stack>
        <Box my={2}>
          <BpdHorizontalDivider />
        </Box>
        <Stack>
          <Row>
            <Col span={8}>
              <BpdListItem
                {...{
                  header: (
                    <StyledHeaderWrapper>
                      NER
                      <Tooltip
                        title={TOOLTIP}
                        placement="top"
                      >
                        <QuestionCircleOutlined />
                      </Tooltip>
                    </StyledHeaderWrapper>
                  ),
                  value: nerDayUw
                    ? `${projectCurrency} ${formatRelativeNumber(
                        nerDayUw,
                        2
                      )} psm pd`
                    : '-',
                }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                {...{
                  header: 'Rent Growth',
                  value: rentGrowthUw || '-',
                }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                noDivider={true}
                {...{
                  header: 'IRR',
                  value: irrUw ? formatPercent(irrUw, 1) : '-',
                }}
              />
            </Col>
          </Row>
        </Stack>
        <Box my={2}>
          <BpdHorizontalDivider />
        </Box>
        <Stack>
          <Row>
            <Col span={8}>
              <BpdListItem
                noDivider={true}
                {...{
                  header: 'Exit Cap Rate',
                  value: exitCapRateUw ? formatPercent(exitCapRateUw, 1) : '-',
                }}
              />
            </Col>
          </Row>
        </Stack>
      </Card>
    </Stack>
  )
}

export default UnderwritingAssumption
