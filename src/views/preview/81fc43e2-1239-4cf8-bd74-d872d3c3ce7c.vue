<template>
  <div class="stepper">
    <div class="stepper__label">{{ value }}</div>
    <div class="stepper__wrapper">
      <div class="stepper__control">
        <div class="stepper__track" :style="trackStyle">
          <button
            class="stepper__button"
            type="button"
            @click="handleMinus"
            :disabled="value === _min"
          >
            <span class="stepper__sr">Decrease</span>
          </button>
          <button
            class="stepper__button"
            type="button"
            @click="handlePlus"
            :disabled="value === _max"
          >
            <span class="stepper__sr">Increase</span>
          </button>
        </div>
        <div class="stepper__icons">
          <div class="stepper__icon" :style="iconStyle">
            <!-- <Minus /> -->
            -
          </div>
          <div class="stepper__icon" :style="iconStyle">
            <!-- <Plus /> -->
            +
          </div>
        </div>
      </div>
      <div class="stepper__focus">
        <div class="stepper__focus-ring" :style="focusStartStyle"></div>
        <div class="stepper__focus-ring" :style="focusEndStyle"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
// import { Minus, Plus } from 'lucide-vue-next'

const min = 0
const max = 6
const defaultValue = 3
const _min = computed(() => Math.min(min, max))
const _max = computed(() => max)

const initVal = Math.max(Math.min(defaultValue, _max.value), _min.value)
const value = ref(initVal)

// 计算位置百分比
const relativeRange = computed(() => _max.value - _min.value)
const relativeValue = computed(() => value.value - _min.value)
const percent = computed(() =>
  relativeRange.value === 0 ? 0 : relativeValue.value / relativeRange.value
)

// 动态样式
const trackStyle = computed(() => ({
  transform: `translateX(${percent.value * 50}%)`
}))

const iconStyle = computed(() => ({
  transform: `translateX(${(percent.value - 0.5) * 100}%)`
}))

const focusStartStyle = computed(() => ({
  flex: `${percent.value}`
}))

const focusEndStyle = computed(() => ({
  flex: `${1 - percent.value}`
}))

// 增减方法
const handleMinus = () => {
  value.value = Math.max(value.value - 1, _min.value)
}
const handlePlus = () => {
  value.value = Math.min(value.value + 1, _max.value)
}
</script>

<style lang="scss" scoped>
:where(.stepper) {
  --hue: 223deg;
  --sat: 10%;
  --gray1: hsl(var(--hue) var(--sat) 95%);
  --gray10: hsl(var(--hue) var(--sat) 5%);
  --primary4: hsl(var(--hue) 90% 65%);
  --primary5: hsl(var(--hue) 90% 55%);
  --trans-dur: 0.3s;
  --trans-timing: cubic-bezier(0.65, 0, 0.35, 2);
  color-scheme: light dark;
  font-size: clamp(1.5rem, 1.4rem + 0.5vw, 2rem);
}

button {
  color: light-dark(var(--gray10), var(--gray1));
  font:
    1em / 1.5 -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Helvetica,
    Arial,
    sans-serif;
}

main {
  padding: 1.5em 0;
}

.stepper {
  --border-width: 3px;

  display: flex;
  gap: 0.75em;
  align-items: center;

  &__label {
    min-width: 1ch;
  }

  &__wrapper {
    border-radius: 1.125em;
    box-shadow: 0 0 0 var(--border-width) inset;
    position: relative;

    [dir='rtl'] & {
      transform: scaleX(-1);
    }
  }

  &__control {
    border-radius: inherit;
    overflow: hidden;
    position: relative;
    width: 10em;
    height: 2.25em;
  }

  &__button,
  &__icon {
    flex: 1;
  }

  &__button {
    background-color: light-dark(var(--gray10), var(--gray1));
    box-shadow: -1.25em 0 0 light-dark(var(--gray10), var(--gray1));
    color: light-dark(var(--gray1), var(--gray10));
    cursor: pointer;
    outline: transparent;
    appearance: none;
    -webkit-tap-highlight-color: #0000;
    transition:
      background-color var(--trans-dur),
      box-shadow var(--trans-dur),
      color var(--trans-dur);

    &:last-child {
      background-color: transparent;
      box-shadow: none;
      color: light-dark(var(--gray10), var(--gray1));
    }
  }

  &__icon {
    color: light-dark(var(--gray1), var(--gray10));
    display: grid;
    place-items: center;
    position: relative;
    transition:
      color var(--trans-dur),
      transform var(--trans-dur) var(--trans-timing);

    &:last-child {
      color: light-dark(var(--gray10), var(--gray1));
    }

    svg {
      width: 1.25em;
      height: auto;
    }
  }

  &__focus,
  &__icons,
  &__sr,
  &__track {
    position: absolute;
  }

  &__focus,
  &__icons,
  &__track {
    direction: ltr;
    display: flex;
  }

  &__icons,
  &__sr {
    overflow: hidden;
  }

  &__focus,
  &__icons {
    pointer-events: none;
  }

  &__focus {
    inset: 0;

    &-ring {
      border-radius: 1.125em 0 0 1.125em;
      box-shadow: 0 0 0 var(--border-width) transparent;
      transition: box-shadow 0.15s linear;

      &:last-child {
        border-radius: 0 1.125em 1.125em 0;
      }
    }
  }

  &__icons {
    inset: var(--border-width);
  }

  &__sr {
    width: 1px;
    height: 1px;
  }

  &__track {
    inset: 0 0 0 auto;
    width: 200%;
    transition: transform var(--trans-dur) var(--trans-timing);
  }

  &__wrapper:has(&__button:last-child:disabled) &__focus-ring:first-child,
  &__wrapper:has(&__button:first-child:disabled) &__focus-ring:last-child {
    border-radius: 1.125em;
  }

  &__wrapper:has(&__button:first-child:focus-visible) &__focus-ring:first-child,
  &__wrapper:has(&__button:last-child:focus-visible) &__focus-ring:last-child {
    box-shadow: 0 0 0 var(--border-width)
      light-dark(var(--primary5), var(--primary4));
  }
}
</style>
