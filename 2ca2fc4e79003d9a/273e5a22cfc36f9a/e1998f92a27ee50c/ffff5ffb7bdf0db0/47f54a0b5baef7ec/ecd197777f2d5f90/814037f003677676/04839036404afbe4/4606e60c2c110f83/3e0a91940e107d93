import { BpdHorizontalDivider } from '@bpd/bpd-web/shared/ui'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { get, isArray, isEmpty, isObject, keys, map } from 'lodash'
import { FC } from 'react'

interface ContentEntryProps {
  values: string[] | Array<object>
  title: string
}

interface Content {
  style?: object
  text?: string
  data: string | Array<object>
}
const ResearchContentEntry: FC<ContentEntryProps> = ({ values, title }) => {
  if (isEmpty(values)) {
    return null
  }

  return (
    <Stack style={{ gap: '4px' }}>
      {title && (
        <Typography variant="h4" sx={{ margin: '16px 0px' }}>
          {title}
        </Typography>
      )}
      {isArray(values) &&
        map(values, (value: Content) => {
          const { style = {}, data } = value
          if (isObject(data)) {
            if (isArray(data)) {
              return (
                <p style={{ margin: 0 }}>
                  {' '}
                  {data.map(({ text, style }: Content) => (
                    <span style={style}>{text}</span>
                  ))}
                </p>
              )
            }
            return keys(data).map((key) => {
              const subValue = get(data, key)
              return <Typography variant="body4">{subValue}</Typography>
            })
          }
          return (
            <Typography variant="body4" sx={style}>
              {data}
            </Typography>
          )
        })}
      <BpdHorizontalDivider />
    </Stack>
  )
}

export default ResearchContentEntry
