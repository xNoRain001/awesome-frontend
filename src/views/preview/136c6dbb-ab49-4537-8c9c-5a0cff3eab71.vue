<template>
  <div class="wrapper relative size-full">
    <!-- Author: Giovanni Antonio -->
    <div class="viewport">
      <div class="canvas">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div class="selected"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="map-container">
      <div class="map">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <button class="back" id="back">close</button>
    <div class="focus-container">
      <button class="focus" aria-labelledby="ally-zoom">
        <span class="visuallyhidden" id="ally-zoom">expand image</span>
      </button>
    </div>
    <div class="zoom-container">
      <div class="zoom">
        <div class="zoom__input">
          <input
            type="range"
            id="zoom"
            name="zoom"
            min="0.375"
            max=".75"
            value=".375"
            step="0.041666666666666664"
            orient="vertical"
          />
          <div class="lines">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <label for="zoom" class="">zoom</label>
        </div>
        <div class="datalist">
          <div>[.750]</div>
          <div>[.562]</div>
          <div>[.375]</div>
        </div>
      </div>
    </div>
    <div class="mas">
      <div class="v"></div>
      <div class="h"></div>
      <div class="r"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  // EXPERIMENTAL
  const index = el => [...el.parentElement.children].indexOf(el)
  const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a))
  const keyboard = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter']
  function init() {
    const stateTransition = {
      state: false,
      transitionrun: function () {
        this.state = true
      },
      transitionstart: function () {
        this.state = true
      },
      transitionend: function () {
        this.state = false
      }
    }
    // keep them low-res for demo purposes only
    const assets = [
      'https://images.unsplash.com/photo-1625041083884-c4293dc93fbb?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=800&q=60',
      'https://images.unsplash.com/photo-1625041083904-7a27ded23406?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=800&q=60',
      'https://images.unsplash.com/photo-1614247262098-76459e80e152?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTh8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=800&q=60',
      'https://images.unsplash.com/photo-1588260693059-2631306cc8b4?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=800&q=60',
      'https://images.unsplash.com/photo-1588260540782-445cfdd2dad7?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=800&q=60',
      'https://images.unsplash.com/photo-1588260405938-978e6dfdcb82?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mzh8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=800&q=60',
      'https://images.unsplash.com/photo-1588260275819-27c6226610b0?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=800&q=60',
      'https://images.unsplash.com/photo-1588260115080-6e0a98cfaee7?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=800&q=60',
      'https://images.unsplash.com/photo-1586536528489-73f38bbdfb84?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTd8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=800&q=60',
      'https://images.unsplash.com/photo-1584728092269-1c2b76cd26ac?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Njl8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=800&q=60',
      'https://images.unsplash.com/photo-1581593168755-c592b70b2538?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTUxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=800&q=60',
      'https://images.unsplash.com/photo-1579168133409-34acb719c8b6?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTgwfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=800&q=60',
      'https://images.unsplash.com/photo-1575994999937-4511cd095548?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjE4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=800&q=60',
      'https://images.unsplash.com/photo-1625041188458-aebddbaedfd1?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=800&q=60',
      'https://images.unsplash.com/photo-1625041153191-8032ff14b6a6?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=800&q=60',
      'https://images.unsplash.com/photo-1588260275894-4f51cc4c12b1?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mzl8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=800&q=60'
    ]

    const root = document.documentElement
    const body = document.body
    const viewport = document.querySelector('.viewport')
    const canvas = document.querySelector('.canvas')
    const map = document.querySelector('.map')
    const focus = document.querySelector('.focus')
    const back = document.querySelector('#back')
    const zoom = document.querySelector('#zoom')
    let item = canvas.querySelector('.selected')
    let id = index(item)
    let transition = false
    let coords = {
      x: 0,
      y: 0
    }
    const min = parseFloat(zoom.min)
    const max = parseFloat(zoom.max)
    let scale = min

    const gridSize = getComputedStyle(root).getPropertyValue('--gridSize')

    const translateCanvas = () => {
      canvas.style.setProperty('--x', coords.x)
      canvas.style.setProperty('--y', coords.y)
    }

    const panningTo = i => {
      coords.x = i % gridSize
      coords.y = Math.floor(i / gridSize)
      translateCanvas()
    }

    const makeSelection = sel => {
      item.classList.remove('selected')
      map.children[index(item)].classList.remove('selected')

      item = canvas.children[sel]

      item.classList.add('selected')
      map.children[sel].classList.add('selected')

      id = index(item)
      panningTo(id)
      // setTimeout(()=>{
      // 	root.classList.toggle("open");
      // }, 1100)
    }

    const handleSelection = ev => {
      ev.preventDefault()

      if (stateTransition.state) return false
      if (ev.target === item) return false
      if (ev.target === ev.currentTarget || ev.target.nodeName === 'IMG')
        return false
      makeSelection(index(ev.target))
      ev.stopPropagation()
    }

    const handleOpenImage = ev => {
      if (stateTransition.state) return false

      ev.preventDefault()
      root.classList.toggle('open')
      ev.stopPropagation()
    }

    const handleZoom = ev => {
      if (stateTransition.state) return false

      ev.preventDefault()
      let zoomValue = ev.target.value
      viewport.style.setProperty('--zoom', zoomValue)
      ev.stopPropagation()
    }

    const handleZoomFromWheel = function (ev) {
      if (stateTransition.state) return false
      // ev.preventDefault();

      scale += ev.deltaY * -0.1
      scale = clamp(scale, min, max)
      viewport.style.setProperty('--zoom', scale)
      zoom.value = scale
    }

    document.addEventListener('wheel', handleZoomFromWheel)

    const handleKeyboard = ev => {
      if (stateTransition.state) return false
      ev.preventDefault()

      let tempX = coords.x,
        tempY = coords.y,
        tempIndex = id,
        max = gridSize - 1

      switch (ev.keyCode) {
        case 37: // left
          tempX--
          break
        case 39: // right
          tempX++
          break
        case 38: // up
          tempY--
          break
        case 40: // down
          tempY++
          break
        case 13: // enter
          handleOpenImage(ev)
          return true
        default:
          return false
      }
      coords.x = clamp(tempX, 0, max)
      coords.y = clamp(tempY, 0, max)

      tempIndex = coords.y * gridSize + coords.x // get index position from x,y

      makeSelection(tempIndex)

      ev.stopPropagation()
    }

    const handleLoad = () => {
      let assetsCount = 0
      // selection
      panningTo(id)
      map.children[id].classList.add('selected')

      // Append images may fail!
      ;[...canvas.querySelectorAll('div')].forEach((v, i) => {
        let img = new Image()
        v.innerHTML = ''
        let asset = assets[i]
          .replace('1280', window.innerWidth * 1.5)
          .replace('800', window.innerHeight * 1.5)
        img.src = asset
        img.crossOrigin = ''
        img.onload = () => {
          img.alt = 'Art id ' + i
          img.width = img.naturalWidth
          img.height = img.naturalHeight
          assetsCount++
          v.appendChild(img)

          if (assetsCount === assets.length) {
            setTimeout(() => {
              root.className = 'loaded'
            }, 1000)
          }
        }

        v.classList.add('item')
      })
    }

    const addEvents = () => {
      document.addEventListener('keydown', handleKeyboard)
      canvas.addEventListener('click', handleSelection, false)
      map.addEventListener('click', handleSelection, false)
    }

    const removeEvents = () => {
      document.removeEventListener('keydown', handleKeyboard)
      canvas.removeEventListener('click', handleSelection, false)
      map.removeEventListener('click', handleSelection, false)
    }

    canvas.addEventListener('transitionrun', event => {
      stateTransition[event.type]()
      removeEvents()
    })
    canvas.addEventListener('transitionstart', event => {
      stateTransition[event.type]()
      body.classList.add('panning')
    })
    canvas.addEventListener('transitionend', event => {
      stateTransition[event.type]()
      body.classList.remove('panning')
      addEvents()
    })

    viewport.addEventListener('transitionrun', event => {
      stateTransition[event.type]()
    })
    viewport.addEventListener('transitionstart', event => {
      stateTransition[event.type]()
      body.classList.add('panning', 'panning-on')
    })
    viewport.addEventListener('transitionend', event => {
      stateTransition[event.type]()
      body.classList.remove('panning', 'panning-on')
    })

    focus.addEventListener('click', handleOpenImage, false)
    back.addEventListener('click', handleOpenImage, false)
    zoom.addEventListener('change', handleZoom)

    addEvents()
    window.addEventListener('load', handleLoad)
  }

  init()
})
</script>

<style lang="scss" scoped>
html {
  box-sizing: border-box;
  cursor: default;
  -webkit-tap-highlight-color: transparent;
  scroll-behavior: smooth;
  overflow-x: hidden;
  background-color: inherit;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 0;
  padding: 0;
  position: relative;
  border: none;
  font: inherit;
  vertical-align: baseline;
}

img {
  display: block;
  width: 100%;
  height: 100%;
}

.pannig,
.panning * {
  pointer-events: none !important;
}

body {
  color: inherit;
  background-color: inherit;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-overflow-scrolling: touch;
}

/* Hide scrollbar looks clean */
::-webkit-scrollbar {
  display: none;
}

/* a11Y */
.visuallyhidden {
  border: 0;
  clip: rect(1px 1px 1px 1px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.visuallyhidden.focusable:focus,
.visuallyhidden.focusable:active {
  clip: auto;
  height: 100%;
  text-align: center;
  margin: auto;
  padding: 20px;
  width: 100%;
  color: inherit;
  background: inherit;
  overflow: visible;
  position: fcxed;
  left: 0;
  right: 0;
  top: 0;
  outline: none;
}

.social {
  position: fixed;
  color: pink;
  z-index: 100;
  line-height: 1;
  font-size: 12px;
  left: 2rem;
  bottom: 1rem;
}

button,
input {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

/* AUTHOR : Giovanni Antonio */
:where(.wrapper) {
  --gridSize: 4;
  --ease-in: cubic-bezier(0.32, 0, 0.67, 0);
  --ease-out: cubic-bezier(0.33, 1, 0.68, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}

.mas {
  transform: rotate(0deg);
  transition: transform 0.6s;
  animation: rotate 0.1s var(--ease-in-out) both;
}

.loading .mas {
  transform: rotate(360deg);
  animation: rotate 1s var(--ease-in-out) infinite both;
}

@keyframes rotate {
  0% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.loading .viewport {
  opacity: 0;
}

.loaded .viewport {
  opacity: 1;
}

.viewport {
  --zoom: 0.375;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  transform: scale3d(var(--zoom), var(--zoom), 1);
  transform-origin: center;
  // will-change: transform;
  // transition: transform 1s var(--ease-in-out), opacity .9s var(--ease-in) .1s;
  transition-property: transform, opacity;
  transition-duration: 1s, 0.9s;
  transition-timing-function: var(--ease-in-out), var(--ease-in);
  transition-delay: 0s, 0.1s;
  opacity: 1;
  z-index: 4;
}

.canvas {
  --x: 0;
  --y: 0;
  --gap: 2rem;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(var(--gridSize), 100vw);
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  gap: var(--gap);
  margin: auto;
  transform: translate3d(
    calc((-100vw * var(--x, 0)) - (var(--gap) * var(--x, 0))),
    calc((-100vh * var(--y, 0)) - (var(--gap) * var(--y, 0))),
    0
  );
  transition: transform 0.9s var(--ease-in-out);
  transform-origin: left top;
  z-index: 5;
}
.panning {
  .viewport,
  .canvas {
    will-change: transform, opacity;
  }
}
.canvas div {
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  opacity: 0.25;
  overflow: hidden;
  background-color: #fff;
  transition: opacity 0.6s var(--ease-in-out);
  cursor: pointer;
}

.canvas img {
  position: absolute;
  transform: scale3d(2, 2, 2);
  transition: transform 1s var(--ease-in-out);
  will-change: transform;
  -o-object-fit: cover;
  object-fit: cover;
  overflow: hidden;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
}

.canvas .selected {
  opacity: 1;
  transition: opacity 0.6s var(--ease-in-out);
  pointer-events: none;
}

.focus-container {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 6;
  pointer-events: none;
}

.focus-container .focus {
  pointer-events: all;
}

.focus {
  width: 100%;
  height: 100%;
  transform: scale(0.375);
  margin: auto;
  border-radius: 2rem;
  border: 2px solid whitesmoke;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: zoom-in;
}

.map-container {
  opacity: 1;
  transition: opacity 0.6s var(--ease-in);
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 2rem;
  width: 8rem;
  height: 8rem;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background-color: rgba(34, 34, 34, 0.1);
  padding: 0.5rem;
  z-index: 7;
}

.map {
  display: grid;
  grid-template: repeat(var(--gridSize), 1fr) / repeat(var(--gridSize), 1fr);
  height: 100%;
  width: 100%;
  gap: 4px;
}

.map div {
  background-color: whitesmoke;
  border-radius: 0.1em;
  opacity: 0.1;
  transition: opacity 0.3s var(--ease-in-out);
}

.map .selected {
  pointer-events: none;
}

.map .selected,
.map div:hover {
  opacity: 1;
}

.back {
  position: absolute;
  top: 0;
  left: 0;
  margin: 2rem;
  padding: 0.5rem 1.5rem;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background-color: rgba(14, 13, 13, 0.4);
  border-radius: 2rem;
  color: whitesmoke;
  opacity: 0;
  transition: opacity 0.6s var(--ease-out);
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.03em;
  pointer-events: none;
  z-index: 8;
}

/* Zoom */
.zoom-container {
  display: flex;
  position: absolute;
  right: 0;
  bottom: 50%;
  height: 120px;
  color: whitesmoke;
  opacity: 1;
}

.zoom {
  display: flex;
  display: none;
  margin-right: 2rem;
}

.zoom__input {
  width: 50px;
}
.zoom__input label {
  margin-top: 1rem;
  font-size: 10px;
  text-transform: uppercase;
  display: inline-block;
}

.zoom input[type='range'] {
  -webkit-appearance: none;
  -ms-writing-mode: bt-lr;
  writing-mode: bt-lr;
  /* IE */
  text-align: center;
  position: absolute;
  width: 100px;
  height: 20px;
  top: 35px;
  bottom: 0;
  left: -40px;
  z-index: 9;
  transform: rotate(-90deg);
  transition: all 0.3s ease-in-out;
}

.zoom input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  background-color: white;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
}

.lines {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  width: 20px;
  pointer-events: none;
  z-index: -1;
  pointer-events: none;
}

.lines div {
  width: 100%;
  height: 1px;
  background-color: #fff;
  opacity: 0.8;
}

.datalist {
  width: 20px;
  height: 90px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  font-size: 10px;
  position: absolute;
  right: 5px;
  pointer-events: none;
}

.mas {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  pointer-events: none;
  z-index: 10;
  width: 2rem;
  height: 2rem;
  display: flex;
  opacity: 1;
  transition-property: opacity;
}
.mas .r {
  width: 5px;
  height: 5px;
  z-index: 1;
  background-color: #fff;
  margin: auto;
}
.mas .v,
.mas .h {
  background-color: #fff;
  position: absolute;
  margin: auto;
}
.mas .v {
  width: 1px;
  height: 100%;
  left: calc(1rem - 0.5px);
}
.mas .h {
  width: 100%;
  height: 1px;
  top: calc(1rem - 0.5px);
}

/* on trigger zoom actions */
.open .viewport {
  transform: scale3d(1, 1, 1);
  transition: transform 1s var(--ease-in-out);
}

.open .canvas .selected img {
  transform: scale3d(1, 1, 1);
  transition: transform 1s var(--ease-in-out);
}

.open .map-container {
  opacity: 0;
  transition: opacity 0.6s var(--ease-out);
}

.open .focus-container,
.open .zoom-container,
.open .mas {
  opacity: 0;
}

.open .focus {
  cursor: zoom-out;
}

.open .map-container {
  pointer-events: none;
}

.open .back {
  opacity: 1;
  transition: opacity 0.6s var(--ease-in);
  pointer-events: all;
}

@media (max-width: 1200px) {
  .zoom,
  .map-container {
    display: none;
  }
}
</style>
