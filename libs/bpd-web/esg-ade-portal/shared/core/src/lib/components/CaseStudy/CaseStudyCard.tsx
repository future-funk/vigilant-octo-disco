import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { CaseStudyListItem, IMAGE_URL } from '@bpd/esg-ade-portal/shared/data-access'
import { Card, Stack, Typography } from '@gic/battlefield-ui-pack'
import { Typography as AntdTypography } from 'antd'
import { FC, useReducer, useState } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'

const { Paragraph } = AntdTypography

export interface CaseStudyCardProps {
  value: CaseStudyListItem
}

const StyledCard = withTheme(Card)(({ theme }) => ({
  height: '100%',
  cursor: 'pointer',
  zIndex: 1,
  borderRadius: '4px',
  '&&& .battlefield-card-body': {
    height: '100%',
  },
  '&&& .ant-card-body': {
    height: '100%',
  },
  '&:hover': {
    border: `1px solid ${theme.palette.primary.hover}`,
    boxShadow: `0px 0px 8px 0px ${theme.palette.primary.hover}`,
  },
}))

const StyledThumbnailWrapper = withTheme(Stack)({
  width: '100%',
  minHeight: '200px',
  img: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    aspectRatio: '2/1',
  },
})

const StyledCardHeader = withTheme(Stack)({
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '8px',
})

const MIN_NUM_ROW = 3
const UNLIMITED_NUM_ROW = 999

const CaseStudyCard: FC<CaseStudyCardProps> = (props) => {
  const [isExpanded, toggleIsExpanded] = useReducer((state) => !state, false)
  const [isEllipsis, setIsEllipsis] = useState(false)

  const navigate = useNavigate()

  const { value } = props
  const { id, name, summary, address } = value

  const handleOnClick = (caseStudyId: string) => {
    navigate(
      generatePath(ROUTES.KNOWLEDGE.ESG_ADE_PORTAL.CASE_STUDY_DETAILS, {
        id: caseStudyId,
      })
    )
  }

  return (
    <StyledCard disableBodyPadding onClick={() => handleOnClick(value?.id)}>
      <StyledThumbnailWrapper>
        <img src={`${IMAGE_URL}${id}.png`} alt={`${id}`} />
      </StyledThumbnailWrapper>
      <Stack
        p={2}
        style={{ gap: '16px', height: '100%', justifyContent: 'space-between' }}
      >
        <StyledCardHeader>
          <Typography variant="subtitle1">{name}</Typography>
          <Typography variant="overline" color="text.caption">
            {address}
          </Typography>
          <Paragraph
            ellipsis={{
              rows: isExpanded ? UNLIMITED_NUM_ROW : MIN_NUM_ROW,
              expandable: isExpanded,
              symbol: <span />,
              onEllipsis: (value) => setIsEllipsis(value),
            }}
          >
            {summary}
          </Paragraph>
          {((!isEllipsis && isExpanded) || isEllipsis) && (
            <Stack
              onClick={(e) => {
                toggleIsExpanded()
                e.stopPropagation()
              }}
            >
              <Typography
                variant="body2"
                color="text.link"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  zIndex: 2,
                  width: 'fit-content',
                  paddingRight: '10px',
                }}
              >
                {isExpanded ? (
                  <>
                    Read Less
                    <MinusOutlined />
                  </>
                ) : (
                  <>
                    Read More
                    <PlusOutlined />
                  </>
                )}
              </Typography>
            </Stack>
          )}
        </StyledCardHeader>
      </Stack>
    </StyledCard>
  )
}

export default CaseStudyCard
