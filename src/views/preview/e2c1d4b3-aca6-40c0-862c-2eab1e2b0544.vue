<template>
  <div class="menu">
    <button class="menu-toggle" popovertarget="menu-items">
      <span aria-hidden="true">➕</span>
      <span class="sr-only">open menu</span>
    </button>
    <ul id="menu-items" popover role="menu">
      <li class="item">
        <button role="menuitem">
          <span class="material-icons">❤</span>
        </button>
      </li>
      <li class="item">
        <button role="menuitem">
          <span class="material-icons">📕</span>
        </button>
      </li>
      <li class="item">
        <button role="menuitem">
          <span class="material-icons">🔗</span>
        </button>
      </li>
      <li class="item">
        <button role="menuitem">
          <span class="material-icons">📧</span>
        </button>
      </li>
      <li class="item">
        <button role="menuitem">
          <span class="material-icons">🛒</span>
        </button>
      </li>
      <!-- <li class="item">
        <button
          popovertargetaction="hide"
          popovertarget="menu-items-3"
          class="hidden-close"
        >
          <span aria-hidden="true"> </span>
          <span class="sr-only">close menu</span>
        </button>
      </li> -->
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
:where(.menu) {
  --btn-size: 3rem;
  --extra-space: 1.5rem;
}

/* Where the magic happens */
@function --polar-coordinate(--angle, --distance) {
  result: translate(
    calc(cos(var(--angle)) * var(--distance)),
    calc(sin(var(--angle)) * var(--distance))
  );
}

.item {
  --radius: calc(var(--btn-size) + var(--extra-space));
  --delay: calc((sibling-index() - 1) * 0.1s);
  --angle: calc((sibling-index() - 1) * -45deg);
  background: hsl(calc(40 * sibling-index()), 70%, 80%);
  transform: --polar-coordinate(var(--angle), var(--radius));
  opacity: 0;
  transition: all 0.3s var(--delay) ease;
}

/* Adding for popover base */

#menu-items:not(:popover-open) .item {
  --radius: 0;
  --angle: 0;
  rotate: 45deg;
}

/* rotate the "plus" */
.menu-toggle > div {
  transition: transform 0.3s;
}

.menu:has(:popover-open) .menu-toggle > div {
  transform: rotate(45deg);
}

#menu-items {
  /*  popover override  */
  background: none;
  inset: auto;
  /*  position  */
  position-area: center;
}

.hidden-close {
  transform: rotate(45deg);
  transition: opacity 0.1s;
  transition-delay: 1s;
  width: var(--btn-size);
  aspect-ratio: 1;
}

:popover-open .item {
  opacity: 1;
}

/* Not related to demmo, just styling */

.item {
  border-radius: 50%;
  width: var(--btn-size);
  aspect-ratio: 1;
}

.item button {
  display: grid;
  justify-content: center;
  align-items: center;
}

.menu-toggle {
  border-radius: 50%;
  width: var(--btn-size);
  aspect-ratio: 1;
  background: darksalmon;
  z-index: 1;
}

/* Grid piles */

.menu,
#menu-items,
.item {
  display: grid;
  place-content: center;
}

.menu > *,
#menu-items > *,
body > * .item button {
  grid-area: 1/1;
}

/* Resets, etc. */
/* visually-hidden ala https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html */
.sr-only {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

button {
  border: none;
  background: none;
  font-family: 'Noto Emoji';
  color: #222;
  font-size: 1.25rem;
}

button:focus-visible {
  outline: 2px dashed deeppink;
  border-radius: 50%;
  aspect-ratio: 1/1;
}

.menu,
#menu-items {
  overflow: unset;
}
</style>
