import { upperCase, isNil } from 'lodash'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import {
  formatPercent,
  formatNumber,
  formatCurrency,
} from '@bpd/utils/formatters'
import {
  BpdCardWithThumbnailRow,
  BpdCardWithThumbnailBaseRow,
} from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import {
  BpdCardComponentTypeEnum,
  BpdCheckboxConfig,
} from '@bpd/bpd-web/shared/ui'
import { EnvironmentFilled } from '@ant-design/icons'
import { LogisticsResponseDto } from '../data'
import { useGetLegendColors } from '../hooks'

const useGetLogisticsCardProps = (
  record: LogisticsResponseDto,
  checkedList: string[],
  handleCardSelect: BpdCheckboxConfig['onChange'],
  handleCheckBoxClick?: BpdCheckboxConfig['onClick']
) => {
  const {
    cartodbId,
    currency,
    assetType,
    status,
    name,
    address,
    projectId,
    propId,
    projectName,
    totalGlaSqm,
    totalRentPsmPaLcy,
    totalErvPsmPaLcy,
    reversionPotential,
    walb,
    wale,
    occupancy,
    distance,
  } = record

  const thumbnailRow: BpdCardWithThumbnailRow = {
    type: BpdCardComponentTypeEnum.Thumbnail,
    rowConfig: {
      checkbox: {
        name: cartodbId,
        value: checkedList,
        onChange: handleCardSelect,
        onClick: handleCheckBoxClick,
      },
      distance: !isNil(distance) && (
        <>
          {`${distance} km from `}{' '}
          <EnvironmentFilled style={{ marginLeft: '2px' }} />
        </>
      ),
      thumbnail: '',
      thumbnailTag: [
        {
          title: [upperCase(assetType)].toString(),
        },
        {
          title: [upperCase(status)].toString(),
          color: useGetLegendColors({ legend: status }),
        },
      ],
    },
  }

  const baseRow: BpdCardWithThumbnailBaseRow = {
    body: [
      {
        type: BpdCardComponentTypeEnum.Caption,
        rowConfig: { title: address },
      },
      {
        type: BpdCardComponentTypeEnum.Caption,
        rowConfig: {
          title: `${[projectId, propId].join(' ٠ ')} - ${projectName}`,
        },
      },
      {
        type: BpdCardComponentTypeEnum.Custom,
        rowConfig: {
          customComponent: (
            <Stack flexDirection={'column'} mt={1}>
              <Stack flexDirection={'row'} justifyContent={'space-between'}>
                <Typography variant="subtitle3">GLA</Typography>
                <Typography variant="subtitle3">{`${
                  !isNil(totalGlaSqm) ? formatNumber(totalGlaSqm) : '-'
                } sqm`}</Typography>
              </Stack>
              <Stack flexDirection={'row'} justifyContent={'space-between'}>
                <Typography variant="subtitle3">Rents</Typography>
                <Typography variant="subtitle3">{`${
                  !isNil(totalRentPsmPaLcy)
                    ? `${currency} ${formatCurrency(totalRentPsmPaLcy)}`
                    : '-'
                } psm pa`}</Typography>
              </Stack>
              <Stack flexDirection={'row'} justifyContent={'space-between'}>
                <Typography variant="subtitle3">ERV</Typography>
                <Typography variant="subtitle3">{`${
                  !isNil(totalErvPsmPaLcy)
                    ? `${currency} ${formatCurrency(totalErvPsmPaLcy)}`
                    : '-'
                } (${
                  !isNil(reversionPotential)
                    ? formatPercent(reversionPotential)
                    : '-'
                })`}</Typography>
              </Stack>
              <Stack flexDirection={'row'} justifyContent={'space-between'}>
                <Typography variant="subtitle3">WALB/WALE</Typography>
                <Typography variant="subtitle3">{`${
                  !isNil(walb) ? formatNumber(walb, 1) : '-'
                }/${!isNil(wale) ? formatNumber(wale, 1) : '-'}`}</Typography>
              </Stack>
              <Stack flexDirection={'row'} justifyContent={'space-between'}>
                <Typography variant="subtitle3">Occupancy</Typography>
                <Typography variant="subtitle3">{`${
                  !isNil(occupancy) ? formatPercent(occupancy) : '-'
                }`}</Typography>
              </Stack>
            </Stack>
          ),
        },
      },
    ],
    footer: [],
  }

  return {
    config: {
      default: {
        logisticCardProps: {
          thumbnail: thumbnailRow,
          title: name,
          rows: baseRow.body,
          footer: baseRow.footer,
        },
      },
    },
  }
}

export default useGetLogisticsCardProps
