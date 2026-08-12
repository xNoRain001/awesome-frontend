<template>
  <h2 class="ribbon">A Cool Ribbon</h2>
</template>

<script lang="ts" setup></script>

<style scoped>
@property --a {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: true;
}

.ribbon {
  --c: #60b0a7;
  /* control the cutout part (adjust each variable to understand what it does) */
  --r: 0.8em;
  --a: 0deg; /* this will get animated */
  --d: 0.5em;

  padding-inline: 0.3em;
  margin: calc(0.5lh + var(--r)) calc(1.2lh + var(--d));
  line-height: 1.75;
  background: var(--c);
  position: relative;
  white-space: nowrap;
  transition: --a 0.6s;
  cursor: pointer;
}
.ribbon:hover {
  --a: 60deg;
}
.ribbon:before,
.ribbon:after {
  content: '';
  position: absolute;
  width: calc(1lh + var(--d));
  height: calc(1.5lh + var(--r));
  border: solid var(--c);
  box-sizing: border-box;
  rotate: calc(var(--a) - 90deg);
}
.ribbon:before {
  left: 99%;
  top: 0;
  border-width: 1lh 1lh 0 0;
  border-radius: 0 999px 0 0;
  clip-path: polygon(
    calc(999px * cos(var(--a))) calc(1lh + var(--d) - 999px * sin(var(--a))),
    999px 100%,
    100% 100%,
    calc(50% + var(--d) / 2) calc(100% - var(--r)),
    var(--d) 100%,
    0 100%,
    0 calc(1lh + var(--d))
  );
  transform-origin: 0 calc(1lh + var(--d));
}
.ribbon:after {
  right: 99%;
  bottom: 0;
  border-width: 0 0 1lh 1lh;
  border-radius: 0 0 0 999px;
  clip-path: polygon(
    calc(100% - 999px * cos(var(--a)))
      calc(100% - 1lh - var(--d) + 999px * sin(var(--a))),
    -999px 0,
    0 0,
    calc(50% - var(--d) / 2) var(--r),
    calc(100% - var(--d)) 0,
    100% 0,
    100% calc(100% - 1lh - var(--d))
  );
  transform-origin: 100% calc(100% - 1lh - var(--d));
}
</style>
