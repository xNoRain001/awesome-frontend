<template>
  <div class="heart-wrap">
    <div class="heart">
      <div class="tank"></div>
      <svg
        class="curve"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g>
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(103, 130, 191, 0.5)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="1"
            fill="rgba(103, 130, 191, 0.3)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="2"
            fill="rgba(103, 130, 191, 1)"
          />
        </g>
      </svg>
    </div>
  </div>
  <svg>
    <clipPath id="myPath" clipPathUnits="objectBoundingBox">
      <!--     <path d="M0.498,1 s0.243,-0.102,0.394,-0.323 S1,0.14,0.864,0.033 S0.498,0.141,0.498,0.141 S0.291,-0.08,0.124,0.031 s-0.159,0.434,-0.021,0.646 S0.498,1,0.498,1" /> -->
      <path
        d="M0.373,0.967 S0.616,0.866,0.768,0.644 S0.912,0.107,0.739,0 S0.373,0.108,0.373,0.108 S0.166,-0.113,0,-0.002 S-0.159,0.432,-0.021,0.644 S0.373,0.967,0.373,0.967"
      />
    </clipPath>
  </svg>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap'
import { onMounted } from 'vue'

let pumpLevels = [15, 20, 25, 0]
let tankLevels = [25, 45, 70, -20]
let counter = 0
let isAnimating = false

function pumpHeart() {
  if (isAnimating) {
    return
  }

  isAnimating = true
  //forward
  gsap.to('.heart', {
    translateZ: pumpLevels[counter],
    duration: 0.5
  })

  gsap.to('.curve', {
    bottom: tankLevels[counter],
    transformOrigin: 'bottom',
    scaleY: 1,
    duration: 0.5
  })
  gsap.to('.tank', {
    height: counter === 3 ? 0 : tankLevels[counter],
    duration: 0.5
  })

  //reverse
  gsap.to('.curve', {
    delay: 0.6,
    bottom: tankLevels[counter],
    transformOrigin: 'bottom',
    scaleY: 0.5,
    duration: 0.5
  })

  gsap.to('.heart', {
    delay: 0.6,
    translateZ: 0,
    duration: 0.25,
    onComplete: function () {
      isAnimating = false
    }
  })

  if (++counter > 3) counter = 0
}

onMounted(() => {
  let heart = document.getElementsByClassName('heart')[0]
  heart.addEventListener('click', pumpHeart)
})
</script>

<style lang="scss" scoped>
/* 
Wave svg credits - https://codepen.io/goodkatz/pen/LYPGxQz
*/

:where(.heart-wrap) {
  --dim-x: 80px;
  --dim-y: 70px;
  --cruve-height: 20px;
}

#myPath {
  path {
    transform: translate(0.125px, 0.033px);
  }
}

.heart-wrap {
  cursor: pointer;
  perspective: 200px;
  filter: drop-shadow(0px 10px 10px rgba(174, 196, 238, 0.5));
}

.heart {
  position: relative;
  height: var(--dim-y);
  width: var(--dim-x);
  overflow: hidden;
  clip-path: url(#myPath);
  background-image: radial-gradient(#c9d8f5 60%, #afc4ee);
}

.tank {
  position: absolute;
  bottom: 0;
  height: 0;
  width: var(--dim-x);
  background-color: rgb(103, 130, 191);
  z-index: 5;
}

.curve {
  position: absolute;
  bottom: calc(-1 * var(--cruve-height));
  width: var(--dim-x);
  height: var(--cruve-height);

  use {
    animation: move 2s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }

  use:nth-child(1) {
    animation-duration: 3s;
  }
  use:nth-child(2) {
    animation-duration: 4s;
  }
  use:nth-child(3) {
    animation-duration: 2s;
  }
}

@keyframes move {
  0% {
    transform: translateX(-90px);
  }
  100% {
    transform: translateX(85px);
  }
}
</style>
