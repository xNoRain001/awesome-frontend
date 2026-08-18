<template>
  <!-- From Uiverse.io by pharmacist-sabot -->
  <div class="radio-group">
    <label class="radio">
      <input type="radio" name="player" checked="" />
      <div class="radio-visual">
        <div class="radio-dot"></div>
      </div>
      <span class="radio-label">Cassette Mode</span>
    </label>

    <label class="radio">
      <input type="radio" name="player" />
      <div class="radio-visual">
        <div class="radio-dot"></div>
      </div>
      <span class="radio-label">Walkman Style</span>
    </label>

    <label class="radio">
      <input type="radio" name="player" />
      <div class="radio-visual">
        <div class="radio-dot"></div>
      </div>
      <span class="radio-label">80s Mix</span>
    </label>

    <label class="radio">
      <input type="radio" name="player" />
      <div class="radio-visual">
        <div class="radio-dot"></div>
      </div>
      <span class="radio-label">Retro FM</span>
    </label>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
/* From Uiverse.io by pharmacist-sabot */
/* ===== Wrapper Radio Group ===== */
.radio-group {
  background: #fffdf8;
  border: 2px solid #222;
  border-radius: 0.5rem;
  padding: 1.5rem;
  max-width: 15rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  box-shadow: 4px 4px 0 #000;
  font-family: 'Noto Sans JP', Arial, sans-serif;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

/* Add subtle hover effect for the whole group */
.radio-group:hover {
  transform: translateY(-2px);
  box-shadow: 6px 6px 0 #000;
}

/* Paper texture effect */
.radio-group::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.05) 0px,
    rgba(0, 0, 0, 0.05) 1px,
    transparent 2px
  );
  pointer-events: none;
  opacity: 0.25;
}

/* ===== Each Radio ===== */
.radio {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  position: relative;
  padding: 0.3rem;
  border-radius: 0.3rem;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

/* Add background highlight on hover */
.radio:hover {
  background-color: rgba(209, 17, 17, 0.1);
  transform: translateX(2px);
}

.radio input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

/* Hand-drawn styled circle */
.radio-visual {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  border: 2px solid #111;
  background: #fdfaf4;
  box-shadow:
    inset -2px -2px 0 #111,
    2px 2px 0 #111;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.25s ease,
    background-color 0.2s ease;
}

/* Add rotation on hover for fun */
.radio:hover .radio-visual {
  transform: rotate(5deg);
}

/* The dot inside */
.radio-dot {
  width: 60%;
  height: 60%;
  border-radius: 50%;
  background: #d11;
  transform: scale(0);
  transition: transform 0.2s ease-out;
  box-shadow:
    inset 1px 1px 0 #700,
    2px 2px 0 #000;
}

.radio input:checked + .radio-visual .radio-dot {
  transform: scale(1);
  animation: bounce 0.4s ease-out;
}

/* bounce effect */
@keyframes bounce {
  0% {
    transform: scale(0.3);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* Change visual when checked */
.radio input:checked + .radio-visual {
  background: #ffe0e0;
  border-color: #d11;
  box-shadow:
    inset -2px -2px 0 #d11,
    2px 2px 0 #111;
}

.radio-label {
  color: black;
}

/* Hover jitter like hand-drawn */
.radio:hover .radio-label {
  animation: jitter 0.3s infinite alternate;
  color: #d11;
}

@keyframes jitter {
  from {
    transform: rotate(-1deg) translateX(-1px);
  }
  to {
    transform: rotate(1deg) translateX(1px);
  }
}

/* Add a subtle glow to labels */
.radio-label {
  transition:
    color 0.2s ease,
    text-shadow 0.2s ease;
}

.radio input:checked ~ .radio-label {
  color: #d11;
  text-shadow: 1px 1px 0 #700;
}

/* Retro scanline effect on the group */
.radio-group::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 2px,
    rgba(0, 0, 0, 0.03) 2px,
    rgba(0, 0, 0, 0.03) 3px
  );
  pointer-events: none;
  animation: scanline 2s linear infinite;
}

@keyframes scanline {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-3px);
  }
}
</style>
