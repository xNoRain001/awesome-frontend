<template>
  <div @click="onClick" class="clipboard" :class="copied ? 'copied' : ''">
    <svg
      width="16"
      height="32"
      viewBox="0 0 16 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12.75V4.25C3 3.42157 3.67157 2.75 4.5 2.75H12C12.8284 2.75 13.5 3.42157 13.5 4.25V12.75C13.5 13.5784 12.8284 14.25 12 14.25H4.5C3.67157 14.25 3 13.5784 3 12.75Z"
      />
      <path
        d="M3 12.75V4.25C3 3.42157 3.67157 2.75 4.5 2.75H12C12.8284 2.75 13.5 3.42157 13.5 4.25V12.75C13.5 13.5784 12.8284 14.25 12 14.25H4.5C3.67157 14.25 3 13.5784 3 12.75Z"
        class="page"
      />
      <path d="M6.25 9.75L7.75 11.25L10.25 7.75" class="check" />
      <path
        d="M7 1.75001C6.72386 1.75001 6.5 1.97387 6.5 2.25001V3.5C6.5 4.4665 7.2835 5.25 8.25 5.25C9.2165 5.25 10 4.4665 10 3.5V2.25C10 1.97386 9.77614 1.75 9.5 1.75L7 1.75001Z"
      />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const copied = ref(false)

const onClick = () => {
  if (copied.value) {
    return
  }

  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<style lang="scss" scoped>
.clipboard {
  width: 32px;
  height: 32px;
  padding: 8px;
  transform: scale(2);
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;

  svg {
    opacity: 0.9;
    transition: opacity 0.2s ease;

    path {
      stroke-width: 1.5;
      stroke: white;
      fill: black;
      stroke-linecap: round;
      stroke-linejoin: round;

      &.page {
        transform-origin: center;
      }
      &.check {
        transform-origin: center;
        stroke-dasharray: 8;
        stroke-dashoffset: 8;
        stroke: #83f5ad;
      }
    }
  }

  &:hover {
    background: rgba(white, 0.1);
    svg {
      opacity: 1;
    }
  }

  &.copied {
    svg {
      path {
        &.page {
          animation: copiedPage 2s ease forwards;
        }
        &.check {
          stroke-dasharray: 16;
          transition: all 0.5s ease;
          animation: copiedPage 2s ease forwards;
        }
      }
    }
  }
}

@keyframes copiedPage {
  0% {
    transform: rotate(0) translateY(0);
    opacity: 1;
  }
  50% {
    transform: rotate(0) translateY(0);
    opacity: 1;
  }
  100% {
    transform: rotate(10deg) translateY(16px);
    opacity: 0;
  }
}
</style>
