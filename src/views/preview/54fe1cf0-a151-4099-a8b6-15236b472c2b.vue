<template>
  <label class="switch">
    <input type="checkbox" />
    <svg viewBox="0 0 36 18">
      <path
        d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z"
      />
    </svg>
  </label>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { onMounted } from 'vue'

gsap.registerPlugin(MorphSVGPlugin)

onMounted(() => {
  document.querySelectorAll('.switch').forEach(element => {
    let path = element.querySelector('path'),
      input = element.querySelector('input')

    element.addEventListener('mouseenter', e => {
      if (element.classList.contains('active')) {
        return
      }
      gsap.to(path, {
        morphSVG:
          'M20 9C20 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 20 5.02944 20 9Z',
        duration: 0.15
      })
    })

    element.addEventListener('mouseleave', e => {
      if (element.classList.contains('active')) {
        return
      }
      gsap.to(path, {
        morphSVG:
          'M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z',
        duration: 0.15
      })
    })

    element.addEventListener('click', e => {
      e.preventDefault()

      if (element.classList.contains('active')) {
        return
      }

      element.classList.add('active')

      gsap.to(path, {
        keyframes: [
          {
            morphSVG:
              'M36 9C36 15.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 36 2.02944 36 9Z',
            duration: 0.15
          },
          {
            morphSVG:
              'M35.9954 9C35.9954 13.9706 31.9659 18 26.9954 18C22.0248 18 23.9954 12.9706 23.9954 9C23.9954 5.02944 22.0248 0 26.9954 0C31.9659 0 35.9954 4.02944 35.9954 9Z',
            duration: 0.15
          },
          {
            morphSVG:
              'M36 9C36 13.9706 31.9706 18 27 18C22.0294 18 18 13.9706 18 9C18 4.02944 22.0294 0 27 0C31.9706 0 36 4.02944 36 9Z',
            duration: 0.5,
            ease: 'elastic.out(1, .8)',
            onComplete() {
              input.checked = !input.checked
              gsap.set(path, {
                morphSVG:
                  'M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z'
              })
              element.classList.remove('active')
            }
          }
        ]
      })
    })
  })
})
</script>

<style lang="scss" scoped>
.switch {
  --default: #d1d6ee;
  --hover: #cacfe6;
  --active: #275efe;
  --dot: #fff;
  --dot-shadow: #{rgba(#00093d, 0.1)};
  position: relative;
  input {
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    outline: none;
    display: block;
    border: none;
    background: var(--b, var(--default));
    width: 40px;
    height: 22px;
    padding: 0;
    margin: 0;
    border-radius: 11px;
    cursor: pointer;
    transition: background 0.3s linear;
    &:hover {
      --b: var(--hover);
    }
    &:checked {
      --b: var(--active);
      & + svg {
        transform: scaleX(-1);
      }
    }
  }
  &.active {
    input {
      --b: var(--active);
      &:checked {
        --b: var(--default);
      }
    }
  }
  svg {
    fill: var(--dot);
    display: block;
    width: 36px;
    height: 18px;
    position: absolute;
    left: 2px;
    top: 2px;
    pointer-events: none;
    filter: drop-shadow(0 0.5px 0.5px var(--dot-shadow));
  }
}
</style>
