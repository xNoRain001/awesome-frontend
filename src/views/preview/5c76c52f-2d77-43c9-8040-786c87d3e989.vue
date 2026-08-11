<template>
  <div
    @mousemove="handleOnMove($event)"
    @touchmove="handleOnMove($event.touches[0])"
    class="size-full"
  >
    <img
      class="image"
      data-index="0"
      data-status="inactive"
      src="https://images.unsplash.com/photo-1663583513676-9f6361cd859d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    />
    <img
      class="image"
      data-index="1"
      data-status="inactive"
      src="https://images.unsplash.com/photo-1663530294185-5af3692326c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80"
    />
    <img
      class="image"
      data-index="2"
      data-status="inactive"
      src="https://images.unsplash.com/photo-1663579111009-863bc978c78e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    />
    <img
      class="image"
      data-index="3"
      data-status="inactive"
      src="https://images.unsplash.com/photo-1663492412083-17bfcad3c533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    />
    <img
      class="image"
      data-index="4"
      data-status="inactive"
      src="https://images.unsplash.com/photo-1663571473113-d3fc49bbe775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
    />
    <img
      class="image"
      data-index="5"
      data-status="inactive"
      src="https://images.unsplash.com/photo-1663431263243-ef4aa402afc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    />
    <img
      class="image"
      data-index="6"
      data-status="inactive"
      src="https://images.unsplash.com/photo-1663330082092-11fa01e1ee8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    />
    <img
      class="image"
      data-index="7"
      data-status="inactive"
      src="https://images.unsplash.com/photo-1663450806250-da193dc36368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1149&q=80"
    />
    <img
      class="image"
      data-index="8"
      data-status="inactive"
      src="https://images.unsplash.com/photo-1663352248740-645afa021c9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    />
    <img
      class="image"
      data-index="9"
      data-status="inactive"
      src="https://images.unsplash.com/photo-1663431905837-09cf339461ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2207&q=80"
    />
  </div>
</template>

<script lang="ts" setup>
let globalIndex = 0
let last = { x: 0, y: 0 }

const activate = (image, x, y) => {
  image.style.left = `${x}px`
  image.style.top = `${y}px`
  image.style.zIndex = globalIndex

  image.dataset.status = 'active'

  last = { x, y }
}

const distanceFromLast = (x, y) => {
  return Math.hypot(x - last.x, y - last.y)
}

const handleOnMove = e => {
  if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 20) {
    const images = document.getElementsByClassName('image')
    const lead = images[globalIndex % images.length],
      tail = images[(globalIndex - 5) % images.length]

    activate(lead, e.clientX, e.clientY)

    if (tail) tail.dataset.status = 'inactive'

    globalIndex++
  }
}
</script>

<style scoped>
.image {
  width: 40vmin;
  position: absolute;
  transform: translate(-50%, -50%);
}

.image[data-status='inactive'] {
  display: none;
}

.image[data-status='active'] {
  display: block;
}
</style>
