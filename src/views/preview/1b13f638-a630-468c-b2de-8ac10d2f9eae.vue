<template>
  <div class="wrapper size-full">
    <svg viewBox="0 0 0 0">
      <defs>
        <path
          id="feet-shape"
          d="M41.5,30.2C36,24.6,4.7,26.1,7.7,49.4c.8,5.9,4,10.2,8,19.9,3,7.2-.1,15.7,5.8,20.8S43,91.6,38.6,75.9c-1.8-6.5-7.6-9.3-8.9-14.1C26.1,47.9,51.7,40.6,41.5,30.2Z M41.7,7.6c-2.6-.3-5.2,2.8-5.6,7s1.3,7.8,3.9,8.1,5.2-2.9,5.6-7.1S44.4,7.8,41.7,7.6Z M28.8,21.9c2.2.2,4.1-2.1,4.5-5.1s-1.1-5.7-3.2-6-4.1,2.1-4.5,5.1S26.7,21.6,28.8,21.9Z M20.1,23.3c1.6.1,3.1-1.8,3.4-4.4s-.8-4.7-2.4-4.9-3,1.8-3.3,4.3S18.5,23.1,20.1,23.3Z M14.9,25.5c1.4-.2,2.4-1.9,2.1-3.9s-1.6-3.4-3-3.3-2.4,2-2.2,3.9S13.4,25.7,14.9,25.5Z M10.9,29.2c1-.1,1.7-1.4,1.5-2.8s-1.1-2.5-2.2-2.4-1.7,1.4-1.6,2.8S9.8,29.3,10.9,29.2Z"
        />
        <symbol id="feet-left" viewBox="0 0 100 100">
          <rect x="0" y="0" width="100" height="100" fill="none" />
          <use xlink:href="#feet-shape" />
        </symbol>
        <symbol id="feet-right" viewBox="0 0 100 100">
          <rect x="0" y="0" width="100" height="100" fill="none" />
          <g transform="scale(-1, 1) translate(-100, 0)">
            <use xlink:href="#feet-shape" />
          </g>
        </symbol>
      </defs>
      <use />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
  const svgEl = document.querySelector('svg') as SVGElement
  let feetEls: any[] = []

  const pointer = {
    x: 0,
    y: 0,
    dx: 0,
    dy: 0,
    angle: 0,
    moving: false,
    justStopped: false
  }

  const stepsNumber = 9
  const iconSize = 50
  const mouseRepel = 35
  const feetPositions: any[] = []

  updateLayout()
  window.addEventListener('resize', updateLayout)

  createFeet()

  let stepsCnt = 0
  let accumDx = 0
  let accumDy = 0
  let accumDist = 0

  let introAnimationIsPlaying = false
  render()
  introAnimation()

  window.addEventListener('mousemove', e => {
    if (!introAnimationIsPlaying) {
      onPointerMove(e.pageX, e.pageY)
    }
  })
  window.addEventListener('touchmove', e => {
    if (!introAnimationIsPlaying) {
      onPointerMove(e.targetTouches[0].pageX, e.targetTouches[0].pageY)
    }
  })

  function updateLayout() {
    svgEl.setAttribute(
      'viewBox',
      '0 0 ' + window.innerWidth + ' ' + window.innerHeight
    )
  }

  function createFeet() {
    for (let i = 0; i < stepsNumber; i++) {
      // const el = document.createElementNS('http://www.w3.org/2000/svg', 'use')
      const el = document.querySelector('use')!
      el.setAttribute('href', i % 2 ? '#feet-left' : '#feet-right')
      el.setAttribute('x', '-' + 0.5 * iconSize)
      el.setAttribute('y', '-' + 0.5 * iconSize)
      el.setAttribute('width', '' + iconSize)
      el.setAttribute('height', '' + iconSize)
      // svgEl.appendChild(el)

      feetPositions.push({ x: 0, y: 0, angle: 0, age: 0 })
      feetEls.push(el)

      gsap.set(el, {
        opacity: 0,
        transformOrigin: 'center center'
      })
    }
  }

  function onPointerMove(x, y) {
    pointer.dx = x - pointer.x
    pointer.dy = y - pointer.y
    pointer.x = x
    pointer.y = y
    pointer.moving = true

    accumDx += pointer.dx
    accumDy += pointer.dy
    pointer.angle = Math.atan2(pointer.dx, pointer.dy)
    accumDist = Math.sqrt(Math.pow(accumDx, 2) + Math.pow(accumDy, 2))

    if (accumDist > 70) {
      stepsCnt++
      accumDx = 0
      accumDy = 0
      accumDist = 0

      feetPositions.unshift({
        x: pointer.x,
        y: pointer.y,
        angle: (1 - pointer.angle / Math.PI) * 180,
        age: 1
      })
      feetPositions.length = stepsNumber

      feetPositions[0].x -= Math.sin(pointer.angle) * mouseRepel
      feetPositions[0].y -= Math.cos(pointer.angle) * mouseRepel

      for (let fIdx = 1; fIdx < stepsNumber; fIdx++) {
        updateFootEl(feetEls[fIdx], fIdx, fIdx % 2 === stepsCnt % 2)
      }

      gsap.set(feetEls[0], {
        opacity: 0
      })
    }
  }

  function render() {
    for (let fIdx = 1; fIdx < stepsNumber; fIdx++) {
      feetPositions[fIdx].age -= pointer.moving ? 0.05 : 0.1
    }

    for (let fIdx = 2; fIdx < stepsNumber; fIdx++) {
      gsap.set(feetEls[fIdx], {
        opacity: feetPositions[fIdx].age
      })
    }

    if (pointer.moving) {
      pointer.moving = false
      pointer.justStopped = true
    } else if (pointer.justStopped) {
      pointer.justStopped = false

      // Do it once when cursor stopped moving
      updateFootEl(feetEls[0], 0, 0 === stepsCnt % 2)
      gsap.set(feetEls[0], {
        opacity: 1
      })

      updateFootEl(feetEls[1], 0, 1 === stepsCnt % 2, 0.1)
      gsap.set(feetEls[1], {
        delay: 0.1,
        opacity: 1
      })

      for (let fIdx = 2; fIdx < stepsNumber; fIdx++) {
        updateFootEl(feetEls[fIdx], fIdx - 1, (fIdx - 1) % 2 === stepsCnt % 2)
      }
    }

    requestAnimationFrame(render)
  }

  function updateFootEl(el, posIdx, isLeft, delay = 0) {
    gsap.set(el, {
      delay: delay,
      x: feetPositions[posIdx].x,
      y: feetPositions[posIdx].y,
      rotation: feetPositions[posIdx].angle,
      attr: {
        href: isLeft ? '#feet-left' : '#feet-right'
      }
    })
  }

  function introAnimation() {
    introAnimationIsPlaying = true
    const mouseCoords = { x: -100, y: window.innerHeight }
    gsap
      .timeline({
        onUpdate: () => {
          onPointerMove(mouseCoords.x, mouseCoords.y)
        },
        onComplete: () => {
          introAnimationIsPlaying = false
        }
      })
      .to(mouseCoords, {
        x: 0.4 * window.innerWidth,
        ease: 'power1.out'
      })
      .to(
        mouseCoords,
        {
          y: 0.6 * window.innerHeight,
          ease: 'back.out(3)'
        },
        0
      )
  }
})
</script>

<style scoped>
svg {
  display: block;
}
</style>
