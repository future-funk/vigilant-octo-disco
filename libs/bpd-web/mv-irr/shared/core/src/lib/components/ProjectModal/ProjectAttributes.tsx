import { FC } from 'react'
import { formatDateToLocalZone } from '@bpd/utils/formatters'
import { BpdHorizontalDivider, BpdSuspense } from '@bpd/bpd-web/shared/ui'
import {
  Box,
  Card,
  Col,
  Row,
  Stack,
  Typography,
} from '@gic/battlefield-ui-pack'
import ListItem from './ListItem'
import { useGetProjectById } from '../../hooks'
import StaffName from './StaffName'

export interface ProjectAttributesProps {
  projectId: string
}

const ProjectAttributes: FC<ProjectAttributesProps> = (props) => {
  const { projectId } = props
  const { data, isFetching, isError } = useGetProjectById(projectId)

  const { strategy, country, invtVehicle, emvType, staffs, emvLastUpdateDt } =
    data || {}

  const cfLastUpdateDt = null
  return (
    <BpdSuspense error={isError} loading={isFetching}>
      <Typography variant="h4" color="text.subHeading" sx={{ mb: 2 }}>
        GENERAL INFORMATION
      </Typography>

      <Card size="small">
        <Stack>
          <Row justify="space-between" wrap={false}>
            <Col span={6}>
              <ListItem {...{ header: 'Strategy', value: strategy || '-' }} />
            </Col>
            <Col span={6}>
              <ListItem {...{ header: 'Region', value: country || '-' }} />
            </Col>
            <Col span={6}>
              <ListItem {...{ header: 'Vehicle', value: invtVehicle || '-' }} />
            </Col>
            <Col span={6}>
              <ListItem
                {...{ header: 'End MV Type', value: emvType || '-' }}
                noDivider={true}
              />
            </Col>
          </Row>
        </Stack>
        <Box my={2}>
          <BpdHorizontalDivider />
        </Box>

        <Stack>
          <Row justify="space-between" wrap={false} gutter={16}>
            <Col span={6}>
              <ListItem
                {...{
                  header: 'Primary Asset Manager',
                  value: (
                    <StaffName
                      staffs={staffs}
                      roleName={'Primary Asset Manager'}
                    />
                  ),
                }}
              />
            </Col>
            <Col span={6}>
              <ListItem
                {...{
                  header: 'Secondary Asset Manager',
                  value: (
                    <StaffName
                      staffs={staffs}
                      roleName={'Secondary Asset Manager'}
                    />
                  ),
                }}
              />
            </Col>
            <Col span={6}>
              <ListItem
                {...{
                  header: 'MV Last Updated:',
                  value:
                    formatDateToLocalZone(
                      emvLastUpdateDt,
                      'DD MMM YYYY hh:mm A'
                    ) || '-',
                }}
              />
            </Col>
            <Col span={6}>
              <ListItem
                {...{
                  header: 'CF Last Updated:',
                  value:
                    formatDateToLocalZone(
                      cfLastUpdateDt,
                      'DD MMM YYYY hh:mm A'
                    ) || '-',
                }}
                noDivider={true}
              />
            </Col>
          </Row>
        </Stack>
      </Card>
    </BpdSuspense>
  )
}

export default ProjectAttributes
