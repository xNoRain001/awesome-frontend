<template>
  <button id="delete" class="del-btn" type="button" aria-label="Delete">
    <svg
      class="del-btn__icon"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
      aria-hidden="true"
    >
      <clipPath id="can-clip">
        <rect
          class="del-btn__icon-can-fill"
          x="5"
          y="24"
          width="14"
          height="11"
        />
      </clipPath>
      <g
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        transform="translate(12,12)"
      >
        <g class="del-btn__icon-lid">
          <polyline points="9,5 9,1 15,1 15,5" />
          <polyline points="4,5 20,5" />
        </g>
        <g class="del-btn__icon-can">
          <g stroke-width="0">
            <polyline id="can-fill" points="6,10 7,23 17,23 18,10" />
            <use clip-path="url(#can-clip)" href="#can-fill" fill="#fff" />
          </g>
          <polyline points="6,10 7,23 17,23 18,10" />
        </g>
      </g>
    </svg>
    <span class="del-btn__letters" aria-hidden="true" data-anim>
      <span class="del-btn__letter-box">
        <span class="del-btn__letter">D</span>
      </span>
      <span class="del-btn__letter-box">
        <span class="del-btn__letter">e</span>
      </span>
      <span class="del-btn__letter-box">
        <span class="del-btn__letter">l</span>
      </span>
      <span class="del-btn__letter-box">
        <span class="del-btn__letter">e</span>
      </span>
      <span class="del-btn__letter-box">
        <span class="del-btn__letter">t</span>
      </span>
      <span class="del-btn__letter-box">
        <span class="del-btn__letter">e</span>
      </span>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

class DeleteButton {
  el: HTMLButtonElement

  isRunning = false

  constructor(el) {
    this.el = document.querySelector(el)
    this.init()
  }
  init() {
    this.el?.addEventListener('click', this.delete.bind(this))

    const resetTrigger = this.el?.querySelector('[data-anim]')
    resetTrigger?.addEventListener('animationend', this.reset.bind(this))
  }
  delete() {
    this.isRunning = true
    this.displayState()
  }
  displayState() {
    this.el.disabled = this.isRunning
    this.el.setAttribute('data-running', String(this.isRunning))
  }
  reset() {
    this.isRunning = false
    this.displayState()
  }
}

onMounted(() => {
  new DeleteButton('#delete')
})
</script>

<style scoped>
:where(.del-btn) {
  --hue: 223;
  --bg: hsl(var(--hue), 90%, 90%);
  --fg: hsl(var(--hue), 90%, 10%);
  --danger: hsl(3, 90%, 45%);
  --danger-down: hsl(3, 90%, 65%);
  --white: hsl(0, 0%, 100%);
  --trans-dur: 0.3s;
  font-size: calc(20px + (40 - 20) * (100vw - 320px) / (2560 - 320));
}

button {
  font:
    1em/1.5 'DM Sans',
    sans-serif;
}

.del-btn {
  background-color: var(--danger);
  border-radius: 0.2em;
  color: var(--white);
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: auto;
  outline: transparent;
  padding: 0.75em 1.5em;
  -webkit-tap-highlight-color: #0000;
  transition: background-color var(--trans-dur);
}
.del-btn:not(:disabled):focus-visible,
.del-btn:not(:disabled):hover {
  background-color: var(--danger-down);
}
.del-btn__icon {
  display: block;
  margin: -0.75em 0 -0.75em -0.75em;
  pointer-events: none;
  width: 3em;
  height: 3em;
}
.del-btn__icon-lid {
  transform-origin: 12px 5px;
}
.del-btn__icon-can {
  transform-origin: 12px 18px;
}
.del-btn__letters {
  display: flex;
}
.del-btn__letter,
.del-btn__letter-box {
  display: inline-block;
}
.del-btn[data-running='false'] .del-btn__letters {
  animation: fadeIn 0.3s cubic-bezier(0.77, 0, 0.18, 1) forwards;
}
.del-btn[data-running='true'] .del-btn__icon-lid,
.del-btn[data-running='true'] .del-btn__icon-can,
.del-btn[data-running='true'] .del-btn__icon-can-fill,
.del-btn[data-running='true'] .del-btn__letter,
.del-btn[data-running='true'] .del-btn__letter-box {
  animation: trashLid 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
}
.del-btn[data-running='true'] .del-btn__icon-can {
  animation-name: trashCan;
}
.del-btn[data-running='true'] .del-btn__icon-can-fill {
  animation-name: trashCanFill;
}
.del-btn[data-running='true'] .del-btn__letter-box {
  animation-name: letterDrop;
  animation-timing-function: cubic-bezier(0.77, 0, 1, 1);
}
.del-btn[data-running='true']
  .del-btn__letter-box:nth-child(1)
  .del-btn__letter {
  animation-name: letter1;
}
.del-btn[data-running='true'] .del-btn__letter-box:nth-child(2),
.del-btn[data-running='true']
  .del-btn__letter-box:nth-child(2)
  .del-btn__letter {
  animation-delay: 0.04s;
}
.del-btn[data-running='true']
  .del-btn__letter-box:nth-child(2)
  .del-btn__letter {
  animation-name: letter2;
}
.del-btn[data-running='true'] .del-btn__letter-box:nth-child(3),
.del-btn[data-running='true']
  .del-btn__letter-box:nth-child(3)
  .del-btn__letter {
  animation-delay: 0.08s;
}
.del-btn[data-running='true']
  .del-btn__letter-box:nth-child(3)
  .del-btn__letter {
  animation-name: letter3;
}
.del-btn[data-running='true'] .del-btn__letter-box:nth-child(4),
.del-btn[data-running='true']
  .del-btn__letter-box:nth-child(4)
  .del-btn__letter {
  animation-delay: 0.12s;
}
.del-btn[data-running='true']
  .del-btn__letter-box:nth-child(4)
  .del-btn__letter {
  animation-name: letter4;
}
.del-btn[data-running='true'] .del-btn__letter-box:nth-child(5),
.del-btn[data-running='true']
  .del-btn__letter-box:nth-child(5)
  .del-btn__letter {
  animation-delay: 0.16s;
}
.del-btn[data-running='true']
  .del-btn__letter-box:nth-child(5)
  .del-btn__letter {
  animation-name: letter5;
}
.del-btn[data-running='true'] .del-btn__letter-box:nth-child(6),
.del-btn[data-running='true']
  .del-btn__letter-box:nth-child(6)
  .del-btn__letter {
  animation-delay: 0.2s;
}
.del-btn[data-running='true']
  .del-btn__letter-box:nth-child(6)
  .del-btn__letter {
  animation-name: letter6;
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: hsl(var(--hue), 90%, 10%);
    --fg: hsl(var(--hue), 90%, 90%);
  }
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes trashLid {
  from,
  86%,
  to {
    transform: translate(0, 0) rotate(0);
  }
  33.33%,
  46% {
    animation-timing-function: cubic-bezier(0.77, 0, 1, 1);
    transform: translate(-2px, -4px) rotate(-40deg);
  }
  54%,
  70% {
    animation-timing-function: linear;
    transform: translate(0, 0) rotate(0);
  }
  62% {
    animation-timing-function: linear;
    transform: translate(0, -2px) rotate(9deg);
  }
  78% {
    animation-timing-function: cubic-bezier(0, 0, 0.18, 1);
    transform: translate(0, -1px) rotate(-6deg);
  }
}
@keyframes trashCan {
  from,
  86%,
  to {
    transform: translate(0, 0) rotate(0);
  }
  33.33%,
  46% {
    animation-timing-function: cubic-bezier(0.77, 0, 1, 1);
    transform: translate(-8px, 3px) rotate(40deg);
  }
  54%,
  70% {
    animation-timing-function: linear;
    transform: translate(0, 0) rotate(0);
  }
  62% {
    animation-timing-function: linear;
    transform: translate(-1px, 0) rotate(-4deg);
  }
  78% {
    animation-timing-function: cubic-bezier(0, 0, 0.18, 1);
    transform: translate(0, 0) rotate(2deg);
  }
}
@keyframes trashCanFill {
  from,
  25%,
  to {
    y: 24px;
  }
  66.67%,
  83.33% {
    y: 12px;
  }
}
@keyframes letterDrop {
  from,
  33.33% {
    transform: translate(0, 0);
  }
  41.67%,
  to {
    transform: translate(0, 0.625em);
  }
}
@keyframes letter1 {
  from {
    transform: translate(0, 0) rotate(0);
  }
  33.33% {
    transform: translate(0.75em, 0) rotate(30deg) scale(1);
  }
  41.67% {
    transform: translate(-2.375em, 0) rotate(-135deg) scale(0.75);
  }
  46%,
  to {
    transform: translate(-2.375em, 0) rotate(-135deg) scale(0);
  }
}
@keyframes letter2 {
  from {
    transform: translate(0, 0) rotate(0);
  }
  33.33% {
    transform: translate(0.75em, 0) rotate(30deg) scale(1);
  }
  41.67% {
    transform: translate(-3em, 0) rotate(-135deg) scale(0.75);
  }
  46%,
  to {
    transform: translate(-3em, 0) rotate(-135deg) scale(0);
  }
}
@keyframes letter3 {
  from {
    transform: translate(0, 0) rotate(0);
  }
  33.33% {
    transform: translate(0.75em, 0) rotate(30deg) scale(1);
  }
  41.67% {
    transform: translate(-3.375em, 0) rotate(-135deg) scale(0.75);
  }
  46%,
  to {
    transform: translate(-3.375em, 0) rotate(-135deg) scale(0);
  }
}
@keyframes letter4 {
  from {
    transform: translate(0, 0) rotate(0);
  }
  33.33% {
    transform: translate(0.75em, 0) rotate(30deg) scale(1);
  }
  41.67% {
    transform: translate(-3.75em, 0) rotate(-135deg) scale(0.75);
  }
  46%,
  to {
    transform: translate(-3.75em, 0) rotate(-135deg) scale(0);
  }
}
@keyframes letter5 {
  from {
    transform: translate(0, 0) rotate(0);
  }
  33.33% {
    transform: translate(0.75em, 0) rotate(30deg) scale(1);
  }
  41.67% {
    transform: translate(-4.125em, 0) rotate(-135deg) scale(0.75);
  }
  46%,
  to {
    transform: translate(-4.125em, 0) rotate(-135deg) scale(0);
  }
}
@keyframes letter6 {
  from {
    transform: translate(0, 0) rotate(0);
  }
  33.33% {
    transform: translate(0.75em, 0) rotate(30deg) scale(1);
  }
  41.67% {
    transform: translate(-4.75em, 0) rotate(-135deg) scale(0.75);
  }
  46%,
  to {
    transform: translate(-4.75em, 0) rotate(-135deg) scale(0);
  }
}
</style>
