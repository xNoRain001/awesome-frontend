<template>
  <img src="https://picsum.photos/id/95/300/300" alt="a haunted forest" />
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
$n: 70; /* control the granularity of the glitch (the bigger, the better) */

img {
  --g: /calc(100% /#{$n}) calc(100% /#{$n}) linear-gradient(#000d 0 0) no-repeat;
  $m: ();
  @for $i from 1 through 4 * $n {
    $m: append($m, 0 0 var(--g), comma);
  }
  -webkit-mask: $m, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: g 1s linear infinite;
}
@keyframes g {
  @for $i from 0 through ($n - 1) {
    #{$i*30%/$n},
    #{($i + 1)*30%/$n - .01%} {
      $p: ();
      @for $i from 1 through 4 * $n {
        $p: append(
          $p,
          (random($n) - 1) * 100%/ ($n - 1) (random($n) - 1) * 100%/ ($n - 1),
          comma
        );
      }
      -webkit-mask-position: $p;
      transform: translate(random(666) / 300 + px, random(666) / 300 + px);
    }
  }
  30%,
  100% {
    -webkit-mask-position: #{100%/ (1 - $n)};
  }
}
</style>
