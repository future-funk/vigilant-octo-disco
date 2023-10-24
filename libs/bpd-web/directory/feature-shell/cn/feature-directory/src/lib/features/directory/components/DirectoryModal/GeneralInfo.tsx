import { FC } from 'react'
import dayjs from 'dayjs'
import { capitalize, startCase } from 'lodash'
import {
  Stack,
  Typography,
  Card,
  Row,
  Col,
  Box,
} from '@gic/battlefield-ui-pack'
import { BpdListItem, BpdHorizontalDivider } from '@bpd/bpd-web/shared/ui'
import { formatCurrency, formatPercent, formatNumber } from '@bpd/utils/formatters'
import { DirectoryLogisticsDto } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'

interface GeneralInfoProps {
  selectedDirectory: DirectoryLogisticsDto
}

const GeneralInfo: FC<GeneralInfoProps> = (props) => {
  const {
    dealName,
    partner,
    dealStatus,
    eqCommitmentMn,
    projectCurrency,
    eqCommitmentUsdMn,
    gicOwnership,
    landAreaSqm,
    landZoning,
    landTenureExpiry,
    landAcquisitionDate,
    team,
    dateLastReported,
  } = props?.selectedDirectory || {}

  return (
    <Stack>
      <Typography variant="h4" color="text.subHeading" sx={{ my: 2 }}>
        General Info
      </Typography>
      <Card size="small">
        <Stack>
          <Row justify="start">
            <Col span={8}>
              <BpdListItem
                {...{ header: 'Deal Name', value: dealName ? dealName : '-' }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                {...{
                  header: 'Partner',
                  value: partner ? startCase(partner) : '-',
                }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                noDivider={true}
                {...{
                  header: 'Deal Status',
                  value: dealStatus ? capitalize(dealStatus) : '-',
                }}
              />
            </Col>
          </Row>
        </Stack>
        <Box my={2}>
          <BpdHorizontalDivider />
        </Box>
        <Stack>
          <Row justify="start">
            <Col span={8}>
              <BpdListItem
                {...{
                  header: 'Equity Commitment',
                  value: (
                    <Stack flexDirection={'row'} sx={{ gap: 1 }}>
                      <span>
                        {eqCommitmentMn
                          ? `${formatCurrency(
                              eqCommitmentMn,
                              '',
                              projectCurrency
                            )}M`
                          : '-'}
                      </span>
                      <span style={{ paddingBottom: 2 }}>
                        {eqCommitmentMn ? '|' : null}
                      </span>
                      <span>
                        {eqCommitmentUsdMn
                          ? `${formatCurrency(eqCommitmentUsdMn, '', 'USD')}M`
                          : ''}
                      </span>
                    </Stack>
                  ),
                }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                {...{
                  header: 'GIC Ownership',
                  value: gicOwnership ? formatPercent(gicOwnership) : '-',
                }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                noDivider={true}
                {...{
                  header: 'Land Area',
                  value: landAreaSqm ? `${formatNumber(landAreaSqm)} sqm` : '-',
                }}
              />
            </Col>
          </Row>
        </Stack>
        <Box my={2}>
          <BpdHorizontalDivider />
        </Box>
        <Stack>
          <Row justify="start">
            <Col span={8}>
              <BpdListItem
                {...{
                  header: 'Land Zoning',
                  value: landZoning ? capitalize(landZoning) : '-',
                }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                {...{
                  header: 'Land Tenure Expiry',
                  value: landTenureExpiry ? landTenureExpiry : '-',
                }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                noDivider={true}
                {...{
                  header: 'Land Acquisition Date',
                  value: landAcquisitionDate || '-',
                }}
              />
            </Col>
          </Row>
        </Stack>
        <Box my={2}>
          <BpdHorizontalDivider />
        </Box>
        <Stack>
          <Row justify="start">
            <Col span={8}>
              <BpdListItem
                {...{ header: 'Team', value: team ? startCase(team) : '-' }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                noDivider={true}
                {...{
                  header: 'Last Reported Date (Calender Date)',
                  value: dateLastReported
                    ? dayjs(dateLastReported).format('YYYY-MM-DD')
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

export default GeneralInfo
