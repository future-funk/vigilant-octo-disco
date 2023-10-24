import { BpdHorizontalDivider } from '@bpd/bpd-web/shared/ui'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { get, isArray, isEmpty, isObject, keys, map } from 'lodash'
import { FC } from 'react'

interface ContentEntryProps {
  values: string[] | Array<object>
  title: string
}

const renderList = (values: string[]) => {
  return (
    <ul>
      {' '}
      {map(values || [], (subValue) => (
        <li>{subValue}</li>
      ))}
    </ul>
  )
}

const ContentEntry: FC<ContentEntryProps> = ({ values, title }) => {
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
        map(values, (value) => {
          if (isObject(value)) {
            return keys(value).map((key) => {
              const subValue = get(value, key)
              if (isArray(subValue)) {
                return renderList(subValue)
              }

              return <Typography variant="body2">{subValue}</Typography>
            })
          }
          if (isArray(value)) {
            return renderList(value)
          }
          return <Typography variant="body2">{value}</Typography>
        })}
      <BpdHorizontalDivider />
    </Stack>
  )
}

export default ContentEntry
