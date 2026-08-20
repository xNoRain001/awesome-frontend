<template>
  <div class="h-full overflow-auto" v-html="html"></div>
</template>

<script lang="ts" setup>
import vue from '@shikijs/langs/vue'
import vitesseDark from '@shikijs/themes/vitesse-dark'
import { createHighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  code: string
}>()
const html = ref('')

onMounted(async () => {
  const { code } = props
  const core = await createHighlighterCore({
    engine: createJavaScriptRegexEngine(),
    langs: [vue],
    themes: [vitesseDark]
  })
  html.value = core.codeToHtml(code, {
    lang: 'vue',
    theme: 'vitesse-dark'
  })
})
</script>

<style scoped>
:deep(.shiki) {
  min-height: 100%;
}
</style>
