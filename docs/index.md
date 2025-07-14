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
    <img src="https://cdn.discordapp.com/avatars/371621920162185216/a_54f12dbcb50de232d5b37c63abd8514d?size=1024" alt="iannC" />
    <div class="eg-name">iannC</div>
    <div class="eg-role">Developer Wikipedia</div>
    <span class="eg-badge red">SERVER MANAGER</span>
    <div class="eg-desc">Developer Wikipedia</div>
    <!-- <a class="eg-link" href="#">GitHub ↗</a> -->
  </div>

  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/295581149986553857/14ab973e2e0ad5cf4ecf5f55c0d8a94b?size=1024" alt="snoke" />
    <div class="eg-name">sNok3</div>
    <div class="eg-role">Developer Wikipedia</div>
    <span class="eg-badge orange">Developer</span>
    <div class="eg-desc">Crează interfețe moderne și minimaliste. Focus pe accesibilitate.</div>
    <!-- <a class="eg-link" href="#">GitHub ↗</a> -->
  </div>

  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/262600228719427584/6bbd35d58578cde62ac75422a45781c7?size=1024" alt="xslow" />
    <div class="eg-name">xSL0W</div>
    <div class="eg-role"> Main Developer</div>
    <span class="eg-badge yellow">DEVELOPER</span>
    <div class="eg-desc">Scripter-ul si fondatorul comunitatii.</div>
    <!-- <a class="eg-link" href="#">GitHub ↗</a> -->
  </div>

</div>

---

## 🔵 Our Team (Staff) { .eg-section-title }

<div class="eg-cards-team">

  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/424292609209401345/d6e928ea84bbff192ab7fd6c0fc72bb1?size=1024" alt="Quo" />
    <div class="eg-name">Quo</div>
    <div class="eg-role">Fondator</div>
    <span class="eg-badge red">Founder</span>
    <div class="eg-desc">Conduce echipa staff și supraveghează proiectele comunității.</div>
  </div>

  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/262600228719427584/6bbd35d58578cde62ac75422a45781c7?size=1024" alt="xslow" />
    <div class="eg-name">xSL0W</div>
    <div class="eg-role">Developer & FONDATOR</div>
    <span class="eg-badge red">Founder</span>
    <div class="eg-desc">Responsabil pe partea tehnică și tools management.</div>
  </div>

  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/295581149986553857/14ab973e2e0ad5cf4ecf5f55c0d8a94b?size=1024" alt="snoke" />
    <div class="eg-name">sNok3</div>
    <div class="eg-role">Developer</div>
    <span class="eg-badge red">Developer</span>
    <div class="eg-desc">Responsabil pe partea tehnică și tools management..</div>
  </div>

  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/220330365267607552/17d2d94cab55eba50258ecf8bad9b90c?size=1024" alt="J.S.Green" />
    <div class="eg-name">J.S.Green</div>
    <div class="eg-role">Community Manager</div>
    <span class="eg-badge purple">SUPPORT</span>
    <div class="eg-desc"></div>
  </div>

  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/371621920162185216/a_54f12dbcb50de232d5b37c63abd8514d?size=1024" alt="iannc" />
    <div class="eg-name">iannC</div>
    <div class="eg-role">Server Manager</div>
    <span class="eg-badge red">Server Manager</span>
    <div class="eg-desc">Ajută în gestionarea comunității și organizarea activităților.</div>
  </div>

  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/289800581420417025/9ad8a8799df6489541919ff4e1504343?size=1024" alt="Crixus99" />
    <div class="eg-name">Crixus99</div>
    <div class="eg-role">Community Manager</div>
    <span class="eg-badge red">Community Manager</span>
    <div class="eg-desc">Ajută în gestionarea comunității și organizarea activităților</div>
  </div>

  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/848867959219683360/c4dd9648f6bbe51ee584401a01d06c83?size=1024" alt="dey" />
    <div class="eg-name">Dey</div>
    <div class="eg-role">Asset Developer</div>
    <span class="eg-badge red">Asset Developer</span>
    <div class="eg-desc">Asigura asset-urile necesare server-ului.</div>
  </div>

  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/992353206506110986/5f21fbd7d8238b2dee46597d655d2111?size=1024" alt="ana.maria" />
    <div class="eg-name">Ana.maria</div>
    <div class="eg-role">Asset Developer</div>
    <span class="eg-badge red">Asset Developer</span>
    <div class="eg-desc">Asigura asset-urile necesare server-ului.</div>
  
  </div>
    <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/278845054510956544/a_9a1f5e4796494606fe90370d57f427bd?size=1024" alt="robertus" />
    <div class="eg-name">Robertus</div>
    <div class="eg-role">Super-Administrator</div>
    <span class="eg-badge blue">Super-Administrator</span>
    <div class="eg-desc">Ajuta la dezvoltarea server-ului si conduce S.M.I.R-ul</div>
  
  </div>  
  
  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/284308015761326080/4a69773ed940b745942271a137257fed?size=1024" alt="88lucian" />
    <div class="eg-name">88lucian</div>
    <div class="eg-role">Administrator</div>
    <span class="eg-badge blue">Administrator</span>
    <div class="eg-desc">Asigura la dezvoltarea server-ului.</div>
  
  </div>  
  <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/579464041693708317/010f1d1998c2b13a46cc5bbd2e61da15?size=1024" alt="toto" />
    <div class="eg-name">Toto</div>
    <div class="eg-role">Super-Moderator</div>
    <span class="eg-badge orange">Super-Moderator</span>
    <div class="eg-desc">Asigura la dezvoltarea server-ului.</div>

 </div>
    <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/986769424524640347/fee223c807987d3bb6231c0038d0e505?size=1024" alt="paul" />
    <div class="eg-name">paul</div>
    <div class="eg-role">Super-Moderator</div>
    <span class="eg-badge orange">Super-Moderator</span>
    <div class="eg-desc">Asigura la dezvoltarea server-ului.</div>
  
  </div> 
    <div class="eg-card">
    <img src="https://cdn.discordapp.com/avatars/826054530990211142/e1fcf318b375230995f533c764a06baf?size=1024" alt="pazmall" />
    <div class="eg-name">PazMall</div>
    <div class="eg-role">Moderator</div>
    <span class="eg-badge orange">Moderator</span>
    <div class="eg-desc">Ajuta la dezvoltarea server-ului.</div>
  </div> 
  
  
  
  

</div>




<ClientOnly>
  <StarRating />
</ClientOnly>

---

<SiteMap />