import {
  Box,
  Card,
  CardProps,
  Stack,
  Typography,
  TypographyProps,
  Image,
} from '@gic/battlefield-ui-pack'
import { FC } from 'react'
import { Link } from 'react-router-dom'

export interface KnowledgeCardProps extends CardProps {
  src?: string
  href?: string
  title: string
  subtitle?: string
  tags?: Array<{ key: string; title: string }>
  titleProps?: TypographyProps
  externalLink?: string
}

const KnowledgeCard: FC<KnowledgeCardProps> = (props) => {
  const {
    titleProps,
    href,
    src,
    title,
    subtitle,
    tags,
    sx,
    externalLink,
    ...rest
  } = props

  const renderedTitle = (
    <Typography variant="subtitle1" {...titleProps}>
      {title}
    </Typography>
  )

  return (
    <Card
      size="small"
      disableBorder
      disableBodyPadding
      stretch
      sx={{ border: 0, borderRadius: 1, marginRight: '16px' }}
      {...rest}
    >
      {/* Image */}
      <Image
        src={src}
        sx={{ width: '100%', height: 160, objectFit: 'cover' }}
      />

      {/* Text */}
      <Stack justifyContent="space-between" sx={{ height: '100%', p: 2 }}>
        {/* Headings */}
        <Stack sx={{ mt: 1 }} spacing={0.5}>
          {href && <Link to={href}>{renderedTitle}</Link>}
          {externalLink && (
            <a href={externalLink} target="_blank" rel="noreferrer">
              {renderedTitle}
            </a>
          )}
          {!href && !externalLink && renderedTitle}
          {subtitle && <Typography variant="body2">{subtitle}</Typography>}
        </Stack>
        <Box sx={{ mt: 1 }}>
          {/* Tags */}
          {Boolean(tags?.length) && (
            <Stack
              direction="row"
              spacing={1}
              sx={{ flexFlow: 'wrap', gap: '0 8px' }}
            >
              {tags?.map((tag) => {
                const { key, title } = tag
                return (
                  <Typography key={key} variant="link" color="primary.main">
                    #{title}
                  </Typography>
                )
              })}
            </Stack>
          )}
        </Box>
      </Stack>
    </Card>
  )
}

export default KnowledgeCard
