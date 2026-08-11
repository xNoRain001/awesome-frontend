<template>
  <svg
    class="face"
    viewBox="0 0 320 380"
    width="320px"
    height="380px"
    aria-label="A 404 becomes a face, looks to the sides, and blinks. The 4s slide up, the 0 slides down, and then a mouth appears."
  >
    <g
      fill="none"
      stroke="currentcolor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="25"
    >
      <g class="face__eyes" transform="translate(0, 112.5)">
        <g transform="translate(15, 0)">
          <polyline class="face__eye-lid" points="37,0 0,120 75,120" />
          <polyline
            class="face__pupil"
            points="55,120 55,155"
            stroke-dasharray="35 35"
          />
        </g>
        <g transform="translate(230, 0)">
          <polyline class="face__eye-lid" points="37,0 0,120 75,120" />
          <polyline
            class="face__pupil"
            points="55,120 55,155"
            stroke-dasharray="35 35"
          />
        </g>
      </g>
      <rect
        class="face__nose"
        rx="4"
        ry="4"
        x="132.5"
        y="112.5"
        width="55"
        height="155"
      />
      <g stroke-dasharray="102 102" transform="translate(65, 334)">
        <path
          class="face__mouth-left"
          d="M 0 30 C 0 30 40 0 95 0"
          stroke-dashoffset="-102"
        />
        <path
          class="face__mouth-right"
          d="M 95 0 C 150 0 190 30 190 30"
          stroke-dashoffset="102"
        />
      </g>
    </g>
  </svg>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.face {
  display: block;
  width: 12em;
  height: auto;

  &__eyes,
  &__eye-lid,
  &__mouth-left,
  &__mouth-right,
  &__nose,
  &__pupil {
    animation: eyes 1s 0.3s cubic-bezier(0.65, 0, 0.35, 1) forwards;
  }
  &__eye-lid,
  &__pupil {
    animation: {
      duration: 4s;
      delay: 1.3s;
      iteration-count: infinite;
    }
  }
  &__eye-lid {
    animation-name: eye-lid;
  }
  &__mouth-left,
  &__mouth-right {
    animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
  }
  &__mouth-left {
    animation-name: mouth-left;
  }
  &__mouth-right {
    animation-name: mouth-right;
  }
  &__nose {
    animation-name: nose;
  }
  &__pupil {
    animation-name: pupil;
  }
}
/* Animations */
@keyframes eye-lid {
  from,
  40%,
  45%,
  to {
    transform: translateY(0);
  }
  42.5% {
    transform: translateY(17.5px);
  }
}
@keyframes eyes {
  from {
    transform: translateY(112.5px);
  }
  to {
    transform: translateY(15px);
  }
}
@keyframes pupil {
  from,
  37.5%,
  40%,
  45%,
  87.5%,
  to {
    stroke-dashoffset: 0;
    transform: translate(0, 0);
  }
  12.5%,
  25%,
  62.5%,
  75% {
    stroke-dashoffset: 0;
    transform: translate(-35px, 0);
  }
  42.5% {
    stroke-dashoffset: 35;
    transform: translate(0, 17.5px);
  }
}
@keyframes mouth-left {
  from,
  50% {
    stroke-dashoffset: -102;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes mouth-right {
  from,
  50% {
    stroke-dashoffset: 102;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes nose {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(0, 22.5px);
  }
}
</style>
