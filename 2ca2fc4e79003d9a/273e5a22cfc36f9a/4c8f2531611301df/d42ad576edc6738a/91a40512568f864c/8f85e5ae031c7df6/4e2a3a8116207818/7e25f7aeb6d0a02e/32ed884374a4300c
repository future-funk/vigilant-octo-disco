import { CalendarOutlined, HourglassOutlined } from '@ant-design/icons'
import { DealDto } from '@bpd/bpd-web/investment-process/shared/data-access'
import { ApartmentIcon } from '@bpd/bpd-web/shared/public'
import {
  createIconRowModalComponent,
  IconRowModalComponentInterface,
} from '@bpd/bpd-web/shared/ui'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import dayjs from 'dayjs'
import { FC } from 'react'

export interface ModalTitleProps {
  data: DealDto
}

const ModalTitle: FC<ModalTitleProps> = (props) => {
  const { data } = props
  const { name, sector, status, vintageDt } = data

  const items: IconRowModalComponentInterface[] = [
    {
      icon: <CalendarOutlined />,
      title: dayjs(vintageDt).format('DD MMM YYYY').toString(),
    },
    { icon: <ApartmentIcon />, title: sector },
    { icon: <HourglassOutlined />, title: status },
  ]

  return (
    <Stack spacing={0.5}>
      <Typography
        variant="subtitle1"
        sx={{ fontSize: '20px', color: 'text.modal' }}
      >
        {name}
      </Typography>
      {createIconRowModalComponent(items, 'text.secondary')}
    </Stack>
  )
}

export default ModalTitle
