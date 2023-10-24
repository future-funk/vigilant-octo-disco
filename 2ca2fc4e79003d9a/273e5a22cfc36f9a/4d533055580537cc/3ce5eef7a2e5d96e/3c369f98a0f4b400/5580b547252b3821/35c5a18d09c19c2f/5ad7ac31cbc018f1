import {
  AnalyticsHanger,
  EsgAdePortal,
  GipsPortal,
  ParcelAnalysisPortal,
  RePortal,
  StratsPortal,
  ESGPortal,
} from '@bpd/knowledge/shared/core'
import { Section, Stack } from '@gic/battlefield-ui-pack'
import { Col } from 'antd'

const KnowledgeDrawer = () => {
  return (
    <Stack spacing={3} width="100%" pb={2}>
      <Section title="Featured">
        <Stack direction="row" flexWrap="wrap" sx={{ rowGap: 2 }}>
          <Col sm={24} md={12} xl={8} xxl={6}>
            <RePortal />
          </Col>
          <Col sm={24} md={12} xl={8} xxl={6}>
            <GipsPortal />
          </Col>
          <Col sm={24} md={12} xl={8} xxl={6}>
            <StratsPortal />
          </Col>
          <Col sm={24} md={12} xl={8} xxl={6}>
            <ParcelAnalysisPortal />
          </Col>
          <Col sm={24} md={12} xl={8} xxl={6}>
            <ESGPortal />
          </Col>
          <Col sm={24} md={12} xl={8} xxl={6}>
            <EsgAdePortal />
          </Col>
        </Stack>
      </Section>
      <AnalyticsHanger />
    </Stack>
  )
}

export default KnowledgeDrawer
