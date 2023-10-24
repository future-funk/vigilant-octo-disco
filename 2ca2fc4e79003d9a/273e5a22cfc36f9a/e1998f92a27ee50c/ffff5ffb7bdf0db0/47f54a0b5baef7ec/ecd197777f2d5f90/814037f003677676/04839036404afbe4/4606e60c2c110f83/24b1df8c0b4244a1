import {
  GlobalOutlined,
  LinkOutlined,
  MinusOutlined,
  PlusOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { useAppDispatch } from '@bpd/bpd-web/shared/store'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { BpdLink } from '@bpd/bpd-web/shared/ui'
import { Research } from '@bpd/esg-ade-portal/shared/data-access'
import { Card, Stack, Typography } from '@gic/battlefield-ui-pack'
import { Typography as AntdTypography } from 'antd'
import dayjs from 'dayjs'
import { isEmpty, map, upperCase } from 'lodash'
import { FC, useReducer, useState } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'

const { Paragraph } = AntdTypography

export interface ResearchCardProps {
  value: Research
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

const StyledCardFooter = withTheme(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
})

const MIN_NUM_ROW = 3
const UNLIMITED_NUM_ROW = 999

const ResearchCard: FC<ResearchCardProps> = (props) => {
  const [isExpanded, toggleIsExpanded] = useReducer((state) => !state, false)
  const [isEllipsis, setIsEllipsis] = useState(false)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { value } = props
  const {
    imageUrl,
    name,
    description,
    published_dt,
    tags,
    attachmentUrl,
    referenceUrl,
    executive_summary,
    videoUrl,
  } = value

  const handleClickCard = (researchId: string) => {
    if (!isEmpty(executive_summary)) {
      navigate(
        generatePath(ROUTES.KNOWLEDGE.ESG_ADE_PORTAL.RESEARCH_DETAILS, {
          id: researchId,
        })
      )
    }
  }

  return (
    <StyledCard disableBodyPadding onClick={() => handleClickCard(value?.id)}>
      <StyledThumbnailWrapper>
        <img src={imageUrl} alt={name} />
      </StyledThumbnailWrapper>
      <Stack
        p={2}
        style={{ gap: '16px', height: '100%', justifyContent: 'space-between' }}
      >
        <StyledCardHeader>
          <Typography variant="overline" color="text.caption">
            {upperCase(dayjs(published_dt).format('MMM-YYYY'))}
          </Typography>
          <Typography variant="subtitle1">{name}</Typography>
          <Paragraph
            ellipsis={{
              rows: isExpanded ? UNLIMITED_NUM_ROW : MIN_NUM_ROW,
              expandable: isExpanded,
              symbol: <span />,
              onEllipsis: (value) => setIsEllipsis(value),
            }}
          >
            {description}
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
        <StyledCardFooter>
          <Typography variant="subtitle3" color="text.caption">
            {map(tags, (tag) => `#${tag} `)}
          </Typography>
          <Stack flexDirection={'row'}>
            {referenceUrl && (
              <BpdLink
                href={referenceUrl}
                target="_blank"
                title=""
                startIcon={<GlobalOutlined />}
                onClick={(e) => e.stopPropagation()}
              />
            )}

            <BpdLink
              href={`${attachmentUrl}`}
              target="_blank"
              title=""
              startIcon={<LinkOutlined />}
              onClick={(e) => e.stopPropagation()}
            />
            {videoUrl && (
              <BpdLink
                href={`${videoUrl}`}
                target="_blank"
                title=""
                startIcon={<VideoCameraOutlined />}
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </Stack>
        </StyledCardFooter>
      </Stack>
    </StyledCard>
  )
}

export default ResearchCard
