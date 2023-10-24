import { FC } from 'react'
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
import { formatNumber } from '@bpd/utils/formatters'
import { DirectoryLogisticsDto } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'

interface WarehouseInfoProps {
  selectedDirectory: DirectoryLogisticsDto
}

const WarehouseInfo: FC<WarehouseInfoProps> = (props) => {
  const {
    assetType,
    developmentStage,
    devStartDate,
    devCompletionDate,
    gfaSqm,
    nlaSqm,
    warehouseDesign,
  } = props?.selectedDirectory || {}

  return (
    <Stack>
      <Typography variant="h4" color="text.subHeading" sx={{ my: 2 }}>
        Warehouse Info
      </Typography>
      <Card size="small">
        <Stack>
          <Row justify="start">
            <Col span={8}>
              <BpdListItem
                {...{
                  header: 'Warehouse Type',
                  value: assetType ? startCase(assetType) : '-',
                }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                {...{
                  header: 'Development Stage',
                  value: developmentStage ? capitalize(developmentStage) : '-',
                }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                noDivider={true}
                {...{
                  header: 'Development Period',
                  value:
                    devStartDate || devCompletionDate
                      ? `${devStartDate || '-'} ~ ${devCompletionDate || '-'}`
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
                  header: 'GFA',
                  value: gfaSqm ? `${formatNumber(gfaSqm)} sqm` : '-',
                }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                {...{
                  header: 'NLA',
                  value: nlaSqm ? `${formatNumber(nlaSqm)} sqm` : '-',
                }}
              />
            </Col>
            <Col span={8}>
              <BpdListItem
                noDivider={true}
                {...{
                  header: 'Design',
                  value: warehouseDesign ? warehouseDesign : '-',
                }}
              />
            </Col>
          </Row>
        </Stack>
      </Card>
    </Stack>
  )
}

export default WarehouseInfo
