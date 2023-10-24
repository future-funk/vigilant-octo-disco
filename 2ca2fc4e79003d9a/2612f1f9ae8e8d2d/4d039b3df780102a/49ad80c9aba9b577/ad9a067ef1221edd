import { useState } from 'react'
import { RadioChangeEvent } from 'antd'

export interface RadioState<T> {
  value: T
  setValue: React.Dispatch<React.SetStateAction<T>>
  onChange: (event: RadioChangeEvent) => void
}

const useRadioState = <T>(initialValue: T): RadioState<T> => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (event: RadioChangeEvent) => {
    const newValue = event.target.value as T
    setValue(newValue)
  }

  return { value, onChange: handleChange, setValue }
}

export default useRadioState
