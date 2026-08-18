<template>
  <svg class="hidden">
    <symbol id="home" viewBox="0 0 24 24">
      <g fill="currentColor">
        <polygon points="12 0,24 8,24 24,16 24,16 14,8 14,8 24,0 24,0 8" />
      </g>
    </symbol>
    <symbol id="videos" viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="3" y1="1" x2="21" y2="1" />
        <line x1="1" y1="5" x2="23" y2="5" />
        <rect x="1" y="9" rx="2" ry="2" width="22" height="13" />
        <polygon points="10 12,15 15,10 18" />
      </g>
    </symbol>
    <symbol id="books" viewBox="0 0 24 24">
      <g fill="currentColor">
        <path
          d="M21,0h-7c-0.8,0-1.5,0.3-2,0.8C11.5,0.3,10.8,0,10,0H3C1.3,0,0,1.3,0,3v16c0,1.7,1.3,3,3,3h7c0.6,0,1,0.4,1,1
					 c0,1.3,2,1.3,2,0c0-0.6,0.4-1,1-1h7c1.7,0,3-1.3,3-3V3C24,1.3,22.7,0,21,0z M10,20H3c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h7
					 c0.6,0,1,0.4,1,1v17.2C10.7,20.1,10.4,20,10,20z M22,19c0,0.6-0.4,1-1,1h-7c-0.4,0-0.7,0.1-1,0.2V3c0-0.6,0.4-1,1-1h7
					 c0.6,0,1,0.4,1,1V19z"
        />
      </g>
    </symbol>
    <symbol id="profile" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="6.5" r="5.5" />
        <path
          d="M20.473,23H3.003c-1.276,0-2.228-1.175-1.957-2.422,.705-3.239,3.029-8.578,10.693-8.578s9.987,5.336,10.692,8.575c.272,1.248-.681,2.425-1.959,2.425Z"
        />
      </g>
    </symbol>
  </svg>

  <nav ref="navRef" class="nav nav--on-page1">
    <ul class="nav__items">
      <li class="nav__item">
        <a
          class="nav__item-link nav__item-link--primary"
          href="#"
          data-nav-item="1"
          aria-describedby="current"
        >
          <svg
            class="nav__item-icon"
            width="24px"
            height="24px"
            aria-hidden="true"
          >
            <title>Home</title>
            <use xlink:href="#home" />
          </svg>
          <span class="nav__item-sr">Home</span>
        </a>
      </li>
      <li class="nav__item">
        <a
          class="nav__item-link nav__item-link--red"
          href="#"
          data-nav-item="2"
        >
          <svg
            class="nav__item-icon"
            width="24px"
            height="24px"
            aria-hidden="true"
          >
            <title>Videos</title>
            <use xlink:href="#videos" />
          </svg>
          <span class="nav__item-sr">Videos</span>
        </a>
      </li>
      <li class="nav__item">
        <a
          class="nav__item-link nav__item-link--orange"
          href="#"
          data-nav-item="3"
        >
          <svg
            class="nav__item-icon"
            width="24px"
            height="24px"
            aria-hidden="true"
          >
            <title>Books</title>
            <use xlink:href="#books" />
          </svg>
          <span class="nav__item-sr">Books</span>
        </a>
      </li>
      <li class="nav__item">
        <a
          class="nav__item-link nav__item-link--purple"
          href="#"
          data-nav-item="4"
        >
          <svg
            class="nav__item-icon"
            width="24px"
            height="24px"
            aria-hidden="true"
          >
            <title>Profile</title>
            <use xlink:href="#profile" />
          </svg>
          <span class="nav__item-sr">Profile</span>
        </a>
      </li>
    </ul>
    <div id="current" hidden>Current page</div>
    <div class="nav__fake-icons">
      <div class="nav__fake-icon-box" data-glass-item="1">
        <svg
          class="nav__fake-icon nav__fake-icon--primary"
          width="24px"
          height="24px"
          aria-hidden="true"
        >
          <use xlink:href="#home" />
        </svg>
      </div>
      <div class="nav__fake-icon-box" data-glass-item="2">
        <svg
          class="nav__fake-icon nav__fake-icon--red"
          width="24px"
          height="24px"
          aria-hidden="true"
        >
          <use xlink:href="#videos" />
        </svg>
      </div>
      <div class="nav__fake-icon-box" data-glass-item="3">
        <svg
          class="nav__fake-icon nav__fake-icon--orange"
          width="24px"
          height="24px"
          aria-hidden="true"
        >
          <use xlink:href="#books" />
        </svg>
      </div>
      <div class="nav__fake-icon-box" data-glass-item="4">
        <svg
          class="nav__fake-icon nav__fake-icon--purple"
          width="24px"
          height="24px"
          aria-hidden="true"
        >
          <use xlink:href="#profile" />
        </svg>
      </div>
    </div>
    <div class="nav__glass" data-glass></div>
  </nav>
</template>

<script lang="ts" setup>
import { onMounted, useTemplateRef } from 'vue'

const navRef = useTemplateRef('navRef')

class Magnifier {
  constructor(qs) {
    // this.el = document.querySelector(qs)
    this.el = qs
    this.page = 1
    this.pages = 4

    this.init()
  }
  init() {
    this.el?.addEventListener('click', this.viewPage.bind(this))
    this.updateGlassPos()
    window.addEventListener('resize', this.updateGlassPos.bind(this))
  }
  setPage(number) {
    this.el?.classList.remove(`nav--on-page${this.page}`)
    this.page = number
    this.el?.classList.add(`nav--on-page${this.page}`)
  }
  updateGlassPos() {
    const glass = this.el?.querySelector(`[data-glass]`)
    const glassRadius = (glass?.offsetWidth || 0) / 2

    for (let p = 1; p <= this.pages; ++p) {
      const glassItem = this.el?.querySelector(`[data-glass-item="${p}"]`)
      const left =
        (glassItem?.offsetLeft || 0) + (glassItem?.offsetWidth || 0) / 2

      this.el?.style.setProperty(`--pos${p}`, `${left - glassRadius}px`)
    }
  }
  viewPage(e) {
    e.preventDefault()
    // bubble up to the button
    let parent = e.target

    while (parent && !parent.hasAttribute('data-nav-item'))
      parent = parent.parentElement

    if (parent) {
      // set the page number
      const pageNumber = +parent.getAttribute('data-nav-item')

      if (pageNumber !== this.page) {
        this.setPage(pageNumber)

        // move the active state to the clicked item
        const items = document.querySelectorAll('[data-nav-item]')

        Array.from(items).forEach(item => {
          item.removeAttribute('aria-describedby')
        })

        parent.setAttribute('aria-describedby', 'current')

        // something else to trigger here…
      }
    }
  }
}

onMounted(() => {
  new Magnifier(navRef.value)
})
</script>

<style scoped>
:where(.nav) {
  --hue: 223;
  --bg: hsl(var(--hue), 10%, 90%);
  --fg: hsl(var(--hue), 10%, 10%);
  --primary: hsl(var(--hue), 90%, 55%);
  --red: hsl(3, 90%, 55%);
  --orange: hsl(33, 90%, 55%);
  --purple: hsl(283, 90%, 55%);
  --trans-dur: 0.3s;
  --trans-dur2: 0.6s;
  font-size: calc(16px + (20 - 16) * (100vw - 320px) / (1280 - 320));
}
a {
  transition:
    background-color var(--trans-dur),
    color var(--trans-dur);
}
.nav {
  --pos1: 3%;
  --pos2: 0%;
  --pos3: 0%;
  --pos4: 0%;
  background-color: hsl(0, 0%, 95%);
  border-radius: 2em;
  box-shadow:
    0.75em 0.75em 3em hsla(0, 0%, 0%, 0.15) inset,
    0 0.05em 0 hsla(0, 0%, 0%, 0.05) inset,
    0 -0.15em 0 hsla(0, 0%, 0%, 0.1) inset,
    0.75em 0.75em 1em hsla(0, 0%, 0%, 0.1);
  display: flex;
  padding: 0 1.5em;
  position: relative;
  width: calc(100% - 1.5em);
  max-width: 24.375em;
  height: 5.25em;
  transition:
    background-color var(--trans-dur),
    box-shadow var(--trans-dur);
}
.nav__fake-icons,
.nav__glass {
  pointer-events: none;
}
.nav__fake-icon,
.nav__item-icon {
  display: block;
  width: 1.5em;
  height: 1.5em;
}
.nav__fake-icons {
  background-color: hsl(0, 0%, 95%);
  box-shadow: 0.75em 0.75em 3em hsla(0, 0%, 0%, 0.15) inset;
  clip-path: circle(2em at 2em 50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5em;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition:
    background-color var(--trans-dur),
    clip-path var(--trans-dur2) ease-in-out;
}
.nav__fake-icon-box {
  margin: 0.5em;
  transform: scale(1.5);
}
.nav__fake-icon {
  color: hsl(0, 0%, 60%);
  transform: translateX(50%);
  transition:
    color var(--trans-dur),
    transform var(--trans-dur2) ease-in-out;
}
.nav__glass,
.nav__glass:before,
.nav__glass:after {
  border-radius: 50%;
  position: absolute;
}
.nav__glass {
  background-color: hsla(0, 0%, 100%, 0.05);
  box-shadow:
    0 0 0 0.1em hsla(0, 0%, 0%, 0.1) inset,
    0 0 0 0.15em hsla(0, 0%, 100%, 0.1) inset;
  overflow: hidden;
  top: 0.625em;
  left: 0;
  width: 4em;
  height: 4em;
  transition: left var(--trans-dur2) ease-in-out;
}
.nav__glass:before,
.nav__glass:after {
  content: '';
  display: block;
}
.nav__glass:before {
  box-shadow: 0 0 0 0.1em hsla(0, 0%, 0%, 0.2) inset;
  top: 0.25em;
  left: 0.25em;
  width: 3.5em;
  height: 3.5em;
}
.nav__glass:after {
  border: 0.2em solid transparent;
  border-right: 0.2em solid hsla(0, 0%, 100%, 0.4);
  border-left: 0.2em solid hsla(0, 0%, 50%, 0.4);
  top: 0.5em;
  left: 0.5em;
  width: 2.7em;
  height: 2.7em;
  transform: rotate(-45deg);
}
.nav__items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 100%;
}
.nav__item-link {
  color: hsl(0, 0%, 60%);
  display: block;
  padding: 0.5em;
  text-decoration: none;
}
.nav__item-link:focus {
  outline: transparent;
}
.nav__item-link:focus,
.nav__item-link:hover,
.nav--on-page1 .nav__item-link--primary {
  color: var(--primary);
}
.nav__item-link--red:focus,
.nav__item-link--red:hover,
.nav--on-page2 .nav__item-link--red {
  color: var(--red);
}
.nav__item-link--orange:focus,
.nav__item-link--orange:hover,
.nav--on-page3 .nav__item-link--orange {
  color: var(--orange);
}
.nav__item-link--purple:focus,
.nav__item-link--purple:hover,
.nav--on-page4 .nav__item-link--purple {
  color: var(--purple);
}
.nav__item-sr {
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}
.nav--on-page1 .nav__fake-icons {
  clip-path: circle(2em at calc(2em + var(--pos1)) 50%);
}
.nav--on-page1 .nav__fake-icon--primary {
  color: var(--primary);
  transform: translateX(0);
}
.nav--on-page1 .nav__glass {
  left: var(--pos1);
}
.nav--on-page2 .nav__fake-icons {
  clip-path: circle(2em at calc(2em + var(--pos2)) 50%);
}
.nav--on-page2 .nav__fake-icon--red {
  color: var(--red);
  transform: translateX(0);
}
.nav--on-page2 .nav__glass {
  left: var(--pos2);
}
.nav--on-page3 .nav__fake-icons {
  clip-path: circle(2em at calc(2em + var(--pos3)) 50%);
}
.nav--on-page3 .nav__fake-icon--orange {
  color: var(--orange);
  transform: translateX(0);
}
.nav--on-page3 .nav__glass {
  left: var(--pos3);
}
.nav--on-page4 .nav__fake-icons {
  clip-path: circle(2em at calc(2em + var(--pos4)) 50%);
}
.nav--on-page4 .nav__fake-icon--purple {
  color: var(--purple);
  transform: translateX(0);
}
.nav--on-page4 .nav__glass {
  left: var(--pos4);
}
.nav--on-page2 .nav__fake-icon--primary,
.nav--on-page3 .nav__fake-icon--primary,
.nav--on-page4 .nav__fake-icon--primary,
.nav--on-page3 .nav__fake-icon--red,
.nav--on-page4 .nav__fake-icon--red,
.nav--on-page4 .nav__fake-icon--orange {
  transform: translateX(-50%);
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: hsl(var(--hue), 10%, 10%);
    --fg: hsl(var(--hue), 10%, 90%);
  }
  .nav,
  .nav__fake-icons {
    background-color: hsl(0, 0%, 25%);
  }
  .nav {
    box-shadow:
      0.75em 0.75em 3em hsla(0, 0%, 0%, 0.3) inset,
      0 0.05em 0 hsla(0, 0%, 0%, 0.1) inset,
      0 -0.15em 0 hsla(0, 0%, 0%, 0.2) inset,
      0.75em 0.75em 1em hsla(0, 0%, 0%, 0.2);
  }
  .nav__fake-icons {
    box-shadow: 0.75em 0.75em 3em hsla(0, 0%, 0%, 0.3) inset;
  }
}
</style>
