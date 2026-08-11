<template>
  <div class="pl">
    <div class="pl__bubble">
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
    </div>
    <div class="pl__bubble">
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
    </div>
    <div class="pl__bubble">
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
      <div class="pl__bubble-drop"></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
:where(.pl) {
  --hue: 223;
  font-size: calc(16px + (24 - 16) * (100vw - 320px) / (2560 - 320));
}
.pl {
  display: flex;
  justify-content: space-between;
  align-items: center;
  filter: drop-shadow(0.9em 0.9em 4px hsla(0, 0%, 0%, 0.4));
  margin: auto;
  width: 12em;
  height: 12em;

  &__bubble {
    $dur: 1.5s;
    position: relative;
    width: 3em;
    height: 3em;

    &-drop {
      width: 0.125em;
      height: 0.5em;
      transform: translate(-50%, -3em);

      &,
      &:before {
        transform-origin: 50% 0;
      }

      $drops: 7;
      @for $d from 2 through $drops {
        &:nth-child(#{$d}) {
          $angle: (360deg / $drops) * ($d - 1);
          transform: translate(-50%, -3em) rotate($angle);
        }
      }
    }
    &:before,
    &:after,
    &-drop {
      position: absolute;
    }
    &:before,
    &:after,
    &-drop:before {
      animation: bubble-rise-before $dur linear infinite;
    }
    &:before,
    &:after {
      border-radius: 50%;
    }
    &:after,
    &-drop {
      top: 50%;
      left: 50%;
    }
    &:before {
      box-shadow:
        0 -0.0625em 0 0.0625em hsl(var(--hue), 90%, 90%) inset,
        0 0 0 0.0625em hsl(var(--hue), 90%, 70%) inset,
        0 0 0.25em 0.25em hsla(var(--hue), 90%, 70%, 0.7) inset;
      transform: translate(0, 4.5em) scale(0);
    }
    &:after {
      animation-name: bubble-rise-after;
      background-image: radial-gradient(
        25% 10% at 50% 5%,
        hsl(0, 0%, 100%) 48%,
        hsla(0, 0%, 100%, 0) 50%
      );
      width: 87.5%;
      height: 87.5%;
      transform: translate(-50%, -50%) translate(0, 4.5em) rotate(-45deg)
        scale(0);
    }
    &:before,
    &-drop:before {
      width: 100%;
      height: 100%;
    }
    &-drop:before {
      animation-name: bubble-drop;
      background-color: hsl(var(--hue), 90%, 80%);
      border-radius: 0.0625em;
      transform: translateY(0) scaleY(0);
      transform-origin: 50% 0;
    }
    &:before,
    &:after,
    &-drop:before {
      content: '';
      display: block;
    }

    $bubbles: 3;
    @for $b from 2 through $bubbles {
      &:nth-child(#{$b}):before,
      &:nth-child(#{$b}):after,
      &:nth-child(#{$b}) &-drop:before {
        animation-delay: ($dur * 0.1) * ($b - 1);
      }
    }
  }
}

/* Animations */
@keyframes bubble-rise-before {
  from {
    animation-timing-function: cubic-bezier(0.12, 0, 0.39, 0);
    transform: translate(0, 4.5em) scale(0);
  }
  30% {
    animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
    transform: translate(0, 0.75em) scale(1);
  }
  60% {
    animation-timing-function: cubic-bezier(0.12, 0, 0.39, 0);
    opacity: 1;
    transform: translate(0, -3em) scale(1);
  }
  70%,
  to {
    opacity: 0;
    transform: translate(0, -3em) scale(0.25);
  }
}
@keyframes bubble-rise-after {
  from {
    animation-timing-function: cubic-bezier(0.12, 0, 0.39, 0);
    transform: translate(-50%, -50%) translate(0, 4.5em) rotate(-45deg) scale(0);
  }
  30% {
    animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
    transform: translate(-50%, -50%) translate(0, 0.75em) rotate(-45deg)
      scale(1);
  }
  60% {
    animation-timing-function: cubic-bezier(0.12, 0, 0.39, 0);
    opacity: 1;
    transform: translate(-50%, -50%) translate(0, -3em) rotate(-45deg) scale(1);
  }
  70%,
  to {
    opacity: 0;
    transform: translate(-50%, -50%) translate(0, -3em) rotate(-45deg)
      scale(0.25);
  }
}
@keyframes bubble-drop {
  from {
    animation-timing-function: steps(1, end);
    visibility: hidden;
    transform: translateY(0) scaleY(1);
  }
  65% {
    animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
    visibility: visible;
    transform: translateY(0) scaleY(1);
  }
  80%,
  to {
    transform: translateY(400%) scaleY(0);
  }
}
</style>
