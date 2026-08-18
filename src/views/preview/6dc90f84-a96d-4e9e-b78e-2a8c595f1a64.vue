<template>
  <!-- From Uiverse.io by chase2k25 -->
  <div class="main-container-styles">
    <div class="flipdisc-list-wrapper">
      <div class="list-title">System Diagnostics</div>

      <label class="flipdisc-item-label" for="diag1">
        <input
          class="hidden-checkbox-input"
          type="checkbox"
          id="diag1"
          checked=""
        />
        <div class="visual-flipdisc-container">
          <div class="flipdisc-flipper">
            <div class="flipdisc-front">
              <svg
                class="front-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <div class="flipdisc-back">
              <svg
                class="back-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <span class="flipdisc-text-content">Memory Test</span>
      </label>

      <label class="flipdisc-item-label" for="diag2">
        <input class="hidden-checkbox-input" type="checkbox" id="diag2" />
        <div class="visual-flipdisc-container">
          <div class="flipdisc-flipper">
            <div class="flipdisc-front">
              <svg
                class="front-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <div class="flipdisc-back">
              <svg
                class="back-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <span class="flipdisc-text-content">Disk Integrity Check</span>
      </label>

      <label class="flipdisc-item-label" for="diag3">
        <input class="hidden-checkbox-input" type="checkbox" id="diag3" />
        <div class="visual-flipdisc-container">
          <div class="flipdisc-flipper">
            <div class="flipdisc-front">
              <svg
                class="front-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <div class="flipdisc-back">
              <svg
                class="back-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <span class="flipdisc-text-content">Network Analysis</span>
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
/* From Uiverse.io by chase2k25 */
.main-container-styles {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #3c3b3a;
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
}

.flipdisc-list-wrapper {
  max-width: 333px;
  max-height: 444px;
  width: 100%;
  background-color: #2a2827;
  border-radius: 12px;
  padding: 24px;
  box-shadow:
    inset 0px 2px 2px rgba(0, 0, 0, 0.5),
    inset -2px -6px 8px rgba(0, 0, 0, 0.155),
    inset -4px -4px 4px rgba(199, 199, 199, 0.064),
    inset -0px -2px 1px rgba(255, 255, 255, 0.269);
  overflow-y: auto;
  border: 1px solid #403d3b;
}

.list-title {
  font-size: 20px;
  font-weight: 600;
  color: #e0ddd7;
  margin-bottom: 24px;
}

.hidden-checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.flipdisc-item-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 12px;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.3s ease;
}

.flipdisc-item-label:hover {
  background-color: #3a3836;
}

.visual-flipdisc-container {
  position: relative;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  margin-right: 16px;
  perspective: 800px;
}

.flipdisc-flipper {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.7, 0, 0.2, 1);
}

.flipdisc-front,
.flipdisc-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.flipdisc-front {
  background-color: #1c1b1a;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.7);
}

.front-icon {
  width: 16px;
  height: 16px;
  stroke: #52504d;
  stroke-width: 2;
}

.flipdisc-back {
  background-image: radial-gradient(circle, #ffc857, #fb923c);
  box-shadow:
    0 0 15px rgba(251, 146, 60, 0.6),
    inset 0 1px 2px rgba(255, 255, 255, 0.3);
  transform: rotateX(180deg);
}

.back-icon {
  width: 18px;
  height: 18px;
  stroke: #4d2d00;
  stroke-width: 2.5;
}

.flipdisc-text-content {
  font-weight: 500;
  color: #9e9a94;
  transition: color 0.5s ease;
}

.hidden-checkbox-input:checked ~ .visual-flipdisc-container .flipdisc-flipper {
  transform: rotateX(-180deg);
}

.hidden-checkbox-input:checked ~ .flipdisc-text-content {
  color: #ffc857;
  text-shadow: 0 0 5px rgba(251, 146, 60, 0.5);
}

.hidden-checkbox-input:focus-visible
  ~ .visual-flipdisc-container
  .flipdisc-flipper
  .flipdisc-front {
  outline: 2px solid #fb923c;
  outline-offset: 2px;
}
</style>
