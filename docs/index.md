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

## ❤️ Contributors { .eg-section-title }

<div class="eg-cards-contributors">

  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/848867959219683360/afdd097081271465d4ea1e63fbe324cb.png" alt="iannC" />
    <div class="eg-name">dey</div>
    <div class="eg-role">Supervizor Wikipedia</div>
    <span class="eg-badge red">ADMINISTRATOR</span>
    <div class="eg-desc">Supravegheaza, modifica si mentine la zi pagina de Wikipedia</div>
    <!-- <a class="eg-link" href="#">GitHub ↗</a> -->
  </div>

  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/295581149986553857/14ab973e2e0ad5cf4ecf5f55c0d8a94b?size=1024" alt="snoke" />
    <div class="eg-name">sNok3</div>
    <div class="eg-role">Developer</div>
    <span class="eg-badge red">Developer</span>
    <div class="eg-desc">Crează interfețe moderne și minimaliste. Focus pe accesibilitate</div>
    <!-- <a class="eg-link" href="#">GitHub ↗</a> -->
  </div>

  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/262600228719427584/cb935ab9648fedf2747866af9256ea85.png" alt="xslow" />
    <div class="eg-name">xSL0W</div>
    <div class="eg-role"> Head Developer</div>
    <span class="eg-badge red">Developer & FONDATOR</span>
    <div class="eg-desc">Scripter-ul si fondatorul comunitatii</div>
    <!-- <a class="eg-link" href="#">GitHub ↗</a> -->
  </div>

</div>

---

## 🔵 Our Team (Staff) { .eg-section-title }

<div class="eg-cards-team">

  <div class="eg-card">
    <img src="/public/quo.jpg" alt="Quo" />
    <div class="eg-name">Quo</div>
    <div class="eg-role">Fondator</div>
    <span class="eg-badge red">Founder</span>
    <div class="eg-desc">Conduce echipa staff și coordoneaza proiectele comunității</div>
  </div>

  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/262600228719427584/cb935ab9648fedf2747866af9256ea85.png" alt="xslow" />
    <div class="eg-name">xSL0W</div>
    <div class="eg-role">Developer & Fondator</div>
    <span class="eg-badge red">Founder</span>
    <div class="eg-desc">Responsabil pe partea tehnică și tools management</div>
  </div>

  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/295581149986553857/14ab973e2e0ad5cf4ecf5f55c0d8a94b?size=1024" alt="snoke" />
    <div class="eg-name">sNok3</div>
    <div class="eg-role">Developer</div>
    <span class="eg-badge red">Developer</span>
    <div class="eg-desc">Responsabil pe partea tehnică și tools management</div>
  </div>

  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/289800581420417025/9ad8a8799df6489541919ff4e1504343?size=1024" alt="Crixus99" />
    <div class="eg-name">Crixus99</div>
    <div class="eg-role">Community Manager</div>
    <span class="eg-badge red">Community Manager</span>
    <div class="eg-desc">Ajută în gestionarea comunității și organizarea activităților</div>
  </div>

  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/848867959219683360/afdd097081271465d4ea1e63fbe324cb.png" alt="dey" />
    <div class="eg-name">dey</div>
    <div class="eg-role">Administrator</div>
    <span class="eg-badge red">Administrator</span>
    <div class="eg-desc">Asigura asset-urile necesare si ajuta la dezvoltarea server-ului</div>
  </div>
  
  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/284308015761326080/4a69773ed940b745942271a137257fed?size=1024" alt="88lucian" />
    <div class="eg-name">88lucian</div>
    <div class="eg-role">Administrator</div>
    <span class="eg-badge blue">Administrator</span>
    <div class="eg-desc">Ajuta la dezvoltarea server-ului</div>
  </div> 

 </div>





<ClientOnly>
  <StarRating />
</ClientOnly>

---

<SiteMap />