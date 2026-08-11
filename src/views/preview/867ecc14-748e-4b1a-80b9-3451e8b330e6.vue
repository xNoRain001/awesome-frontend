<template>
  <div class="canvas">
    <div class="parrot">
      <div class="head"></div>
      <div class="back"></div>
      <div class="pbody">
        <div class="shadesection"></div>
        <div class="eye">
          <div class="eyemiddle"></div>
          <div class="eyeshadow"></div>
        </div>
      </div>
      <div class="foot"></div>
      <div class="wing"></div>
      <div class="beak">
        <div class="mouth"></div>
      </div>
      <div class="lowerbeak"></div>
      <div class="cursewords">
        <div class="words words1">F*&amp;#</div>
        <div class="words words2">%@#*!!</div>
        <div class="words words3">D#&%</div>
        <div class="words words4">$%#@!!</div>
      </div>
    </div>
    <div class="trim"></div>
    <div class="circle"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chilanka&display=swap');

:where(.canvas) {
  --darkblue: #78c2e2; /* body stripe 1 */
  --mediumblue: #86c8e5; /* body stripe 2 */
  --mediumblue2: #81c6e4; /* body stripe 3 */
  --mediumblue3: #91cde7; /* body stripe 4 */
  --mediumblue4: #8acae6; /* body stripe 5 */
  --lightblue: #98d0e9; /* body stripe 6 */
  --mediumblue5: #70bee0; /* head */
  --yellow: #f7ca72; /* around eyes, body, wing shadow */
  --greybrown: #928b85; /* around eyes, wing shadow, feet */
  --darkgrey: #5f617b; /* beak */
  --darkishgrey: #7a798a; /* nostril */
  --black: #373b63; /* eyeball */
  --lightgrey: #e8eaf9; /* around eyeball */
  --white: #ffffff; /* eye white */
  --greyish: #e5e7f8; /* eye shadow */
  --blueshadow: rgba(95, 97, 123, 0.3); /* wing shadow */
  --lightyellow: #b3aeaa; /* beak end */
  --lightyellow2: #aba7a8; /* beak middle */
  --darkgreyish: #8c898e; /* mouth */
  --darkergrey: #5f617b; /* bottom beak */
  --purplegrey: #707297; /* beak top */
  --anotherblue: #89c9e5; /* wing */
  --anotherblue2: #90cde7; /* wing */
  --anotherblue3: #70bee0; /* wing */
  --lightyellow3: #f9d58e; /* body */
  --onemoregrey: #e1e9f5; /* circle */
  --verylightgrey: #e7edf6; /* circle */
  --darkred: #8b0000; /* eye */
}

.canvas {
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 80vmin;
  height: 80vmin;
  /* transform: scale(1.5); */
}

.parrot {
  position: absolute;
  width: 0vmin;
  height: 0vmin;
  top: 20vmin;
  left: 30vmin;
  z-index: 1;
}

.head {
  position: absolute;
  background: var(--mediumblue5);
  width: 21vmin;
  left: 1vmin;
  height: 20vmin;
  top: 5vmin;
  border-radius: 0% 80% 100% 0% / 0% 90% 0% 100%;
  z-index: 1;
}

.pbody {
  position: absolute;
  width: 9vmin;
  left: 1vmin;
  height: 20vmin;
  top: 20vmin;
  background: var(--yellow);
  border-radius: 0% 100% 0% 100% / 100% 53% 47% 0%;
  z-index: 2;
}

/* trick to rotate the background only, use a pseudo element and rotate it */
.pbody:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    ellipse farthest-corner at 10px 10px,
    var(--lightyellow3),
    var(--lightyellow3) 50%,
    var(--yellow) 50%
  );
  background-size: 20px 10px;
  transform: rotate(180deg);
  border-radius: 0% 100% 0% 100% / 57% 0% 100% 43%;
}

/* foot */
.foot {
  content: '';
  position: absolute;
  background: var(--greybrown);
  width: 2.5vmin;
  height: 2vmin;
  top: 38vmin;
  left: -1.5vmin;
  border-radius: 100% 0% 0% 100% / 100% 0% 100% 0%;
  z-index: 1;
}

.shadesection {
  position: absolute;
  width: 13.8vmin;
  height: 3vmin;
  left: 7vmin;
  top: 2vmin;
  z-index: 2;
  background: linear-gradient(var(--mediumblue5), var(--mediumblue3));
}

.shadesection:after {
  content: '';
  position: absolute;
  width: 5.9vmin;
  height: 2vmin;
  background: linear-gradient(var(--mediumblue2), var(--mediumblue2));
  left: 4vmin;
  top: 1vmin;
}

.eye {
  position: absolute;
  width: 9vmin;
  height: 9vmin;
  border-radius: 50%;
  background: var(--white);
  z-index: 3;
  top: -11vmin;
  left: 1vmin;
  box-shadow:
    1vmin 0 0 1vmin var(--greybrown),
    1.7vmin 0 0 1.7vmin var(--yellow);
}

.eyemiddle {
  position: absolute;
  width: 3.5vmin;
  height: 3.5vmin;
  background: var(--lightgrey);
  border-radius: 50%;
  top: 2.5vmin;
  left: 2vmin;
  overflow: hidden;
  z-index: 2;
}

.eyemiddle:before {
  position: absolute;
  content: '';
  width: 4.5vmin;
  height: 4.5vmin;
  left: -0.5vmin;
  top: -1.9vmin;
  background: black;
  border-radius: 50%;
}

.eyemiddle:after {
  position: absolute;
  content: '';
  width: 0.7vmin;
  height: 0.7vmin;
  left: 1.9vmin;
  top: 0.8vmin;
  border-radius: 50%;
  background: var(--white);
  z-index: 3;
}

.eyeshadow {
  position: absolute;
  width: 4.6vmin;
  height: 4vmin;
  top: 0.3vmin;
  background: linear-gradient(white, var(--greyish));
  z-index: 0;
  border-radius: 0% 100% 100% 0% / 0% 100% 0% 100%;
  left: 4.4vmin;
}

.back {
  position: absolute;
  width: 12.1vmin;
  height: 25.3vmin;
  top: 25vmin;
  left: 10vmin;
  z-index: 1;
  background-image: linear-gradient(
    90deg,
    var(--darkblue) 8.33%,
    var(--mediumblue) 8.33%,
    var(--mediumblue) 16.67%,
    var(--mediumblue2) 16.67%,
    var(--mediumblue2) 25%,
    var(--mediumblue3) 25%,
    var(--mediumblue3) 33.33%,
    var(--mediumblue4) 33.33%,
    var(--mediumblue4) 41.67%,
    var(--lightblue) 41.67%,
    var(--lightblue) 50%,
    var(--darkblue) 50%,
    var(--darkblue) 58.33%,
    var(--mediumblue) 58.33%,
    var(--mediumblue) 66.67%,
    var(--mediumblue2) 66.67%,
    var(--mediumblue2) 75%,
    var(--mediumblue3) 75%,
    var(--mediumblue3) 83.33%,
    var(--mediumblue4) 83.33%,
    var(--mediumblue4) 91.67%,
    var(--lightblue) 91.67%,
    var(--lightblue) 100%
  );
  background-size: 240px 240px;
  border-radius: 99% 1% 100% 0% / 0% 51% 49% 100%;
  overflow: hidden;
  z-index: 2;
}

/* wing shadow on tail */
.back:before {
  content: '';
  position: absolute;
  background: var(--blueshadow);
  mix-blend-mode: darken;
  width: 16vmin;
  height: 7vmin;
  top: 8.5vmin;
  left: -3vmin;
  z-index: 4;
  border-radius: 0% 100% 50% 50% / 0% 0% 100% 100%;
  z-index: 2;
  transform: rotate(25deg);
}

.beak {
  position: absolute;
  width: 8vmin;
  height: 8vmin;
  left: -7vmin;
  top: 5vmin;
  background: linear-gradient(
    235deg,
    var(--purplegrey),
    var(--lightyellow2),
    var(--lightyellow)
  );
  border-radius: 100% 0% 0% 100% / 100% 0% 100% 0%;
  transform-origin: 100% 100%;
}

/* nostril */
.beak:after {
  position: absolute;
  content: '';
  width: 3vmin;
  height: 1vmin;
  background: var(--darkishgrey);
  top: 2.6vmin;
  left: 2.6vmin;
  transform: rotate(-45deg);
  border-radius: 42% 58% 0% 100% / 100% 100% 0% 0%;
}

/* keep seperate than upper beak so can animate seperately */
.lowerbeak {
  position: absolute;
  width: 7vmin;
  height: 7vmin;
  left: -6vmin;
  top: 13vmin;
  background: linear-gradient(
    -45deg,
    var(--darkergrey) 40%,
    var(--lightyellow2),
    var(--lightyellow)
  );
  border-radius: 100% 0% 0% 100% / 0% 0% 100% 100%;
  transform-origin: 100% 0%;
}

.mouth {
  position: absolute;
  width: 10vmin;
  height: 0.5vmin;
  top: 7.5vmin;
  background: var(--darkgreyish);
}

.wing {
  position: absolute;
  width: 18vmin;
  height: 9vmin;
  background-image:
    radial-gradient(
      4vmin circle at 0vmin 0.5vmin,
      var(--mediumblue5) 50%,
      transparent 51%
    ),
    radial-gradient(
      7vmin circle at 1vmin 2vmin,
      var(--anotherblue) 50%,
      transparent 51%
    ),
    radial-gradient(
      12vmin circle at 3vmin 2vmin,
      var(--anotherblue2) 50%,
      transparent 51%
    ),
    radial-gradient(
      17vmin circle at 5vmin 2vmin,
      var(--anotherblue) 50%,
      transparent 51%
    ),
    radial-gradient(
      27vmin circle at 5vmin 0vmin,
      var(--darkblue) 50%,
      transparent 51%
    );
  border-radius: 49% 51% 46% 54% / 0% 0% 100% 100%;
  top: 26.7vmin;
  left: 4.5vmin;
  transform: rotate(38deg);
  box-shadow:
    1vmin 0.7vmin var(--yellow),
    1.8vmin 1.5vmin var(--greybrown);
  z-index: 2;
}

.wing:after {
  position: absolute;
  content: '';
  width: 3vmin;
  height: 3vmin;
  left: 0vmin;
  border-radius: 50%;
  background-image: linear-gradient(
    45deg,
    var(--mediumblue5),
    var(--anotherblue)
  );
  border-radius: 0% 100% 0% 100% / 100% 100% 0% 0%;
  transform: rotate(65deg);
}

/* found a better way to do the trim with radial gradients */
.trim {
  position: absolute;
  width: 43vmin;
  height: 10vmin;
  bottom: 15vmin;
  height: 5vmin;
  background:
    radial-gradient(
      5vmin circle at 4vmin 0vmin,
      var(--lightgrey) 50%,
      transparent 51%
    ),
    radial-gradient(
      5vmin circle at 9vmin 0vmin,
      var(--lightgrey) 50%,
      transparent 51%
    ),
    radial-gradient(
      5vmin circle at 14vmin 0vmin,
      var(--lightgrey) 50%,
      transparent 51%
    ),
    radial-gradient(
      5vmin circle at 19vmin 0vmin,
      var(--lightgrey) 50%,
      transparent 51%
    ),
    radial-gradient(
      5vmin circle at 24vmin 0vmin,
      var(--lightgrey) 50%,
      transparent 51%
    ),
    radial-gradient(
      5vmin circle at 29vmin 0vmin,
      var(--lightgrey) 50%,
      transparent 51%
    ),
    radial-gradient(
      5vmin circle at 34vmin 0vmin,
      var(--lightgrey) 50%,
      transparent 51%
    ),
    radial-gradient(
      5vmin circle at 39vmin 0vmin,
      var(--lightgrey) 50%,
      transparent 51%
    );
}

.trim:after {
  position: absolute;
  content: '';
  width: 100%;
  height: 0.5vmin;
  background: var(--lightgrey);
}

.circle {
  position: absolute;
  width: 50vmin;
  height: 30vmin;
  top: 15vmin;
  background: linear-gradient(
    var(--onemoregrey),
    var(--verylightgrey),
    var(--white)
  );
  border-top-left-radius: 30vmin;
  border-top-right-radius: 30vmin;
  z-index: -1;
}

.cursewords {
  position: absolute;
  width: 10vmin;
  height: 10vmin;
  top: 8vmin;
  left: -9vmin;
}

.words {
  opacity: 0;
  font-family: 'Chilanka', cursive;
  font-size: 2.5vmin;
  user-select: none;
}

.words1 {
  transform: rotate(35deg);
}

.words2 {
  transform: rotate(15deg);
  animation-delay: 1s;
}

.words3 {
  transform: rotate(-15deg);
}

.words4 {
  transform: rotate(-35deg);
}

.parrot:hover > .lowerbeak {
  animation: talklower 1s linear infinite;
}

.parrot:hover > .beak {
  animation: talk 1s linear infinite;
}

.parrot:hover {
  animation: shake 0.5s ease infinite;
}

.parrot:hover > .wing {
  animation: wingshake 0.2s ease infinite;
}

.parrot:hover .eyemiddle:before {
  animation: eyerage 1s ease infinite;
}

.parrot:hover .eye {
  animation: shake 0.5s ease infinite;
}

.parrot:hover .words1 {
  animation: flicker 1s ease alternate infinite;
}

.parrot:hover .words2 {
  animation: flicker 1s 0.5s ease alternate infinite;
}

.parrot:hover .words3 {
  animation: flicker 1s 1s ease alternate infinite;
}

.parrot:hover .words4 {
  animation: flicker 1s 1.5s ease alternate infinite;
}

.parrot:hover .words5 {
  animation: flicker 1s 1.5s ease alternate infinite;
}

@keyframes talk {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(45deg);
  }

  100% {
    transform: rotate(25deg);
  }
}

@keyframes talklower {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(-45deg);
  }

  100% {
    transform: rotate(-25deg);
  }
}

/* shake from here: https://www.w3schools.com/howto/howto_css_shake_image.asp */
@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }

  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }

  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }

  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }

  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }

  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }

  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }

  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }

  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }

  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }

  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}

@keyframes wingshake {
  0% {
    transform: rotate(38deg) translate(1px, 1px) rotate(0deg);
  }

  10% {
    transform: rotate(38deg) translate(-1px, -2px) rotate(-1deg);
  }

  20% {
    transform: rotate(38deg) translate(-3px, 0px) rotate(1deg);
  }

  30% {
    transform: rotate(38deg) translate(3px, 2px) rotate(0deg);
  }

  40% {
    transform: rotate(38deg) translate(1px, -1px) rotate(1deg);
  }

  50% {
    transform: rotate(38deg) translate(-1px, 2px) rotate(-1deg);
  }

  60% {
    transform: rotate(38deg) translate(-3px, 1px) rotate(0deg);
  }

  70% {
    transform: rotate(38deg) translate(3px, 1px) rotate(-1deg);
  }

  80% {
    transform: rotate(38deg) translate(-1px, -1px) rotate(1deg);
  }

  90% {
    transform: rotate(38deg) translate(1px, 2px) rotate(0deg);
  }

  100% {
    transform: rotate(38deg) translate(1px, -2px) rotate(-1deg);
  }
}

@keyframes eyerage {
  0% {
    background: var(--black);
  }

  100% {
    background: var(--darkred);
  }
}

@keyframes flicker {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
