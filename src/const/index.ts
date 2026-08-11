const radius = localStorage.getItem('nuxt-ui-radius')

export const themeConfig = {
  theme: {
    radius: radius ? Number(radius) : 0.25,
    blackAsPrimary:
      localStorage.getItem('nuxt-ui-black-as-primary') === 'true' ? true : false
  },
  ui: {
    colors: {
      primary: localStorage.getItem('nuxt-ui-primary') || 'green',
      neutral: localStorage.getItem('nuxt-ui-neutral') || 'slate'
    }
  }
}
export const PRIMARY_COLORS = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose'
]
export const NEUTRAL_COLORS = ['slate', 'gray', 'zinc', 'neutral', 'stone']
export const RADIUS_LIST = [0, 0.125, 0.25, 0.375, 0.5]

export const ITEMS_PER_PAGE = 9
