<template>
  <div class="canvas">
    <div class="puddle" style="--x: 1.55em; --y: 3.73em">Roses are red</div>
    <div class="puddle" style="--x: 1.5em; --y: 1.8em">Violets are blue</div>
    <div class="puddle" style="--x: -1.5em; --y: -1.8em">Unexpected ";"</div>
    <div class="puddle" style="--x: -1.3em; --y: -3.7em">On line 32</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

class Droppy {
  DEFAULT_OPTIONS = {
    canvasSelector: '.canvas',
    textSelector: '.puddle',
    letterClassName: 'puddle__letter',
    dropsClassName: 'combined-puddles',
    delayBetweenDrops: 95,
    dropTypes: 10,
    wordAngleRange: [-3, 3]
  }

  constructor(opts) {
    this.opts = { ...this.DEFAULT_OPTIONS, ...opts }
    this.$textSelector = document.querySelectorAll(this.opts.textSelector)
    this.$canvas = document.querySelector(this.opts.canvasSelector)
    this.init()
  }

  init() {
    this.injectSVGFilter()
    this.wrapLetters()
    this.addDelayToEachLetter()
    this.createDrops()
    this.startAnimation()
  }

  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  startAnimation() {
    this.$canvas.classList.add('canvas--animated')
  }

  wrapLetters() {
    this.$textSelector.forEach($word => {
      const letters = Array.from($word.innerText).map(letter => {
        const dropType = this.getRandomInt(1, this.opts.dropTypes)
        const className = `${this.opts.letterClassName} ${this.opts.letterClassName}--t-${dropType}`
        return `<div class="${className}">${letter}</div>`
      })
      const angle = this.getRandomInt(
        this.opts.wordAngleRange[0],
        this.opts.wordAngleRange[1]
      )

      $word.style.cssText += `--r:${angle}deg`
      $word.innerHTML = letters.join('')
    })
  }

  addDelayToEachLetter() {
    const letters = document.querySelectorAll(`.${this.opts.letterClassName}`)

    Array.from(letters, ($letter, index) => {
      const delay = index * this.opts.delayBetweenDrops
      $letter.style.cssText += `--delay:${delay}ms`
    })
  }

  createDrops() {
    const $drops = document.createElement('div')
    $drops.className = this.opts.dropsClassName

    Array.from(this.$textSelector, $word =>
      $drops.appendChild($word.cloneNode(true))
    )

    this.$canvas.appendChild($drops)
  }

  injectSVGFilter() {
    const filter =
      '<svg style="display:none;"><filter id="drops-filter" x="-50%" width="200%" y="-50%" height="200%" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" /></filter></svg>'
    this.$canvas.insertAdjacentHTML('beforeend', filter)
  }
}

onMounted(() => {
  new Droppy()
})
</script>

<style lang="scss" scoped>
@use 'sass:math';

@function randomNum($min, $max) {
  $randomNum: $min + math.random() * ($max - $min);
  @return $randomNum;
}

:where(.canvas) {
  --text-color: #f6f1e6;
  --drops-color: #231d1c;
}

.canvas {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &--animated {
    .puddle__letter {
      animation-play-state: running;
    }
  }
}

.puddle {
  position: absolute;
  display: flex;
  transform: rotate(var(--r, 0deg))
    translate(calc(-50% - var(--x, 0)), calc(-50% - var(--y, 0)));
  top: 50%;
  left: 50%;
  color: var(--text-color);
  font-size: 6vmin;
  white-space: pre;

  &__letter {
    transform: translateY(800px);
    padding: 0.1em 0.2em;
    margin: -0.1em -0.2em;
    will-change: transform;
    animation: drop 0.8s var(--delay) ease-out forwards paused;
  }
}

.combined-puddles {
  position: relative;
  height: 100%;
  z-index: -1;
  filter: url(#drops-filter);
  user-select: none;

  .puddle__letter {
    border-radius: 50%;
    color: var(--drops-color);
    background-color: currentColor;

    @for $i from 1 through 10 {
      &--t-#{$i} {
        box-shadow: #{randomNum(-0.03, 0.03)}em
          #{randomNum(-0.03, 0.03)}em
          0
          #{randomNum(0.2, 0.4)}em
          currentColor;
      }
    }
  }
}

@keyframes drop {
  0% {
    transform: translate(0, 100vh);
  }
  85% {
    transform: translate(0, -0.15em);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
