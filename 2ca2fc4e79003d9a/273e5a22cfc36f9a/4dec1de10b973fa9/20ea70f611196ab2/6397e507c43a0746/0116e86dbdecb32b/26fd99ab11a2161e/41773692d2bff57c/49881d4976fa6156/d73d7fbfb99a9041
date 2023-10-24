import { BpdAutoComplete, BpdIcon } from '@bpd/bpd-web/shared/ui'
import { Stack, Typography } from '@gic/battlefield-ui-pack'
import { SearchOutlined } from '@ant-design/icons'
import {
  useGetPlacePredictionsQuery,
  useGetGeoCodeQuery,
  selectLocation,
} from '@bpd/vendors/google-maps'
import { FC, useState, useMemo, useEffect, ReactElement } from 'react'
import {
  DirectoryCartoQuery,
  SEARCH_SOURCE,
  SEARCH_CATEGORY_TYPE,
  MARKET,
} from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { chain, map, find, isNil, upperCase } from 'lodash'
import { MapActions } from '@bpd/vendors/carto'
import {
  useAppDispatch,
  useAppSelector,
  UiSelectors,
} from '@bpd/bpd-web/shared/store'
import { setViewState } from '@carto/react-redux'
import { Directory } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { ShopOutlined, EnvironmentFilled } from '@ant-design/icons'
import { withTheme, useAppPalette } from '@bpd/bpd-web/shared/theme'

export interface SearchControllerProps {
  placeholder?: string
  label: string
  addressRestrictTo?: string | string[]
}

const ResultContainer = withTheme(Stack)({
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '0px',
  alignItems: 'center',
})

const ResultItems = withTheme(Stack)({
  display: 'flex',
  flexDirection: 'column',
})

const SearchController: FC<SearchControllerProps> = (props) => {
  const { placeholder, addressRestrictTo, ...rest } = props

  const platter = useAppPalette()
  const dispatch = useAppDispatch()
  const appTeam = useAppSelector(UiSelectors.getTeam)

  const [typedValue, SetTypedValue] = useState<string>('')
  const [selectedPrediction, SetSelectedPrediction] = useState<{ id: string }>({
    id: '',
  })

  const renderTitle = (title: string) => (
    <Typography variant="body2">{upperCase(title)}</Typography>
  )

  const renderItem = ({
    key,
    value,
    source,
    address,
    icon,
    ...rest
  }: {
    key: string
    value: string
    source: string
    address: string
    icon: ReactElement
  }) => ({
    key,
    value,
    source,
    label: (
      <ResultContainer>
        <Stack flexDirection={'row'} paddingRight={'10px'}>
          {icon}
        </Stack>
        <ResultItems>
          {value}
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {address}
          </Typography>
        </ResultItems>
      </ResultContainer>
    ),
    ...rest,
  })

  const { cartoPredictions = [], isQueryFetching } =
    DirectoryCartoQuery.getQueries().useGetSearch(
      {
        team: appTeam,
        searchParam: typedValue,
      },
      {
        skip: !typedValue,
        selectFromResult: ({ data, isFetching }) =>
          !isNil(data)
            ? {
                cartoPredictions: data?.map((result) => {
                  return {
                    key: result?.id,
                    value: result?.propName,
                    source:
                      result?.bpInvStatus === MARKET
                        ? SEARCH_CATEGORY_TYPE.MARKET
                        : SEARCH_CATEGORY_TYPE.GIC_OWNED,
                    address: result?.address,
                    icon: <ShopOutlined style={{ fontSize: '18px' }} />,
                    latitude: result?.lat,
                    longitude: result?.lng,
                  }
                }),
                isQueryFetching: isFetching,
              }
            : { cartoPredictions: [], isQueryFetching: isFetching },
      }
    )

  const { placePredictions = [], isPlaceFetching } =
    useGetPlacePredictionsQuery(
      {
        input: typedValue,
        ...(appTeam
          ? { componentRestrictions: { country: addressRestrictTo ?? appTeam } }
          : {}),
      },
      {
        skip: !typedValue,
        selectFromResult: ({ data, isFetching }) =>
          !isNil(data)
            ? {
                placePredictions: data?.predictions?.map((prediction) => {
                  return {
                    ...prediction,
                    key: prediction?.place_id,
                    value: prediction?.structured_formatting?.main_text,
                    source: SEARCH_CATEGORY_TYPE.GOOGLE,
                    address: prediction?.structured_formatting?.secondary_text,
                    icon: <EnvironmentFilled style={{ fontSize: '18px' }} />,
                  }
                }),
                isPlaceFetching: isFetching,
              }
            : { placePredictions: [], isPlaceFetching: isFetching },
      }
    )

  const { coordinate } = useGetGeoCodeQuery(
    { placeId: selectedPrediction?.id || '' },
    {
      skip: !selectedPrediction?.id,
      selectFromResult: ({ data }) => ({
        coordinate: selectLocation(data),
      }),
    }
  )

  const predictionResults = useMemo(
    () =>
      !isQueryFetching && !isPlaceFetching
        ? chain([...cartoPredictions, ...placePredictions])
            .groupBy(SEARCH_SOURCE)
            .map((items, status: string) => ({
              key: status,
              label: renderTitle(status),
              options: map(items, (item: any) => {
                return renderItem({
                  ...item,
                  key: item?.key,
                  value: item?.value,
                  source: item?.source,
                  address: item?.address,
                  icon: item?.icon,
                })
              }),
            }))
            .value()
        : [],
    [isQueryFetching, isPlaceFetching]
  )

  useEffect(() => {
    if (!coordinate) return
    const { latitude, longitude } = coordinate

    dispatch(
      MapActions.setMarkerCoordinates({
        latitude,
        longitude,
      })
    )

    dispatch(
      setViewState({
        latitude,
        longitude,
      })
    )
  }, [coordinate?.latitude, coordinate?.longitude])

  const handleSearch = (input: string) => {
    const inputValue = input.trim()
    if (!inputValue) dispatch(MapActions.setMarkerCoordinates(null))
    if (inputValue && inputValue.length >= 3) SetTypedValue(inputValue)
  }

  const handleNotFoundContext = () => {
    if (!typedValue) return
    if (!isPlaceFetching && !isQueryFetching) return 'No records found...'
    return 'Loading...'
  }

  const handleOnSelect = (input: string, option: any) => {
    const { key, source } = option

    if (source === SEARCH_CATEGORY_TYPE.GOOGLE) {
      SetSelectedPrediction({ id: key })
      return
    }

    if (cartoPredictions.length === 0) return
    const selectOption = find(cartoPredictions, { key })
    if (!selectOption) return

    const { latitude, longitude } = selectOption

    dispatch(
      MapActions.setMarkerCoordinates({
        latitude,
        longitude,
      })
    )

    dispatch(
      setViewState({
        latitude,
        longitude,
      })
    )
  }

  return (
    <BpdAutoComplete
      options={predictionResults}
      // onSearch={handleSearch}
      onChange={handleSearch}
      notFoundContent={handleNotFoundContext()}
      onSelect={handleOnSelect}
      placeholder={placeholder}
      dropdownMatchSelectWidth={false}
      prefixIcon={<BpdIcon icon={<SearchOutlined />} />}
      {...rest}
    />
  )
}

export default SearchController
