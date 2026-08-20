<template>
  <div class="keyboard">
    <div class="column">
      <div class="row">
        <Key
          v-for="char in ['7', '8', '9']"
          :key="char"
          :char="char"
          :active="isKeyActive(char)"
        />
      </div>
      <div class="row">
        <Key
          v-for="char in ['4', '5', '6']"
          :key="char"
          :char="char"
          :active="isKeyActive(char)"
        />
      </div>
      <div class="row">
        <Key
          v-for="char in ['1', '2', '3']"
          :key="char"
          :char="char"
          :active="isKeyActive(char)"
        />
      </div>
      <div class="row">
        <Key char="0" :span="true" :active="isKeyActive('0')" />
        <Key char="." :active="isKeyActive('.')" />
      </div>
    </div>
    <div class="column">
      <Key char="+" :span="true" :active="isKeyActive('+')" />
      <Key char="-" :span="true" :active="isKeyActive('-')" />
    </div>
    <div class="shade"></div>
    <div class="cover"></div>
  </div>
</template>

<script lang="ts" setup>
import { h, ref, onMounted, onUnmounted, defineComponent, computed } from 'vue'

const activeKeys = ref(new Set())

const add = (item: any) => {
  const next = new Set(activeKeys.value)
  next.add(item)
  activeKeys.value = next
}

const remove = (item: any) => {
  const next = new Set(activeKeys.value)
  next.delete(item)
  activeKeys.value = next
}

const isKeyActive = (char: string) => activeKeys.value.has(char)

// 模拟 useSound
const soundRef = ref<HTMLAudioElement | null>(null)
const initSound = () => {
  soundRef.value = new Audio(
    'https://cdn.yoavik.com/codepen/mechanical-keyboard/keytype.mp3'
  )
}
const play = () => {
  soundRef.value?.play().catch(() => {})
}
const stop = () => {
  if (soundRef.value) {
    soundRef.value.pause()
    soundRef.value.currentTime = 0
  }
}

// Key 组件逻辑直接写在 setup，这里使用子组件方式
const Key = defineComponent({
  props: {
    char: { type: String, required: true },
    span: { type: Boolean, default: false },
    active: { type: Boolean, required: true }
  },
  setup(props) {
    const cls = computed(() => {
      const arr = ['key']
      if (props.span) arr.push('span')
      if (props.active) arr.push('active')
      return arr.join(' ')
    })
    return () =>
      h('div', { class: cls.value }, [
        h('div', { class: 'side' }),
        h('div', { class: 'top' }),
        h('div', { class: 'char' }, props.char)
      ])
  }
})

// 键盘事件监听
const onKeyDown = (e: KeyboardEvent) => {
  add(e.key)
  stop()
  play()
}
const onKeyUp = (e: KeyboardEvent) => {
  remove(e.key)
}

onMounted(() => {
  initSound()
  document.addEventListener('keydown', onKeyDown)
  document.addEventListener('keyup', onKeyUp)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeyDown)
  document.removeEventListener('keyup', onKeyUp)
})
</script>

<style scoped>
.keyboard {
  transform: rotateX(60deg) rotateZ(45deg);
  transform-style: preserve-3d;
  background: #1e293b;
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: inset 1rem 1rem 0 0.4rem #94a3b8;
  display: flex;
  gap: 0 2rem;
  position: relative;
}
.keyboard .shade {
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 5rem;
  background-image: linear-gradient(90deg, #94a3b8 50%, #cbd5e1);
  transform: rotateX(90deg) rotateX(14deg) translateX(10rem) translateY(-6rem)
    translateZ(-39rem);
  filter: blur(0.5rem);
}
.keyboard .cover {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  border-radius: 2rem;
  box-shadow:
    inset -0.3rem -0.3rem 0.1rem 0.2rem #f1f5f9,
    inset -1rem -1rem 0 0.4rem #cbd5e1,
    inset -2rem -2rem 2rem -0.6rem #64748b,
    0 0 #e2e8f0,
    0.3rem 0.3rem #e2e8f0,
    0.6rem 0.6rem #e2e8f0,
    0.9rem 0.9rem #e2e8f0,
    1.2rem 1.2rem #e2e8f0,
    1.5rem 1.5rem #e2e8f0,
    1.8rem 1.8rem #e2e8f0,
    2.1rem 2.1rem #e2e8f0,
    2.4rem 2.4rem #e2e8f0,
    2.7rem 2.7rem #e2e8f0,
    3rem 3rem #e2e8f0,
    3.3rem 3.3rem #e2e8f0,
    3.6rem 3.6rem #e2e8f0,
    3.9rem 3.9rem #e2e8f0,
    4.2rem 4.2rem #e2e8f0,
    4.5rem 4.5rem #e2e8f0,
    4.8rem 4.8rem #e2e8f0,
    5.1rem 5.1rem #e2e8f0,
    5.4rem 5.4rem #e2e8f0,
    5.7rem 5.7rem #e2e8f0,
    6rem 6rem #e2e8f0,
    6.3rem 6.3rem #e2e8f0,
    6.6rem 6.6rem #e2e8f0,
    6.9rem 6.9rem #e2e8f0,
    7.2rem 7.2rem #e2e8f0,
    7.5rem 7.5rem #e2e8f0,
    8rem 10rem 2rem rgba(15, 23, 42, 0.2),
    8rem 8rem 0.5rem rgba(15, 23, 42, 0.2);
}

.row {
  display: flex;
  gap: 0 2rem;
}
.row:not(:first-child) {
  filter: drop-shadow(2rem -0.5rem 0.5rem rgba(51, 65, 85, 0.3));
}
.row:not(:first-child) :deep(.key:not(:first-child)) {
  filter: drop-shadow(-0.5rem 0.5rem 0.5rem rgba(51, 65, 85, 0.3));
}
.row > :deep(.key.span) {
  flex: 1;
}
.row > :deep(.key.span .side) {
  width: 120%;
  height: 237%;
  transform: rotateZ(45deg) translate(24%, -14%) skew(337deg);
  background-image: linear-gradient(#f1f5f9 25%, #e2e8f0 30%);
}
.row > :deep(.key.span .top::before) {
  transform: translate(5%, 5%);
}
.row > :deep(.key.span .top::after) {
  background-image: linear-gradient(-25deg, transparent 45%, #e2e8f0 55%);
}

.column {
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
}
.column > :deep(.key.span) {
  flex: 1;
}
.column > :deep(.key.span .side) {
  width: 220%;
  height: 103%;
  transform: rotateZ(45deg) translate(27%, 17%) skew(22deg);
  background-image: linear-gradient(#fbd38d 70%, #ed8936 75%);
}
.column > :deep(.key.span .top::before) {
  background-color: #f6ad55;
  transform: translate(5%, 5%);
}
.column > :deep(.key.span .top::after) {
  background-image: linear-gradient(291deg, transparent 45%, #f6ad55 50%);
}
.column:not(:first-child) {
  filter: drop-shadow(-0.5rem 0.5rem 0.5rem rgba(51, 65, 85, 0.3));
}

:deep(.key) {
  position: relative;
  width: 6rem;
  height: 6rem;
  transform: translateX(-3rem) translateY(-3rem);
  transform-style: preserve-3d;
  user-select: none;
  transition: transform 0.1s ease-out;
}
:deep(.key.active) {
  transform: translateX(-1rem) translateY(-1rem);
}
:deep(.key .char) {
  position: absolute;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #64748b;
  text-shadow:
    0.05rem 0rem 0 #94a3b8,
    0.05rem 0.1rem 0 #0f172a,
    0.1rem 0.05rem 0 #94a3b8,
    0.1rem 0.15rem 0 #0f172a,
    0.15rem 0.1rem 0 #94a3b8,
    0.15rem 0.2rem 0 #0f172a,
    0.2rem 0.15rem 0 #94a3b8,
    0.2rem 0.25rem 0 #0f172a,
    0.25rem 0.2rem 0 #94a3b8,
    0.25rem 0.3rem 0 #0f172a;
}
:deep(.key .side) {
  position: absolute;
  width: 250%;
  height: 140%;
  background-image: linear-gradient(#f1f5f9 45%, #cbd5e1 55%);
  border-radius: 1rem;
  transform: rotateZ(45deg) translate(19%, 28%);
}
:deep(.key .top) {
  position: absolute;
  width: 100%;
  height: 100%;
}
:deep(.key .top::before) {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #e2e8f0;
  border-radius: 0.8em;
  filter: blur(0.3rem);
  transform: translate(10%, 10%);
}
:deep(.key .top::after) {
  content: '';
  position: absolute;
  width: 105%;
  height: 105%;
  background-image: linear-gradient(-45deg, transparent 45%, #e2e8f0 55%);
  border-radius: 0.8rem;
  box-shadow:
    inset -0.2rem -0.2rem 0.5rem -0.2rem white,
    0.2rem 0.2rem 0.5rem -0.2rem white;
}
</style>
