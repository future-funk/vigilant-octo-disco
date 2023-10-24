import { Stack } from '@gic/battlefield-ui-pack'
import { ReactElement } from 'react'
import {
  Directory,
  DIRECTORY_CARD_TAG_COLORS,
} from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import {
  BpdCardComponentTypeEnum,
  BpdCardRow,
  BpdCardRowConfig,
} from '@bpd/bpd-web/shared/ui'
import dayjs from 'dayjs'
import { upperCase, isNil, lowerCase, startCase, capitalize } from 'lodash'
import {
  formatCurrency,
  formatPercent,
  formatRelativeNumber,
  formatNumber,
} from '@bpd/utils/formatters'
import { EnvironmentFilled } from '@ant-design/icons'
import { THUMBNAIL_BASE } from '../constants'

export interface BpdCardWithThumbnailRow extends Pick<BpdCardRow, 'type'> {
  rowConfig?: BpdCardRowConfig
}

export interface BpdCardWithThumbnailBaseRow {
  body: BpdCardWithThumbnailRow[]
  footer: BpdCardWithThumbnailRow[]
}

export const useGetDirectoryCardProps = ({ item }: { item: Directory }) => {
  const {
    propName,
    propAddress,
    propType,
    dealSeller,
    dealTradeCloseBuyer,
    dealTradeCloseDt,
    propUom,
    projCurr,
    dealTradeClosePrice,
    bpCapRate,
    distance,
    projName,
    projId,
    projFwdLvgIrr,
    propValuationCurr,
    bpValuation,
    bpValuationPuom,
    source,
    bpInvStatus,
    propNra,
    propWaleAreaYr,
    dealAreaUom,
    propThumbnailUrl,
    assetName,
    gfaSqm,
    currentOccupancy,
    passingNerDay,
    dealName,
    city,
    cityTier,
    assetType,
    developmentStage,
    devCompletionDate,
  } = item ?? {}

  const thumbnailRow: BpdCardWithThumbnailRow = {
    type: BpdCardComponentTypeEnum.Thumbnail,
    rowConfig: {
      thumbnail: `${THUMBNAIL_BASE}/${propThumbnailUrl}`,
      distance: !isNil(distance) && (
        <>
          {`${distance} miles from `} <EnvironmentFilled />
        </>
      ),
      thumbnailTag: [
        {
          title: !isNil(propType) && upperCase(propType),
          color:
            !isNil(propType) && DIRECTORY_CARD_TAG_COLORS[upperCase(propType)],
        },
      ],
      thumbnailTitle: bpInvStatus === 'Market' ? 'Market Deal' : null,
    },
  }

  const cnThumbnailRow: BpdCardRow = {
    type: BpdCardComponentTypeEnum.Thumbnail,
    rowConfig: {
      thumbnail: `${THUMBNAIL_BASE}/${propThumbnailUrl}`,
      distance: !isNil(distance) && (
        <>
          {`${distance} miles from `} <EnvironmentFilled />
        </>
      ),
      thumbnailTag: [
        {
          title: capitalize(developmentStage),
          color: null,
        },
        {
          title: devCompletionDate ? `${
            lowerCase(developmentStage) === 'completed' ? `` : `Est.`
          } ${`Completed on ${devCompletionDate}`}` : null,
          color: null,
        },
      ],
    },
  }

  const BaseRow: BpdCardWithThumbnailBaseRow = {
    body: [
      {
        type: BpdCardComponentTypeEnum.Caption,
        rowConfig: { title: propAddress },
      },
      {
        type: BpdCardComponentTypeEnum.Caption,
        rowConfig: {
          title: !isNil(propNra)
            ? `NLA ${formatNumber(propNra)} 
          ${!isNil(dealAreaUom) ? lowerCase(dealAreaUom) : ''} 
          ${!isNil(propWaleAreaYr) ? `WALE ${propWaleAreaYr}` : ''}`
            : '',
        },
      },
      {
        type: BpdCardComponentTypeEnum.Transaction,
        rowConfig: {
          seller: dealSeller,
          buyer: dealTradeCloseBuyer,
          transactionDate: dayjs(dealTradeCloseDt)
            .format('MMM YYYY')
            .toString(),
        },
      },
    ],
    footer: [
      {
        type: BpdCardComponentTypeEnum.Divider,
      },
      {
        type: BpdCardComponentTypeEnum.ValueRow,
        rowConfig: {
          valueRowItems: [
            {
              label: `Price (${projCurr ?? '-'})`,
              value: !isNil(dealTradeClosePrice)
                ? formatRelativeNumber(dealTradeClosePrice)
                : '-',
              width: '50px',
              align: 'center',
            },
            {
              label: `${propUom ?? 'PUOM'}`,
              value: !isNil(bpValuationPuom)
                ? formatNumber(bpValuationPuom)
                : '-',
              width: '50px',
              align: 'center',
            },
            {
              label: `Cap Rate`,
              value: !isNil(bpCapRate) ? formatPercent(bpCapRate) : '-',
              width: '50px',
              align: 'center',
            },
          ],
        },
      },
    ],
  }

  const OwnedRow: BpdCardWithThumbnailBaseRow = {
    body: [
      {
        type: BpdCardComponentTypeEnum.Custom,
        rowConfig: { title: `${projName} (${projId ? projId : '-'})` },
      },
      {
        type: BpdCardComponentTypeEnum.DateRow,
        rowConfig: {
          dateRowItems: [
            {
              label: `Forward IRR (Last SAP) ${
                projFwdLvgIrr
                  ? ` As of ${dayjs(projFwdLvgIrr).format('MMM YYYY')}`
                  : '-'
              }`,
            },
          ],
        },
      },
    ],
    footer: [
      {
        type: BpdCardComponentTypeEnum.Divider,
      },
      {
        type: BpdCardComponentTypeEnum.ValueRow,
        rowConfig: {
          valueRowItems: [
            {
              label: `Valuation ${propValuationCurr ?? ''}`,
              value: bpValuation ? formatRelativeNumber(bpValuation) : '-',
              align: 'center',
              width: '50px',
            },
            {
              label: `${propUom ?? 'PUOM'}`,
              value: bpValuationPuom ? formatNumber(bpValuationPuom) : '-',
              align: 'center',
              width: '50px',
            },
            {
              label: `Cap Rate`,
              value: bpCapRate ? formatPercent(bpCapRate) : '-',
              align: 'center',
              width: '50px',
            },
          ],
        },
      },
    ],
  }

  const euBaseRow: BpdCardWithThumbnailBaseRow = {
    body: [
      {
        type: BpdCardComponentTypeEnum.Caption,
        rowConfig: { title: propAddress },
      },
      {
        type: BpdCardComponentTypeEnum.Caption,
        rowConfig: {
          title: !isNil(propNra)
            ? `NLA ${formatNumber(propNra)} 
          ${!isNil(dealAreaUom) ? lowerCase(dealAreaUom) : ''} 
          ${!isNil(propWaleAreaYr) ? `WALE ${propWaleAreaYr}` : ''}`
            : '',
        },
      },
      {
        type: BpdCardComponentTypeEnum.Transaction,
        rowConfig: {
          seller: dealSeller,
          buyer: dealTradeCloseBuyer,
          transactionDate: dayjs(dealTradeCloseDt)
            .format('MMM YYYY')
            .toString(),
        },
      },
    ],
    footer: [
      {
        type: BpdCardComponentTypeEnum.Divider,
      },
      {
        type: BpdCardComponentTypeEnum.ValueRow,
        rowConfig: {
          valueRowItems: [
            {
              label: `Price (${projCurr ?? '-'})`,
              value: !isNil(dealTradeClosePrice)
                ? formatRelativeNumber(dealTradeClosePrice)
                : '-',
              width: '50px',
              align: 'center',
            },
            {
              label: 'PUOM',
              value: !isNil(bpValuationPuom)
                ? formatNumber(bpValuationPuom)
                : '-',
              width: '50px',
              align: 'center',
            },
            {
              label: `Cap Rate`,
              value: !isNil(bpCapRate) ? formatPercent(bpCapRate) : '-',
              width: '50px',
              align: 'center',
            },
          ],
        },
      },
    ],
  }

  const euOwnedRow: BpdCardWithThumbnailBaseRow = {
    body: [
      {
        type: BpdCardComponentTypeEnum.Custom,
        rowConfig: { title: `${projName} (${projId ? projId : '-'})` },
      },
      {
        type: BpdCardComponentTypeEnum.DateRow,
        rowConfig: {
          dateRowItems: [
            {
              label: `Forward IRR (Last SAP) ${
                projFwdLvgIrr
                  ? ` As of ${dayjs(projFwdLvgIrr).format('MMM YYYY')}`
                  : '-'
              }`,
            },
          ],
        },
      },
      {
        type: BpdCardComponentTypeEnum.Divider,
      },
    ],
    footer: [
      {
        type: BpdCardComponentTypeEnum.ValueRow,
        rowConfig: {
          valueRowItems: [
            {
              label: `Valuation ${propValuationCurr ?? ''}`,
              value: bpValuation ? formatCurrency(bpValuation) : '-',
              align: 'center',
              width: '50px',
            },
            {
              label: `${'PUOM'}`,
              value: bpValuationPuom ? formatCurrency(bpValuationPuom) : '-',
              align: 'center',
              width: '50px',
            },
            {
              label: `Cap Rate`,
              value: bpCapRate ? formatPercent(bpCapRate) : '-',
              align: 'center',
              width: '50px',
            },
          ],
        },
      },
    ],
  }

  const cnBaseRow: BpdCardWithThumbnailBaseRow = {
    body: [
      {
        type: BpdCardComponentTypeEnum.Custom,
        rowConfig: {
          customComponent: (
            <Stack>
              {[
                startCase(dealName),
                startCase(city),
                cityTier,
                startCase(assetType),
              ].join(' ٠ ')}
            </Stack>
          ),
        },
      },
    ],
    footer: [
      {
        type: BpdCardComponentTypeEnum.Divider,
      },
      {
        type: BpdCardComponentTypeEnum.ValueRow,
        rowConfig: {
          valueRowItems: [
            {
              label: `GFA (sqm)`,
              value: gfaSqm ? formatCurrency(gfaSqm) : '-',
              align: 'center',
              width: '100%',
            },
            {
              label: `Occupancy`,
              value: currentOccupancy ? formatPercent(currentOccupancy) : '-',
              align: 'center',
              width: '100%',
            },
            {
              label: `NER (psm pd)`,
              value: passingNerDay ? formatRelativeNumber(passingNerDay, 2) : '-',
              align: 'center',
              width: '100%',
            },
          ],
        },
      },
    ],
  }

  const usMarketCardProps = {
    thumbnail: thumbnailRow,
    title: propName,
    source: source,
    rows: BaseRow.body,
    footer: BaseRow.footer,
  }

  const usOwnedCardProps = {
    thumbnail: thumbnailRow,
    title: propName,
    source: source,
    rows: OwnedRow.body,
    footer: OwnedRow.footer,
  }

  const euMarketCardProps = {
    thumbnail: thumbnailRow,
    title: propName,
    source: source,
    rows: euBaseRow.body,
    footer: euBaseRow.footer,
  }

  const euOwnedCardProps = {
    thumbnail: thumbnailRow,
    title: propName,
    source: source,
    rows: euOwnedRow.body,
    footer: euOwnedRow.footer,
  }

  const cnMarketCardProps = {
    thumbnail: cnThumbnailRow,
    title: assetName,
    source: capitalize(developmentStage),
    rows: cnBaseRow.body,
    footer: cnBaseRow.footer,
  }

  return {
    config: {
      default: {
        marketCardProps: usMarketCardProps,
        holdingCardProps: usOwnedCardProps,
      },
      eu: {
        marketCardProps: euMarketCardProps,
        holdingCardProps: euOwnedCardProps,
      },
      cn: {
        marketCardProps: cnMarketCardProps,
      },
    },
  }
}
