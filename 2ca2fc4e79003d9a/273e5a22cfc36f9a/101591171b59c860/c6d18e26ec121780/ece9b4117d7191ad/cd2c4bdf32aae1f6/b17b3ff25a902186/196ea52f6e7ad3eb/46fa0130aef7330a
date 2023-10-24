import { BpdSpinner, FormElement } from '@bpd/bpd-web/shared/ui'
import { DawBlueprintApiQueries } from '@bpd/daw/shared/data-access'
import { Box, Tooltip } from '@gic/battlefield-ui-pack'
import { last, snakeCase, some, toPath } from 'lodash'
import { FC, ReactElement } from 'react'
import { useAppPalette } from '@bpd/bpd-web/shared/theme'
import { parseString } from '@bpd/vendors/html-react-parser'

export interface DealAsyncTooltipHeaderProps {
  header?: ReactElement
  uiField: Omit<FormElement, 'title' | 'componentProps'>
}

const DealAsyncTooltipHeader: FC<DealAsyncTooltipHeaderProps> = ({
  header,
  uiField: { key, props },
}) => {
  const palette = useAppPalette()

  const { asyncTooltip, tooltipId: configuredTooltipId } = props ?? {}

  const tooltipId = configuredTooltipId || last(toPath(key))

  const [getTooltip, { data, isFetching }] =
    DawBlueprintApiQueries.useLazyGetTooltip()

  const onMouseEnter = () => {
    if (!some([!asyncTooltip, !tooltipId])) {
      getTooltip({ tooltipId: snakeCase(tooltipId) }, true)
    }
  }

  if (!asyncTooltip || !tooltipId) return <>{header}</>

  return (
    <>
      <Tooltip
        color="white"
        overlayInnerStyle={{
          color: palette.common.black,
        }}
        title={isFetching ? <BpdSpinner /> : <>{parseString(data?.content)}</>}
        trigger="hover"
        placement="topLeft"
        mouseEnterDelay={1}
        //gic-battle-field type issue
        // eslint-disable-next-line
        // @ts-ignore
        onMouseEnter={onMouseEnter}
      >
        <Box>{header}</Box>
      </Tooltip>
    </>
  )
}

export default DealAsyncTooltipHeader
