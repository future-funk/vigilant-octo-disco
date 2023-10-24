import { FC, useEffect } from 'react'
import { map, some, join, split, isEmpty, filter } from 'lodash'
import {
  BpdTagSelect,
  BpdTagSelectProps,
  FieldProps,
} from '@bpd/bpd-web/shared/ui'
import { SearchOutlined } from '@ant-design/icons'
import {
  DawBlueprintApiQueries,
  DawUiSelectors,
  Participant as BaseParticipant,
} from '@bpd/daw/shared/data-access'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { useSelectedValuesWithDeletion } from '../../../hooks'

type Participant = BaseParticipant & { id?: number; isDeleted?: boolean }

export interface RpoSelectWidgetProps
  extends Omit<BpdTagSelectProps, 'onChange'>,
    FieldProps {
  onChange: (values: Participant[] | null) => void
}

const encodedValue = (participant: Participant) =>
  join(
    [participant.roleType, participant.roleOption, participant.displayName],
    '|'
  )

const decodedValue = (value: string) => {
  const [roleType, roleOption, displayName] = split(value, '|')
  return {
    roleType,
    roleOption,
    displayName,
  }
}

const RpoSelectWidget: FC<RpoSelectWidgetProps> = ({
  uiField,
  input,
  value,
  onChange,
  ...componentProps
}) => {
  const team = useAppSelector(DawUiSelectors.getTeam)

  const { data, isLoading, isFetching } =
    DawBlueprintApiQueries.useGetSearchParticipants(
      {
        team,
        roleCode: 'RPO',
      },
      { skip: some([!team]) }
    )

  useEffect(() => {
    if (!data || !isEmpty(value)) return
    const defaultSelectedValue = filter(data, { isPreSelected: true })
    onChange(defaultSelectedValue)
  }, [data])

  const [formattedValues, handleOnChange] =
    useSelectedValuesWithDeletion<Participant>({
      values: value,
      encode: encodedValue,
      decode: decodedValue,
      onChange,
    })

  return (
    <BpdTagSelect
      suffixIcon={<SearchOutlined />}
      {...componentProps}
      {...{
        options:
          isLoading || isFetching
            ? [{ label: 'Loading...', value: '', disabled: true }]
            : map(data || value || [], (participant: BaseParticipant) => ({
                label: participant.displayName,
                value: encodedValue(participant),
                key: encodedValue(participant),
              })),
      }}
      value={formattedValues}
      onChange={handleOnChange}
    />
  )
}
export default RpoSelectWidget
