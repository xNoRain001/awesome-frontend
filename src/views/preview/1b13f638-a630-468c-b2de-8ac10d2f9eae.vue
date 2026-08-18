<template>
  <div class="box">
    <button class="btn">
      <span>Let's go</span>
      <canvas id="canvas"></canvas>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  const CANVAS = document.querySelector('#canvas')
  const btnEl = document.querySelector('.btn')
  const ctx = CANVAS.getContext('2d')
  const NUM_PARTICLES = 50
  const MAX_Z = 2
  const MAX_R = 2
  const Z_SPD = 2
  const PARTICLES = []
  let W,
    H,
    XO,
    YO = 0

  let isGoing = false

  class Particle {
    constructor(x, y, z) {
      this.pos = new Vector(x, y, z)
      const X_VEL = 0,
        Y_VEL = 0,
        Z_VEL = -Z_SPD
      this.vel = new Vector(X_VEL, Y_VEL, Z_VEL)
      this.vel.scale(0.01)
      this.fill = 'rgba(255,255,255,0.3)'
      this.stroke = this.fill
    }

    update() {
      this.pos.add(this.vel)
    }

    render() {
      const PIXEL = to2d(this.pos),
        X = PIXEL[0],
        Y = PIXEL[1],
        R = ((MAX_Z - this.pos.z) / MAX_Z) * MAX_R

      if (X < 0 || X > W || Y < 0 || Y > H) this.pos.z = MAX_Z

      this.update()
      ctx.beginPath()
      ctx.fillStyle = this.fill
      ctx.strokeStyle = this.stroke
      ctx.arc(X, PIXEL[1], R, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()
      ctx.closePath()
    }
  }

  class Vector {
    constructor(x, y, z) {
      this.x = x
      this.y = y
      this.z = z
    }

    add(v) {
      this.x += v.x
      this.y += v.y
      this.z += v.z
    }

    scale(n) {
      this.x *= n
      this.y *= n
      this.z *= n
    }
  }

  function to2d(v) {
    const X_COORD = v.x - XO,
      Y_COORD = v.y - YO,
      PX = X_COORD / v.z,
      PY = Y_COORD / v.z
    return [PX + XO, PY + YO]
  }

  const createParticles = () => {
    for (let i = 0; i < NUM_PARTICLES; i++) {
      const X = Math.random() * W,
        Y = Math.random() * H,
        Z = Math.random() * MAX_Z
      PARTICLES.push(new Particle(X, Y, Z))
    }
  }

  function render() {
    for (let i = 0; i < PARTICLES.length; i++) {
      PARTICLES[i].render()
    }
  }

  function loop() {
    requestAnimationFrame(loop)
    if (isGoing) {
      ctx.fillStyle = 'rgba(0,0,0,0.15)'
      ctx.fillRect(0, 0, W, H)
      render()
    } else {
      ctx.clearRect(0, 0, W, H)
    }
  }
  const onBtnClick = ev => {
    if (isGoing) {
      isGoing = false
      btnEl.classList.remove('active')
    } else {
      isGoing = true
      btnEl.classList.add('active')
    }
    console.log('changed to', isGoing)
  }

  const init = () => {
    btnEl.addEventListener('click', onBtnClick)
    canvas.width = W = btnEl.offsetWidth
    canvas.height = H = btnEl.offsetHeight
    XO = W / 2
    YO = H / 2
    createParticles()
    loop()
  }

  init()
})
</script>

<style lang="scss" scoped>
.btn {
  background: #fff;
  position: relative;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 1em 4em;
  border-radius: 100px;
  overflow: hidden;
  font-size: 21px;
  &.active {
    background: #000;
    border: 1px solid white;
    span {
      color: white;
    }
  }
  span {
    font-size: 2em;
    position: relative;
    z-index: 200;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
  }
  canvas {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
