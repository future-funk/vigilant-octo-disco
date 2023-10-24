import { FC } from 'react'
import { map, keys, isEmpty, get } from 'lodash'
import { QuestionCircleOutlined } from '@ant-design/icons'
import {
  Stack,
  Typography,
  Card,
  Row,
  Col,
  Tooltip,
} from '@gic/battlefield-ui-pack'
import { BpdListItem } from '@bpd/bpd-web/shared/ui'
import { DirectoryLogisticsDto } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { useGetLocationInfo } from '../../hooks'
import ModalMap from './ModalMap'

interface LocationInfoProps {
  selectedDirectory: DirectoryLogisticsDto
}

const tooltipBody = (
  <div style={{ border: '1px dotted white', padding: 10 }}>
    <ol style={{ paddingLeft: 20, margin: 0 }}>
      <li>Distance is calculated based on straight line distance.</li>
      <li>Only POI within 20 kms are showed.</li>
    </ol>
  </div>
)

const LocationInfo: FC<LocationInfoProps> = (props) => {
  const { selectedDirectory } = props || {}
  const { lat, lng } = selectedDirectory

  const locationInfo = useGetLocationInfo({ selectedDirectory })

  return (
    <Stack>
      <Typography
        variant="h4"
        color="text.subHeading"
        sx={{ my: 2, display: 'flex', alignItems: 'center', gap: 1 }}
      >
        Location Info
        <Tooltip title={tooltipBody} overlayInnerStyle={{ minWidth: 300 }}>
          <QuestionCircleOutlined />
        </Tooltip>
      </Typography>
      <Card size="small">
        <Stack>
          <Row justify="start">
            <Col span={12} sx={{ minHeight: 280 }}>
              <ModalMap
                viewState={{ latitude: lat, longitude: lng }}
                markerCoordinate={{ latitude: lat, longitude: lng }}
              />
            </Col>
            <Col span={12}>
              {isEmpty(locationInfo.orderedFields) &&
              isEmpty(locationInfo.highways) ? (
                <span>No amenities found within 20km.</span>
              ) : (
                ''
              )}
              {map(keys(locationInfo.orderedFields), (fields) => {
                const field = get(locationInfo.orderedFields, fields)

                return !isEmpty(field) ? (
                  <BpdListItem
                    key={`directory-modal-location-info-key-${field}`}
                    noDivider={true}
                    {...{
                      header: fields,
                      value: (
                        <ul>
                          {map(field, (fieldValue, index) => (
                            <li
                              key={`directory-modal-location-info-${index}`}
                            >
                              <Stack
                                flexDirection={'row'}
                                justifyContent={'space-between'}
                              >
                                <Stack>{fieldValue.name}</Stack>
                                <Stack>{fieldValue.distance}</Stack>
                              </Stack>
                            </li>
                          ))}
                        </ul>
                      ),
                    }}
                  />
                ) : (
                  ''
                )
              })}
              {!isEmpty(locationInfo.highways) && (
                <BpdListItem
                  noDivider={true}
                  {...{
                    header: 'Highway',
                    value: locationInfo.highways,
                  }}
                />
              )}
            </Col>
          </Row>
        </Stack>
      </Card>
    </Stack>
  )
}

export default LocationInfo
