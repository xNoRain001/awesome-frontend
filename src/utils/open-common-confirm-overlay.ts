import CommonConfirmOverlay from '@/components/overlays/CommonConfirmOverlay.vue'
import type { CommonConfirmOverlayProps } from '@/components/overlays/CommonConfirmOverlay.vue'

const openCommonConfirmOverlay = (
  options: CommonConfirmOverlayProps
): Promise<any> =>
  useOverlay().create(CommonConfirmOverlay, { props: options }).open()

export default openCommonConfirmOverlay
