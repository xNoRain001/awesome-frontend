import { defineStore } from 'pinia'
import { v4 } from 'uuid'
import { ref } from 'vue'

import list from './list'

console.log(v4())
const useListStore = defineStore('listStore', () => {
  const listMap: Record<string, (typeof list)[0]> = {}

  for (let i = 0, l = list.length; i < l; i++) {
    const item = list[i]
    const { id } = item

    listMap[id] = item
  }

  return {
    keyword: ref(''),
    page: ref(1),
    list,
    filteredList: ref(list),
    listMap,
    filter: ref({
      genre: '所有',
      region: '所有',
      rating: [8, 10]
    })
  }
})

export default useListStore
