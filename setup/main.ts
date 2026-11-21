import { defineAppSetup } from '@slidev/types'

// $pub('/x.jpg') resolves a public/ path under the deploy base, which Vite only does for static attributes.
export default defineAppSetup(({ app }) => {
  app.config.globalProperties.$pub = (ruta: string) => import.meta.env.BASE_URL + ruta.replace(/^\//, '')
})
