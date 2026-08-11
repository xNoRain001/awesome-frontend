<template>
  <div ref="btnRef" class="btn">
    <div class="btn__line btn__line--top"></div>
    <div class="btn__line btn__line--center"></div>
    <div class="btn__line btn__line--bottom"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, useTemplateRef } from 'vue'

const btnRef = useTemplateRef('btnRef')

onMounted(() => {
  const btn = btnRef.value!

  btn.addEventListener('click', () => {
    btn.classList.toggle('active')
  })
})
</script>

<style scoped>
/* ------------ VARIABLES ------------ */
:where(.btn) {
  /* COLORS */
  --color: #9176ff;
}

/* ----------- BUTTON -------------- */
.btn {
  width: 5em;
  height: 5em;
  background-color: var(--color);
  border-radius: 1em;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
}
.btn__line {
  width: 3.5em;
  height: 0.3em;
  background-color: #fff;
  border-radius: 0.5em;
  position: absolute;
  transition: transform 0.4s ease;
}
.btn__line--top {
  transform: translateY(-1em);
  width: 2.5em;
}
.btn__line--bottom {
  transform: translateY(1em);
  width: 2.5em;
}
/* ------------ ANIMATION ---------- */
.active > .btn__line--center {
  transform: translateX(-5em);
}
.active > .btn__line--top {
  transform: translateY(0) rotate(45deg);
}
.active > .btn__line--bottom {
  transform: translateY(0) rotate(-45deg);
}
.active {
  background-color: #fff;
}
.active > .btn__line {
  background-color: var(--color);
}
</style>
