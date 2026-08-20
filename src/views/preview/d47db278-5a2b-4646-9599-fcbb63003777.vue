<template>
  <div class="container-items">
    <button
      class="item-color"
      style="--color: #e11d48"
      aria-color="#e11d48"
    ></button>
    <button
      class="item-color"
      style="--color: #f472b6"
      aria-color="#f472b6"
    ></button>
    <button
      class="item-color"
      style="--color: #fb923c"
      aria-color="#fb923c"
    ></button>
    <button
      class="item-color"
      style="--color: #facc15"
      aria-color="#facc15"
    ></button>
    <button
      class="item-color"
      style="--color: #84cc16"
      aria-color="#84cc16"
    ></button>
    <button
      class="item-color"
      style="--color: #10b981"
      aria-color="#10b981"
    ></button>
    <button
      class="item-color"
      style="--color: #0ea5e9"
      aria-color="#0ea5e9"
    ></button>
    <button
      class="item-color"
      style="--color: #3b82f6"
      aria-color="#3b82f6"
    ></button>
    <button
      class="item-color"
      style="--color: #8b5cf6"
      aria-color="#8b5cf6"
    ></button>
    <button
      class="item-color"
      style="--color: #a78bfa"
      aria-color="#a78bfa"
    ></button>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.container-items {
  display: flex;
  transform-style: preserve-3d;
  transform: perspective(1000px);
}

.item-color {
  position: relative;
  flex-shrink: 0;
  width: 32px;
  height: 40px;
  border: none;
  outline: none;
  transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  cursor: pointer;

  &::after {
    position: absolute;
    content: '';
    inset: 0;
    width: 40px;
    height: 40px;
    background-color: var(--color);
    border-radius: 6px;
    transform: scale(1.2);
    pointer-events: none;
    transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  }

  &::before {
    position: absolute;
    content: attr(aria-color);
    left: 65%;
    bottom: 52px;
    font-size: 8px;
    line-height: 12px;
    transform: translateX(-50%);
    padding: 2px 0.25rem;
    background-color: black;
    border-radius: 6px;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  }

  &:hover {
    transform: scale(1.5);
    z-index: 99999;

    &::before {
      opacity: 1;
      visibility: visible;
    }
  }

  &:active::after {
    transform: scale(1.1);
  }

  &:focus::before {
    content: '✅Copy';
  }
}

.item-color:hover + * {
  transform: scale(1.3);
  z-index: 9999;
}

.item-color:hover + * + * {
  transform: scale(1.15);
  z-index: 999;
}

.item-color:has(+ *:hover) {
  transform: scale(1.3);
  z-index: 9999;
}

.item-color:has(+ * + *:hover) {
  transform: scale(1.15);
  z-index: 999;
}
</style>
