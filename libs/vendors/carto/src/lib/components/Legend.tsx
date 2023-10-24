import { SxProps } from '@mui/system'
import { withTheme } from '@bpd/bpd-web/shared/theme'
import { updateLayer } from '@carto/react-redux'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { findKey, get, has, omit, some, values, pick, chain } from 'lodash'
import { FC, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useCartoSelector } from '../hooks'
import { getCartoLayers } from '../stores/createCartoSlice'
import { Layer, LegendData } from '../types'
import LegendItem from './LegendItem'
import LegendItemCheckable from './LegendItemCheckable'

export interface LegendProps {
  checkable?: boolean
  title?: string
  displayIntent?: string[] //ignore hide values and take only this.
  hide?: string[] // show all except hide list
  sx?: SxProps
}

export const StyledLegendContainer = withTheme(Stack)(({ theme }) => ({
  background: 'white',
  borderRadius: theme.spacing(0.5),
  boxShadow: '0 0 10px rgb(0 0 0 / 10%)',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 2,
}))

const StyledTitle = withTheme(Typography)({
  fontWeight: 600,
})

const Legend: FC<LegendProps> = (props) => {
  const { checkable, title, sx, displayIntent, hide = [] } = props

  const dispatch = useDispatch()

  const layers: Record<string, Layer> = useCartoSelector((state) =>
    displayIntent
      ? pick(getCartoLayers(state), displayIntent)
      : omit(getCartoLayers(state), hide)
  )

  const legends: Record<string, LegendData> = chain(layers).values().filter({ visible: true }).reduce(
    (result, layer) => ({ ...result, ...layer?.legend }),
    {}
  ).value()

  const isVisible = checkable || some(values(legends), { visible: true })

  const handleChange = (visible: boolean, id: string) => {
    const layerId = findKey(layers, (layer) => has(layer.legend, id))!
    const layerLegend = get(layers, [layerId, 'legend'])
    const layerLegendItem = get(layerLegend, id)

    dispatch(
      updateLayer({
        id: layerId,
        layerAttributes: {
          legend: { ...layerLegend, [id]: { ...layerLegendItem, visible } },
        },
      })
    )
  }

  return isVisible ? (
    <StyledLegendContainer sx={sx}>
      {title && <StyledTitle variant="body3">{title}</StyledTitle>}
      {values(legends).map((legend) => (
        <Fragment key={legend.label}>
          {checkable ? (
            <LegendItemCheckable {...legend} onChange={handleChange} />
          ) : (
            legend.visible && <LegendItem {...legend} />
          )}
        </Fragment>
      ))}
    </StyledLegendContainer>
  ) : null
}

export default Legend
