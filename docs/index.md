---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'EliteGamers Romania
  Hard Roleplay'
  text:  'Official wiki'
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
    src: /elitegamers.png
    alt: eliteGamers.ro

features:
  - icon: ⚡
    title: Gameplay
    details: Detalii despre Gameplay
    link: 'zona-info/cum-intru-pe-server'
  - icon: 🖥️
    title: Sisteme
    details: Prezentarea Sistemelor Noastre
    link: 'general/rewards'

  - icon: 📖
    title: FAQ
    details: Aici găsiți răspunsuri rapide la întrebările comune despre serverul nostru FiveM, pentru a vă ajuta să vă bucurați de experiența de joc
    link: 'zona-info/informatii'
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

<!-- <style>
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
</style> -->

<style>
.VPFeatures .VPFeature {
  outline: 2px solid rgba(255, 0, 0, 0.6); /* Contur roșu semi-transparent */
  outline-offset: 1px;
  box-shadow: 0 0 1px rgba(255, 0, 0, 0.4); /* Efect glow inițial */
  border: none;
  transition: box-shadow 0.5s ease-in-out, outline 0.5s ease-in-out, opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: 0.8; /* Face elementul puțin transparent inițial */
}

.VPFeatures .VPFeature:hover {
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.9); /* Crește efectul glow */
  outline: 1px solid rgba(255, 0, 0, 1); /* Contur mai intens */
  opacity: 1; /* Devine complet vizibil */
  transform: rotate(2deg); /* Se rotește ușor */
  background: linear-gradient(135deg, rgba(126, 9, 9, 0.45), rgb(240, 11, 11)); /* Efect de fundal pe hover */
}
</style>

<!-- 
<style>
/* Background global pentru întreaga pagină */
.VPHome {
  background: url('../public/backgroundwiki.png') no-repeat center center fixed;
  background-size: cover;
}

.VPHome {
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(240, 5, 5, 0.38)); /* Gradient cu opacitate */
}

/* Asigură-te că restul conținutului e vizibil */
.VPHome * {
  color: white; /* Text alb pentru contrast */
}
</style> -->


<!-- --- CONTRIBUITORI --- -->
<div>

  <h2 text="center lg" my-5 font-bold>
    💕 Multumim tuturor pentru support!!
  </h2>

  <a href="https://github.com/elitegamers-wiki/wiki-prod/graphs/contributors" flex justify-center>
    <img src="https://contrib.rocks/image?repo=elitegamers-wiki/wiki-prod" />

  </a>
</div>

