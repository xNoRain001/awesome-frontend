<template>
  <div
    ref="containerRef"
    @mousemove="createShadow"
    class="container flex size-full items-center justify-center bg-white font-['Anton',sans-serif]"
  >
    <h1
      ref="textRef"
      contenteditable
      class="text-[100px] font-bold text-[rgba(50,50,50,1)]"
      :style="{
        textShadow
      }"
    >
      COLORS
    </h1>
  </div>
</template>

<script lang="ts" setup>
/* Inspired by Wes Bos JS 30 CHallenge */
import { ref, useTemplateRef } from 'vue'

const containerRef = useTemplateRef('containerRef')
const shadowOffset = 100 // 500px
const textShadow = ref('10px 10px 0 hsl(0, 50%, 50%, 0.3)')

const createShadow = e => {
  const { offsetWidth: containerX, offsetHeight: containerY } =
    containerRef.value!
  let { clientX: x, clientY: y } = e
  /* x is mouse position on x axis
			containerX is total width of the screen so total distance of the mouse on x axis
			shadowOffset is total distance of the shadow.
			shadowOffset -> containerX (total distance of the mouse -> total distance of shadow)
			shadowOffsetX -> x
			*/
  const shadowX = Math.round((x / containerX) * shadowOffset - shadowOffset / 2)
  const shadowY = Math.round((y / containerY) * shadowOffset - shadowOffset / 2)
  textShadow.value = `${shadowX}px ${shadowY}px 0 hsl(${x}, 50%, 50%, .5)`
}
</script>

<style scoped></style>
