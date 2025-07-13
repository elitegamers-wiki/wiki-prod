---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'EliteGamers Romania
  Hard Roleplay'
  text:  'Official Wikipedia'
  tagline: Bine ai venit pe Wiki-ul official al server-ului EliteGamers RolePlay!
  actions:
    - theme: brand
      text: 🖱 Explorează wiki
      link: zona-info/informatii
    - theme: alt
      text: ⚙️ FAQ
      link: 'zona-info/cum-intru-pe-server'
    - theme: alt
      text: 🔊 Alatura-te noua
      link: https://discord.gg/elitegamers-ro-351058903271735306
  image:
    src: /elitegamers.webp
    alt: eliteGamers.ro

features:
  - icon: ⚡
    title: Gameplay
    details: Detalii despre gameplay
    link: 'zona-info/cum-intru-pe-server'
  - icon: 🖥️
    title: Sisteme
    details: Prezentarea sistemelor noastre
    link: 'general/rewards'

  - icon: 📖
    title: FAQ
    details: Aici găsiți răspunsuri rapide la întrebările comune despre serverul nostru FiveM, pentru a vă ajuta să vă bucurați de experiența de joc
    link: 'zona-info/faq'
  - icon: 🤝
    title: Our Team
    details: O echipă talentată dedicată inovației și excelenței
    features:
  - title: Regulament
    details: "Pe acest Wiki o sa gasesti si regulamentele necesare dezvoltarii tale."
    icon: 🎉
    link: 'zona-info/regulament'

  - title: Scripts
    details: "Ai posibilitatea de a vedea ce sisteme folosim pe EliteGamers RP Romania!"
    icon: 🔌
---



<script setup>
import { onMounted } from 'vue'
import StarRating from '.vitepress/components/StarRating.vue'
import SiteMap from '.vitepress/components/SiteMap.vue'


onMounted(() => {
  const cards = Array.from(document.querySelectorAll(".card-section .card"))
  const cardsContainer = document.querySelector(".card-section")
  if (!cardsContainer) return

  cardsContainer.addEventListener("mousemove", (e) => {
    for (const card of cards) {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      card.style.setProperty("--mouse-x", `${x}px`)
      card.style.setProperty("--mouse-y", `${y}px`)
    }
  })
})
</script>




<!-- --- CONTRIBUITORI --- -->
<div>

  <h2 text="center lg" my-5 font-bold>
    Multumim tuturor pentru support!!
  </h2>

  <a href="https://github.com/elitegamers-wiki/wiki-prod/graphs/contributors" flex justify-center>
    <img src="https://contrib.rocks/image?repo=elitegamers-wiki/wiki-prod" alt="Contributors to the EliteGamers Wiki project" width="300" height="200" />

  </a>
</div>


<ClientOnly>
  <StarRating />
</ClientOnly>

---

<SiteMap />