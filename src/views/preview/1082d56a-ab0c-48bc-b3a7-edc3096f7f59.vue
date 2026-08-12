<template>
  <div class="wrapper">
    <div class="box" data-i="13" data-title="⇒⊚⇐"></div>
    <div class="box" data-i="0" data-title="↓"></div>
    <div class="box" data-i="1" data-title="→"></div>
    <div class="box" data-i="2" data-title="🎲"></div>
    <div class="box" data-i="3" data-title="↖"></div>
    <div class="box" data-i="4" data-title="↘"></div>
    <div class="box" data-i="5" data-title="↗"></div>
    <div class="box" data-i="6" data-title="↙"></div>
    <div class="box" data-i="7" data-title="↖↘"></div>
    <div class="box" data-i="8" data-title="↘↖"></div>
    <div class="box" data-i="9" data-title="🤔"></div>
    <div class="box" data-i="10" data-title="↙↗"></div>
    <div class="box" data-i="11" data-title="↗↙"></div>
    <div class="box" data-i="12" data-title="⇐⊚⇒"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

class GridAnimation {
  constructor(el, row = 13, col = 9) {
    this.element = el
    this.fragments = el.children
    this.row = row
    this.col = col
    this.duration = 2000
    this.delayDelta = 70
    this.type = null

    this.randomIntBetween = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    this.element.style.setProperty('--row', this.row)
    this.element.style.setProperty('--col', this.col)
    this.element.addEventListener('click', this.trigger)
  }

  trigger = () => {
    if (this.fragments.length > 0) this.clear()
    this.element.classList.add('hide')
    this.animate()
  }

  setType = type => {
    this.type = type
  }

  clear = () => {
    while (this.element.hasChildNodes()) {
      this.element.removeChild(this.element.firstChild)
    }
  }

  animate = () => {
    if (this.type === null) return
    const x = this.col - 1
    const y = this.row - 1
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        const fragment = document.createElement('div')
        fragment.className = 'fragment'
        fragment.style.setProperty('--x', j)
        fragment.style.setProperty('--y', i)

        let delay = 0
        switch (this.type) {
          case 0:
            delay = i * 2
            break
          case 1:
            delay = j * 2
            break
          case 2:
            delay = this.randomIntBetween(0, x + y)
            break
          case 3:
            delay = x + y - (j + i)
            break
          case 4:
            delay = i + j
            break
          case 5:
            delay = x - i + j
            break
          case 6:
            delay = i + (y - j)
            break
          case 7:
            delay = Math.abs((x + y) / 2 - (j + i))
            break
          case 8:
            delay = (x + y) / 2 - Math.abs((x + y) / 2 - (j + i))
            break
          case 9:
            delay =
              (x + y) / 2 - Math.abs((x + y) / 2 - (j + i)) * Math.cos(i + j)
            break
          case 10:
            delay = Math.abs((x + y) / 2 - (x - j + i))
            break
          case 11:
            delay = Math.abs((x + y) / 2 - Math.abs((x + y) / 2 - (x - j + i)))
            break
          case 12:
            delay = Math.abs(x / 2 - j) + Math.abs(y / 2 - i)
            break
          case 13:
            delay = x / 2 - Math.abs(x / 2 - j) + (x / 2 - Math.abs(y / 2 - i))
            break
        }

        const isOdd = (i + j) % 2 === 0
        fragment.style.setProperty(
          '--rotateX',
          `rotateX(${isOdd ? -180 : 0}deg)`
        )
        fragment.style.setProperty(
          '--rotateY',
          `rotateY(${isOdd ? 0 : -180}deg)`
        )
        fragment.style.setProperty('--delay', delay * this.delayDelta + 'ms')
        fragment.style.setProperty('--duration', this.duration + 'ms')
        this.element.appendChild(fragment)

        const timer = setTimeout(
          () => {
            fragment.style.willChange = 'initial'
            fragment.style.transform = 'initial'
            fragment.style.animation = 'initial'
            fragment.style.backfaceVisibility = 'initial'
            fragment.style.opacity = 1
            clearTimeout(timer)
          },
          this.duration + delay * this.delayDelta
        )
      }
    }
  }
}

onMounted(() => {
  document.querySelectorAll('.box').forEach((box, index) => {
    const gridAnimation = new GridAnimation(box)
    const type = parseInt(box.getAttribute('data-i'))
    gridAnimation.setType(type)
    if (index === 0) gridAnimation.trigger()
  })
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 7rem 5rem;
  margin: 5rem 0;
}

@media (max-width: 480px) {
  .wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 1300px) {
  .wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}

.box {
  --box-width: 20rem;
  --box-height: 30rem;
  --frag-width: calc(var(--box-width) / var(--col));
  --frag-height: calc(var(--box-height) / var(--row));
  --img-url: url('https://djjjk9bjm164h.cloudfront.net/leather01.jpg');
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: var(--box-width);
  height: var(--box-height);
  position: relative;
}

.box::before {
  content: attr(data-title);
  position: absolute;
  top: calc(100% + 1.5rem);
  font-size: 1.7rem;
}

.box::after {
  content: 'CLICK ME';
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  color: #aaa;

  background-image: repeating-linear-gradient(
    -45deg,
    rgba(100, 100, 100, 0.25),
    rgba(100, 100, 100, 0.25) 1px,
    transparent 1px,
    transparent 6px
  );
  background-size: 4px 4px;
  transition: all 0.2s;
}

.box.hide::after {
  opacity: 0;
}
.box.hide:hover::after {
  opacity: 0;
}
.box:hover::after {
  background-image: initial;
  font-size: 1.8rem;
}

.fragment {
  --x-offset: calc(var(--x) * var(--frag-width) * -1);
  --y-offset: calc(var(--y) * var(--frag-height) * -1);
  --rotateX: rotateX(0);
  --rotateY: rotateY(0);
  width: var(--frag-width);
  height: var(--frag-height);
  background: var(--img-url) var(--x-offset) var(--y-offset) / var(--box-width)
    var(--box-height) no-repeat;
  backface-visibility: hidden;
  will-change: transform;
  transform: var(--rotateX) var(--rotateY) scale(0.8);
  animation: flip var(--duration) linear var(--delay) forwards;
  opacity: 0;
}
@keyframes flip {
  0% {
    transform: var(--rotateX) var(--rotateY) scale(0.8);
    opacity: 0;
  }
  15% {
    transform: var(--rotateX) var(--rotateY) scale(0.8);
    opacity: 0;
  }
  70% {
    transform: rotateX(0) rotateY(0) scale(0.8);
    opacity: 1;
  }
  100% {
    transform: rotateX(0) rotateY(0) scale(1);
    opacity: 1;
  }
}
</style>
