import React, { FC, ReactNode } from 'react'
import { Box, Row, Col } from '@gic/battlefield-ui-pack'
import { first } from 'lodash'
import dayjs from 'dayjs'
import {
  PortfolioCardMsaExposureChart,
  PortfolioCardMsaExposureTable,
} from './PortfolioCardMsaExposure'
import {
  PortfolioCardSectorExposureChart,
  PortfolioCardSectorExposureTable,
} from './PortfolioCardSectorExposure'
import { MsaExposureCartoQueries } from '@bpd/msa-exposure/shared/data-access'
import PortfolioCard from './PortfolioCard'

interface PortfolioCardMsaExposureProps {
  children?: ReactNode
}

const PortfolioCardMsaExposure: FC<PortfolioCardMsaExposureProps> = () => {
  const { data } = MsaExposureCartoQueries.useGetMsaLastUpdateDt({})

  const lastUpdateDt = first(data)?.lastUpdateDt

  return (
    <Box padding={1}>
      <Row>
        <Col md={12}>
          <PortfolioCard
            {...{
              title: `Sector NMV Exposure to Top 25 MSAs & Primary Markets`,
              subtitle: `% is based on US NMV · Last updated date: ${
                lastUpdateDt ? dayjs(lastUpdateDt).format('DD MMM YYYY') : '-'
              }`,
              slots: {
                chart: <PortfolioCardSectorExposureChart />,
                table: <PortfolioCardSectorExposureTable />,
              },
            }}
          />
        </Col>
        <Col md={12}>
          <PortfolioCard
            {...{
              title: `NMV Exposure by MSAs`,
              subtitle: `% is based on US NMV · Last updated date: ${
                lastUpdateDt ? dayjs(lastUpdateDt).format('DD MMM YYYY') : '-'
              }`,
              slots: {
                chart: <PortfolioCardMsaExposureChart />,
                table: <PortfolioCardMsaExposureTable />,
              },
            }}
          />
        </Col>
      </Row>
    </Box>
  )
}

export default PortfolioCardMsaExposure
