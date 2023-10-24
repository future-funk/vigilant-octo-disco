import { useDynamicScriptTag } from '@bpd/ui/hooks'
import {
  BaseQueryFn,
  createApi,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import {
  chain,
  chunk,
  first,
  isArray,
  isEqual,
  mergeWith,
  uniqWith,
} from 'lodash'
import { SCRIPT_ID, SCRIPT_URL } from './constants'

export interface FetchArgs {
  service: {
    instance:
      | typeof google.maps.places.AutocompleteService
      | typeof google.maps.Geocoder
    method: string
  }
  payload: any
}

// eslint-disable-next-line
useDynamicScriptTag({
  id: SCRIPT_ID,
  url: SCRIPT_URL,
})

const executeQuery = async ({ service, payload }: FetchArgs) => {
  const serviceInstance = new service.instance()

  const data = await serviceInstance[service.method](payload)

  return { data }
}

const baseQuery: BaseQueryFn<
  { services?: FetchArgs[] } | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args: { services?: FetchArgs[] } | FetchArgs) => {
  if ('services' in args && args.services) {
    const servicePromises = args.services.map((serviceArg) =>
      executeQuery(serviceArg)
    )

    const serviceResponses = await Promise.all(servicePromises)

    return {
      data: { datas: serviceResponses.map((response) => response.data) },
    }
  } else {
    const response = await executeQuery(args as unknown as FetchArgs)
    return { data: response.data }
  }
}

export const GOOGLE_MAPS_API_SLICE_KEY = 'googlePlacesApi'

const googleMapsApiSlice = createApi({
  reducerPath: GOOGLE_MAPS_API_SLICE_KEY,
  baseQuery,
  endpoints: (builder) => ({
    getPlacePredictions: builder.query<
      google.maps.places.AutocompleteResponse,
      { input: string; componentRestrictions?: { country: string | string[] } }
    >({
      query: (payload) => {
        const {
          componentRestrictions: { country = [], ...rest } = {},
          ...restPayload
        } = payload

        if (Array.isArray(country) && country.length > 6) {
          const chunkedCountryCodes = chunk(country, 5)

          const services = chunkedCountryCodes.map((chunk) => ({
            service: {
              instance: google.maps.places.AutocompleteService,
              method: 'getPlacePredictions',
            },
            payload: {
              ...restPayload,
              componentRestrictions: { country: chunk, ...rest },
            },
          }))

          return { services }
        } else {
          return {
            service: {
              instance: google.maps.places.AutocompleteService,
              method: 'getPlacePredictions',
            },
            payload,
          }
        }
      },
      transformResponse: (
        response: { datas: { predictions: [] }[] } | { predictions: [] }
      ) => {
        const predictions =
          'datas' in response
            ? chain(
                (response as unknown as { datas: { predictions: [] }[] }).datas
              )
                .flatMap('predictions')
                .groupBy('place_id')
                .map((groupedPredictions) =>
                  mergeWith({}, ...groupedPredictions, (objValue, srcValue) => {
                    if (isArray(objValue)) {
                      return uniqWith(objValue.concat(srcValue), isEqual)
                    }
                  })
                )
                .value()
            : (response as unknown as { predictions: [] }).predictions

        return { predictions }
      },
    }),
    getGeoCode: builder.query<
      google.maps.GeocoderResponse,
      { placeId: string }
    >({
      query: (payload) => ({
        service: {
          instance: google.maps.Geocoder,
          method: 'geocode',
        },
        payload,
      }),
    }),
  }),
})

/** Reducer */
export const googleMapsApiReducer = googleMapsApiSlice.reducer

/** Hooks */
export const { useGetPlacePredictionsQuery, useGetGeoCodeQuery } =
  googleMapsApiSlice

/** Selectors */
export const selectLocation = (data?: google.maps.GeocoderResponse) => {
  const location = first(data?.results)?.geometry?.location
  return location
    ? { latitude: location.lat(), longitude: location.lng() }
    : null
}

export default googleMapsApiSlice
