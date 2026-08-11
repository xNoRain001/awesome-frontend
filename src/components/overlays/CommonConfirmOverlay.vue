<template>
  <UDrawer v-if="isSmallScreen" :title="title" :description="description">
    <template #footer>
      <UButton
        label="取消"
        color="neutral"
        class="justify-center"
        @click="emits('close', false)"
      />
      <UButton label="确认" class="justify-center" @click="_onConfirm" />
    </template>
  </UDrawer>
  <UModal
    v-else
    :title="title"
    :description="description"
    :dismissible="false"
    :ui="{ footer: 'justify-end' }"
  >
    <template #footer>
      <UButton label="取消" color="neutral" @click="emits('close', false)" />
      <UButton label="确认" @click="_onConfirm" />
    </template>
  </UModal>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'

import { useUserStore } from '@/store'

export type CommonConfirmOverlayProps = {
  title: string
  description?: string
  onConfirm: () => void | Promise<void>
}

const props = defineProps<CommonConfirmOverlayProps>()
const emits = defineEmits<{ close: [value: boolean] }>()
const { isSmallScreen } = storeToRefs(useUserStore())

const _onConfirm = async () => {
  await props.onConfirm()
  emits('close', true)
}
</script>
