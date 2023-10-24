import type { CartoBuilder } from '@bpd/bpd-web/shared/data-access'
import type { CARTO_API_SLICE_KEY } from '@bpd/bpd-web/shared/store'
import type { TAGS } from '../constants'

export type MVIrrCartoBuilder = CartoBuilder<
  typeof TAGS.MV_IRR_CARTO_TAG,
  typeof CARTO_API_SLICE_KEY
>
