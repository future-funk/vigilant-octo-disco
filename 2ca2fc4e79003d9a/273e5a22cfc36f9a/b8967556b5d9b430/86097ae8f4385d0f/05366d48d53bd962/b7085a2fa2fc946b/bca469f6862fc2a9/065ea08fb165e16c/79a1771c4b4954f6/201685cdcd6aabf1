import { Box, Stack, Tooltip, Typography } from '@gic/battlefield-ui-pack'
import { BpdIcon } from '@bpd/bpd-web/shared/ui'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { useAppTheme } from '@bpd/bpd-web/shared/theme'
import { ReactElement } from 'react'

interface ListItemProps {
  header?: string | null
  value?: string | number | null | ReactElement
  tooltip?: string | null
  icon?: ReactElement | null
  noDivider?: boolean
}

export const ListItem = (props: ListItemProps) => {
  const { header, value, tooltip, icon, noDivider = false } = props
  const { palette, typography } = useAppTheme()

  return (
    <Stack
      direction="row"
      sx={{
        borderRight: !noDivider ? '1px solid rgba(0, 0, 0, 0.06)' : 'unset',
      }}
    >
      {icon && (
        <Stack justifyContent={'center'} sx={{ mr: 1 }}>
          <BpdIcon icon={icon} style={{ color: palette.null.main }} />
        </Stack>
      )}

      <Stack sx={{ textAlign: 'left' }}>
        <Stack direction="row" alignItems={'center'}>
          <Typography variant="body3" color="null.main">
            {header}
          </Typography>
          {tooltip && (
            <Tooltip placement="topRight" title={tooltip}>
              <BpdIcon
                icon={
                  <QuestionCircleOutlined
                    style={{
                      fontSize: 14,
                      color: palette.null.main,
                      marginLeft: '4px',
                    }}
                  />
                }
              />
            </Tooltip>
          )}
        </Stack>
        <Stack>
          <Box
            sx={{
              ...typography.body2,
              color: 'text.secondary',
              fontWeight: 600,
            }}
          >
            {value}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  )
}
export default ListItem
