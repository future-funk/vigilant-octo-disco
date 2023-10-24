import { Stack, Typography, TypographyProps } from '@gic/battlefield-ui-pack'
import { Col, Row } from 'antd'
import { get, isEmpty, map } from 'lodash'
import { FC } from 'react'

export interface AnalysisPageTableProps {
  headers?: string[]
  rows?: (string | number)[][]
}

export const AnalysisPageTable: FC<AnalysisPageTableProps> = (props) => {
  const { headers, rows } = props

  return (
    // Main Row
    isEmpty(rows) ? (
      <Typography variant="body2">No data found</Typography>
    ) : (
      <Row justify="space-between" wrap={false} gutter={16}>
        {/* Data */}
        {map(headers, (header, index) => {
          return (
            <Col flex={index === 0 ? 1 : 'none'}>
              <Stack
                spacing={0.5}
                {...(index !== 0 && { alignItems: 'flex-end' })}
              >
                {/* Header */}
                <Typography variant="body3" color="null.main">
                  {header}
                </Typography>
                {/* Data */}
                {map(rows, (row) => {
                  const typographyProps: TypographyProps =
                    index === 0
                      ? {
                          variant: 'body2',
                          color: 'primary.main',
                        }
                      : {
                          variant: 'subtitle2',
                        }
                  return (
                    <Typography {...typographyProps}>
                      {get(row, index)}
                    </Typography>
                  )
                })}
              </Stack>
            </Col>
          )
        })}
      </Row>
    )
  )
}

export default AnalysisPageTable
