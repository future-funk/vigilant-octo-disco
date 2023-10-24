import { useState } from 'react'
import { CardViewType } from '../types'
import { CARD_VIEW_TYPE } from '../constants'
import { RadioChangeEvent } from 'antd'

export interface CardViewTypeState {
  type: CardViewType
  toggleType: (event: RadioChangeEvent) => void
}

const useCardViewType = (initialType: CardViewType): CardViewTypeState => {
  const [type, setType] = useState(initialType)

  const toggleType = (event: RadioChangeEvent) => {
    setType(
      type === CARD_VIEW_TYPE.TABLE
        ? CARD_VIEW_TYPE.CHART
        : CARD_VIEW_TYPE.TABLE
    )
  }

  return { type, toggleType }
}

export default useCardViewType
