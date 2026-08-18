<template>
  <h1>
    Sometimes I'll start a line of code and I
    <span class="magic">
      <span class="magic-star">
        <svg viewBox="0 0 512 512">
          <path
            d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
          />
        </svg>
      </span>
      <span class="magic-star">
        <svg viewBox="0 0 512 512">
          <path
            d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
          />
        </svg>
      </span>
      <span class="magic-star">
        <svg viewBox="0 0 512 512">
          <path
            d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
          />
        </svg>
      </span>
      <span class="magic-text">don't even know</span>
    </span>
    where it's going.
  </h1>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  let index = 0,
    interval = 1000

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const animate = star => {
    star.style.setProperty('--star-left', `${rand(-10, 100)}%`)
    star.style.setProperty('--star-top', `${rand(-40, 80)}%`)

    star.style.animation = 'none'
    star.offsetHeight
    star.style.animation = ''
  }

  for (const star of document.getElementsByClassName('magic-star')) {
    setTimeout(
      () => {
        animate(star)

        setInterval(() => animate(star), 1000)
      },
      index++ * (interval / 3)
    )
  }

  /* -- ↓↓↓ If you want the sparkle effect to only occur on hover, replace lines 16 and on with this code ↓↓↓ -- */

  // let timeouts = [],
  //     intervals = [];

  // const magic = document.querySelector(".magic");

  // magic.onmouseenter = () => {
  //   let index = 1;

  //   for(const star of document.getElementsByClassName("magic-star")) {
  //     timeouts.push(setTimeout(() => {
  //       animate(star);

  //       intervals.push(setInterval(() => animate(star), 1000));
  //     }, index++ * 300));
  //   };
  // }

  // magic.onmouseleave = onMouseLeave = () => {
  //   for(const t of timeouts) clearTimeout(t);
  //   for(const i of intervals) clearInterval(i);

  //   timeouts = [];
  //   intervals = [];
  // }
})
</script>

<style scoped>
:where(h1) {
  --purple: rgb(123, 31, 162);
  --violet: rgb(103, 58, 183);
  --pink: rgb(244, 143, 177);
}

@keyframes background-pan {
  from {
    background-position: 0% center;
  }

  to {
    background-position: -200% center;
  }
}

@keyframes scale {
  from,
  to {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
}

body {
  background-color: rgb(10, 10, 10);
  display: grid;
  height: 100vh;
  margin: 0px;
  overflow: hidden;
  place-items: center;
}

h1 {
  color: white;
  font-family: 'Rubik', sans-serif;
  font-size: clamp(2em, 2vw, 4em);
  font-weight: 400;
  margin: 0px;
  padding: 20px;
  text-align: center;
}

h1 > .magic {
  display: inline-block;
  position: relative;
}

h1 > .magic > .magic-star {
  --size: clamp(20px, 1.5vw, 30px);

  animation: scale 700ms ease forwards;
  display: block;
  height: var(--size);
  left: var(--star-left);
  position: absolute;
  top: var(--star-top);
  width: var(--size);
}

h1 > .magic > .magic-star > svg {
  animation: rotate 1000ms linear infinite;
  display: block;
  opacity: 0.7;
}

h1 > .magic > .magic-star > svg > path {
  fill: var(--violet);
}

h1 > .magic > .magic-text {
  animation: background-pan 3s linear infinite;
  background: linear-gradient(
    to right,
    var(--purple),
    var(--violet),
    var(--pink),
    var(--purple)
  );
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}
</style>
