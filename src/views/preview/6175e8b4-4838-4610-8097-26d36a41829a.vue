<template>
  <div class="wrapper">
    <div
      style="
        --bg-img: url(https://images.unsplash.com/photo-1518005020951-eccb494ad742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg0MjEyODh8&ixlib=rb-4.1.0&q=80&w=400);
      "
    ></div>
    <div
      style="
        --bg-img: url(https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg0MjA1MDB8&ixlib=rb-4.1.0&q=80&w=400);
      "
    ></div>
    <div
      style="
        --bg-img: url(https://images.unsplash.com/photo-1493397212122-2b85dda8106b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg0MjA4MTB8&ixlib=rb-4.1.0&q=80&w=400);
      "
    ></div>
    <div
      style="
        --bg-img: url(https://images.unsplash.com/photo-1524126675694-1efa3488b7c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg0MjA1MjR8&ixlib=rb-4.1.0&q=80&w=400);
      "
    ></div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
@import url(https://fonts.bunny.net/css?family=jura:300,500);
@layer base, demo;

@layer demo {
  .wrapper {
    --border-size: 5px;
    --border-color: var(--bg-light);
    /* default grid columns - defined individually for transition compatibility */
    --grid-cols: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    display: grid;
    grid-template-columns: var(--grid-cols);
    width: min(100%, 800px);
    margin-inline: auto;
    aspect-ratio: 2/1;
    transition: grid 300ms ease-in-out;
    counter-reset: --card-counter;
  }

  /* define grid columns according to which one has hover */
  .wrapper:has(:nth-child(1):hover) {
    --grid-cols: 6fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .wrapper:has(:nth-child(2):hover) {
    --grid-cols: 1fr 1fr 1fr 6fr 1fr 1fr 1fr 1fr 1fr;
  }
  .wrapper:has(:nth-child(3):hover) {
    --grid-cols: 1fr 1fr 1fr 1fr 1fr 6fr 1fr 1fr 1fr;
  }
  .wrapper:has(:nth-child(4):hover) {
    --grid-cols: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 6fr 1fr;
  }

  .wrapper > * {
    position: relative;
    overflow: hidden;
    border-radius: 0 0 0 30%/ 0 0 0 50%;
    corner-shape: notch;
    transition: all 300ms ease-in-out;
    border: var(--border-size) solid var(--border-color);
    background-image: var(--bg-img);
    background-size: 450px 100%; /* requires fixed width to maintain size and aspect */
    grid-row: 1;
  }

  .wrapper > *:first-child {
    border-radius: 0 0 0 0/ 0 0 0 200px;
  }

  /* remove notch from current and next sibling on hover */
  .wrapper > *:hover,
  .wrapper > *:hover + div {
    border-radius: 0 0 0 0;
  }

  /* define grid position - each element overlaps by 1 column */
  .wrapper > *:nth-child(1) {
    grid-column: 1 / span 3;
  }
  .wrapper > *:nth-child(2) {
    grid-column: 3 / span 3;
  }
  .wrapper > *:nth-child(3) {
    grid-column: 5 / span 3;
  }
  .wrapper > *:nth-child(4) {
    grid-column: 7 / span 3;
  }

  /* image counter */
  .wrapper > *::after {
    content: counter(--card-counter) '.';
    counter-increment: --card-counter;
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    font-size: 2rem;
    transition: transform 150ms ease-in-out;
    transform: scale(0);
  }

  .wrapper > *:hover::after {
    transform: scale(1);
  }
}

/* general styling not relevant for this demo */
@layer base {
  * {
    box-sizing: border-box;
  }
  :root {
    color-scheme: light dark;
    --bg-dark: rgb(16, 24, 40);
    --bg-light: rgb(248, 244, 238);
    --txt-light: rgb(10, 10, 10);
    --txt-dark: rgb(245, 245, 245);
    --line-light: rgba(0 0 0 / 0.25);
    --line-dark: rgba(255 255 255 / 0.25);

    --clr-bg: light-dark(var(--bg-light), var(--bg-dark));
    --clr-txt: light-dark(var(--txt-light), var(--txt-dark));
    --clr-lines: light-dark(var(--line-light), var(--line-dark));
  }

  body {
    background-color: var(--clr-bg);
    color: var(--clr-txt);
    min-height: 100svh;
    margin: 0;
    padding: 2rem;
    font-family: 'Jura', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    display: grid;
    place-items: center;
    gap: 2rem;
  }
}
</style>
