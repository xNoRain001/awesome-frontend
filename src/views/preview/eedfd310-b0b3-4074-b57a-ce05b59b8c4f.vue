<template>
  <div class="scene">
    <div class="wrapper">
      <div class="warp">
        <div class="warp__side warp__side--top"></div>
        <div class="warp__side warp__side--right"></div>
        <div class="warp__side warp__side--bottom"></div>
        <div class="warp__side warp__side--left"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap'
import { GUI } from 'https://esm.sh/dat.gui'
import { onMounted } from 'vue'

const SIDES = ['top', 'right', 'bottom', 'left']

const CONFIG = {
  perspective: false,
  reduced: 1,
  rx: -24,
  ry: -24,
  bn: 5,
  hl: 1,
  hu: 359,
  sl: 1,
  su: 4,
  dl: 0,
  du: 5,
  cell: 5,
  depth: 100
}

const GENERATE_BEAMS = () => {
  for (const SIDE of SIDES) {
    const CONTAINER = document.querySelector(`.warp__side--${SIDE}`)
    CONTAINER.innerHTML = ''
    const NUMBER = gsap.utils.random(1, CONFIG.bn, 1)
    const BEAMS = new Array(NUMBER).fill({}).map(beam => {
      return {
        hue: gsap.utils.random(CONFIG.hl, CONFIG.hu, 1),
        x: gsap.utils.random(0, 100 / CONFIG.cell - 1, 1),
        speed: gsap.utils.random(CONFIG.sl, CONFIG.su),
        delay: gsap.utils.random(CONFIG.dl, CONFIG.du)
      }
    })
    for (const BEAM of BEAMS) {
      CONTAINER.appendChild(
        Object.assign(document.createElement('div'), {
          className: 'beam',
          style: `
          --hue: ${BEAM.hue};
          --ar: ${gsap.utils.random(1, 10, 1)};
          --x: ${BEAM.x};
          --speed: ${BEAM.speed};
          --delay: ${BEAM.delay};
        `
        })
      )
    }
  }
}

const TOGGLE = () => {
  const showingPerspective = CONFIG.exploded
  if (!document.startViewTransition)
    return document.body.toggleAttribute('data-perspective')
  document.startViewTransition(() => {
    document.body.toggleAttribute('data-perspective')
  })
}

const UPDATE_CAMERA = () => {
  document.documentElement.style.setProperty('--rx', CONFIG.rx)
  document.documentElement.style.setProperty('--ry', CONFIG.ry)
}
const UPDATE_GRID = () => {
  document.documentElement.style.setProperty('--grid-size', `${CONFIG.cell}%`)
  GENERATE_BEAMS()
}

const UPDATE_PERSPECTIVE = () => {
  document.documentElement.style.setProperty('--perspective', CONFIG.depth)
}

const UPDATE_MOTION_PREF = () => {
  document.documentElement.style.setProperty('--reduced', CONFIG.reduced)
}

onMounted(() => {
  const CTRL = new GUI({
    width: 320
  })

  CTRL.add(CONFIG, 'perspective').name('Change View').onChange(TOGGLE)
  // CTRL.add(CONFIG, 'cell', 1, 50, 1).name('Cell Size (%)').oChange(UPDATE_GRID)
  CTRL.add(CONFIG, 'depth', 30, 500, 1)
    .name('Perspective (px)')
    .onChange(UPDATE_PERSPECTIVE)
  CTRL.add(CONFIG, 'reduced', 0, 60, 0.1)
    .name('Motion Multiplier')
    .onChange(UPDATE_MOTION_PREF)
  const BEAM_FOLDER = CTRL.addFolder('Beams')
  BEAM_FOLDER.add(CONFIG, 'bn', 1, 20, 1)
    .name('Per side (limit)')
    .onChange(GENERATE_BEAMS)
  BEAM_FOLDER.add(CONFIG, 'hl', 1, 359, 1)
    .name('Hue (Lower)')
    .onChange(GENERATE_BEAMS)
  BEAM_FOLDER.add(CONFIG, 'hu', 1, 359, 1)
    .name('Hue (Upper)')
    .onChange(GENERATE_BEAMS)
  BEAM_FOLDER.add(CONFIG, 'sl', 0.2, 10, 0.1)
    .name('Speed (Lower)')
    .onChange(GENERATE_BEAMS)
  BEAM_FOLDER.add(CONFIG, 'su', 1, 10, 0.1)
    .name('Speed (Upper)')
    .onChange(GENERATE_BEAMS)
  const CAMERA_FOLDER = CTRL.addFolder('Camera')
  CAMERA_FOLDER.add(CONFIG, 'rx', -360, 360, 1)
    .name('Rotate X')
    .onChange(UPDATE_CAMERA)
  CAMERA_FOLDER.add(CONFIG, 'ry', -360, 360, 1)
    .name('Rotate Y')
    .onChange(UPDATE_CAMERA)

  GENERATE_BEAMS()
  UPDATE_CAMERA()
  UPDATE_PERSPECTIVE()
  UPDATE_MOTION_PREF()
})
</script>

<style scoped>
:where(.scene) {
  --accent: hsl(0 0% 0%);
  /* 	--perspective: 100px; */
  --grid-size: 5%;
  --line-width: 1px;
  --bg: hsl(0 0% 90%);
  --line: hsl(0 0% 0% / 0.15);
  --color: hsl(0 0% 4%);
  --text: hsl(0 0% 15%);
}

@media (prefers-color-scheme: dark) {
  :where(.scene) {
    --color: hsl(0 0% 94%);
    --accent: hsl(0 0% 2%);
    --bg: hsl(0 0% 4%);
    --line: hsl(0 0% 100% / 0.15);
    --text: hsl(0 0% 90%);
  }
}

.wrapper {
  position: relative;
  transform-style: preserve-3d;
}

.scene {
  transform: translate3d(-50%, -50%, 1000px);
  position: fixed;
  top: 50%;
  left: 50%;
}

[data-perspective] .wrapper {
  scale: 0.5;
  transform: rotateX(calc(var(--rx, 0) * 1deg))
    rotateY(calc(var(--ry, 0) * -1deg)) rotateX(90deg)
    translate3d(0, 0, 25cqmax);
}

[data-perspective] .warp {
  overflow: visible;
  clip-path: unset;
  perspective: unset;
}

.wrapper::after {
  --diff: calc(var(--line-width) * 0.5);
  content: '';
  width: 24px;
  aspect-ratio: 1;
  background: var(--line);
  position: absolute;
  top: 0;
  left: 0;
  translate: -50% -50%;
  background:
    linear-gradient(
      90deg,
      transparent calc(50% - var(--diff)),
      var(--accent) calc(50% - var(--diff)) calc(50% + var(--diff)),
      transparent calc(50% + var(--diff))
    ),
    linear-gradient(
      transparent calc(50% - var(--diff)),
      var(--accent) calc(50% - var(--diff)) calc(50% + var(--diff)),
      transparent calc(50% + var(--diff))
    );
}

.warp {
  container-type: size;
  width: 90vmin;
  aspect-ratio: 4 / 3;
  perspective: calc(var(--perspective) * 1px);
  transform-style: preserve-3d;
  clip-path: inset(0 0 0 0);
  resize: both;
  overflow: hidden;
  min-height: 350px;
  min-width: 350px;
}

.warp * {
  pointer-events: none;
}

.warp__side {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  position: absolute;
  container-type: inline-size;
  background:
    linear-gradient(var(--line) 0 1px, transparent 1px var(--grid-size))
      50% -0.5px / var(--grid-size) var(--grid-size),
    linear-gradient(90deg, var(--line) 0 1px, transparent 1px var(--grid-size))
      50% 50% / var(--grid-size) var(--grid-size);
}

.warp__side--top {
  width: 100cqi;
  height: 100cqmax;
  transform-origin: 50% 0%;
  transform: rotateX(-90deg);
}

.warp__side--bottom {
  width: 100cqi;
  height: 100cqmax;
  top: 100%;
  transform-origin: 50% 0%;
  transform: rotateX(-90deg);
}

.warp__side--left {
  width: 100cqh;
  height: 100cqmax;
  top: 0;
  left: 0;
  transform-origin: 0% 0%;
  transform: rotate(90deg) rotateX(-90deg);
}

.warp__side--right {
  width: 100cqh;
  height: 100cqmax;
  top: 0;
  right: 0;
  transform-origin: 100% 0%;
  transform: rotate(-90deg) rotateX(-90deg);
}

.beam {
  width: var(--grid-size);
  position: absolute;
  top: 0;
  left: calc(var(--x, 0) * var(--grid-size));
  aspect-ratio: 1 / var(--ar, 1);
  background: linear-gradient(hsl(var(--hue) 80% 60%), transparent);
  translate: 0 calc((var(--speed) / var(--delay)) * 1cqh);
  animation-name: warp;
  animation-duration: calc((var(--speed, 0) * var(--reduced, 0)) * 1s);
  animation-delay: calc((var(--delay, 0) * var(--reduced, 1)) * -1s);
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

/* @media(prefers-reduced-motion: no-preference) {
  .beam {
    animation-duration: calc(var(--speed, 0) * 1s);
    animation-delay: calc(var(--delay), 0) * -1s);
  }
} */

@keyframes warp {
  0% {
    translate: -50% 100cqmax;
  }
  100% {
    translate: -50% -100%;
  }
}
</style>
