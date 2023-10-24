import { Typography } from '@gic/battlefield-ui-pack'
import { map } from 'lodash'
import { ReactElement } from 'react'

interface NotesProps {
  list: (string | ReactElement)[]
}

const Notes = (props: NotesProps) => {
  const { list } = props

  return (
    <ul style={{ paddingLeft: 16 }}>
      {map(list, (msg, index) => (
        <li style={{ margin: '8px auto' }} key={`note-${index}`}>
          <Typography variant="body2">{msg}</Typography>
        </li>
      ))}
    </ul>
  )
}
export default Notes
