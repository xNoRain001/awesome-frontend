<template>
  <article role="img" aria-labelledby="desc">
    <h1 id="desc">cartoon of a smiling cute animal holding a heart</h1>
    <div class="shadow"></div>
    <div class="body">
      <div class="tail"></div>
      <div class="leg"></div>
      <div class="leg"></div>
      <div class="belly"></div>
      <div class="arm-long"></div>
      <div class="arm-long"></div>
    </div>
    <div class="head">
      <div class="ear"></div>
      <div class="ear"></div>
      <div class="face">
        <div class="cheek"></div>
        <div class="cheek"></div>
        <div class="nose"></div>
        <div class="eye"></div>
        <div class="eye"></div>
        <div class="mouth"></div>
      </div>
    </div>
    <div class="body">
      <div class="something">
        <div></div>
        <div></div>
      </div>

      <div class="arm"></div>
      <div class="arm"></div>
    </div>
  </article>
</template>

<script lang="ts" setup></script>

<style scoped>
article {
  --skin: #fff;
  --line: #b86;
  --accent: #fcb;
  --shadow: #fed;
  --shadow2: #fba;
  position: relative;
  font-size: 0.8vmin;
  aspect-ratio: 1;
  width: 80em;

  *,
  *::before,
  *::after {
    position: absolute;
    box-sizing: border-box;
  }

  h1 {
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .shadow {
    width: 75%;
    height: 10%;
    border-radius: 50%;
    background: var(--accent);
    top: 102%;
    left: 53%;
    translate: -50% -50%;
  }

  .body {
    width: 52%;
    height: 69%;
    bottom: -5%;
    left: 50%;
    translate: -50%;

    .something {
      width: 50%;
      aspect-ratio: 1;
      rotate: 40deg;
      top: 8%;
      left: 10%;

      div {
        --b: var(--line);
        inset: 0;
        scale: 1.1;

        &::before,
        &::after {
          content: '';
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: var(--b);
          border-radius: 50% 80% 0 50%;
          rotate: 20deg;
          transform-origin: 100% 100%;
        }

        &::after {
          rotate: -20deg;
          box-shadow: none;
        }

        & ~ & {
          --b: var(--accent);
          scale: 1.02 1;
          translate: 1% 1%;

          &::after {
            background:
              radial-gradient(circle at 20% 80%, var(--shadow2) 30%, #0000 0),
              var(--accent);
            box-shadow: 
/*               inset 1em 0 var(--shadow2), */ inset
              0em -1em var(--shadow2);
          }
          &::before {
            background:
              radial-gradient(circle at 90% 33%, var(--shadow2) 32%, #0000 0),
              var(--accent);
            box-shadow: inset -1em 2em var(--shadow2);
          }
        }
      }
    }

    .arm-long {
      width: 39%;
      height: 44%;
      border-radius: 0 100% 100% 0% / 50%;
      border: 1em solid var(--line);
      border-right-width: 1.5em;
      background:
        linear-gradient(-45deg, #0000 45%, var(--line) 0 55%, #0000 0) 0 60% /
          40% 40% no-repeat,
        var(--skin);
      top: 7.5%;
      left: 76%;
      border-left: 0;
      box-shadow: inset -1em -1em var(--shadow);

      & ~ & {
        scale: -1 1;
        left: -14%;
        top: 11%;
        rotate: -20deg;
        height: 30%;
      }
    }
    .arm {
      width: 35%;
      height: 28%;
      border-radius: 50%;
      border: 1em solid var(--line);
      border-bottom-width: 1.5em;
      border-left-width: 1.1em;
      background: var(--skin);
      top: 35%;
      left: 0%;
      translate: -50% -50%;
      box-shadow: inset 1em -1em var(--shadow);

      & ~ & {
        top: 38%;
        width: 37%;
        height: 29%;
        scale: -1 1;
        left: 70%;
        rotate: 10deg;
        box-shadow: inset 1.5em -0.5em var(--shadow);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%, 20% 50%, 0 50%);
      }
    }

    .tail {
      width: 30%;
      aspect-ratio: 0.9;
      border: 1em solid var(--line);
      background: var(--skin);
      border-radius: 50%;
      left: 98%;
      top: 55%;
      translate: -50% -50%;
      box-shadow: inset -1.5em -0.5em var(--shadow);
    }

    .leg {
      border: 1em solid var(--line);
      background: var(--skin);
      width: 49%;
      height: 94%;
      bottom: 0;
      border-radius: 100% / 170% 100% 15% 15%;
      border-bottom-width: 1.5em;
      border-left-width: 1.25em;
      border-top-width: 2em;
      box-shadow: inset -1.5em -0.5em var(--shadow);

      & ~ & {
        height: 95%;
        right: -3%;
        scale: -1 1;
        border-radius: 100% / 160% 80% 15% 15%;
        box-shadow: inset 1.25em 1em var(--shadow);
      }
    }

    .belly {
      width: 40%;
      height: 80%;
      top: 0;
      left: 50%;
      translate: -50%;
      border: 0.5em solid #0000;
      border-bottom: 1.5em solid var(--line);
      border-radius: 100% / 10% 13%;
      background: var(--skin);
      rotate: 0.5deg;

      &::before {
        acontent: '';
        width: 150%;
        aspect-ratio: 0.9;
        border-radius: 100% / 122% 125% 45% 55%;
        background: var(--accent);
        bottom: 5%;
        left: 50%;
        translate: -50%;
      }
    }
  }

  .head {
    width: 65%;
    height: 50%;
    top: -0.5%;
    left: 50%;
    translate: -50%;
    transform-origin: 50% 100%;
    rotate: 2deg;

    .ear {
      width: 30%;
      aspect-ratio: 1;
      border: 1em solid var(--line);
      border-radius: 50%;
      translate: -50% -50%;
      top: -5%;
      left: 36%;
      rotate: -5deg;
      background: var(--accent);
      box-shadow:
        inset -1.25em 0.5em var(--shadow),
        inset 0 1em 0 3em var(--skin);

      & ~ & {
        rotate: 18deg;
        left: 69%;
        top: -2.5%;
        width: 32%;
        z-index: -1;

        &::before {
          acontent: '';
          width: 30%;
          aspect-ratio: 1;
          background: var(--skin);
          border-radius: 50%;
          top: 75%;
          left: -20%;
        }
      }
    }

    .face {
      width: 70%;
      height: 90%;
      border: 1em solid var(--line);
      border-bottom-color: var(--skin);
      background: var(--skin);
      left: 49%;
      top: -3%;
      translate: -50%;
      border-radius: 100% / 120% 120% 30% 30%;
      clip-path: polygon(
        -200% 0,
        44% 0,
        44.5% 3%,
        51.5% 3%,
        51.5% 0,
        200% 0,
        200% 200%,
        -200% 200%
      );
      box-shadow: inset -1.5em -0.5em var(--shadow);

      &::before {
        content: '';
        width: 130%;
        height: 75%;
        border-radius: 50%;
        border: 1.25em solid var(--line);
        border-top: 0.85em solid var(--line);
        border-bottom-width: 1.25em;

        bottom: -10%;
        left: 51%;
        translate: -50%;
        background: var(--skin);
        mask: radial-gradient(200% 130% at 47.75% 0, #0000 25.75%, #000 0);
        box-shadow: inset -2.1em -0em var(--shadow);
        clip-path: polygon(0 0, 100% 0, 100% 80%, 80% 89%, 75% 90%, 0 100%);
      }

      .mouth {
        width: 35%;
        height: 20%;
        background:
          radial-gradient(circle at 60% 110%, var(--accent) 40%, #0000 0),
          var(--line);
        border: 0.9em solid var(--line);
        border-radius: 60% / 20% 20% 100% 100%;
        translate: -50% -50%;
        top: 84%;
        left: 46%;
        rotate: 2deg;
      }

      .nose {
        width: 12%;
        height: 7%;
        border-radius: 100% / 90% 90% 110% 110%;
        background: var(--line);
        top: 65%;
        left: 45%;
        translate: -50% -50%;
        rotate: 3deg;
      }

      .cheek {
        width: 26%;
        aspect-ratio: 1;
        border-radius: 50%;
        background: var(--accent);
        translate: -50% -50%;
        top: 70%;
        left: 5%;

        & ~ & {
          top: 73%;
          left: 85%;
        }
      }

      .eye {
        width: 20%;
        aspect-ratio: 1;
        border-radius: 50%;
        background:
          radial-gradient(circle at 20% 65%, #fff 10%, #0000 calc(10% + 1px)),
          radial-gradient(
            circle at 35% 35%,
            #fff 20%,
            var(--line) calc(20% + 1px)
          );
        top: 55%;
        left: 25%;
        translate: -50% -50%;

        & ~ & {
          left: 66%;
          top: 56.5%;
        }
      }
    }
  }
}
</style>
