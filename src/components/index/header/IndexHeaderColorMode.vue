<template>
  <UButton
    variant="ghost"
    @click="onViewTransition"
    :icon="colorMode === 'dark' ? 'lucide:sun' : 'lucide:moon'"
  />
</template>

<script lang="ts" setup>
import { useColorMode } from '@vueuse/core'
import { ref, watch } from 'vue'

const { store } = useColorMode()
const _store = store.value
const colorMode = ref(
  _store === 'auto'
    ? (document.documentElement.classList[0] as 'light' | 'dark')
    : _store
)

const switchColorMode = () => {
  const nextColorMode = colorMode.value === 'dark' ? 'light' : 'dark'
  store.value = nextColorMode
}

const onViewTransition = (event: MouseEvent) => {
  if (!document.startViewTransition) {
    switchColorMode()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )
  const transition = document.startViewTransition(() => {
    switchColorMode()
  })
  transition.ready.then(() => {
    const duration = 600
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: duration,
        easing: 'cubic-bezier(.76,.32,.29,.99)',
        pseudoElement: '::view-transition-new(root)'
      }
    )
  })
}

// 别的地方可能会修改颜色模式，组件如果在视图中，icon 需要变化
watch(store, v => {
  // 颜色模式修改为跟随系统时，视图更新后类名才发生变化，因此需要定时器
  setTimeout(() => {
    colorMode.value =
      v === 'auto'
        ? (document.documentElement.classList[0] as 'light' | 'dark')
        : v
  })
})
</script>
