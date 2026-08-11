<template>
  <UTabs :content="false" :items="items" v-model="activeTab" class="w-full" />
  <img class="rounded-lg" :src="`${activeTab}.png`" />
</template>

<script lang="ts" setup>
import type { TabsItem } from '@nuxt/ui'
import { ref } from 'vue'

const activeTab = ref('wechatpay')
const items = ref<TabsItem[]>([
  {
    label: '微信',
    value: 'wechatpay',
    icon: 'simple-icons:wechat'
  },
  {
    label: '支付宝',
    value: 'alipay',
    icon: 'simple-icons:alipay'
  },
  {
    label: '云闪付',
    value: 'unionpay',
    icon: 'logos:unionpay'
  }
])
</script>
