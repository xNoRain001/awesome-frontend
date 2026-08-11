import colors from 'tailwindcss/colors'

// 直接替换 nuxt-ui-colors 中的内容，但是哪怕在 onMounted 中也无法获取到
// 这个 style 标签，除非使用定时器，总之目前使用这种办法会造成主题切换闪烁
// const updateColors = (type: 'primary' | 'neutral', color: string) => {
//   let i = 0
//   const values = colors[color]
//   const keys = Object.keys(values)
//   const regexp = new RegExp(
//     `(--ui-color-${type}-)\\d{2,3}(:\\svar\\(--color-).*?(\\);)`,
//     'g'
//   )
//   const style = document.getElementById('nuxt-ui-colors')
//   style.textContent = style.textContent.replace(regexp, (_, $1, $2, $3) => {
//     const key = keys[i]
//     const value = values[key]
//     i++
//     return `${$1}${key}${$2}${color}-${key}, ${value}${$3}`
//   })
// }

const updateColors = (type: 'primary' | 'neutral', color: string) => {
  // 可以添加到 textContent 中，也可以直接写在 style 标签的 style 属性中，
  // index.html 中创建了 nuxt-ui-primary 和 nuxt-ui-neutral 两个 style 标签，
  // 如果写在同一个标签中需要处理互相覆盖问题，因为它们都是颜色，如果写属性，因为
  // nuxt-ui-colors 内的属性是写在 :root 中，因此写属性的标签必须是
  // document.documentElement 才能覆盖
  const values = colors[color]
  const keys = Object.keys(values)
  const style = document.getElementById(`nuxt-ui-${type}`)
  let textContent = ':root {\n'

  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i]
    const value = values[key]
    textContent += `\t--ui-color-${type}-${key}: var(--color-${color}-${key}, ${value});\n`
    // document.documentElement.style.setProperty(
    //   // --ui-color-primary-50
    //   `--ui-color-${type}-${key}`,
    //   // var(--color-green-50, oklch(98.2% 0.018 155.826))
    //   `var(--color-${color}-${key}, ${value})`
    // )
  }

  textContent += '}'
  style!.textContent = textContent
}

const setBlackAsPrimary = v =>
  (document.getElementById('nuxt-ui-black-as-primary')!.textContent = v
    ? ':root { --ui-primary: black; } .dark { --ui-primary: white; }'
    : ':root {}')

const setRadius = v =>
  (document.getElementById('nuxt-ui-radius')!.textContent =
    `:root { --ui-radius: ${v}rem; }`)

const strategies = {
  blackAsPrimary(themeConfig, v) {
    setBlackAsPrimary(v)
    themeConfig.theme.blackAsPrimary = v
    localStorage.setItem('nuxt-ui-black-as-primary', String(v))
  },

  primary(themeConfig, v) {
    updateColors('primary', v)
    themeConfig.ui.colors.primary = v
    localStorage.setItem('nuxt-ui-primary', v)
    this.blackAsPrimary(themeConfig, false)
  },

  neutral(themeConfig, v) {
    updateColors('neutral', v)
    themeConfig.ui.colors.neutral = v
    localStorage.setItem('nuxt-ui-neutral', v)
  },

  radius(themeConfig, v) {
    setRadius(v)
    themeConfig.theme.radius = v
    localStorage.setItem('nuxt-ui-radius', String(v))
  }
}

const updateTheme = (
  type: 'blackAsPrimary' | 'primary' | 'neutral' | 'radius',
  themeConfig,
  v: any
) => strategies[type](themeConfig, v)

export const initTheme = themeConfig => {
  const {
    ui: {
      colors: { neutral, primary }
    },
    theme: { radius, blackAsPrimary }
  } = themeConfig
  setBlackAsPrimary(blackAsPrimary)
  setRadius(radius)
  updateColors('primary', primary)
  updateColors('neutral', neutral)
}

export default updateTheme
