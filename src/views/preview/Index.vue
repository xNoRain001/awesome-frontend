<template>
  <div
    class="bg-default fixed inset-0 z-10 flex flex-col gap-4 p-4 sm:gap-6 sm:p-6"
  >
    <div class="flex items-center justify-between">
      <USkeleton v-if="loading" class="h-10 w-80" />
      <UTabs
        v-else
        v-model="activeTab"
        :content="false"
        :items="items"
        class="w-fit"
      />
      <UButton @click="onClose">关闭</UButton>
    </div>
    <div
      class="border-muted bg-muted relative grow overflow-hidden rounded-lg border"
    >
      <div
        v-if="activeTab === 'preview'"
        class="relative flex h-full items-center justify-center"
      >
        <RouterView />
      </div>
      <!-- 如果当前 tab 不是 preview，那么 code 一定获取到了 -->
      <template v-else>
        <Shiki v-if="activeTab === 'html'" :code="code.html" />
        <Shiki v-else-if="activeTab === 'css'" :code="code.css" />
        <Shiki v-else :code="code.js || ''" />
        <UseClipboard
          v-slot="{ copy, copied }"
          :key="activeTab"
          :source="
            activeTab === 'html'
              ? code.html
              : activeTab === 'css'
                ? code.css
                : code.js
          "
        >
          <UButton
            :icon="copied ? 'lucide:copy-check' : 'lucide:copy'"
            class="absolute top-4 right-4 sm:top-6 sm:right-6"
            @click="copy()"
          />
        </UseClipboard>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import { UseClipboard } from '@vueuse/components'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import Shiki from '@/components/preview/Shiki.vue'
import { useListStore } from '@/store'

const loading = ref(true)
const route = useRoute()
const router = useRouter()
const { listMap } = useListStore()
const detail = listMap[route.path.split('/').pop() as string]
const rawItems = [
  {
    label: '预览',
    value: 'preview' as const,
    icon: 'lucide:eye'
  },
  {
    label: 'HTML',
    value: 'html' as const,
    icon: 'logos:html-5'
  },
  {
    label: 'CSS',
    value: 'css' as const,
    icon: 'logos:css'
  },
  {
    label: 'JS',
    value: 'js' as const,
    icon: 'logos:javascript'
  }
]
const activeTab = ref<(typeof rawItems)[number]['value']>('preview')
const code = ref<{ html: string; css: string; js?: string }>({
  html: '',
  css: '',
  js: ''
})
const items = ref<TabsItem[]>([])

const onClose = () => {
  router.replace('/')
}

onMounted(async () => {
  const response = await fetch(`/code/${detail.id}.json`)
  const data = await response.json()
  code.value = data
  items.value = data.js
    ? rawItems
    : rawItems.filter(item => item.value !== 'js')
  loading.value = false
})
</script>
