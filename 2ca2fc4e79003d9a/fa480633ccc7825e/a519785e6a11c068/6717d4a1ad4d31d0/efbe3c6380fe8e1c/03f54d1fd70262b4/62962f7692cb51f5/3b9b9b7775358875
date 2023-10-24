import { ReactNode } from 'react'
import dayjs from 'dayjs'
import { FC } from 'react'

import { getDateFromQuarterString, generateYearQuarterMarks } from './utils'
import YearRangeSlider, { YearRangeSliderProps } from './YearRangeSlider'

interface YearQuarterSliderProps extends YearRangeSliderProps {
  children?: ReactNode
}

const YearQuarterSlider: FC<YearQuarterSliderProps> = (props) => {
  const formatQuarter = (date: dayjs.Dayjs) =>
    `${date.year()} Q${date.quarter()}`
  return (
    <YearRangeSlider
      {...props}
      {...{
        labelFormat: formatQuarter,
        getDateFromFormatString: getDateFromQuarterString,
        generateMarks: generateYearQuarterMarks,
      }}
    />
  )
}

export default YearQuarterSlider
