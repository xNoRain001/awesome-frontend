<template>
  <nav>
    <button class="active">
      <span class="visually-hidden">Alarm</span>
      <svg width="3em" height="3em" viewBox="-50 -50 100 100">
        <g fill="none" stroke="currentColor" stroke-width="7">
          <circle r="30" />
          <g stroke-linecap="round" stroke-linejoin="round">
            <path d="M 0 -12 v 12 l 10 10" />
            <g class="jiggle">
              <g transform="translate(0 -36)">
                <path d="M 25 0 l 10 10" />
                <path transform="scale(-1 1)" d="M 25 0 l 10 10" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </button>
    <button>
      <span class="visually-hidden">Clock</span>
      <svg width="3em" height="3em" viewBox="-50 -50 100 100">
        <g fill="none" stroke="currentColor" stroke-width="7">
          <circle r="30" />
          <g stroke-linecap="round" stroke-linejoin="round">
            <path d="M 0 0 v -12" />
            <g transform="rotate(135)">
              <g class="rotate">
                <path d="M 0 0 v -14" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </button>
    <button>
      <span class="visually-hidden">Timer</span>
      <svg width="3em" height="3em" viewBox="-50 -50 100 100">
        <defs>
          <clipPath id="clip-timer">
            <path d="M -25 -30 h 50 l -50 60 h 50 z" />
          </clipPath>
        </defs>
        <g class="half-rotate">
          <g
            fill="none"
            stroke="currentColor"
            stroke-width="7"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M -25 -30 h 50 l -50 60 h 50 z" />
          </g>
          <g fill="currentColor" stroke="none" clip-path="url(#clip-timer)">
            <g class="fall">
              <rect x="-50" y="0" width="100" height="50" />
            </g>
          </g>
        </g>
      </svg>
    </button>
    <button>
      <span class="visually-hidden">Stopwatch</span>
      <svg width="3em" height="3em" viewBox="-50 -50 100 100">
        <g fill="none" stroke="currentColor" stroke-width="7">
          <circle r="30" />
          <g stroke-linecap="round" stroke-linejoin="round">
            <g transform="rotate(45) translate(0 -32)">
              <path d="M 0 0 v -6" />
            </g>
            <g transform="translate(0 -42)">
              <g class="push">
                <path d="M -7 0 h 14" />
              </g>
            </g>

            <g class="rotate">
              <path d="M 0 0 v -12" />
            </g>
          </g>
        </g>
      </svg>
    </button>
  </nav>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  const buttons = document.querySelectorAll('button')
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(button => button.classList.remove('active'))
      button.classList.add('active')
    })
  })
})
</script>

<style scoped>
nav {
  display: flex;
}

button {
  padding: 0.25rem 1.75rem;
  background: none;
  border: none;
  color: inherit;
  outline: none;
  position: relative;
}

svg {
  display: block;
  width: 3.5em;
  height: auto;
}

.visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
}

button:not(.active) {
  color: hsl(0, 0%, 35%);
}

button::before {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  width: 4em;
  height: 4em;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  background: hsla(0, 0%, 100%, 0.1);
}

button:focus::before {
  animation: pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1);
}

@keyframes pulse {
  50% {
    opacity: 0.6;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

button.active .jiggle {
  animation: jiggle 0.2s 0.3s 4 cubic-bezier(0.4, 0, 0.6, 1);
}

@keyframes jiggle {
  25% {
    transform: rotate(-8deg);
  }
  75% {
    transform: rotate(8deg);
  }
}

button.active .rotate {
  animation: rotate 0.8s 0.3s cubic-bezier(0.4, 0, 0.6, 1) forwards;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

button.active .half-rotate {
  animation: half-rotate 0.8s 0.3s cubic-bezier(0.4, 0, 0.6, 1) forwards;
}
button.active .fall {
  animation: fall 0.5s 1s cubic-bezier(0.4, 0, 0.6, 1) forwards;
}

@keyframes half-rotate {
  100% {
    transform: rotate(180deg);
  }
}
@keyframes fall {
  100% {
    transform: translateY(-50px);
  }
}

button.active .push {
  animation: push 0.2s 0.1s cubic-bezier(0.4, 0, 0.6, 1);
}

@keyframes push {
  50% {
    transform: translateY(5px);
  }
}
</style>
