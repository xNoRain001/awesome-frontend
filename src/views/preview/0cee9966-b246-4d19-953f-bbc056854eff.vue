<template>
  <svg class="filter" version="1.1">
    <defs>
      <filter id="gooeyness">
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
          result="gooey"
        />
        <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
      </filter>
    </defs>
  </svg>
  <div class="radios-boxes">
    <div class="radios">
      <input type="radio" name="radio" id="radio1" class="radio" value="r" />
      <input type="radio" name="radio" id="radio2" class="radio" value="k" />
      <input type="radio" name="radio" id="radio3" class="radio" value="t" />
      <input type="radio" name="radio" id="radio4" class="radio" value="s" />
      <div class="ball"></div>
    </div>
    <div class="labels">
      <label for="radio1" class="label">radio</label>
      <label for="radio2" class="label">killed</label>
      <label for="radio3" class="label">the video</label>
      <label for="radio4" class="label">star</label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  let radios = document.querySelectorAll('.radio')
  let labels = document.querySelectorAll('.label')
  let ball = document.querySelector('.ball') as HTMLElement
  let prevRadio, prevLabel
  radios.forEach((radio, index) => {
    radio.addEventListener('click', function (e) {
      if (prevRadio) prevRadio.classList.toggle('active')
      if (prevLabel) prevLabel.classList.toggle('active')
      radio.classList.toggle('active')
      prevRadio = radio
      labels[index].classList.toggle('active')
      prevLabel = labels[index]
      ball.className = `ball pos${index}`
    })
  })
})
</script>

<style scoped>
.filter {
  position: absolute;
  left: -9999px;
}

.burger {
  display: flex;
  flex-direction: column;

  padding: 30px;
}

.radios-boxes {
  display: flex;
}

.radios {
  display: flex;
  filter: url('#gooeyness');
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.radio {
  -moz-appearance: none;
  -ms-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 50%;
  border: 16px solid #ccc;
  cursor: pointer;
  height: 60px;
  margin: 10px;
  outline: 0;
  -webkit-tap-highlight-color: transparent;
  transition: border-color 800ms;
  width: 60px;
}

.radio.active {
  border-color: white;
}

.ball {
  background: white;
  border-radius: 50%;
  height: 34px;
  left: 23px;
  pointer-events: none;
  position: absolute;
  top: 23px;
  transform: translateY(-80px);
  transition: transform 800ms;
  width: 34px;
}

.ball.pos0 {
  transform: translateY(0px);
}

.ball.pos1 {
  transform: translateY(80px);
}

.ball.pos2 {
  transform: translateY(160px);
}

.ball.pos3 {
  transform: translateY(240px);
}

.labels {
  margin-left: 5px;
}

.label {
  color: #ccc;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 28px;
  line-height: 50px;
  padding: 15px 0;
  -webkit-tap-highlight-color: transparent;
  transition: color 800ms;
}

.label.active {
  color: white;
}
</style>
