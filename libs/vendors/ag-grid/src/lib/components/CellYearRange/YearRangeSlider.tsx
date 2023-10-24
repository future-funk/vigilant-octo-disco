import { ReactNode } from 'react'
import dayjs from 'dayjs'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import { at, findIndex, map, get } from 'lodash'
import { FC, useEffect, useState } from 'react'

import CellRange from '../CellRange'
import { SliderRangeProps } from 'antd/lib/slider'
import { SliderMark } from './utils'
dayjs.extend(quarterOfYear)

type RangeType = [dayjs.ConfigType, dayjs.ConfigType]
export interface YearRangeSliderProps {
  availRange: RangeType
  value: RangeType
  onChange?: (value: [string, string]) => void
  onAfterChange?: (value: [string, string]) => void | Promise<any>
  children?: ReactNode
  isLoading?: boolean
  sliderProps?: SliderRangeProps
  disabledMax?: boolean
  disabledMin?: boolean
  titleFormat?: (title: string) => string
}

const YearRangeSlider: FC<
  YearRangeSliderProps & {
    labelFormat: (date: dayjs.Dayjs) => string
    getDateFromFormatString: (formatted: string) => string
    generateMarks: (
      min: dayjs.ConfigType,
      max: dayjs.ConfigType
    ) => SliderMark[]
  }
> = ({
  availRange: [minAvailD, maxAvailD],
  value: [propsSelectedStartD, propsSelectedEndD],
  onChange,
  onAfterChange,
  children: childrenToRender,
  disabledMax = false,
  disabledMin = false,
  labelFormat,
  getDateFromFormatString,
  generateMarks,
  titleFormat,
  ...rest
}) => {
  const [selectedStartD, setSelectedStartD] = useState(propsSelectedStartD)
  const [selectedEndD, setSelectedEndD] = useState(propsSelectedEndD)

  const marks = generateMarks(minAvailD, maxAvailD)

  useEffect(() => {
    setSelectedStartD(propsSelectedStartD)
  }, [propsSelectedStartD])

  useEffect(() => {
    setSelectedEndD(propsSelectedEndD)
  }, [propsSelectedEndD])

  const selectedMarksInx = map([selectedStartD, selectedEndD], (date) => {
    return findIndex(marks, { label: labelFormat(dayjs(date)) })
  })

  const _getDateFromFormatString = ([nextStart, nextEnd]: [number, number]) => {
    return map([nextStart, nextEnd], (index) =>
      getDateFromFormatString(get(marks, `[${index}].label`)!)
    )
  }
  const handleOnChange = (newRange: [number, number]) => {
    const [nextStartD, nextEndD] = _getDateFromFormatString(newRange)
    !disabledMin && setSelectedStartD(nextStartD)
    !disabledMax && setSelectedEndD(nextEndD)
    onChange?.([nextStartD, nextEndD])
  }

  const handleOnAfterChange = (newRange: [number, number]) => {
    const [nextStartD, nextEndD] = _getDateFromFormatString(newRange)
    onAfterChange?.([nextStartD, nextEndD])
  }

  const newValue = selectedMarksInx as [number, number]

  let title = at(marks, selectedMarksInx)
    .map((mark) => mark?.label)
    .join(' - ')

  title = titleFormat?.(title) || title

  return (
    <CellRange
      min={0}
      minLabel={marks?.[0]?.label}
      max={marks.length - 1}
      maxLabel={marks?.[marks.length - 1]?.label}
      step={1}
      title={title}
      value={newValue}
      onChange={handleOnChange}
      onAfterChange={handleOnAfterChange}
      disabledMax={disabledMax}
      disabledMin={disabledMin}
      {...rest}
    >
      {childrenToRender}
    </CellRange>
  )
}

export default YearRangeSlider
