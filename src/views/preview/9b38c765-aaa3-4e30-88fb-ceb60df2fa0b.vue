<template>
  <div class="wrapper">
    <div class="arcade">
      <div class="top"></div>
      <div class="top-screen"></div>
      <div class="screen">
        <div class="glass">
          <span><i>GAME OVER</i><i></i></span>
        </div>
      </div>
      <div class="bot-screen">
        <div class="joystick"><span></span><span></span></div>
        <div class="buttons"><span></span><span></span></div>
      </div>
      <div class="bot">
        <div class="box">
          <div class="coins">
            <div class="slot"></div>
          </div>
          <div class="button"></div>
        </div>
        <div class="draw"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Press+Start+2P&display=swap');

:where(.arcade) {
  --c1: #2d313d;
  --c2: #212123;
  --b1: #57626b;
  --b2: #40494f;
  --g1: #0eb4e6;
  --g2: #256e98;
  --s1: #b3bbc5;
  --m1: #ef4e3c;
  --d1: #ffb751;
  --j1: #ff5c4f;
  --j2: #d72f20;
}

*::before,
*::after {
  content: '';
  position: absolute;
  box-sizing: border-box;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at -50% 33%, #716681, #000000);
  background: radial-gradient(circle at -50% 33%, #fbff51, #ef4e3c);
}

.arcade {
  width: 36vmin;
  height: 75vmin;
  position: relative;
}

.arcade * {
  position: absolute;
  width: calc(100% - 2vmin);
  left: 1vmin;
}

.top {
  border-radius: 2vmin 2vmin 0 0;
  background: var(--c1);
  height: 11.5vmin;
  border: 1vmin solid var(--b1);
  border-bottom-width: 0;
}

.top::before {
  border: 0.35vmin solid #b05a5c;
  width: calc(100% - 1.5vmin);
  left: 0.75vmin;
  top: 0.75vmin;
  height: calc(100% - 1.5vmin);
  border-radius: 0.5vmin;
}

.top::after {
  content: 'ARCADE';
  width: 100%;
  height: 100%;
  left: 0vmin;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5.5vmin;
  font-family: 'Inter', sans-serif;
  color: #fff;
  text-shadow: 0.15vmin 0.15vmin 0.1vmin var(--shadow);
  background-image:
    linear-gradient(
      180deg,
      #fff0 0 50%,
      #cd4a3ed1 0 53%,
      #fff0 0 56%,
      #d72f20d1 0 59%,
      #fff0 0 62%,
      #d72f20cf 0 64%,
      var(--m1) 70%
    ),
    linear-gradient(1800deg, var(--d1) 40%, var(--m1));
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.top-screen {
  width: calc(100% - 2vmin);
  height: 3.3vmin;
  top: 11.5vmin;
  background:
    linear-gradient(
      54deg,
      #fff0 1.85vmin,
      var(--b2) calc(1.85vmin + 1px) 2.7vmin,
      var(--c2) calc(2.7vmin + 1px) 60%,
      #fff0 0 100%
    ),
    linear-gradient(
      -54deg,
      #fff0 1.85vmin,
      var(--b2) calc(1.85vmin + 1px) 2.7vmin,
      var(--c2) calc(2.7vmin + 1px) 60%,
      #fff0 0 100%
    );
}

.screen {
  background:
    linear-gradient(
      93deg,
      #fff0 0 3.25vmin,
      var(--b1) calc(3.25vmin + 2px) 4.25vmin,
      var(--c1) calc(4.25vmin + 1px) 60%,
      #fff0 0 100%
    ),
    linear-gradient(
      -93deg,
      #fff0 0 3.25vmin,
      var(--b1) calc(3.25vmin + 2px) 4.25vmin,
      var(--c1) calc(4.25vmin + 1px) 60%,
      #fff0 0 100%
    );
  width: 100%;
  height: 22.5vmin;
  top: 14.75vmin;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.screen::before {
  border: 0.35vmin solid #b05a5c;
  width: calc(100% - 10.5vmin);
  height: calc(100% - 2.5vmin);
  border-radius: 1.5vmin;
}

.glass {
  width: calc(100% - 15vmin);
  height: calc(100% - 6.5vmin);
  background: var(--g2);
  position: relative;
  left: auto;
  transform: scale(0.975);
}

.glass::before,
.glass::after {
  width: 1vmin;
  height: 100%;
  background: radial-gradient(
    circle at 100.75vmin 50%,
    var(--g1) 100vmin,
    var(--g2) calc(100vmin + 1px) 100%
  );
  border-radius: 100% 0% 0% 100% / 50% 0% 0% 50%;
  left: calc(-1vmin + 1px);
}

.glass::after {
  border-radius: 0% 100% 100% 0% / 50% 50% 50% 50%;
  left: inherit;
  right: calc(-1vmin + 1px);
  background: radial-gradient(
    circle at -99.75vmin 50%,
    var(--g1) 100vmin,
    var(--g2) calc(100vmin + 1px) 100%
  );
}

.glass span {
  width: 100%;
  height: 100%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--g1);
  border-radius: 1.25vmin;
}

.glass span i {
  position: absolute;
  color: #fff;
  font-family: 'Press Start 2P', Arial, Helvetica, serif;
  font-size: 3.25vmin;
  text-align: center;
  transform: scaleY(1.35);
  font-style: normal;
}

.glass span i + i {
  transform: rotate(180deg);
  bottom: 3.1vmin;
}

.glass span i::before,
.glass span i::after {
  width: 2vmin;
  height: 11vmin;
  left: -0.75vmin;
  top: -2.6vmin;
  border-radius: 100%;
  transform: rotate(0deg);
  filter: blur(0px);
  border-left: 0.5vmin solid #91f0f9;
  border-top: 0.6vmin solid #fff0;
  opacity: 0.75;
}

.glass span i::after {
  width: 20vmin;
  height: 2vmin;
  left: -1.25vmin;
  top: -2.5vmin;
  border-left: 0.75vmin solid #fff0;
  border-top: 0.5vmin solid #91f0f9;
}

.glass span i + i::before {
  height: 14vmin;
  border-left-color: #01669c;
}
.glass span i + i::after {
  border-top-color: #01669c;
}

.glass span::before,
.glass span::after {
  left: 0;
  width: 100%;
  height: 1vmin;
  background: radial-gradient(
    circle at 50% 100.6vmin,
    var(--g1) 100vmin,
    var(--g2) calc(100vmin + 1px) 100%
  );
  border-radius: 50% 50% 0% 0% / 100% 100% 0% 0%;
  top: calc(-1vmin + 1px);
}

.glass span::after {
  border-radius: 0% 0% 50% 50% / 0% 0% 100% 100%;
  top: inherit;
  bottom: calc(-1vmin + 1px);
  background: radial-gradient(
    circle at 50% -99.6vmin,
    var(--g1) 100vmin,
    var(--g2) calc(100vmin + 1px) 100%
  );
}

.bot-screen {
  width: 100%;
  height: 4.75vmin;
  top: 36.85vmin;
  left: 0;
  background:
    linear-gradient(
      116deg,
      #fff0 1.9vmin,
      var(--b2) calc(1.9vmin + 1px) 2.8vmin,
      var(--c2) calc(2.8vmin + 1px) 60%,
      #fff0 0 100%
    ),
    linear-gradient(
      -116deg,
      #fff0 1.9vmin,
      var(--b2) calc(1.9vmin + 1px) 2.8vmin,
      var(--c2) calc(2.8vmin + 1px) 60%,
      #fff0 0 100%
    );
  background-repeat: no-repeat;
}

.bot-screen:before,
.bot-screen:after {
  width: 3vmin;
  height: 1vmin;
  background: #000;
  border-radius: 100%;
  left: 8.25vmin;
  top: 2.1vmin;
}

.bot-screen:after {
  left: 24.8vmin;
  z-index: 0;
}

.joystick {
  background: #00800000;
  width: 100%;
  height: 9vmin;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.joystick span {
  background: #0000ff00;
  width: 3.5vmin;
  height: 7vmin;
  left: 8vmin;
  top: 0.5vmin;
}

.joystick span + span {
  left: 24.5vmin;
}

.joystick span:before {
  background:
    radial-gradient(ellipse at 30% 27%, #ffffffa8 0.1vmin, #fff0 0.5vmin),
    linear-gradient(
      -106deg,
      #fff0 0 3.5vmin,
      var(--j1) calc(3.5vmin + 1px) 3.8vmin,
      #fff0 calc(3.8vmin + 1px) 100%
    ),
    linear-gradient(
      106deg,
      #fff0 0 3vmin,
      var(--j2) calc(3vmin + 1px) 3.8vmin,
      #fff0 calc(3.8vmin + 1px) 100%
    ),
    radial-gradient(
      circle at 33% 80%,
      #fff0 0 1.5vmin,
      var(--j2) calc(1.5vmin + 1px) 100%
    ),
    conic-gradient(from -15deg at 50% 8vmin, var(--j1) 0 30deg, #fff0 0 100%);
  background-repeat: no-repeat;
  background-size:
    100% 100%,
    100% 100%,
    100% 100%,
    100% 35%,
    100% 100%;
  background-position:
    0 0,
    0 0,
    0 0,
    -100% 0,
    0 0;
  width: 3.5vmin;
  top: 0;
  left: 0;
  height: 5.25vmin;
  border-radius: 3vmin 3vmin 0 0;
}

.joystick span:after {
  width: 1vmin;
  height: 1.5vmin;
  background: linear-gradient(
    180deg,
    var(--b2) 20%,
    var(--s1) 50%,
    var(--b1) 80%
  );
  bottom: 0.25vmin;
  left: 1.25vmin;
  border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;
}

.buttons {
  width: 9vmin;
  height: 3vmin;
  left: 13.5vmin;
  top: 0.25vmin;
}

.buttons:before,
.buttons:after {
  background: #000;
  width: 3vmin;
  height: 1vmin;
  border-radius: 100%;
  left: 0.5vmin;
  bottom: 0.125vmin;
}

.buttons:after {
  left: 5.675vmin;
  z-index: 0;
}

.buttons span {
  background: radial-gradient(
    circle at 50% -2.4vmin,
    var(--j1) 0 3vmin,
    var(--j2) calc(3vmin + 1px) 100%
  );
  width: 2.5vmin;
  height: 1.3vmin;
  bottom: 0.25vmin;
  left: 0.8vmin;
  border-radius: 40% 40% 50% 50% / 30% 30% 20% 20%;
  z-index: 1;
}

.buttons span + span {
  left: 5.85vmin;
}

.buttons span:before,
.buttons span:after {
  width: 0.85vmin;
  height: 0.1vmin;
  background: #fff8;
  border-radius: 100%;
  left: 0.25vmin;
  top: 0.2vmin;
  filter: blur(0.85px);
}

.bot {
  background: linear-gradient(180deg, var(--c1) 4vmin, var(--m1) 2vmin);
  width: 100%;
  height: 32.25vmin;
  bottom: 1.25vmin;
  left: 0;
  border-radius: 0 0 1vmin 1vmin;
  border: 1vmin solid var(--b1);
  border-top-width: 0;
}

.bot:before {
  border: 0.35vmin solid var(--c1);
  width: calc(100% - 3.25vmin);
  height: calc(100% - 7.25vmin);
  border-radius: 1.5vmin;
  left: 1.75vmin;
  bottom: 1.75vmin;
  z-index: 1;
}

.bot::after {
  width: calc(100% - 1vmin);
  bottom: -2.2vmin;
  background: var(--c1);
  height: 1.25vmin;
  left: 0.5vmin;
  border-radius: 0 0 1vmin 1vmin;
}

.draw {
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 0;
  overflow: hidden;
}

.draw:before {
  --oval: 0 0 var(--d1);
  background: var(--d1);
  width: 25vmin;
  height: 2.35vmin;
  border-radius: 2vmin;
  left: 22.5vmin;
  top: 22vmin;
  transform: rotate(45deg);
  box-shadow:
    6vmin 2.25vmin var(--oval),
    -4vmin 4.5vmin var(--oval),
    2vmin 6.75vmin var(--oval),
    -4vmin 9vmin var(--oval),
    7vmin 11.25vmin var(--oval),
    2vmin 13.5vmin var(--oval);
}

.draw:after {
  --oval: 0 0 var(--d1);
  --oval2: 0 -0.1vmin var(--m1);
  background: var(--d1);
  width: 2.95vmin;
  height: 2.35vmin;
  border-radius: 2vmin;
  left: 17vmin;
  top: 12vmin;
  transform: rotate(45deg);
  box-shadow:
    6vmin 9vmin var(--oval),
    14vmin 6.65vmin var(--oval2),
    9vmin 2.15vmin var(--oval2),
    13vmin -2.35vmin var(--oval2);
  overflow: hidden;
  z-index: 0;
}

.box {
  background: #2d313d;
  width: 9.25vmin;
  height: 10.25vmin;
  left: 3.5vmin;
  top: 7.25vmin;
  border-radius: 0.5vmin;
}

.coins {
  --dot: #6c7c83 0.2vmin, #fff0 calc(0.2vmin + 1px) 100%;
  background:
    radial-gradient(circle at 0.65vmin 0.55vmin, var(--dot)),
    radial-gradient(circle at 3vmin 0.55vmin, var(--dot)),
    radial-gradient(circle at 0.65vmin 7.15vmin, var(--dot)),
    radial-gradient(circle at 3vmin 7.15vmin, var(--dot)), #9aaeb4;
  width: 3.5vmin;
  height: 7.75vmin;
  top: 1.25vmin;
  left: 1.25vmin;
  border-radius: 0.5vmin;
}

.button {
  width: 2.25vmin;
  height: 2.25vmin;
  border: 0.5vmin solid var(--c2);
  border-radius: 100%;
  left: 5.75vmin;
  top: 1.5vmin;
  background: radial-gradient(
    circle at 1.1vmin 0.45vmin,
    var(--j1) 0 0.7vmin,
    #fff 1.25vmin 100%
  );
}

.button::before {
  width: 2.3vmin;
  height: 1vmin;
  background: var(--c2);
  left: -4.25vmin;
  top: 2.9vmin;
  border-radius: 0.25vmin;
}

.slot {
  background: var(--c2);
  width: 1.35vmin;
  height: 2.35vmin;
  top: 0.6vmin;
  left: 1.1vmin;
  border-radius: 0.3vmin;
  border: 0.2vmin solid #d1d1d1;
  border-width: 0.35vmin 0.55vmin;
}

.slot:before {
  background: #d1d1d1;
  width: 1.25vmin;
  height: 1.25vmin;
  top: 5vmin;
  left: -0.5vmin;
  border-radius: 0 0 0.2vmin 0.2vmin;
}

.slot:after {
  background: #000;
  width: 0.5vmin;
  height: 2vmin;
  top: 4vmin;
  left: -0.1vmin;
  border-radius: 0.2vmin;
  border: 0;
}

.box::before,
.box::after,
.coins::before,
.coins::after {
  width: 0.5vmin;
  height: 0.5vmin;
  border-radius: 100%;
  background: radial-gradient(circle at 0 0, #ccc, #333);
  left: 0.5vmin;
  top: 0.5vmin;
}

.box::after {
  left: 8.35vmin;
}

.coins::before {
  left: -0.7vmin;
  top: 8vmin;
}

.coins::after {
  left: 7vmin;
  top: 8vmin;
}
</style>
