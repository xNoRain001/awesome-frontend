<template>
  <div class="h-full overflow-auto" v-html="html"></div>
</template>

<script lang="ts" setup>
import { codeToHtml } from 'shiki'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  code: string
}>()
const html = ref('')

onMounted(async () => {
  const { code } = props
  html.value = await codeToHtml(code, {
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
