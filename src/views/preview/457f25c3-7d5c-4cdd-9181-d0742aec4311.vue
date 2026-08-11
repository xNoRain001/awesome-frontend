<template>
  <div class="scene">
    <div class="bg-typography">
      <span>Book</span>
      <span>Gallery</span>
    </div>

    <div ref="bookRef" class="galeria-book-3d">
      <div class="galeria-book-3d__item" style="--i: 0">
        <img
          src="https://images.unsplash.com/photo-1767122374969-82c7acbbb4ed?q=80&w=400&auto=format&fit=crop"
          alt="Front 1"
        />
        <img
          src="https://images.unsplash.com/photo-1764617755316-ffb5ff87c2d7?q=80&w=400&auto=format&fit=crop"
          alt="Back 1"
        />
      </div>
      <div class="galeria-book-3d__item" style="--i: 1">
        <img
          src="https://images.unsplash.com/photo-1767749559743-d2e4d8031d4f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Front 2"
        />
        <img
          src="https://images.unsplash.com/photo-1767700358934-3466f476d948?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Back 2"
        />
      </div>
      <div class="galeria-book-3d__item" style="--i: 2">
        <img
          src="https://images.unsplash.com/photo-1767517734918-d0969751b6b6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Front 3"
        />
        <img
          src="https://images.unsplash.com/photo-1764377724372-d42fed3f442b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Back 3"
        />
      </div>
      <div class="galeria-book-3d__item" style="--i: 3">
        <img
          src="https://images.unsplash.com/photo-1767518782545-17fa47a602e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Front 4"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1747851577288-c75149e91e1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Back 4"
        />
      </div>
      <div class="galeria-book-3d__item" style="--i: 4">
        <img
          src="https://plus.unsplash.com/premium_photo-1666264200758-1c03db7f530c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Front 5"
        />
        <img
          src="https://images.unsplash.com/photo-1763906667544-02814d191864?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Back 5"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue'

const bookRef = useTemplateRef('bookRef')

const updateContainerState = (items: NodeListOf<Element>) => {
  const { classList } = bookRef.value!
  const anyOpen = Array.from(items).some(item =>
    item.classList.contains('is-open')
  )

  if (anyOpen) {
    classList.add('book-open')
  } else {
    classList.remove('book-open')
  }
}

const onClick = () => {
  const items = document.querySelectorAll('.galeria-book-3d__item')

  items.forEach(item => {
    item.classList.remove('is-open')
  })
  updateContainerState(items)
}

onMounted(() => {
  const items = document.querySelectorAll('.galeria-book-3d__item')

  items.forEach(item => {
    item.addEventListener('click', e => {
      e.stopPropagation()
      item.classList.toggle('is-open')
      updateContainerState(items)
    })
  })

  document.addEventListener('click', onClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClick)
})
</script>

<style scoped>
@property --page-rotate {
  syntax: '<angle>';
  inherits: true;
  initial-value: 0deg;
}
@property --spine-shift {
  syntax: '<length>';
  inherits: true;
  initial-value: 0px;
}

.scene {
  width: 100%;
  height: 100%;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  background-image: url('https://images.unsplash.com/photo-1763152496539-302ef51ef66f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
}

.bg-typography {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  font-size: clamp(4rem, 15vw, 15rem);
  font-weight: 800;
  line-height: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5vw;
  pointer-events: none;
  z-index: 0;
  mix-blend-mode: exclusion;
  color: white;
}

.bg-typography span {
  display: block;
}

.galeria-book-3d {
  position: relative;
  width: 200px;
  height: 300px;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  --spine-shift: 0px;

  transform: translateX(var(--spine-shift));
  transition: --spine-shift 0.5s ease;
}

.galeria-book-3d.book-open {
  --spine-shift: 100px;
}

.galeria-book-3d__item {
  position: absolute;
  width: 200px;
  height: 300px;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: left center;
  --page-rotate: 0deg;
  transform: rotateY(var(--page-rotate));
  transition:
    --page-rotate 0.5s ease-in-out,
    z-index 0s;
  transition-delay:
    calc((4 - var(--i)) * 0.1s), calc((4 - var(--i)) * 0.1s + 0.25s);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: calc(10 - var(--i));
}

.galeria-book-3d__item.is-open {
  --page-rotate: -180deg;
  transition-delay: 0s, 0s;
  z-index: calc(20 + var(--i));
}

.galeria-book-3d__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  background: #f4f4f4;
  backface-visibility: hidden;
}

.galeria-book-3d__item img:nth-child(2) {
  transform: rotateY(180deg) translateZ(1px);
  z-index: 1;
}
</style>
