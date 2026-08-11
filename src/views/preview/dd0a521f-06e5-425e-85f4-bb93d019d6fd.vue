<template>
  <!-- https://dribbble.com/shots/7970756-ananda-Dashboard -->

  <nav>
    <ul>
      <li><span>Home</span></li>
      <li><span>Discover</span></li>
      <li><span>Blog</span></li>
      <li><span>About</span></li>
    </ul>
  </nav>
  <button @click="onClick" class="btn">
    <div class="btn--bg"></div>
    <div class="icons">
      <svg viewBox="0 0 448 512" class="line">
        <path
          d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
        />
      </svg>
      <svg viewBox="0 0 320 512" class="close">
        <path
          d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
        />
      </svg>
    </div>
  </button>

  <div class="support">
    <a href="https://twitter.com/DevLoop01" target="_blank"
      ><i class="fab fa-twitter-square"></i
    ></a>
    <a href="https://dribbble.com/devloop01" target="_blank"
      ><i class="fab fa-dribbble"></i
    ></a>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap'
import { onMounted } from 'vue'

let active = false
const openTl = gsap.timeline({ paused: true })
const closeTl = gsap.timeline({ paused: true })

const onClick = () => {
  if (!active) {
    openTl.seek(0).play()
  } else {
    closeTl.seek(0).play()
  }

  active = !active
}

onMounted(() => {
  openTl
    .set('.btn', { pointerEvents: 'none' })
    .to(
      'nav',
      {
        'clip-path': 'circle(200% at 60px 60px)',
        duration: 1.5,
        ease: 'power4.out'
      },
      0
    )
    .to(
      'nav li',
      {
        x: 0,
        opacity: 1,
        pointerEvents: 'all',
        duration: 1.25,
        stagger: 0.1,
        ease: 'elastic.out(1.15, .95)'
      },
      0
    )
    .to(
      '.btn .close',
      {
        opacity: 1,
        yPercent: -125,
        duration: 1,
        ease: 'power4.out'
      },
      0
    )
    .to(
      '.btn .line',
      {
        opacity: 0,
        yPercent: -125,
        duration: 1,
        ease: 'power4.out'
      },
      0
    )
    .set('.btn', { pointerEvents: 'all' })

  closeTl
    .set('.btn', { pointerEvents: 'none' })
    .to(
      'nav li',
      {
        x: -200,
        opacity: 0,
        pointerEvents: 'none',
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out'
      },
      0
    )
    .to(
      'nav',
      {
        'clip-path': 'circle(0px at 60px 60px)',
        duration: 1.2,
        ease: 'power4.out'
      },
      '-=1'
    )
    .to(
      '.btn--bg',
      {
        scale: 0.9,
        duration: 0.25,
        ease: 'elactic.out'
      },
      '-=.9'
    )
    .to(
      '.btn--bg',
      {
        scale: 1,
        duration: 0.25,
        ease: 'elactic.out'
      },
      '-=.5'
    )
    .to(
      '.btn .close',
      {
        opacity: 0,
        yPercent: 125,
        duration: 1,
        ease: 'power4.out'
      },
      0
    )
    .to(
      '.btn .line',
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: 'power4.out'
      },
      0
    )
    .set('.btn', { pointerEvents: 'all' })
})
</script>

<style lang="scss" scoped>
button {
  border: none;
  background: none;
  cursor: pointer;
  &:focus {
    outline: none;
    border: none;
  }
}

.btn {
  position: absolute;
  left: 60px;
  top: 60px;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 20px;
  z-index: 10;

  .icons {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    svg {
      position: absolute;
      width: 50%;
      height: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      fill: #fff;
      &.close {
        opacity: 0;
        transform: translate(-50%, -50%) translateY(125%);
      }
    }
  }
  .btn--bg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: #6c8cff;
    border-radius: 25%;
  }
}

nav {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6c8cff;
  clip-path: circle(0px at 60px 60px);
  z-index: 10;

  ul {
    margin-left: 20vw;
    li {
      position: relative;
      list-style: none;
      padding: 10px 0;
      cursor: pointer;
      transform: translateX(-200px);
      opacity: 0;
      pointer-events: none;
      span {
        font-size: 5rem;
        font-family: 'Krona One';
        font-weight: bold;
        opacity: 0.35;
        transition: opacity 0.25s ease;
        color: #fff;
      }
      &::before {
        content: '';
        position: absolute;
        left: -20%;
        top: 50%;
        transform: translate(-50%, -50%) translateX(-50%);
        width: 25%;
        height: 8px;
        border-radius: 10px;
        background: #fff;
        opacity: 0;
        transition:
          opacity 0.25s ease,
          transform 0.25s ease;
        pointer-events: none;
      }
      &:hover {
        &::before {
          opacity: 1;
          transform: translate(-50%, -50%) translateX(0);
        }
        span {
          opacity: 1;
        }
      }
    }
  }
}

.support {
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 10px;
  display: flex;
  a {
    margin: 0 10px;
    color: #333333;
    font-size: 1.8rem;
    backface-visibility: hidden;
    transition: all 150ms ease;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
