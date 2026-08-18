<template>
  <div class="container">
    <img src="https://picsum.photos/id/188/300/300" />
    <img src="https://picsum.photos/id/407/300/300" />
    <img src="https://picsum.photos/id/122/300/300" />
    <img src="https://picsum.photos/id/520/300/300" />
    <img src="https://picsum.photos/id/318/300/300" />
    <img src="https://picsum.photos/id/274/300/300" />
    <img src="https://picsum.photos/id/670/300/300" />
    <img src="https://picsum.photos/id/452/300/300" />
    <img src="https://picsum.photos/id/195/300/300" />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, auto);
  place-content: center;
  gap: 8px;
}
img {
  --s: 16px; /* control the size of the wave */

  width: calc(3 * 4 * var(--s));
  aspect-ratio: 1;
  object-fit: cover;
  padding: var(--s);
  border: var(--s) solid #0000;
  background: #cd8c52;
  border-radius: calc(3.5 * var(--s));
  mask:
    radial-gradient(calc(sqrt(2) * var(--s)), #000 calc(100% - 1px), #0000),
    conic-gradient(#000 0 0) content-box,
    radial-gradient(calc(sqrt(2) * var(--s)), #0000 100%, #000 calc(100% + 1px))
      var(--s) var(--s) padding-box;
  mask-size: calc(var(--s) * 4) calc(var(--s) * 4);
}

.container img:nth-child(1) {
  translate: calc(2 * var(--s)) calc(4 * var(--s));
  place-self: end;
}
.container img:nth-child(2) {
  translate: 0 calc(2 * var(--s));
}
.container img:nth-child(3) {
  translate: calc(-2 * var(--s)) calc(4 * var(--s));
  place-self: start;
}
.container img:nth-child(4) {
  translate: calc(4 * var(--s)) 0;
  width: calc(4 * 4 * var(--s));
  height: calc(3 * 4 * var(--s));
  place-self: center;
}
.container img:nth-child(5) {
  width: calc(2 * 4 * var(--s));
  height: calc(4 * 4 * var(--s));
  place-self: center;
}
.container img:nth-child(6) {
  translate: calc(-4 * var(--s)) 0;
  width: calc(4 * 4 * var(--s));
  height: calc(3 * 4 * var(--s));
  place-self: center;
}
.container img:nth-child(7) {
  translate: calc(2 * var(--s)) calc(-4 * var(--s));
  place-self: end;
}
.container img:nth-child(8) {
  translate: 0 calc(-2 * var(--s));
}
.container img:nth-child(9) {
  translate: calc(-2 * var(--s)) calc(-4 * var(--s));
  place-self: start;
}
</style>
