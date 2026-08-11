import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { defineStore } from 'pinia'

const useUserStore = defineStore('userStore', () => {
  const { userAgent, maxTouchPoints } = navigator
  const isSmallScreen = useBreakpoints(breakpointsTailwind).smaller('lg')

  return {
    isMobileDevice:
      /Android|webOS|iPhone|iPad|iPod|IEMobile|Windows Phone|Mobile|Opera Mini/i.test(
        userAgent
      ) ||
      maxTouchPoints > 0 ||
      'ontouchstart' in window ||
      // 判断主要输入指针的精细度是否为 coarse（粗糙），粗糙意味着是手指触控
      matchMedia('(pointer: coarse)').matches ||
      // 判断是否不支持 hover 交互
      matchMedia('(hover: none)').matches,
    isSmallScreen
  }
})

export default useUserStore
