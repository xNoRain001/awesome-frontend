<template>
  <div class="flex flex-col gap-4">
    <h1>Domino Clock <span class="time">0:00:00 PM</span></h1>
    <div class="dominos-container">
      <div class="domino">
        <div class="part part-top">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="part part-bottom">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="colon">:</div>
      <div class="domino">
        <div class="part part-top">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="part part-bottom">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="domino">
        <div class="part part-top">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="part part-bottom">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="colon">:</div>
      <div class="domino">
        <div class="part part-top">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="part part-bottom">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="domino">
        <div class="part part-top">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="part part-bottom">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="ampm">AM</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  const numberdots = [
    '000000000000000000',
    '000010000000000000',
    '000010000000010000',
    '100000001000010000',
    '100000001100000001',
    '100010001100000001',
    '100010001100010001',
    '101000101100010001',
    '101000101101000101',
    '101010101101000101',
    '101010101101010101',
    '101101101101010101',
    '101101101101101101'
  ]
  const dominos = document.querySelectorAll('.domino')
  const ampm_el = document.querySelector('.ampm')
  const time_el = document.querySelector('.time')

  intfunc()
  const interval = setInterval(intfunc, 1000)

  function intfunc() {
    const [values, ampm, time] = getValues()

    dominos.forEach((domino, domino_index) => {
      const dots = domino.querySelectorAll('.part > *')
      dots.forEach(
        (dot, dot_index) =>
          (dot.dataset.active = +numberdots[values[domino_index]][dot_index])
      )
    })

    ampm_el.innerText = ampm
    time_el.innerText = time
  }

  function getValues() {
    const d = new Date()
    const h = d.getHours()
    const minutes = d.getMinutes()
    const seconds = d.getSeconds()
    const ampm = h >= 12 ? 'pm' : 'am'
    const hours = h % 12 || 12
    const minutesLeft = Math.floor(minutes / 10)
    const minutesRight = minutes % 10
    const secondsLeft = Math.floor(seconds / 10)
    const secondsRight = seconds % 10
    const time = d.toLocaleTimeString('en-us')
    return [
      [hours, minutesLeft, minutesRight, secondsLeft, secondsRight],
      ampm,
      time
    ]
  }
})
</script>

<style scoped>
h1 {
  font-size: 3rem;
}
h1 > span {
  font-size: 1rem;
  color: rgb(80, 80, 80);
}
.dominos-container {
  display: flex;
  gap: 2em;
  align-items: center;
  font-size: 1vw;
}
.colon,
.ampm {
  font-size: 5em;
}
.domino {
  width: 12em;
  background: linear-gradient(
    to bottom right,
    rgb(39, 39, 39),
    rgb(17, 17, 17)
  );
  box-shadow:
    inset 0.1em 0.1em 0.2em rgba(255, 255, 255, 0.2),
    inset -0.1em -0.1em 0.2em rgba(0, 0, 0, 0.9),
    0.1em 0.1em 2em rgba(0, 0, 0, 1);
  display: grid;
  border-radius: 1em;
  gap: 2em;
  padding: 2em;
}
.domino::before {
  content: '';
  height: 0.25em;
  background: white;
  grid-row: 2;
  border-radius: 0.25em;
}
.domino .part {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
}

.part span {
  aspect-ratio: 1/1;
  width: 100%;
  border-radius: 50%;
  box-shadow:
    inset 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.7),
    inset -0.1em -0.1em 0.1em rgba(255, 255, 255, 0.1);
  background-image: linear-gradient(transparent 50%, rgba(240, 240, 240) 50%);
  background-size: 100% 220%;
  background-position: 0 0%;
  transition: background-position 0.25s ease;
}

.part span[data-active='1'] {
  background-position: 0 -90%;
}
</style>
