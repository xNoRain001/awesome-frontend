<template>
  <div
    class="bg-default fixed inset-0 z-10 flex flex-col gap-4 p-4 sm:gap-6 sm:p-6"
  >
    <div class="flex items-center justify-between">
      <UTabs
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
      <codemirror
        v-else-if="activeTab === 'html'"
        v-model="code.html"
        placeholder="Code goes here..."
        :style="{ height: '100%' }"
        disabled
        :extensions="extensions"
      />
      <codemirror
        v-else-if="activeTab === 'css'"
        v-model="code.css"
        placeholder="Code goes here..."
        :style="{ height: '100%' }"
        disabled
        :extensions="extensions"
      />
      <codemirror
        v-else
        v-model="code.js"
        placeholder="Code goes here..."
        :style="{ height: '100%' }"
        disabled
        :extensions="extensions"
      />
      <UseClipboard
        v-if="activeTab !== 'preview'"
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { vue } from '@codemirror/lang-vue'
import { oneDark } from '@codemirror/theme-one-dark'
import { EditorView } from '@codemirror/view'
import type { TabsItem } from '@nuxt/ui'
import { UseClipboard } from '@vueuse/components'
import { ref } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { useRoute, useRouter } from 'vue-router'

import { useMovieStore } from '@/store'

const extensions = [
  EditorView.theme({
    '&': {
      fontSize: '16px'
    }
  }),
  vue(),
  oneDark
]
const route = useRoute()
const router = useRouter()
const { movieMap } = useMovieStore()
const detail = movieMap[route.path.split('/').pop() as string]
const rawItems = [
  {
    label: '预览',
    value: 'preview' as const,
    icon: 'lucide:eye'
  },
  {
    label: 'HTML',
    value: 'html' as const,
    icon: 'lucide:code'
  },
  {
    label: 'CSS',
    value: 'css' as const,
    icon: 'lucide:code'
  },
  {
    label: 'JS',
    value: 'js' as const,
    icon: 'lucide:code'
  }
]
const activeTab = ref<(typeof rawItems)[number]['value']>('preview')
const response = await fetch(`/code/${detail.id}.json`)
const code = await response.json()
const items: TabsItem[] = code.js
  ? rawItems
  : rawItems.filter(item => item.value !== 'js')

const onClose = () => {
  router.replace('/')
}
</script>
