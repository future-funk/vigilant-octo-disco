import type { Builder, CartoBuilder } from '@bpd/bpd-web/shared/data-access'
import type { BLUEPRINT_API_SLICE_KEY, CARTO_API_SLICE_KEY } from '@bpd/bpd-web/shared/store'
import type { DIRECTORY_TAG, DIRECTORY_CARTO_TAG, DIRECTORY_IMPORT_TAG } from '../constants'

export type DirectoryBuilder = Builder<
    typeof DIRECTORY_TAG | typeof DIRECTORY_IMPORT_TAG,
    typeof BLUEPRINT_API_SLICE_KEY
>

export type DirectoryCartoBuilder = CartoBuilder<
    typeof DIRECTORY_CARTO_TAG,
    typeof CARTO_API_SLICE_KEY
>
