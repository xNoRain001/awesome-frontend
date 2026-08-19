<template>
  <UApp
    :locale="zh_cn"
    :toaster="{ position: 'top-center', progress: false, duration: 2500 }"
  >
    <UDashboardGroup unit="rem" storage="local">
      <UDashboardSidebar
        id="default"
        collapsible
        resizable
        class="bg-elevated/25"
      >
        <template #header>
          <svg
            @click="router.replace('/')"
            class="size-8 cursor-pointer"
            style="filter: drop-shadow(rgba(0, 122, 204, 0.3) 0px 8px 24px)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              fill="var(--ui-primary)"
              d="M96 160L96 400L544 400L544 160L96 160zM32 160C32 124.7 60.7 96 96 96L544 96C579.3 96 608 124.7 608 160L608 400C608 435.3 579.3 464 544 464L96 464C60.7 464 32 435.3 32 400L32 160zM192 512L448 512C465.7 512 480 526.3 480 544C480 561.7 465.7 576 448 576L192 576C174.3 576 160 561.7 160 544C160 526.3 174.3 512 192 512z"
            />
          </svg>
        </template>
        <template #default="{ collapsed }">
          <UNavigationMenu
            :collapsed="collapsed"
            :items="navs[0]"
            orientation="vertical"
            tooltip
          />
          <UNavigationMenu
            :collapsed="collapsed"
            :items="navs[1]"
            orientation="vertical"
            tooltip
            class="mt-auto"
          />
        </template>
      </UDashboardSidebar>
      <RouterView />
    </UDashboardGroup>
    <!-- <SkyBg /> -->
    <!-- <StartsBg /> -->
  </UApp>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'
import { zh_cn } from '@nuxt/ui/locale'
import { markRaw } from 'vue'
import { useRouter } from 'vue-router'

import AboutUsOverlay from './components/overlays/AboutUsOverlay.vue'
import QQGroupOverlay from './components/overlays/QQGroupOverlay.vue'
import { themeConfig } from './const/index'
import openCommonOverlay from './utils/open-common-overlay'
import { initTheme } from './utils/update-theme'

// 默认 dark 模式
if (localStorage.getItem('vueuse-color-scheme') !== 'dark') {
  localStorage.setItem('vueuse-color-scheme', 'dark')
}

// 初始化主题
initTheme(themeConfig)

const router = useRouter()
const navs: NavigationMenuItem[][] = [
  [
    {
      label: '视觉创意',
      icon: 'lucide:bird',
      to: '/'
    }
  ],
  [
    // {
    //   label: 'QQ 交流群：1109209692',
    //   icon: 'lucide:users-round',
    //   onSelect() {
    //     openCommonOverlay({
    //       mode: 'modal',
    //       title: 'QQ 交流群',
    //       component: markRaw(QQGroupOverlay)
    //     })
    //   }
    // },
    {
      label: 'Github',
      icon: 'lucide:github',
      // badge: '6k',
      to: 'https://github.com/xNoRain001/awesome-frontend',
      target: '_blank'
    },
    {
      label: '关于我们',
      icon: 'lucide:info',
      onSelect() {
        openCommonOverlay({
          mode: 'modal',
          title: '关于我们',
          component: markRaw(AboutUsOverlay)
        })
      }
    }
  ]
]
</script>

<style scoped>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-new(root) {
  z-index: 9999;
}
::view-transition-old(root) {
  z-index: 1;
}
</style>
