<template>
  <UPagination
    variant="subtle"
    v-model:page="page"
    :items-per-page="ITEMS_PER_PAGE"
    :total="filteredMovieList.length"
    :sibling-count="2"
    :ui="{
      root: 'p-4 sm:p-6',
      list: 'justify-center'
    }"
  />
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'

import { ITEMS_PER_PAGE } from '@/const'
import { useMovieStore } from '@/store'

const { page, filteredMovieList } = storeToRefs(useMovieStore())
</script>
