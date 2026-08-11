import CommonOverlay from '@/components/overlays/CommonOverlay.vue'
import type { CommonOverlayProps } from '@/components/overlays/CommonOverlay.vue'

const openCommonOverlay = (options: CommonOverlayProps): Promise<any> =>
  useOverlay().create(CommonOverlay, { props: options }).open()

export default openCommonOverlay
