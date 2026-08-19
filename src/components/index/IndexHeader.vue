<template>
  <UDashboardNavbar title="" :ui="{ center: 'flex flex-1 justify-center' }">
    <template #leading>
      <UDashboardSidebarCollapse />
      <UBreadcrumb :items="items" />
    </template>
    <template #default>
      <UInput
        v-model="keyword"
        icon="lucide:search"
        variant="subtle"
        placeholder="搜索"
        :ui="{ root: 'w-full max-w-96', trailing: 'pe-1' }"
      >
        <template v-if="keyword.length" #trailing>
          <UButton
            color="neutral"
            variant="link"
            size="sm"
            icon="lucide:circle-x"
            @click="onClear"
          />
        </template>
      </UInput>
    </template>
    <template #right>
      <!-- <IndexHeaderColorMode /> -->
      <IndexHeaderThemePicker />
    </template>
  </UDashboardNavbar>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'

import { useListStore } from '@/store'

const moiveStore = useListStore()
const { keyword } = storeToRefs(moiveStore)

const items = [
  {
    label: '视觉创意',
    to: '/'
  }
]

const onClear = () => {
  keyword.value = ''
}
</script>
