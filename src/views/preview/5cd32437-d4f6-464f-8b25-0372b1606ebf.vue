<template>
  <div
    class="coffee"
    role="img"
    aria-label="Coffee cup spinning and stretching from side to side"
  >
    <div class="coffee__cup">
      <div class="coffee__cup-part coffee__cup-part--a"></div>
      <div class="coffee__cup-part coffee__cup-part--b"></div>
      <div class="coffee__cup-part coffee__cup-part--c"></div>
      <div class="coffee__cup-part coffee__cup-part--d"></div>
      <div class="coffee__cup-part coffee__cup-part--e"></div>
      <svg
        class="coffee__cup-part coffee__cup-part--f"
        width="96px"
        height="60px"
        viewBox="0 0 96 60"
        aria-hidden="true"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
        >
          <path
            class="coffee__cup-handle"
            d="M64,4.413s6.64-2.913,11-2.913c11.739,0,19.5,10.759,19.5,22.497,0,23.475-45,22.497-45,22.497"
          />
        </g>
      </svg>
    </div>
    <svg
      class="coffee__steam"
      width="56px"
      height="56px"
      viewBox="0 0 56 56"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      >
        <path
          class="coffee__steam-part coffee__steam-part--a"
          d="M13.845,54s-5.62-10.115-4.496-16.859,6.83-11.497,8.992-17.983c1.037-3.11,.161-6.937-1.083-10.158"
        />
        <path
          class="coffee__steam-part coffee__steam-part--b"
          d="M27.844,54s-5.652-10.174-4.522-16.957,6.869-11.564,9.043-18.087c2.261-6.783-4.522-16.957-4.522-16.957"
        />
        <path
          class="coffee__steam-part coffee__steam-part--c"
          d="M40.434,50.999c-1.577-3.486-3.818-9.462-3.071-13.944,1.121-6.723,6.809-11.462,8.964-17.928,1.033-3.1,.161-6.916-1.08-10.127"
        />
      </g>
    </svg>
    <svg
      class="coffee__steam coffee__steam--right"
      width="56px"
      height="56px"
      viewBox="0 0 56 56"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      >
        <path
          class="coffee__steam-part coffee__steam-part--d"
          d="M19.845,54s-5.62-10.115-4.496-16.859,6.83-11.497,8.992-17.983c1.037-3.11,.161-6.937-1.083-10.158"
        />
        <path
          class="coffee__steam-part coffee__steam-part--e"
          d="M34.434,44c-1.577-3.486-3.818-9.462-3.071-13.944,1.121-6.723,6.809-11.462,8.964-17.928,1.033-3.1,.161-6.916-1.08-10.127"
        />
      </g>
    </svg>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
:where(.coffee) {
  --hue: 223;
  --bg: hsl(var(--hue), 10%, 90%);
  --fg: hsl(var(--hue), 10%, 10%);
  --primary: hsl(var(--hue), 90%, 55%);
  --trans-dur: 0.3s;
  font-size: calc(16px + (20 - 16) * (100vw - 320px) / (1280 - 320));
}
.coffee {
  font-size: 0.6em;
  position: relative;
  width: 21.5em;
  height: 9em;
}
.coffee:before {
  border-bottom: 0.25em dashed;
  content: '';
  display: block;
  position: absolute;
  top: 7.5em;
  width: 100%;
}
.coffee__cup,
.coffee__cup-part,
.coffee__cup-handle,
.coffee__steam-part {
  animation-duration: 8s;
  animation-iteration-count: infinite;
}
.coffee__cup,
.coffee__cup-part,
.coffee__cup-handle {
  animation-timing-function: cubic-bezier(0.9, 0, 0.1, 1);
}
.coffee__cup {
  animation-name: cup;
  position: relative;
  width: 11.25em;
  height: 9em;
}
.coffee__cup-part {
  background-color: var(--bg);
  position: absolute;
  transition:
    background-color var(--trans-dur),
    box-shadow var(--trans-dur);
}
.coffee__cup-part--a {
  animation-name: cup-part-a;
  border-radius: 5.625em 5.625em 5.625em 5.625em / 2em 2em 2.7em 2.7em;
  box-shadow: 0 0 0 0.3em var(--fg) inset;
  top: 4.3em;
  width: 11.25em;
  height: 4.7em;
}
.coffee__cup-part--b {
  animation-name: cup-part-b;
  background-color: transparent;
  border-radius: 5.625em / 2em;
  box-shadow: 0 0 0 0.2em var(--fg) inset;
  top: 4.3em;
  width: 11.25em;
  height: 4em;
}
.coffee__cup-part--c {
  animation-name: cup-part-c;
  border-radius: 1.7em / 0.45em;
  box-shadow: 0 0 0 0.2em var(--fg) inset;
  top: 7.1em;
  left: 3.925em;
  width: 3.4em;
  height: 0.9em;
}
.coffee__cup-part--d,
.coffee__cup-part--e,
.coffee__cup-part--f {
  z-index: 1;
}
.coffee__cup-part--d {
  animation-name: cup-part-d;
  border-radius: 3.6em 3.6em 3.3em 3.3em / 1em 1em 3.5em 3.5em;
  box-shadow: 0 0 0 0.2em var(--fg) inset;
  top: 2.55em;
  left: 2.025em;
  width: 7.2em;
  height: 5.15em;
}
.coffee__cup-part--e {
  animation-name: cup-part-e;
  background-color: var(--fg);
  box-shadow:
    0 0 0 0.2em var(--fg) inset,
    0 1em 0 var(--bg) inset;
  border-radius: 3.5em / 1em;
  top: 2.65em;
  left: 2.125em;
  width: 7em;
  height: 2em;
}
.coffee__cup-part--f {
  animation-name: cup-part-f;
  background-color: transparent;
  top: 4.1em;
  left: 5.925em;
  width: 4.8em;
  height: 3em;
}
.coffee__cup-handle {
  animation-name: cup-handle;
}
.coffee__cup,
.coffee__steam {
  transform: translateX(-50%);
}
.coffee__steam {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 3.5em;
  height: 3.5em;
}
.coffee__steam--right {
  right: 0;
  left: auto;
  transform: translateX(50%);
}
.coffee__steam-part {
  animation-name: steam-left;
  aniamtion-timing-function: linear;
  stroke-dashoffset: 48;
}
.coffee__steam--right .coffee__steam-part {
  animation-name: steam-right;
  stroke-dashoffset: 35;
}
.coffee__steam-part--a {
  stroke-dasharray: 24 142;
}
.coffee__steam-part--b {
  stroke-dasharray: 30 8 10 130;
}
.coffee__steam-part--c {
  stroke-dasharray: 15 6 1 134;
}
.coffee__steam-part--d {
  stroke-dasharray: 18 6 1 90;
}
.coffee__steam-part--e {
  stroke-dasharray: 25 6 4 76;
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: hsl(var(--hue), 10%, 10%);
    --fg: hsl(var(--hue), 10%, 90%);
  }
}

/* Animations */
@keyframes cup {
  from,
  25%,
  75%,
  to {
    left: 0;
  }
  50% {
    left: 21.5em;
  }
}
@keyframes cup-part-a {
  from,
  50%,
  to {
    width: 11.25em;
  }
  25%,
  75% {
    width: calc(11.25em + 21.5em);
  }
}
@keyframes cup-part-b {
  from,
  50%,
  to {
    width: 11.25em;
  }
  25%,
  75% {
    width: calc(11.25em + 21.5em);
  }
}
@keyframes cup-part-c {
  from,
  50%,
  to {
    width: 3.4em;
  }
  25%,
  75% {
    width: calc(3.4em + 21.5em);
  }
}
@keyframes cup-part-d {
  from,
  50%,
  to {
    width: 7.2em;
  }
  25%,
  75% {
    width: calc(7.2em + 21.5em);
  }
}
@keyframes cup-part-e {
  from,
  50%,
  to {
    box-shadow:
      0 0 0 0.2em var(--fg) inset,
      0 1em 0 var(--bg) inset;
    width: 7em;
  }
  25%,
  75% {
    box-shadow:
      0 0 0 0.2em var(--fg) inset,
      0 1.5em 0 var(--bg) inset;
    width: calc(7em + 21.5em);
  }
}
@keyframes cup-part-f {
  from {
    left: 5.925em;
    z-index: 0;
  }
  25% {
    left: calc(5.925em + 8.35em);
    z-index: 0;
  }
  50% {
    left: 0.525em;
    z-index: 0;
  }
  50.01% {
    left: 0.525em;
    z-index: 1;
  }
  75% {
    left: calc(5.925em + 8.35em);
    z-index: 1;
  }
  to {
    left: 5.925em;
    z-index: 1;
  }
}
@keyframes cup-handle {
  from,
  to {
    animation-timing-function: ease-in;
    d: path(
      'M64,4.413s6.64-2.913,11-2.913c11.739,0,19.5,10.759,19.5,22.497,0,23.475-45,22.497-45,22.497'
    );
    transform: translate(0, 0);
  }
  10%,
  40%,
  60%,
  90% {
    animation-timing-function: ease-out;
    d: path(
      'M48.036,4.415s-.03-2.913-.049-2.913c-.052,0-.087,10.759-.087,22.497,0,23.475,.2,22.497,.2,22.497'
    );
    transform: translate(0, 15px);
  }
  50% {
    animation-timing-function: ease-in;
    d: path(
      'M32,4.413s-6.64-2.913-11-2.913C9.261,1.5,1.5,12.259,1.5,23.997c0,23.475,45,22.497,45,22.497'
    );
    transform: translate(0, 0);
  }
}
@keyframes steam-left {
  from {
    stroke-dashoffset: 48;
  }
  25%,
  to {
    stroke-dashoffset: -66;
  }
}
@keyframes steam-right {
  from,
  50% {
    stroke-dashoffset: 35;
  }
  75%,
  to {
    stroke-dashoffset: -76;
  }
}
</style>
