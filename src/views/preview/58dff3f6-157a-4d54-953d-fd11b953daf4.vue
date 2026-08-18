<template>
  <div class="scor">
    <div class="scor-head">
      <div class="scor-face">
        <div class="scor-eye scor-eye-left"></div>
        <div class="scor-eye scor-eye-right"></div>
        <div class="scor-face-lower">
          <div class="scor-nose"></div>
          <div class="scor-mouth">
            <div class="scor-mouth-outer"></div>
            <div class="scor-mouth-inner"></div>
          </div>
          <div class="scor-mouth-line"></div>
        </div>
        <div class="scor-blush scor-blush-left"></div>
        <div class="scor-blush scor-blush-right"></div>
      </div>
      <div class="scor-face-fluff scor-face-fluff-left"></div>
      <div class="scor-face-fluff scor-face-fluff-right"></div>
      <div class="scor-ear scor-ear-left"></div>
      <div class="scor-ear-right-wrap">
        <div class="scor-ear scor-ear-right"></div>
        <div class="scor-ear-right-fluff"></div>
      </div>
    </div>
    <div class="scor-body">
      <div class="scor-tail"></div>
      <div class="scor-torso"></div>
      <div class="scor-neck"></div>
      <div class="scor-arm scor-arm-left"></div>
      <div class="scor-arm scor-arm-right"></div>
      <div class="scor-leg scor-leg-left">
        <div class="scor-leg-foot">
          <div class="scor-leg-foot-pad"></div>
        </div>
      </div>
      <div class="scor-leg scor-leg-right">
        <div class="scor-leg-foot">
          <div class="scor-leg-foot-pad"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
:where(.scor) {
  --black: #9a4c32;
  --white: #fff;
  --primary-color: #f26d40;
  --primary-color-dark: #ee4811;
  --primary-color-tint: #f79655;
  --accent-color: #fbe89d;
  --background: #f8b6a0;
  --mouth-inner-color: #f5879b;
  --nose-color: #f5879b;
  --blush-color: #f5879b;
  --shadow-color: hsl(266, 21%, 95%);
}

.scor {
  --ear-size: 9rem;
  position: relative;
  padding-top: calc(var(--ear-size) + 2rem);
  padding-bottom: 3rem;
}
.scor::after {
  content: '';
  position: absolute;
  z-index: -1;
  bottom: 1.75rem;
  left: 50%;
  height: 2rem;
  width: 50%;
  transform: translateX(-50%);
  border-radius: 100%;
  background-color: var(--primary-color);
  opacity: 0.2;
}
.scor-eye {
  border-radius: 50% 55% 50% 45%;
  --eye-position-x: 2rem;
  position: absolute;
  z-index: 2;
  top: 4.75rem;
  height: 1.875rem;
  width: 1.75rem;
  background-color: var(--black);
  transform-origin: center 70%;
  overflow: hidden;
  animation: blinky 7s infinite;
}
.scor-eye::before,
.scor-eye::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 100%;
}
.scor-eye::before {
  top: 0.125rem;
  height: 40%;
  width: 40%;
  background-color: var(--white);
}
.scor-eye::after {
  bottom: -0.125rem;
  height: 40%;
  width: 70%;
  background-color: var(--primary-color);
}
.scor-eye-left {
  left: var(--eye-position-x);
}
.scor-eye-right {
  right: var(--eye-position-x);
}
.scor-nose {
  position: relative;
  z-index: 5;
  top: 0;
  height: 1rem;
  width: 1rem;
}
.scor-nose::before {
  content: '';
  position: absolute;
  inset: 0;
  transform: rotate(45deg);
  border-top-left-radius: 80%;
  border-top-right-radius: 0.1875rem;
  border-bottom-left-radius: 0.1875rem;
  border-bottom-right-radius: 0.25rem;
  background-color: var(--nose-color);
}
.scor-nose::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: calc(100% - 0.5rem);
  transform: translateX(-50%);
  height: 2.25rem;
  width: 3.5rem;
  border-radius: 0.5rem;
  background-color: var(--accent-color);
}
.scor-mouth {
  position: absolute;
  bottom: -1.125rem;
  left: 50%;
  height: 0.325rem;
  width: 2.5rem;
  transform: translateX(-50%) translateY(var(--mouth-translate, 0));
  transition: var(--mouth-transition, 0.2s) ease-in-out;
}
.scor-mouth-line {
  position: absolute;
  z-index: 4;
  left: calc(50% - 0.0625rem);
  top: 100%;
  height: 1rem;
  width: 0.125rem;
  background-color: var(--black);
}
.scor-mouth-outer {
  position: absolute;
  inset: 0;
  z-index: 3;
  overflow: hidden;
}
.scor-mouth-outer::before {
  content: '';
  position: absolute;
  bottom: 0;
  height: 200%;
  width: calc(100% - 0.25rem);
  border-radius: 100%;
  border: 0.125rem solid var(--black);
  background-color: var(--white);
}
.scor-mouth-inner {
  position: absolute;
  z-index: 1;
  left: 2%;
  height: 1.25rem;
  width: 96%;
  transform-origin: center top;
  transform: scaleY(var(--mouth-scale, 0));
  border-top-left-radius: 1px 10%;
  border-top-right-radius: 1px 10%;
  border-bottom-left-radius: 50% 90%;
  border-bottom-right-radius: 50% 90%;
  background-color: var(--black);
  overflow: hidden;
  transition: var(--mouth-transition, 0.2s) ease-in-out;
}
.scor-mouth-inner::before,
.scor-mouth-inner::after {
  content: '';
  position: absolute;
}
.scor-mouth-inner::before {
  top: 0;
  left: 50%;
  height: 0.6875rem;
  width: 35%;
  transform: translateX(-50%);
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  background-color: var(--white);
}
.scor-mouth-inner::after {
  bottom: -0.125rem;
  right: 0.125rem;
  height: 0.625rem;
  width: 1.5rem;
  transform: rotate(-10deg);
  border-radius: 100%;
  background-color: var(--mouth-inner-color);
}
.scor-blush {
  --blush-position-x: 1rem;
  position: absolute;
  z-index: 1;
  top: 6.25rem;
  height: 1rem;
  width: 1.75rem;
  border-radius: 100%;
  background-color: var(--blush-color);
  transform: rotate(var(--blush-rotate));
  opacity: 0.3;
}
.scor-blush-left {
  --blush-rotate: 5deg;
  left: var(--blush-position-x);
}
.scor-blush-right {
  --blush-rotate: -5deg;
  right: var(--blush-position-x);
}
.scor-face {
  position: absolute;
  inset: 0;
  border-radius: 50% 60% 50% 40%;
  z-index: 2;
  background-color: var(--white);
}
.scor-face-lower {
  position: absolute;
  z-index: 2;
  top: 6rem;
  left: 50%;
  transform: translateX(-50%);
}
.scor-face-fluff {
  --fluff-position-x: 2.5rem;
  position: absolute;
  top: 7rem;
  height: 4.25rem;
  width: 4.25rem;
}
.scor-face-fluff::before,
.scor-face-fluff::after {
  content: '';
  transform-origin: right top;
  border-top-left-radius: 90%;
  border-bottom-right-radius: 90%;
  border-bottom-left-radius: 0.125rem;
  border-top-right-radius: 0.125rem;
  background-color: var(--white);
}
.scor-face-fluff::before {
  position: absolute;
  inset: 0;
  transform: rotate(60deg);
}
.scor-face-fluff::after {
  position: absolute;
  left: 0.5rem;
  top: -1.5rem;
  height: 3.5rem;
  width: 3.5rem;
  transform: rotate(80deg);
}
.scor-face-fluff-left {
  right: calc(100% - var(--fluff-position-x));
}
.scor-face-fluff-right {
  transform: rotateY(180deg);
  left: calc(100% - var(--fluff-position-x));
}
.scor-ear {
  background-color: var(--white);
  background: linear-gradient(
    var(--ear-gradient-rotate),
    var(--primary-color) 30%,
    var(--primary-color-tint) 30%,
    var(--primary-color-tint) 40%,
    var(--white) 40%
  );
  overflow: hidden;
}
.scor-ear,
.scor-ear-right-wrap {
  position: absolute;
  z-index: 1;
  top: 3.5rem;
  height: var(--ear-size);
  width: var(--ear-size);
  transform-origin: var(--ear-transform-origin);
  transform: rotate(var(--ear-rotate));
  animation: rotateThing 2s ease-in-out infinite alternate;
}
.scor-ear-right-wrap {
  --ear-gradient-rotate: -40deg;
  --ear-rotate: -120deg;
  --keyframe-rotate-to: -115deg;
  --ear-transform-origin: left top;
  --ear-position-shadow-right: 6rem;
  right: -4rem;
}
.scor-ear-right-wrap > .scor-ear {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: none;
}
.scor-ear::before,
.scor-ear::after {
  content: '';
  position: absolute;
}
.scor-ear::before {
  top: 2.5rem;
  left: 50%;
  height: 4rem;
  width: 4rem;
  transform: translateX(-50%);
  border-radius: inherit;
  background-color: var(--accent-color);
}
.scor-ear::after {
  top: 1.625rem;
  left: var(--ear-position-shadow-left, auto);
  right: var(--ear-position-shadow-right, auto);
  height: 2rem;
  width: 4rem;
  transform: rotate(var(--ear-gradient-rotate));
  border-radius: 100%;
  background-color: var(--shadow-color);
  mix-blend-mode: multiply;
}
.scor-ear-left {
  --ear-gradient-rotate: 40deg;
  --ear-rotate: 120deg;
  --keyframe-rotate-to: 115deg;
  --ear-transform-origin: right top;
  --ear-position-shadow-left: 6rem;
  left: -4rem;
  border-top-left-radius: 90%;
  border-bottom-right-radius: 90%;
  border-bottom-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.scor-ear-right {
  animation: none;
  border-top-right-radius: 90%;
  border-bottom-left-radius: 90%;
  border-bottom-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
}
.scor-ear-right-fluff {
  position: absolute;
  top: 2.5rem;
  left: 1rem;
  height: 3.5rem;
  width: 2rem;
  transform-origin: inherit;
  transform: rotate(25deg);
  border-bottom-right-radius: 0.25rem;
  background-color: var(--white);
}
.scor-head {
  position: relative;
  z-index: 5;
  height: 10.5rem;
  width: 12rem;
  transform-origin: center 8rem;
  transform: var(--head-transform, none);
  transition: 0.7s cubic-bezier(0.3, 0, 0.3, 1);
}
.scor-neck {
  position: absolute;
  z-index: 5;
  top: 1.25rem;
  height: 1rem;
  width: 100%;
}
.scor-neck::before,
.scor-neck::after {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 2.25rem;
  border-top-left-radius: 30% 50%;
  border-bottom-left-radius: 30% 50%;
  border-top-right-radius: 60% 50%;
  border-bottom-right-radius: 60% 50%;
  background-color: var(--primary-color);
}
.scor-neck::before {
  left: 0.25rem;
  transform: rotate(20deg);
}
.scor-neck::after {
  right: 0.25rem;
  transform: rotateY(180deg) rotate(20deg);
}
.scor-arm {
  border-radius: 50% 70% 50% 25%;
  position: absolute;
  z-index: 3;
  top: 2.25rem;
  height: 4.5rem;
  width: 2.5rem;
  transform-origin: 1.25rem center;
  background-color: var(--white);
  overflow: hidden;
}
.scor-arm::before,
.scor-arm::after {
  content: '';
  position: absolute;
  bottom: 0;
  height: 0.75rem;
  width: 2px;
  border-radius: 1px;
  background-color: var(--black);
}
.scor-arm::before {
  left: 0.75rem;
}
.scor-arm::after {
  right: 0.75rem;
}
.scor-arm-left {
  left: -0.125rem;
  transform: rotate(-10deg);
}
.scor-arm-right {
  right: -0.125rem;
  transform: rotate(10deg);
}
.scor-leg {
  position: absolute;
  z-index: 2;
  bottom: -1rem;
  height: 2rem;
  width: 1.25rem;
  transform-origin: top center;
  transform: rotate(var(--leg-rotate));
  background-color: var(--shadow-color);
}
.scor-leg-foot {
  border-radius: 50% 30% 50% 60%;
  position: absolute;
  bottom: 0;
  left: var(--foot-position-left, auto);
  right: var(--foot-position-right, auto);
  height: 6.5rem;
  width: 3rem;
  transform-origin: center bottom;
  transform: rotate(var(--foot-rotate));
  border-top-right-radius: var(--foot-radius-right, 50% 30%);
  border-top-left-radius: var(--foot-radius-left, 50% 30%);
  background-color: var(--white);
  background: linear-gradient(
    var(--foot-gradient-rotate),
    var(--primary-color) 30%,
    var(--white) 30%
  );
  overflow: hidden;
  perspective: 1000px;
  animation: rotateThing 1s ease-in-out infinite alternate;
}
.scor-leg-foot::before,
.scor-leg-foot::after {
  content: '';
  position: absolute;
  top: 0;
  height: 1rem;
  width: 2px;
  border-radius: 1px;
  background-color: var(--black);
  transform-origin: center top;
}
.scor-leg-foot::before {
  left: 1rem;
  transform: var(--foot-transform-before);
}
.scor-leg-foot::after {
  right: 1rem;
  transform: var(--foot-transform-after);
}
.scor-leg-foot-pad {
  position: absolute;
  top: 3rem;
  left: var(--foot-pad-position-left, auto);
  right: var(--foot-pad-position-right, auto);
  height: 1.75rem;
  width: 2.5rem;
  transform: rotate(var(--foot-pad-rotate)) perspective(1rem) rotateX(-7deg);
  border-radius: 0.5rem;
  background-color: var(--accent-color);
}
.scor-leg-left {
  --foot-radius-right: 50% 20%;
  --leg-rotate: 80deg;
  --foot-position-left: 1rem;
  --foot-rotate: -110deg;
  --keyframe-rotate-to: -120deg;
  --foot-gradient-rotate: 175deg;
  --foot-transform-before: rotate(-5deg) translateX(-0.25rem);
  --foot-transform-after: rotate(-5deg) translateX(-0.25rem);
  --foot-pad-rotate: -5deg;
  --foot-pad-position-left: -0.25rem;
  right: calc(100% - 2.125rem);
}
.scor-leg-right {
  --foot-radius-left: 50% 20%;
  --leg-rotate: -80deg;
  --foot-position-right: 1rem;
  --foot-rotate: 110deg;
  --keyframe-rotate-to: 120deg;
  --foot-gradient-rotate: -175deg;
  --foot-transform-before: rotate(5deg) translateX(0.25rem);
  --foot-transform-after: rotate(5deg) translateX(0.25rem);
  --foot-pad-rotate: 5deg;
  --foot-pad-position-right: -0.25rem;
  left: calc(100% - 2.125rem);
}
.scor-torso {
  position: absolute;
  inset: 0;
  border-radius: 50% 70% 50% 30%;
  background: var(--shadow-color);
  overflow: hidden;
}
.scor-torso::before,
.scor-torso::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.scor-torso::before {
  top: 0;
  height: 50%;
  width: 100%;
  background-color: var(--white);
}
.scor-torso::after {
  top: -0.75rem;
  width: 45%;
  height: 90%;
  border-radius: 100%;
  background-color: var(--white);
}
.scor-tail {
  position: absolute;
  left: -0.75rem;
  bottom: 0.75rem;
  height: 3rem;
  width: 3rem;
  border-radius: 100%;
  background-color: var(--shadow-color);
}
.scor-body {
  position: relative;
  left: 50%;
  height: 6.5rem;
  width: 6rem;
  margin-top: -1.5rem;
  transform: translateX(-50%);
}
.scor-body::before {
  content: '';
  position: absolute;
  z-index: 2;
  top: 0.5rem;
  left: 50%;
  height: 2.25rem;
  width: 60%;
  transform: var(--body-transform, translateX(-50%));
  border-radius: 100%;
  background-color: var(--shadow-color);
  transition: transform 0.7s cubic-bezier(0.3, 0, 0.3, 1);
}
.scor:hover {
  --mouth-translate: -0.125rem;
  --mouth-scale: 1;
  --mouth-transition: 0.2s 1s;
  --body-transform: translateX(-40%) scaleX(1.1);
  --head-transform: rotate(20deg);
}
@keyframes rotateThing {
  100% {
    transform: rotate(var(--keyframe-rotate-to));
  }
}
@keyframes blinky {
  /* 你源码缺少 blinky 关键帧，自行补充眨眼动画 */
  0%,
  92%,
  96%,
  100% {
    transform: scaleY(1);
  }
  94% {
    transform: scaleY(0.1);
  }
}
</style>
