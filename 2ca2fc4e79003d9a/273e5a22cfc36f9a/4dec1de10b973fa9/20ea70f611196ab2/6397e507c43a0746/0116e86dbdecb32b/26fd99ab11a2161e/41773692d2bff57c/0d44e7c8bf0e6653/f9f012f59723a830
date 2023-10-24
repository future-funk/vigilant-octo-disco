import { ReactElement } from 'react'
import {
  Directory,
  MARKET,
} from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { TEAMS } from '@bpd/bpd-web/shared/config'
import { capitalize } from 'lodash'
import { formatNumber, formatPercent } from '@bpd/utils/formatters'
import {
  BpdCardComponentTypeEnum,
  BpdCardRow,
  BpdLink,
} from '@bpd/bpd-web/shared/ui'

export interface PopupPropsResp {
  title: string | ReactElement
  subTitle?: string
  rows?: BpdCardRow[]
}

export const getPopupProps = ({
  item,
  team,
  onClickFn,
}: {
  item: Directory
  team: string
  onClickFn?: (item: Directory) => void
}): PopupPropsResp => {
  const {
    assetName,
    bpName,
    propType,
    developmentStage,
    gfaSqm,
    currentOccupancy,
    passingNerDay,
    propName,
    type,
  } = item

  if (team === TEAMS.CN) {
    const popupBody: BpdCardRow[] = [
      {
        type: BpdCardComponentTypeEnum.LabelValue,
        rowConfig: {
          valueRowItems: [
            {
              label: `Development Stage`,
              value: developmentStage ? capitalize(developmentStage) : '-',
            },
            {
              label: `GFA (SQM)`,
              value: gfaSqm ? formatNumber(gfaSqm) : '-',
            },
            {
              label: `Occupancy`,
              value: currentOccupancy ? formatPercent(currentOccupancy) : '-',
            },
            {
              label: `Net Effective Rent`,
              value: passingNerDay ? formatNumber(passingNerDay, 2) : '-',
            },
          ],
        },
      },
    ]

    return {
      title: onClickFn ? (
        <BpdLink title={assetName} onClick={() => onClickFn(item)}>
          {assetName}
        </BpdLink>
      ) : (
        assetName
      ),
      rows: popupBody,
    }
  }

  return {
    title: type === MARKET ? bpName : propName,
    subTitle: propType ?? 'n/a',
  }
}
