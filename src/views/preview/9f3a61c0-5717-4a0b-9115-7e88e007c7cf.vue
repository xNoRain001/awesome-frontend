<template>
  <div class="wrapper">
    <fieldset id="color-scheme">
      <legend>Theme</legend>
      <label for="system" tabindex="0">
        <input
          type="radio"
          id="system"
          name="theme"
          value="system"
          tabindex="-1"
        /><span>Sys</span>
      </label>
      <label for="light" tabindex="0">
        <input
          type="radio"
          id="light"
          name="theme"
          value="light"
          tabindex="-1"
        /><span>Light</span>
      </label>
      <label for="dark" tabindex="0">
        <input
          type="radio"
          id="dark"
          name="theme"
          value="dark"
          tabindex="-1"
          checked
        /><span>Dark</span>
      </label>
    </fieldset>
  </div>

  <!-- 
    How to customize
    
    Colors & Palette: Redefine --gold (36deg 75% 33%), --turq (150deg 55% 35%), or override --theme-accent and --theme-canvas inside :root using custom hsl() coordinates.
    
    Corner Geometry: Replace corner-shape: notch or corner-shape: superellipse(-.5) on fieldset and input selectors to alter edge geometry.

    Switch Sizing: Adjust --d: 10px on input to rescale input indicators, or tweak padding: 19px 24px 18px on label for custom panel height.

    Typography: Swap font-family: "Silkscreen", monospace and font-size: 1.75rex on fieldset to change retro text rendering.

    Glow & Shadow Effects: Modify drop-shadow() parameters and color-mix() opacity percentages on fieldset to control light-dark background halos.

    Rotation Angles: Alter --rotation: 225deg on input to change indicator hover transformation direction.
  -->
</template>

<script lang="ts" setup></script>

<style scoped>
fieldset {
  border: 2px solid
    if(
      style(--color-scheme: light): color-mix(
          in oklab,
          var(--theme-accent),
          transparent 80%
        )
        ; /* uses NOT over ELSE to respect `prefers-color-scheme` */ not
        style(--color-scheme: light): color-mix(
          in oklab,
          var(--theme-accent),
          transparent 70%
        )
        ;
    );
  border-radius: 5px;
  corner-shape: notch;
  color: var(--theme-text);
  outline: 7px ridge
    if(
      style(--color-scheme: light): color-mix(
          in oklab,
          var(--theme-accent),
          transparent 25%
        )
        ; /* uses NOT over ELSE to respect `prefers-color-scheme` */ not
        style(--color-scheme: light): color-mix(
          in oklab,
          var(--theme-accent),
          transparent 25%
        )
        ;
    );
  outline-offset: 2px;

  filter: drop-shadow(
      0 0 1dvw
        color-mix(
          in oklab,
          light-dark(transparent, var(--theme-accent)),
          transparent 5%
        )
    )
    drop-shadow(
      0 0 5dvw
        color-mix(
          in oklab,
          light-dark(transparent, var(--theme-accent)),
          transparent 25%
        )
    );

  font-family: 'Silkscreen', monospace;
  font-size: 1.75rex;
  letter-spacing: -0.075ch;
  text-rendering: geometricprecision;

  display: grid;
  gap: 0;

  margin: 0;
  padding: 0;

  max-width: 30px;
  padding: 6px 12px;

  position: relative;
  z-index: 3;

  legend {
    color: color-mix(in oklab, var(--theme-accent), transparent 25%);
    text-align: center;
    text-box: trim-both cap alphabetic;
    top: -0.5ex;
    position: relative;
    padding-top: 0.84ex;
  }
}

input {
  --d: 10px;
  --rotation: 225deg;

  appearance: none;

  background: currentColor;
  color: inherit;

  border-radius: 6px;
  corner-shape: notch;
  rotate: var(--rotation);

  margin-top: -1px;

  outline: 2px solid color-mix(in oklab, var(--theme-text), transparent 50%);
  outline-offset: 2px;

  height: var(--d);
  width: var(--d);

  label:hover &:not(:checked) {
    --rotation: 90deg;
    corner-shape: superellipse(-0.25);
    outline-color: color-mix(in oklab, var(--theme-text), transparent 75%);
  }

  &:checked {
    --rotation: unset;
    color: inherit;
    outline-color: color-mix(in oklab, var(--theme-accent), transparent 25%);
    outline-offset: 3px;
    corner-shape: superellipse(-0.5);

    label:hover & {
      outline-color: color-mix(in oklab, var(--theme-accent), transparent 0%);
    }
  }
}

label {
  border-radius: 6px;
  corner-shape: superellipse(-1);

  display: flex;
  align-items: center;
  gap: 8px;

  user-select: none;
  padding: 19px 24px 18px;

  span {
    text-box: trim-both cap alphabetic;
    display: inline-block;
  }

  &:has(:checked) {
    background: var(--theme-text);
    color: var(--theme-canvas);

    input {
      color: var(--theme-accent);
    }
  }

  &:is(:focus-visible),
  &:has(:focus-within) {
    --rotation: 225deg;
    outline-width: 2px;
    outline-style: solid;
    outline-offset: -4px;
  }

  &:is(:focus-visible) {
    outline-color: color-mix(in oklab, var(--theme-accent), transparent 50%);
    &:not(:has(:checked)):hover {
      background: color-mix(in oklab, var(--theme-accent), transparent 84%);
    }
  }

  &:has(:focus-within) {
    outline-color: color-mix(in oklab, var(--theme-accent), transparent 50%);
  }

  &:has(:focus) {
    outline-color: color-mix(in oklab, var(--theme-accent), transparent 50%);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .wrapper,
  fieldset,
  label,
  input {
    transition-property:
      background, border-color, box-shadow, color, filter, rotate;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
  }

  label,
  input {
    &:focus-within,
    &:focus,
    &:hover,
    &:focus-visible {
      transition-property: background, border-color, rotate;
      transition-duration: 0.2s;
      transition-timing-function: ease-in;
    }
  }
}

:where(.wrapper) {
  --white: 0 0 90%;
  --black: 0 0 10%;
  --gray: 0 0 45%;

  --gold: 36deg 75% 33%;
  --turq: 150deg 55% 35%;

  --theme-canvas: light-dark(hsl(var(--white)), hsl(var(--black)));

  --theme-text: light-dark(hsl(var(--black)), hsl(var(--white)));

  --theme-text-2: ;

  --theme-accent: light-dark(hsl(var(--gold)), hsl(var(--turq)));

  --color-scheme: light dark;
  color-scheme: var(--color-scheme);
  &:has(#color-scheme input[value='light']:checked) {
    --color-scheme: light;
  }
  &:has(#color-scheme input[value='dark']:checked) {
    --color-scheme: dark;
  }

  container: html / inline-size;
}

@font-face {
  src: url('https://assets.codepen.io/2392/Silkscreen-Regular.woff2');
  font-family: 'Silkscreen';
}

.wrapper {
  width: 100%;
  height: 100%;
  accent-color: var(--theme-accent);
  background: var(--theme-canvas);
  color: var(--theme-text);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
