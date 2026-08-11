/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV: 'development' | 'production'
  readonly VITE_OSS_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
