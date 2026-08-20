<template>
  <UPagination
    variant="subtle"
    v-model:page="page"
    :items-per-page="ITEMS_PER_PAGE"
    :total="filteredList.length"
    :sibling-count="4"
    :ui="{
      root: 'p-4 sm:p-6',
      list: 'justify-center'
    }"
  />
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'

import { ITEMS_PER_PAGE } from '@/const'
import { useListStore } from '@/store'

const { page, filteredList } = storeToRefs(useListStore())
</script>
