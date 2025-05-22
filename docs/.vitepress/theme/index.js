// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import NotFound from './Custom/NotFound.vue'
import './style.css' // 🟢 Asta e important pentru stiluri custom

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'not-found': () => h(NotFound),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 🧠 Poți înregistra componente globale aici dacă ai nevoie
    if (typeof window !== 'undefined' && 'navigation' in window) {
      window.navigation.addEventListener('navigate', (event) => {
        // Prevent bfcache issues by forcing reload on back/forward navigation
        if (event.navigationType === 'back_forward') {
          window.location.reload();
        }
      });
    }
  }
}
