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
import { formatPercent, formatRelativeNumber } from '@bpd/utils/formatters'
import { DirectoryLogisticsDto } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { TOOLTIP } from '../../constants'

interface OperationInfoProps {
  selectedDirectory: DirectoryLogisticsDto
}

const StyledHeaderWrapper = withTheme(Stack)({
  display: 'flex',
  gap: 4,
  alignItems: 'center',
  flexDirection: 'row',
})

const OperationInfo: FC<OperationInfoProps> = (props) => {
  const {
    passingNerDay,
    projectCurrency,
    marketNerDay,
    currentOccupancy,
    keyTenants,
    exitCapRateActual,
  } = props?.selectedDirectory || {}

  return (
    <Stack>
      <Typography variant="h4" color="text.subHeading" sx={{ my: 2 }}>
        Operating Info
      </Typography>
      <Card size="small">
        <Stack>
          <Row justify="start">
            <Col span={8}>
              <BpdListItem
                {...{
                  header: (
                    <StyledHeaderWrapper>
                      Passing NER
                      <Tooltip
                        title={TOOLTIP}
                        placement="top"
                      >
                        <QuestionCircleOutlined />
                      </Tooltip>
                    </StyledHeaderWrapper>
                  ),
                  value: passingNerDay
                    ? `${projectCurrency} ${formatRelativeNumber(passingNerDay, 2)} psm pd`
                    : '-',
                }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                {...{
                  header: (
                    <StyledHeaderWrapper>
                      Market NER
                      <Tooltip
                        title={TOOLTIP}
                        placement="top"
                      >
                        <QuestionCircleOutlined />
                      </Tooltip>
                    </StyledHeaderWrapper>
                  ),
                  value: marketNerDay
                    ? `${projectCurrency} ${formatRelativeNumber(marketNerDay, 2)} psm pd`
                    : '-',
                }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                {...{
                  header: 'Occupancy',
                  value: currentOccupancy
                    ? `${formatPercent(currentOccupancy, 1)}`
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
                  header: 'Key Tenants',
                  value: keyTenants ? keyTenants : '-',
                }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                noDivider={true}
                {...{
                  header: 'Exit Cap Rate',
                  value: exitCapRateActual
                    ? `${formatPercent(exitCapRateActual, 1)}`
                    : '-',
                }}
              />
            </Col>
          </Row>
        </Stack>
      </Card>
    </Stack>
  )
}

export default OperationInfo
