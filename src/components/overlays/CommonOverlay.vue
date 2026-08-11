<template>
  <USlideover
    v-if="mode === 'slideover'"
    :class="isSmallScreen ? 'max-w-none' : ''"
    :close="{ onClick: () => emit('close', false) }"
    :title="title"
    :description="description"
    :ui="{
      body: 'flex flex-col items-center justify-center gap-4 sm:gap-6'
    }"
  >
    <template #body>
      <component :is="component" />
    </template>
  </USlideover>
  <UModal
    v-else-if="mode === 'modal'"
    :close="{ onClick: () => emit('close', false) }"
    :title="title"
    :description="description"
    :ui="{ body: 'flex flex-col items-center justify-center gap-4 sm:gap-6' }"
  >
    <template #body>
      <component :is="component" />
    </template>
  </UModal>
  <UDrawer v-else :title="title" :description="description">
    <template #body>
      <component :is="component" />
    </template>
  </UDrawer>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { type Component } from 'vue'

import { useUserStore } from '@/store'

export type CommonOverlayProps = {
  mode: 'slideover' | 'modal' | 'drawer'
  title: string
  description?: string
  component: Component
}

defineProps<CommonOverlayProps>()
const emit = defineEmits<{ close: [boolean] }>()
const { isSmallScreen } = storeToRefs(useUserStore())
</script>
