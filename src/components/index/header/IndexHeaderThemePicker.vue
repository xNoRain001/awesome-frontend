<template>
  <UPopover :ui="{ content: 'flex w-72 flex-col gap-4 px-6 py-4' }">
    <template #default="{ open }">
      <UTooltip text="主题">
        <UButton
          icon="lucide:swatch-book"
          color="neutral"
          :variant="open ? 'soft' : 'ghost'"
          square
          aria-label="Color picker"
          :ui="{ leadingIcon: 'text-primary' }"
        />
      </UTooltip>
    </template>

    <template #content>
      <fieldset>
        <legend class="mb-2 text-xs leading-none font-semibold">主题色</legend>

        <div class="-mx-2 grid grid-cols-3 gap-1">
          <IndexHeaderThemePickerButton
            label="Black"
            :selected="themeConfig.theme.blackAsPrimary"
            @click="setBlackAsPrimary(true)"
          >
            <template #leading>
              <span
                class="inline-block h-2 w-2 rounded-full bg-black dark:bg-white"
              ></span>
            </template>
          </IndexHeaderThemePickerButton>

          <IndexHeaderThemePickerButton
            v-for="color in PRIMARY_COLORS"
            :key="color"
            :label="color"
            :chip="color"
            :selected="!themeConfig.theme.blackAsPrimary && primary === color"
            @click="primary = color"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend class="mb-2 text-xs leading-none font-semibold">背景色</legend>

        <div class="-mx-2 grid grid-cols-3 gap-1">
          <IndexHeaderThemePickerButton
            v-for="color in NEUTRAL_COLORS"
            :key="color"
            :label="color"
            :chip="color"
            :selected="neutral === color"
            @click="neutral = color"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend class="mb-2 text-xs leading-none font-semibold">圆角</legend>

        <div class="-mx-2 grid grid-cols-5 gap-1">
          <IndexHeaderThemePickerButton
            v-for="r in RADIUS_LIST"
            :key="r"
            :label="String(r)"
            class="justify-center px-0"
            :selected="radius === r"
            @click="radius = r"
          />
        </div>
      </fieldset>

      <!-- <fieldset>
        <legend class="mb-2 text-xs leading-none font-semibold">主题</legend>

        <div class="-mx-2 grid grid-cols-3 gap-1">
          <IndexHeaderThemePickerButton
            v-for="m in modes"
            :key="m.label"
            v-bind="m"
            :selected="store === m.value"
            @click="store = m.value"
          />
        </div>
      </fieldset> -->
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { computed, reactive } from 'vue'

import {
  themeConfig as _themeConfig,
  NEUTRAL_COLORS,
  PRIMARY_COLORS,
  RADIUS_LIST
} from '@/const'
import { updateTheme } from '@/utils'

const themeConfig = reactive(_themeConfig)
const { store } = useColorMode()
const neutral = computed({
  get() {
    return themeConfig.ui.colors.neutral
  },
  set(v) {
    updateTheme('neutral', themeConfig, v)
  }
})
const primary = computed({
  get() {
    return themeConfig.ui.colors.primary
  },
  set(v) {
    updateTheme('primary', themeConfig, v)
  }
})
const radius = computed({
  get() {
    return themeConfig.theme.radius
  },
  set(v) {
    updateTheme('radius', themeConfig, v)
  }
})
const modes: {
  label: '亮色' | '暗色' | '系统'
  value: 'light' | 'dark' | 'auto'
  icon: string
}[] = [
  { label: '亮色', value: 'light', icon: 'lucide:sun' },
  { label: '暗色', value: 'dark', icon: 'lucide:moon' },
  { label: '系统', value: 'auto', icon: 'lucide:monitor' }
]

const setBlackAsPrimary = (v: boolean) =>
  updateTheme('blackAsPrimary', themeConfig, v)
</script>
