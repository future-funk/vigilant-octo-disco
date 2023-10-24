import { isNil } from 'lodash'
import { BpdCardComponentTypeEnum, BpdCardRow } from '@bpd/bpd-web/shared/ui'
import { formatPercent, formatNumber } from '@bpd/utils/formatters'
import { LogisticsResponseDto } from '../data'

export interface PopupPropsResp {
  title: string
  subTitle?: string
  rows?: BpdCardRow[]
}

const getPopupProps = (record: LogisticsResponseDto) => {
  const { name, projectName, occupancy, totalRentPsmPaLcy } = record

  return {
    title: name,
    subTitle: projectName,
    rows: [
      {
        type: BpdCardComponentTypeEnum.LabelValue,
        rowConfig: {
          valueRowItems: [
            {
              label: `Occupancy`,
              value: !isNil(occupancy) ? `${formatPercent(occupancy)}` : '-',
            },
            {
              label: `Rents`,
              value: !isNil(totalRentPsmPaLcy)
                ? `${formatNumber(totalRentPsmPaLcy)} psm pa`
                : '-',
            },
          ],
        },
      },
    ],
  }
}

export default getPopupProps
