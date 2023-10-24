import { Section, Stack } from '@gic/battlefield-ui-pack'
import { Col, Row } from 'antd'
import { map } from 'lodash'
import { ANALYTICS_HANGER } from '../../constants'
import AnalyticsAppCard from './AnalyticsApp'

const AnalyticsHanger = () => {
  return (
    <Stack spacing={3} width="100%">
      {map(ANALYTICS_HANGER, (hanger) => (
        <Section title={hanger.team} key={hanger.team}>
          <Row>
            <Stack direction="row" spacing={2} flexWrap="wrap" width="100%" >
              {map(hanger.apps, (app) => (
                <Col
                  key={`tile-${hanger.team}-${app.title}`}
                  sm={24}
                  md={12}
                  xl={8}
                  xxl={6}
                >
                  <AnalyticsAppCard {...app} />
                </Col>
              ))}
            </Stack>
          </Row>
        </Section>
      ))}
    </Stack>
  )
}

export default AnalyticsHanger
