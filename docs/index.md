---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'EliteGamers Romania
  Hard Roleplay'
  text:  'Official wikipedia'
  tagline: Bine ai venit pe Wiki-ul official al server-ului EliteGamers RolePlay!
  actions:
    - theme: brand
      text: 🖱 Explorează Wikipedia
      link: zona-info/informatii
    - theme: alt
      text: ⚙️ FAQ
      link: 'zona-info/cum-intru-pe-server'
    - theme: alt
      text: 🔊 Alatura-te noua
      link: https://discord.gg/elitegamers-ro-351058903271735306
  image:
    src: /elitegamers.png
    alt: eliteGamers.ro

features:
  - icon: ⚡
    title: Gameplay
    details: Detalii despre Gameplay
  - icon: 🖥️
    title: Sisteme
    details: Prezentarea Sistemelor Noastre
  - icon: 📖
    title: FAQ
    details: Aici găsiți răspunsuri rapide la întrebările comune despre serverul nostru FiveM, pentru a vă ajuta să vă bucurați de experiența de joc
  - icon: 🤝
    title: Our Team
    details: O echipă talentată dedicată inovației și excelenței
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #ab2e22 30%, #e82310);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #ab2e22 50%, #e82310 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
