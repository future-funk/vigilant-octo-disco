import { BLUEPRINT_ENDPOINTS } from '@bpd/bpd-web/shared/store'

const getAvatarUrl = (ntid: string) =>
  `${BLUEPRINT_ENDPOINTS.ASSETS}/thumbnails/avatars/${ntid}.jpg`

export default getAvatarUrl
