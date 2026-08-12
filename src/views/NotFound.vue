<template>
  <UError
    :ui="{
      root: 'bg-default fixed inset-0'
    }"
    :clear="{
      onClick
    }"
    :error="{
      statusCode: 404,
      statusMessage: '页面未找到',
      message: '抱歉，您访问的页面不存在。'
    }"
  />
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const onClick = () => {
  router.replace('/')
}
</script>
