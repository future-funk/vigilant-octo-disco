import { upperCase } from 'lodash'
import { RadioChangeEvent } from 'antd'
import { Stack, Typography, Box } from '@gic/battlefield-ui-pack'
import { formatRelativeNumber } from '@bpd/utils/formatters'
import {
  FlaskIcon,
  StormIcon,
  CertificateIcon,
  HurricaneIcon,
  HouseFloodIcon,
  FireIcon,
} from '@bpd/bpd-web/shared/public'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import {
  BpdCardComponentTypeEnum,
  BpdCardWithThumbnailRow,
  BpdCardWithThumbnailBaseRow,
  BpdIcon,
  BpdLink,
} from '@bpd/bpd-web/shared/ui'
import { ESGPortalRequestPayload } from '@bpd/esg-portal/shared/data-access'
import { THUMBNAIL_BASE, REKI_BASE } from '../constants'

const StyledBox = withTheme(Box)(({ theme }) => ({
  backgroundColor: '#234e52',
  color: theme.palette.common.white,
  width: 23,
  height: 14,
  fontSize: 10,
  borderRadius: '100px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledCaseStudyWrapper = withTheme(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4,
  '&: hover': {
    color: '#047857',
  },
}))

const StyledLink = withTheme(BpdLink)({
  '&& p': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textWrap: 'nowrap',
    justifyContent: 'flex-start',
  },
})

interface UseGetCardProps {
  record: ESGPortalRequestPayload
  onHandleClick: (id: number, event: RadioChangeEvent) => void
}

const useGetCardProps = ({ record, onHandleClick }: UseGetCardProps) => {
  const {
    id,
    propName,
    projId,
    propType,
    projName,
    propNmv,
    stormSurge,
    stormSurgeRr,
    hurricane,
    hurricaneRr,
    inlandFlood,
    inlandFloodRr,
    wildfire,
    wildfireRr,
    greenCert,
    hasCaseStudy,
  } = record

  const thumbnailRow: BpdCardWithThumbnailRow = {
    type: BpdCardComponentTypeEnum.Thumbnail,
    rowConfig: {
      thumbnail: `${THUMBNAIL_BASE}/${id}.png`,
      thumbnailTag: [
        {
          title: upperCase(propType),
        },
      ],
    },
  }

  const baseRow: BpdCardWithThumbnailBaseRow = {
    body: [
      {
        type: BpdCardComponentTypeEnum.Custom,
        rowConfig: {
          customComponent: (
            <Stack pt={'4px'}>
              <StyledLink
                title={`${projId} - ${projName}`}
                href={`${REKI_BASE}/home/p/${projId}/factsheet`}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                sx={{ display: 'flex' }}
              />
              <Typography variant="body2">{`Property NMV USD ${formatRelativeNumber(
                propNmv
              )}`}</Typography>
            </Stack>
          ),
        },
      },
      {
        type: BpdCardComponentTypeEnum.Custom,
        rowConfig: {
          customComponent: (
            <Stack flexDirection={'column'} mt={1} sx={{ gap: '3px' }}>
              <Stack
                flexDirection={'row'}
                justifyContent={'flex-start'}
                alignItems={'center'}
              >
                <Stack
                  flexDirection={'row'}
                  minWidth={100}
                  alignItems={'center'}
                  style={{ gap: 5 }}
                >
                  <BpdIcon icon={<StormIcon />} />
                  <Typography variant="body2">Storm</Typography>
                </Stack>
                <Stack flexDirection={'row'} alignItems={'center'}>
                  <Typography variant="body2">
                    {stormSurge ? (
                      <Stack
                        flexDirection={'row'}
                        sx={{ gap: 1 }}
                        alignItems={'center'}
                      >
                        <StyledBox>{stormSurgeRr}</StyledBox>{' '}
                        {stormSurge || '-'}
                      </Stack>
                    ) : (
                      'No rating'
                    )}
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                flexDirection={'row'}
                justifyContent={'flex-start'}
                alignItems={'center'}
              >
                <Stack flexDirection={'row'} minWidth={100} style={{ gap: 5 }}>
                  <BpdIcon icon={<HurricaneIcon />} />
                  <Typography variant="body2">Hurricane</Typography>
                </Stack>
                <Stack>
                  <Typography variant="body2">
                    {hurricane ? (
                      <Stack
                        flexDirection={'row'}
                        sx={{ gap: 1 }}
                        alignItems={'center'}
                      >
                        <StyledBox>{hurricaneRr}</StyledBox> {hurricane || '-'}
                      </Stack>
                    ) : (
                      'No rating'
                    )}
                  </Typography>
                </Stack>
              </Stack>
              <Stack flexDirection={'row'} justifyContent={'flex-start'}>
                <Stack flexDirection={'row'} minWidth={100} style={{ gap: 5 }}>
                  <BpdIcon icon={<HouseFloodIcon />} />
                  <Typography variant="body2">Inland Flood</Typography>
                </Stack>
                <Stack>
                  <Typography variant="body2">
                    {inlandFlood ? (
                      <Stack
                        flexDirection={'row'}
                        sx={{ gap: 1 }}
                        alignItems={'center'}
                      >
                        <StyledBox>{inlandFloodRr}</StyledBox>{' '}
                        {inlandFlood || '-'}
                      </Stack>
                    ) : (
                      'No rating'
                    )}
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                flexDirection={'row'}
                justifyContent={'flex-start'}
                alignItems={'center'}
              >
                <Stack flexDirection={'row'} minWidth={100} style={{ gap: 5 }}>
                  <BpdIcon icon={<FireIcon />} />
                  <Typography variant="body2">Wildfire</Typography>
                </Stack>
                <Stack>
                  <Typography variant="body2">
                    {wildfire ? (
                      <Stack
                        flexDirection={'row'}
                        sx={{ gap: 1 }}
                        alignItems={'center'}
                      >
                        <StyledBox>{wildfireRr}</StyledBox> {wildfire || '-'}
                      </Stack>
                    ) : (
                      'No rating'
                    )}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          ),
        },
      },
    ],
    footer: [
      {
        type: BpdCardComponentTypeEnum.Custom,
        rowConfig: {
          customComponent: (
            <Stack
              mt={1}
              flexDirection={'row'}
              style={{ gap: 4 }}
              flexWrap={'wrap'}
            >
              {greenCert ? (
                <Stack>
                  <Typography variant="body3" sx={{ fontWeight: 600 }}>
                    <Stack
                      flexDirection={'row'}
                      alignItems={'center'}
                      sx={{ gap: 1 }}
                    >
                      <BpdIcon icon={<CertificateIcon />} />
                      {greenCert}
                    </Stack>
                  </Typography>
                </Stack>
              ) : null}

              {hasCaseStudy ? (
                <Stack>
                  <Typography variant="body3" sx={{ fontWeight: 600 }}>
                    <StyledCaseStudyWrapper
                      onClick={(event) => onHandleClick(id, event)}
                    >
                      <BpdIcon icon={<FlaskIcon />} />
                      Case Study
                    </StyledCaseStudyWrapper>
                  </Typography>
                </Stack>
              ) : null}
            </Stack>
          ),
        },
      },
    ],
  }

  return {
    config: {
      default: {
        id,
        thumbnail: thumbnailRow,
        title: propName,
        rows: baseRow.body,
        footer: baseRow.footer,
      },
    },
  }
}

export default useGetCardProps
