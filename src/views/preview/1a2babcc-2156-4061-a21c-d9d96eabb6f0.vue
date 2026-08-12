<template>
  <div class="sneaker-container relative cursor-col-resize">
    <img
      src="https://res.cloudinary.com/losrodriguez/image/upload/v1659457324/tci-sneaker-clean_xmvucf.png"
      alt="Clean"
      class="sneaker-clean"
    />
    <img
      src="https://res.cloudinary.com/losrodriguez/image/upload/v1659457324/tci-sneaker-dirty_lwxyzt.png"
      alt="Dirty"
      class="sneaker-dirty"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

class TCIClean {
  container: HTMLElement
  clean: HTMLElement
  dirty: HTMLElement
  friction: number
  x: number
  inOver: boolean
  mouse: {
    x: number
    y: number
  }

  constructor(_container) {
    if (!_container) throw 'Container es requerido'
    this.container = document.querySelector(_container)
    this.clean = this.container.querySelector('.sneaker-clean') as HTMLElement
    this.dirty = this.container.querySelector('.sneaker-dirty') as HTMLElement
    this.friction = 0.15
    this.x = 50
    this.inOver = false
    this.mouse = {
      x: 0,
      y: 0
    }
    this.events()
    this.animate()
  }

  events() {
    this.container.addEventListener(
      'pointerenter',
      e => this.onPointerEnter(e),
      false
    )
    this.container.addEventListener(
      'pointerleave',
      e => this.onPointerLeave(e),
      false
    )
    this.container.addEventListener(
      'pointermove',
      e => this.onPointerMove(e),
      false
    )
  }

  onPointerEnter(e) {
    this.friction = 0.15
    this.inOver = true
  }

  onPointerLeave(e) {
    this.friction = 0.075
    this.inOver = false
  }

  onPointerMove(e) {
    this.mouse = {
      x: e.clientX,
      y: e.clientY
    }
    this.render()
  }

  get percentX() {
    if (!this.inOver) return 50
    const _x = this.mouse.x - this.offset.x
    return parseInt(String((_x / this.rect.width) * 100))
  }

  get rect() {
    return this.container.getBoundingClientRect()
  }

  get offset() {
    return {
      x: this.rect.left,
      y: this.rect.top
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate())
    this.render()
  }

  render() {
    this.x += (this.percentX - this.x) * this.friction
    this.dirty.style.clipPath = `inset(0% 0% 0% ${this.x}%)`
  }
}

onMounted(() => {
  new TCIClean('.sneaker-container')
})
</script>

<style lang="scss" scoped>
.sneaker-clean {
  float: left;
}

.sneaker-dirty {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
  clip-path: inset(0% 50% 0% 0%);
}
</style>
