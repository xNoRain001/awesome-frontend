<template>
  <div class="wrapper">
    <nav>
      <a href="#link-1" id="link-1">Home</a>
      <a href="#link-2" id="link-2">About</a>
      <a href="#link-3" id="link-3">Profile</a>
      <a href="#link-4" id="link-4">Contact</a>
    </nav>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
:where(.wrapper) {
  color-scheme: light dark;
  --bg-dark: rgb(12, 10, 9);
  --bg-light: rgb(248, 244, 238);
  --txt-light: rgb(10, 10, 10);
  --txt-dark: rgb(245, 245, 245);
  --line-light: rgba(0 0 0 / 0.25);
  --line-dark: rgba(255 255 255 / 0.25);

  --clr-bg: light-dark(var(--bg-light), var(--bg-dark));
  --clr-txt: light-dark(var(--txt-light), var(--txt-dark));
  --clr-lines: light-dark(var(--line-light), var(--line-dark));

  --nav-indicator-hover: rgb(0, 105, 168);
  --nav-indicator-active: rgb(0, 166, 244);
  --nav-bg: rgb(5, 47, 74);
  --nav-link-color: white;
  --nav-link-color-active: white;
  --nav-padding: 5px;
  --nav-border-radius: 999vw;

  --nav-trans-duration: 700ms;
  --nav-trans-easing: linear(
    0,
    1 44.7%,
    0.898 51.8%,
    0.874 55.1%,
    0.866 58.4%,
    0.888 64.3%,
    1 77.4%,
    0.98 84.5%,
    1
  );
}

.wrapper {
  position: relative;
  border: 1px solid var(--clr-lines);
  border-radius: var(--nav-border-radius);
  isolation: isolate;
  width: fit-content;
  padding: var(--nav-padding);
  background-color: var(--nav-bg);

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: anchor(top);
    left: anchor(left);
    right: anchor(right);
    bottom: anchor(bottom);
    z-index: -1;
    background: var(--nav-indicator-hover);
    transition: var(--nav-trans-duration) var(--nav-trans-easing);
    pointer-events: none;
    border-radius: inherit;
  }

  &::before {
    position-anchor: --hovered-option;
  }

  &::after {
    background: var(--nav-indicator-active);
    position-anchor: --active-option;
  }
}

nav {
  anchor-name: --hovered-option;
  display: flex;
  align-items: center;
  & > a {
    display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    color: var(--nav-link-color);
    font-size: 1.2rem;
    transition: color 150ms ease-in-out;
    &:hover {
      anchor-name: --hovered-option;
    }
  }
}

/* active link */
body:has(:target#link-1) nav > a[href='#link-1'],
body:has(:target#link-2) nav > a[href='#link-2'],
body:has(:target#link-3) nav > a[href='#link-3'],
body:has(:target#link-4) nav > a[href='#link-4'] {
  anchor-name: --active-option;
  color: var(--nav-link-color-active);
}
</style>
