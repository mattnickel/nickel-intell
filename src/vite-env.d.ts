/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CAL_LINK?: string
  readonly VITE_CAL_LINK_FRACTIONAL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
