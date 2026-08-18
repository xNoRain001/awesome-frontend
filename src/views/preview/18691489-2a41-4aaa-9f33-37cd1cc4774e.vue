<template>
  <canvas ref="canvasRef"></canvas>
  <div class="instruction">Move Your Cursor</div>
</template>

<script lang="ts" setup>
import { onMounted, useTemplateRef } from 'vue'

const canvasRef = useTemplateRef('canvasRef')

onMounted(() => {
  const canvas = canvasRef.value!
  const ctx = canvas.getContext('2d')!

  let width = (canvas.width = window.innerWidth)
  let height = (canvas.height = window.innerHeight)

  let mouse = { x: -9999, y: -9999 }
  const squareSize = 80
  const grid: any = []

  function initGrid() {
    grid.length = 0
    for (let x = 0; x < width; x += squareSize) {
      for (let y = 0; y < height; y += squareSize) {
        grid.push({
          x,
          y,
          alpha: 0,
          fading: false,
          lastTouched: 0
        })
      }
    }
  }

  function getCellAt(x, y) {
    return grid.find(
      cell =>
        x >= cell.x &&
        x < cell.x + squareSize &&
        y >= cell.y &&
        y < cell.y + squareSize
    )
  }

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
    initGrid()
  })

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX
    mouse.y = e.clientY

    const cell = getCellAt(mouse.x, mouse.y)
    if (cell && cell.alpha === 0) {
      cell.alpha = 1
      cell.lastTouched = Date.now()
      cell.fading = false
    }
  })

  function drawGrid() {
    ctx.clearRect(0, 0, width, height)
    const now = Date.now()

    for (let i = 0; i < grid.length; i++) {
      const cell = grid[i]

      // Start fading after 500ms
      if (cell.alpha > 0 && !cell.fading && now - cell.lastTouched > 500) {
        cell.fading = true
      }

      if (cell.fading) {
        cell.alpha -= 0.02
        if (cell.alpha <= 0) {
          cell.alpha = 0
          cell.fading = false
        }
      }

      if (cell.alpha > 0) {
        const centerX = cell.x + squareSize / 2
        const centerY = cell.y + squareSize / 2

        const gradient = ctx.createRadialGradient(
          centerX,
          centerY,
          5,
          centerX,
          centerY,
          squareSize
        )
        gradient.addColorStop(0, `rgba(0, 255, 204, ${cell.alpha})`)
        gradient.addColorStop(1, `rgba(0, 255, 204, 0)`)

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.3
        ctx.strokeRect(
          cell.x + 0.5,
          cell.y + 0.5,
          squareSize - 1,
          squareSize - 1
        )
      }
    }

    requestAnimationFrame(drawGrid)
  }

  initGrid()
  drawGrid()
})
</script>

<style scoped>
canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.instruction {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3.5rem;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 4px;
  user-select: none;
  pointer-events: none;
  text-align: center;
  z-index: 10;
}
</style>
