import { defineStore } from 'pinia'
import { v4 } from 'uuid'
import { ref } from 'vue'

import movieList from './list'

console.log(v4())
const useMovieStore = defineStore('movieStore', () => {
  const movieMap: Record<string, (typeof movieList)[0]> = {}

  for (let i = 0, l = movieList.length; i < l; i++) {
    const movie = movieList[i]
    const { id } = movie

    movieMap[id] = movie
  }

  return {
    keyword: ref(''),
    page: ref(1),
    movieList,
    filteredMovieList: ref(movieList),
    movieMap,
    filter: ref({
      genre: '所有',
      region: '所有',
      rating: [8, 10]
    })
  }
})

export default useMovieStore
