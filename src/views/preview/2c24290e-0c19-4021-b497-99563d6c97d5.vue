<template>
  <div class="app">
    <div class="scene -gallery">
      <div class="item" data-key="owl">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-owl.png"
          alt=""
        />
      </div>
      <div class="item" data-key="deer">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-deer.png"
          alt=""
        />
      </div>
      <div class="item" data-key="hipster">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-hipster.png"
          alt=""
        />
      </div>
      <div class="item" data-key="ram">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-ram.png"
          alt=""
        />
      </div>
      <div class="item" data-key="dog">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-dog.png"
          alt=""
        />
      </div>
      <div class="item" data-key="ram-side">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-sideram.png"
          alt=""
        />
      </div>
      <div class="item" data-key="ram-horns">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-multiram.png"
          alt=""
        />
      </div>
      <div class="item" data-key="gorilla">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-gorilla.png"
          alt=""
        />
      </div>
      <div class="item" data-key="bird">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-bird.png"
          alt=""
        />
      </div>
      <div class="item" data-key="owl2">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-owl.png"
          alt=""
        />
      </div>
      <div class="item" data-key="deer2">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-deer.png"
          alt=""
        />
      </div>
      <div class="item" data-key="hipster2">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-hipster.png"
          alt=""
        />
      </div>
      <div class="item" data-key="ram2">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-ram.png"
          alt=""
        />
      </div>
      <div class="item" data-key="dog2">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-dog.png"
          alt=""
        />
      </div>
      <div class="item" data-key="ram-side2">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-sideram.png"
          alt=""
        />
      </div>
      <div class="item" data-key="ram-horns2">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-multiram.png"
          alt=""
        />
      </div>
      <div class="item" data-key="gorilla2">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-gorilla.png"
          alt=""
        />
      </div>
      <div class="item" data-key="bird2">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-bird.png"
          alt=""
        />
      </div>
    </div>
    <div class="scene -detail">
      <div class="detail">
        <img />
        <div class="content">
          <div class="title">Great Horned Owl</div>
          <div class="creator">Krystine Lopez</div>
          <div class="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum,
            est amet delectus, blanditiis voluptatem laborum pariatur
            consequatur quae voluptate, nisi. Laborum adipisci iste earum
            distinctio, fugit, quas ipsa impedit.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  const items = document.querySelectorAll('.item')
  const detailItem = document.querySelector('.detail') as HTMLElement
  const detailScene = document.querySelector('.scene.-detail') as HTMLElement

  detailScene.style.display = 'none'

  items.forEach(item => {
    item.addEventListener('click', () => {
      const itemImage = item.querySelector('img') as HTMLImageElement

      detailItem.setAttribute(
        'data-image',
        item.getAttribute('data-key') as string
      )
      ;(detailItem.querySelector('img') as HTMLImageElement).setAttribute(
        'src',
        itemImage.getAttribute('src') as string
      )

      detailScene.style.display = 'block'
      ;(item as HTMLElement).style.opacity = '0'

      let firstRect = itemImage.getBoundingClientRect()
      let lastRect = detailItem.getBoundingClientRect()

      detailItem.animate(
        [
          {
            transform: `
          translateX(${firstRect.left - lastRect.left}px)
          translateY(${firstRect.top - lastRect.top}px)
          scale(${firstRect.width / lastRect.width})
        `
          },
          {
            transform: `
          translateX(0)
          translateY(0)
          scale(1)
         `
          }
        ],
        {
          duration: 600,
          easing: 'cubic-bezier(0.2, 0, 0.2, 1)'
        }
      )
    })
  })

  detailItem.addEventListener('click', () => {
    const itemImage = document.querySelector(
      `[data-key="${detailItem.getAttribute('data-image')}"]`
    ) as HTMLElement

    let itemImageRect = itemImage.getBoundingClientRect()
    let detailItemRect = detailItem.getBoundingClientRect()

    detailScene.style.display = 'none'
    itemImage.style.opacity = '1'

    itemImage.animate(
      [
        {
          zIndex: 2,
          transform: `
          translateX(${detailItemRect.left - itemImageRect.left}px)
          translateY(${detailItemRect.top - itemImageRect.top}px)
  scale(${detailItemRect.width / itemImageRect.width})
        `
        },
        {
          zIndex: 2,
          transform: `
          translateX(0)
          translateY(0)
          scale(1)
         `
        }
      ],
      {
        duration: 600,
        easing: 'cubic-bezier(0.2, 0, 0.2, 1)'
      }
    )
  })
})
</script>

<style lang="scss" scoped>
$app-width: 80vmin;
$app-height: 80vmin;

.app {
  position: relative;
  height: $app-height;
  width: $app-width;
  background: white;
  overflow: hidden;
}

.scene {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;

  &.-gallery {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;

    > .item {
      flex-basis: 30%;
      flex-grow: 0;
      flex-shrink: 0;
      height: auto;
      min-height: $app-width / 3;
      // overflow: hidden;
    }
  }
}

.item {
  transform-origin: top left;

  > img {
    height: auto;
    width: 100%;
  }
}

.detail {
  color: white;
  width: $app-width;
  height: $app-height;
  transform-origin: top left;
  display: flex;
  flex-direction: column;

  > img {
    height: auto;
    width: 100%;
    height: auto;
    flex: 0 1 auto;
    z-index: 1;
  }

  > .content {
    background: #232323;
    flex: 1 0 auto;
    padding: 2rem 1.5rem;
    animation: slide-down 0.6s ease-in-out;

    @keyframes slide-down {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }

    > * {
      margin-bottom: 1rem;
    }

    > .title {
      font-size: 2rem;
      text-transform: uppercase;
    }

    > .creator {
      opacity: 0.6;
      margin-top: -0.5rem;
    }

    > .description {
      line-height: 1.5;
    }
  }
}
</style>
