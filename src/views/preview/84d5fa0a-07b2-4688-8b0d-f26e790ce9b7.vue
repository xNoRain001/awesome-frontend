<template>
  <div class="slider-wrapper">
    <input class="slider-input" type="range" value="720" max="1440" step="1" />
    <div class="slider-thumb">
      <div class="slider-value-container">
        <p class="slider-value">12:00 PM</p>
      </div>
    </div>
    <svg
      class="slider-svg"
      viewBox="0 0 238 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="slider-svg-path"
        d="M2 34L7.21879 31.0968C78.5901 -8.60616 165.659 -7.50128 236 34V34"
        stroke="url(#paint0_linear_339_100980)"
        stroke-width=".25em"
        stroke-linecap="round"
        vector-effect="non-scaling-stroke"
        filter="url(#filter0_i_339_100980)"
      />
      <defs>
        <filter
          id="filter0_i_339_100980"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_339_100980"
          />
        </filter>
        <linearGradient
          id="paint0_linear_339_100980"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F3D970" />
          <stop offset="0.2" stop-color="#FCBB5D" />
          <stop offset="0.4" stop-color="#F6876D" />
          <stop offset="0.6" stop-color="#934284" />
          <stop offset="0.8" stop-color="#402862" />
          <stop offset="1" stop-color="#011549" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  // following code needs some refactoring

  const sliderWrapper = document.querySelector('.slider-wrapper')!
  const sliderSvg = document.querySelector('.slider-svg') as SVGSVGElement
  const sliderPath = document.querySelector(
    '.slider-svg-path'
  ) as SVGPathElement
  const sliderPathLength = sliderPath.getTotalLength()
  const sliderThumb = document.querySelector('.slider-thumb') as HTMLElement
  const sliderInput = document.querySelector(
    '.slider-input'
  ) as HTMLInputElement
  const sliderMinValue = +sliderInput.min || 0
  const sliderMaxValue = +sliderInput.max || 100

  const time = document.querySelector('.slider-value')!

  const updateTime = timeInMinutes => {
    let hours = Math.floor(timeInMinutes / 60)
    const minutes = timeInMinutes % 60
    const isMorning = hours < 12
    const formattedHours = String(
      isMorning ? hours || 12 : hours - 12 || 12
    ).padStart(2, '0')
    const formattedMinutes = String(minutes).padStart(2, '0')
    time.textContent = `${formattedHours}:${formattedMinutes} ${isMorning || hours === 24 ? 'AM' : 'PM'}`
  }

  const setColor = progress => {
    const colorStops = [
      { r: 243, g: 217, b: 112 }, // #F3D970
      { r: 252, g: 187, b: 93 }, // #FCBB5D
      { r: 246, g: 135, b: 109 }, // #F6876D
      { r: 147, g: 66, b: 132 }, // #934284
      { r: 64, g: 40, b: 98 }, // #402862
      { r: 1, g: 21, b: 73 } // #011549
    ]
    const numStops = colorStops.length

    const index = (numStops - 1) * progress
    const startIndex = Math.floor(index)
    const endIndex = Math.ceil(index)

    const startColor = colorStops[startIndex]
    const endColor = colorStops[endIndex]

    const percentage = index - startIndex

    const [r, g, b] = [
      Math.round(startColor.r + (endColor.r - startColor.r) * percentage),
      Math.round(startColor.g + (endColor.g - startColor.g) * percentage),
      Math.round(startColor.b + (endColor.b - startColor.b) * percentage)
    ]

    sliderThumb.style.setProperty('--color', `rgb(${r} ${g} ${b})`)
  }

  // updating position could be done with CSS Motion Path instead of absolute positioning but Safari <15.4 doesn’t seem to support it
  const updatePosition = progress => {
    const point = sliderPath.getPointAtLength(progress * sliderPathLength)
    const svgRect = sliderSvg.getBoundingClientRect()
    const scaleX = svgRect.width / sliderSvg.viewBox.baseVal.width
    const scaleY = svgRect.height / sliderSvg.viewBox.baseVal.height
    sliderThumb.style.left = `${(point.x * scaleX * 100) / svgRect.width}%`
    sliderThumb.style.top = `${(point.y * scaleY * 100) / svgRect.height}%`
    const value = Math.round(progress * (sliderMaxValue - sliderMinValue))
    sliderInput.value = String(value)
    updateTime(value)
    setColor(progress)
  }

  sliderInput.addEventListener('input', () => {
    const progress =
      sliderInput.valueAsNumber / (sliderMaxValue - sliderMinValue)
    updatePosition(progress)
  })

  const handlePointerMove = event => {
    const sliderWidth = sliderPath.getBoundingClientRect().width
    const pointerX = event.clientX - sliderPath.getBoundingClientRect().left
    const progress = Math.min(Math.max(pointerX / sliderWidth, 0), 1)
    updatePosition(progress)
  }

  const handlePointerDown = event => {
    const sliderWidth = sliderPath.getBoundingClientRect().width
    const pointerX = event.clientX - sliderPath.getBoundingClientRect().left
    const progress = Math.min(Math.max(pointerX / sliderWidth, 0), 1)
    const isThumb = event.target.classList.contains('slider-thumb')
    if (!isThumb) updatePosition(progress)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', () => {
      window.removeEventListener('pointermove', handlePointerMove)
    })
  }

  sliderThumb.addEventListener('pointerdown', handlePointerDown)
  sliderPath.addEventListener('pointerdown', handlePointerDown)

  updatePosition(sliderInput.valueAsNumber / (sliderMaxValue - sliderMinValue))

  sliderWrapper.addEventListener('selectstart', event => {
    event.preventDefault()
  })
})
</script>

<style scoped>
/* 编译后 CSS */
.slider-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 12.5em;
  max-width: 100%;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transform: scale(1.5);
}

.slider-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.slider-thumb {
  --color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  left: calc(
    var(--slider-value) / 100 * (100% - var(--slider-height)) +
      var(--slider-height) / 2
  );
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 1.25em;
  height: 1.25em;
  background-image: linear-gradient(to bottom, #f0f0f2, #d9dade);
  box-shadow: 0 0.0625em 0.0625em rgb(0 0 0 / 0.3);
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: none;
  cursor: pointer;
}

.slider-thumb::before {
  content: '';
  position: absolute;
  border-radius: inherit;
  width: 68%;
  height: 68%;
  background-color: var(--color);
  box-shadow: inset 0 -8px 4px rgb(0 0 0 / 0.1);
}

.slider-value-container {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5em;
  position: absolute;
  bottom: 1em;
  transform: translateY(-100%);
  border: 1px solid #dbdbe3;
  border-radius: 50px;
  padding: 0.25em 0.75em;
  background-color: #f2f2f3;
  box-shadow: 0 0.0625em 0.25em rgb(0 0 0 / 0.1);
  font-size: 0.5em;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  pointer-events: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.slider-value {
  color: black;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.slider-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 1px 0 #fff);
  overflow: visible;
}

.slider-svg-path {
  touch-action: none;
  cursor: pointer;
}
</style>
