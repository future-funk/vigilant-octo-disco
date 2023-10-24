import { ReactNode } from 'react'
import dayjs from 'dayjs'
import { FC } from 'react'

import { getDateFromYearString, generateYrMarks } from './utils'
import YearRangeSlider, { YearRangeSliderProps } from './YearRangeSlider'

interface YearSliderProps extends YearRangeSliderProps {
  children?: ReactNode
}

const YearSlider: FC<YearSliderProps> = (props) => {
  const formatYear = (date: dayjs.Dayjs) => `${date.year()}`
  return (
    <YearRangeSlider
      {...props}
      {...{
        labelFormat: formatYear,
        getDateFromFormatString: getDateFromYearString,
        generateMarks: generateYrMarks,
      }}
    />
  )
}

export default YearSlider
