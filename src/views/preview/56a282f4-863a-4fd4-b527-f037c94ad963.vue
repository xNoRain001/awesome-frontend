<template>
  <!-- From Uiverse.io by santhosh_2608 -->
  <label class="viking-toggle">
    <input type="checkbox" class="viking-toggle__checkbox" />
    <div class="viking-toggle__track">
      <div class="viking-toggle__chain viking-toggle__chain--left"></div>
      <div class="viking-toggle__chain viking-toggle__chain--right"></div>
      <div class="viking-toggle__inner">
        <span class="viking-toggle__runes">ᛟ ᛏ ᛞ ᛁ ᚾ</span>
      </div>
      <div class="viking-toggle__glow"></div>
      <div class="viking-toggle__embers">
        <span class="viking-toggle__ember"></span>
        <span class="viking-toggle__ember"></span>
        <span class="viking-toggle__ember"></span>
        <span class="viking-toggle__ember"></span>
      </div>
      <svg
        class="viking-toggle__icon viking-toggle__icon--left"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.92 5L5 6.92l5.79 5.79L4.5 19H8l4-4 3.08 3.08L16.92 19l-5.79-5.79L18 6.5V3l-6.29 6.29L6.92 5z"
        />
      </svg>
      <svg
        class="viking-toggle__icon viking-toggle__icon--right"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L2 7l3 2-3 6 6-2 4 9 4-9 6 2-3-6 3-2-10-5zm0 4l4 2-4 8-4-8 4-2z"
        />
      </svg>
      <div class="viking-toggle__knob">
        <div class="viking-toggle__shield"></div>
      </div>
    </div>
  </label>
</template>

<script lang="ts" setup></script>

<style scoped>
/* From Uiverse.io by santhosh_2608 */
.viking-toggle {
  --vt-wood-dark: #1a1208;
  --vt-wood-medium: #2d2116;
  --vt-wood-light: #3d2e1f;
  --vt-metal-dark: #2a1f15;
  --vt-metal-medium: #4a3a2a;
  --vt-metal-light: #7a6a55;
  --vt-bronze: #8b7355;
  --vt-gold: #c9a227;
  --vt-gold-bright: #f0d060;
  --vt-fire: #ff6a00;
  --vt-fire-glow: rgba(255, 120, 40, 0.6);
  --vt-ember: #ff4500;
  position: relative;
  display: block;
  width: 180px;
  height: 78px;
  cursor: pointer;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5));
}

.viking-toggle__checkbox {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.viking-toggle__track {
  position: relative;
  width: 100%;
  height: 100%;
  background:
    url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E"),
    linear-gradient(
      180deg,
      var(--vt-wood-dark) 0%,
      var(--vt-wood-medium) 15%,
      var(--vt-wood-light) 50%,
      var(--vt-wood-medium) 85%,
      var(--vt-wood-dark) 100%
    );
  border-radius: 44px;
  overflow: hidden;
  box-shadow:
    inset 0 6px 20px rgba(0, 0, 0, 0.9),
    inset 0 -3px 15px rgba(139, 115, 85, 0.08),
    inset 2px 0 10px rgba(0, 0, 0, 0.4),
    inset -2px 0 10px rgba(0, 0, 0, 0.4),
    0 12px 40px rgba(0, 0, 0, 0.7),
    0 4px 15px rgba(0, 0, 0, 0.9);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.viking-toggle__track::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 44px;
  padding: 4px;
  background: linear-gradient(
    170deg,
    rgba(180, 160, 120, 0.6) 0%,
    var(--vt-bronze) 15%,
    var(--vt-metal-medium) 30%,
    var(--vt-metal-dark) 50%,
    var(--vt-metal-medium) 70%,
    var(--vt-bronze) 85%,
    rgba(180, 160, 120, 0.6) 100%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.viking-toggle__track::after {
  content: '';
  position: absolute;
  inset: 10px;
  border-radius: 34px;
  background:
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 8px,
      rgba(0, 0, 0, 0.15) 8px,
      rgba(0, 0, 0, 0.15) 9px
    ),
    repeating-linear-gradient(
      0deg,
      transparent 0px,
      transparent 20px,
      rgba(0, 0, 0, 0.05) 20px,
      rgba(0, 0, 0, 0.05) 21px
    );
  pointer-events: none;
  opacity: 0.6;
}

.viking-toggle__inner {
  position: absolute;
  inset: 8px;
  border-radius: 36px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    transparent 25%,
    transparent 75%,
    rgba(139, 115, 85, 0.08) 100%
  );
  overflow: hidden;
}

.viking-toggle__inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(139, 115, 85, 0.3) 20%,
    rgba(139, 115, 85, 0.5) 50%,
    rgba(139, 115, 85, 0.3) 80%,
    transparent 100%
  );
}

.viking-toggle__runes {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  letter-spacing: 6px;
  color: rgba(139, 90, 43, 0.12);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  pointer-events: none;
  transition: all 0.6s ease;
}

.viking-toggle__checkbox:checked ~ .viking-toggle__track .viking-toggle__runes {
  color: rgba(255, 150, 50, 0.5);
  text-shadow:
    0 0 20px var(--vt-fire-glow),
    0 0 40px rgba(255, 100, 30, 0.3);
  animation: viking-rune-pulse 2s ease-in-out infinite;
}

@keyframes viking-rune-pulse {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.7;
  }
}

.viking-toggle__glow {
  position: absolute;
  inset: 0;
  border-radius: 36px;
  background:
    radial-gradient(
      ellipse at 85% 50%,
      rgba(255, 100, 30, 0.4) 0%,
      rgba(255, 80, 20, 0.2) 30%,
      transparent 60%
    ),
    radial-gradient(
      ellipse at 75% 30%,
      rgba(255, 150, 50, 0.2) 0%,
      transparent 40%
    );
  opacity: 0;
  transition: opacity 0.6s ease;
  pointer-events: none;
}

.viking-toggle__checkbox:checked ~ .viking-toggle__track .viking-toggle__glow {
  opacity: 1;
  animation: viking-fire-flicker 3s ease-in-out infinite;
}

@keyframes viking-fire-flicker {
  0%,
  100% {
    opacity: 1;
  }

  25% {
    opacity: 0.85;
  }

  50% {
    opacity: 1;
  }

  75% {
    opacity: 0.9;
  }
}

.viking-toggle__knob {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 35% 35%,
    #a89a80 0%,
    #7a6a5a 25%,
    #5a4a3a 50%,
    #3a2a1a 80%,
    #2a1a0a 100%
  );
  box-shadow:
    0 6px 25px rgba(0, 0, 0, 0.7),
    0 3px 10px rgba(0, 0, 0, 0.5),
    inset 0 3px 6px rgba(255, 255, 255, 0.12),
    inset 0 -4px 8px rgba(0, 0, 0, 0.4),
    inset 3px 0 6px rgba(255, 255, 255, 0.05),
    inset -3px 0 6px rgba(0, 0, 0, 0.2);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 10;
}

.viking-toggle__knob::before {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background: transparent;
  border: 3px solid transparent;
  background-image:
    linear-gradient(var(--vt-wood-medium), var(--vt-wood-medium)),
    linear-gradient(
      135deg,
      rgba(180, 160, 120, 0.8) 0%,
      var(--vt-bronze) 25%,
      var(--vt-metal-dark) 50%,
      var(--vt-bronze) 75%,
      rgba(180, 160, 120, 0.8) 100%
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-shadow:
    inset 0 0 12px rgba(0, 0, 0, 0.6),
    0 0 8px rgba(139, 115, 85, 0.2);
  transition: all 0.6s ease;
}

.viking-toggle__knob::after {
  content: 'ᛟ';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  color: var(--vt-bronze);
  text-shadow:
    0 1px 2px rgba(0, 0, 0, 0.8),
    inset 0 1px 1px rgba(255, 255, 255, 0.1);
  transition: all 0.6s ease;
}

.viking-toggle__shield {
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg at 50% 50%,
    transparent 0deg,
    rgba(0, 0, 0, 0.08) 30deg,
    transparent 60deg,
    rgba(0, 0, 0, 0.08) 90deg,
    transparent 120deg,
    rgba(0, 0, 0, 0.08) 150deg,
    transparent 180deg,
    rgba(0, 0, 0, 0.08) 210deg,
    transparent 240deg,
    rgba(0, 0, 0, 0.08) 270deg,
    transparent 300deg,
    rgba(0, 0, 0, 0.08) 330deg,
    transparent 360deg
  );
  pointer-events: none;
}

.viking-toggle__shield::before {
  content: '';
  position: absolute;
  inset: 12px;
  border-radius: 50%;
  border: 1px solid rgba(139, 115, 85, 0.2);
}

.viking-toggle__checkbox:checked ~ .viking-toggle__track .viking-toggle__knob {
  left: calc(100% - 68px);
  background: radial-gradient(
    circle at 35% 35%,
    var(--vt-gold-bright) 0%,
    var(--vt-gold) 25%,
    #a07820 50%,
    #705010 80%,
    #503800 100%
  );
  box-shadow:
    0 6px 35px var(--vt-fire-glow),
    0 3px 15px rgba(255, 100, 30, 0.5),
    0 0 60px rgba(255, 120, 40, 0.3),
    inset 0 3px 6px rgba(255, 255, 255, 0.25),
    inset 0 -4px 8px rgba(0, 0, 0, 0.3),
    inset 3px 0 6px rgba(255, 255, 255, 0.1),
    inset -3px 0 6px rgba(0, 0, 0, 0.15);
}

.viking-toggle__checkbox:checked
  ~ .viking-toggle__track
  .viking-toggle__knob::before {
  background-image:
    linear-gradient(#604010, #604010),
    linear-gradient(
      135deg,
      var(--vt-gold-bright) 0%,
      var(--vt-gold) 25%,
      #a07820 50%,
      var(--vt-gold) 75%,
      var(--vt-gold-bright) 100%
    );
  box-shadow:
    inset 0 0 12px rgba(0, 0, 0, 0.4),
    0 0 20px var(--vt-fire-glow);
}

.viking-toggle__checkbox:checked
  ~ .viking-toggle__track
  .viking-toggle__knob::after {
  color: var(--vt-gold-bright);
  text-shadow:
    0 0 15px var(--vt-fire-glow),
    0 0 30px rgba(255, 150, 50, 0.5),
    0 1px 2px rgba(0, 0, 0, 0.5);
  animation: viking-rune-glow 2s ease-in-out infinite;
}

@keyframes viking-rune-glow {
  0%,
  100% {
    text-shadow:
      0 0 15px var(--vt-fire-glow),
      0 0 30px rgba(255, 150, 50, 0.5),
      0 1px 2px rgba(0, 0, 0, 0.5);
  }

  50% {
    text-shadow:
      0 0 25px var(--vt-fire-glow),
      0 0 50px rgba(255, 150, 50, 0.7),
      0 1px 2px rgba(0, 0, 0, 0.5);
  }
}

.viking-toggle__icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  z-index: 5;
  pointer-events: none;
  transition: all 0.6s ease;
}

.viking-toggle__icon--left {
  left: 20px;
  fill: rgba(139, 115, 85, 0.5);
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.6));
}

.viking-toggle__icon--right {
  right: 20px;
  fill: rgba(139, 115, 85, 0.35);
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.6));
}

.viking-toggle__checkbox:checked
  ~ .viking-toggle__track
  .viking-toggle__icon--left {
  fill: rgba(139, 115, 85, 0.35);
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.6));
}

.viking-toggle__checkbox:checked
  ~ .viking-toggle__track
  .viking-toggle__icon--right {
  fill: var(--vt-gold);
  filter: drop-shadow(0 0 8px var(--vt-fire-glow))
    drop-shadow(0 0 15px rgba(255, 100, 30, 0.4));
  animation: viking-icon-pulse 2s ease-in-out infinite;
}

@keyframes viking-icon-pulse {
  0%,
  100% {
    transform: translateY(-50%) scale(1);
  }

  50% {
    transform: translateY(-50%) scale(1.1);
  }
}

.viking-toggle__chain {
  position: absolute;
  width: 8px;
  height: 50px;
  background: linear-gradient(
    90deg,
    #2a2018 0%,
    #5a4a3a 15%,
    var(--vt-bronze) 40%,
    var(--vt-bronze) 60%,
    #5a4a3a 85%,
    #2a2018 100%
  );
  border-radius: 4px;
  box-shadow:
    inset 0 0 4px rgba(0, 0, 0, 0.6),
    0 3px 8px rgba(0, 0, 0, 0.5);
  top: 50%;
  transform: translateY(-50%);
}

.viking-toggle__chain--left {
  left: -4px;
}

.viking-toggle__chain--right {
  right: -4px;
}

.viking-toggle__chain::before,
.viking-toggle__chain::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  border: 3px solid;
  border-color: var(--vt-bronze);
  border-radius: 50%;
  background: var(--vt-wood-dark);
  box-shadow:
    inset 0 0 4px rgba(0, 0, 0, 0.6),
    0 2px 4px rgba(0, 0, 0, 0.4);
}

.viking-toggle__chain::before {
  top: -10px;
}

.viking-toggle__chain::after {
  bottom: -10px;
}

.viking-toggle__embers {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  border-radius: 44px;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.viking-toggle__checkbox:checked
  ~ .viking-toggle__track
  .viking-toggle__embers {
  opacity: 1;
}

.viking-toggle__ember {
  position: absolute;
  width: 5px;
  height: 5px;
  background: radial-gradient(
    circle,
    var(--vt-gold-bright) 0%,
    var(--vt-fire) 40%,
    transparent 70%
  );
  border-radius: 50%;
  animation: viking-ember-float 2.5s ease-out infinite;
}

.viking-toggle__ember:nth-child(1) {
  right: 22%;
  bottom: 35%;
  animation-delay: 0s;
  width: 4px;
  height: 4px;
}

.viking-toggle__ember:nth-child(2) {
  right: 28%;
  bottom: 45%;
  animation-delay: 0.4s;
  width: 6px;
  height: 6px;
}

.viking-toggle__ember:nth-child(3) {
  right: 18%;
  bottom: 50%;
  animation-delay: 0.8s;
  width: 3px;
  height: 3px;
}

.viking-toggle__ember:nth-child(4) {
  right: 32%;
  bottom: 40%;
  animation-delay: 1.2s;
  width: 5px;
  height: 5px;
}

@keyframes viking-ember-float {
  0% {
    opacity: 0;
    transform: translateY(0) scale(1) rotate(0deg);
  }

  15% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(-40px) scale(0) rotate(180deg);
  }
}

.viking-toggle:hover .viking-toggle__track {
  box-shadow:
    inset 0 6px 20px rgba(0, 0, 0, 0.9),
    inset 0 -3px 15px rgba(139, 115, 85, 0.12),
    inset 2px 0 10px rgba(0, 0, 0, 0.4),
    inset -2px 0 10px rgba(0, 0, 0, 0.4),
    0 15px 50px rgba(0, 0, 0, 0.8),
    0 5px 20px rgba(0, 0, 0, 0.95);
  transform: translateY(-2px);
}

.viking-toggle:hover .viking-toggle__knob {
  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.8),
    0 4px 12px rgba(0, 0, 0, 0.6),
    inset 0 3px 6px rgba(255, 255, 255, 0.15),
    inset 0 -4px 8px rgba(0, 0, 0, 0.4),
    inset 3px 0 6px rgba(255, 255, 255, 0.08),
    inset -3px 0 6px rgba(0, 0, 0, 0.25);
}

.viking-toggle__checkbox:checked
  ~ .viking-toggle__track:hover
  .viking-toggle__knob {
  box-shadow:
    0 8px 45px var(--vt-fire-glow),
    0 4px 20px rgba(255, 100, 30, 0.6),
    0 0 80px rgba(255, 120, 40, 0.4),
    inset 0 3px 6px rgba(255, 255, 255, 0.3),
    inset 0 -4px 8px rgba(0, 0, 0, 0.25),
    inset 3px 0 6px rgba(255, 255, 255, 0.15),
    inset -3px 0 6px rgba(0, 0, 0, 0.1);
}

.viking-toggle:active .viking-toggle__knob {
  transform: translateY(-50%) scale(0.95);
}

.viking-toggle__checkbox:focus-visible ~ .viking-toggle__track {
  outline: 3px solid var(--vt-gold);
  outline-offset: 6px;
}
</style>
