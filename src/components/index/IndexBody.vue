<template>
  <UBlogPosts class="blog-posts" v-if="posts.length">
    <Card
      v-for="({ id, title, description }, index) in posts"
      :key="index"
      :id="id"
      :title="title"
      :description="description"
    />
  </UBlogPosts>
  <Placeholder class="h-full" v-else>
    <div>什么也没找到，空空如也</div>
  </Placeholder>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

import { ITEMS_PER_PAGE } from '@/const'
import { useListStore } from '@/store'

const listStore = useListStore()
const { page, keyword, filter, filteredList } = storeToRefs(listStore)
const { list } = listStore
const posts = ref(list.slice(0, ITEMS_PER_PAGE))

const getPosts = (page: number) =>
  (posts.value = filteredList.value.slice(
    ITEMS_PER_PAGE * (page - 1),
    ITEMS_PER_PAGE * page
  ))

const filterByKeyword = (item: (typeof list)[0]) => {
  const _keyword = keyword.value.toLowerCase()
  const { title, description } = item

  return (
    title.toLowerCase().includes(_keyword) ||
    description.toLowerCase().includes(_keyword)
  )
}

const refreshPost = () => {
  if (page.value !== 1) {
    page.value = 1
  } else {
    getPosts(1)
  }
}

const filterFn = () => {
  filteredList.value = list
  //   .filter(filterByGenre)
  //   .filter(filterByRegion)
  //   .filter(filterByRating)
  refreshPost()
}

watch(filter, filterFn, { deep: true })

watch(keyword, v => {
  if (v) {
    filteredList.value = list.filter(filterByKeyword)
    refreshPost()
  } else {
    filterFn()
  }
})

// 跳转到预览页面后再返回时，显示当前页码的内容
watch(
  page,
  v => {
    getPosts(v)

    const el = document.querySelector('.blog-posts')

    if (el) {
      ;(el.parentNode as HTMLElement).scrollTo({ top: 0 })
    }
  },
  { immediate: true }
)
</script>
