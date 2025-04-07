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
    src: /elitegamers.png
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
    Multumim tuturor pentru support!!
  </h2>

  <a href="https://github.com/elitegamers-wiki/wiki-prod/graphs/contributors" flex justify-center>
    <img src="https://contrib.rocks/image?repo=elitegamers-wiki/wiki-prod" />

  </a>
</div>

<script setup>
import { onMounted } from 'vue'

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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");

.card-section {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  padding: 2rem 1rem;
  background: transparent;
  font-family: 'Poppins', sans-serif;
}

.card-section .card {
  min-width: 200px;
  height: 350px;
  flex: 1 1 250px;
  background-color: rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}

.card-section .card-content {
  position: absolute;
  inset: 1px;
  background-color: #131315;
  border-radius: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 18px;
  text-align: center;
  padding: 1rem;
}

.card-section .card-content > i {
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.5);
}

.card-section .card-content > p,
.card-section .card-content > a {
  color: rgba(255, 255, 255, 0.7);
}

.card-section .card-content > a {
  width: 90%;
  padding: 0.8rem;
  background-color: rgba(201, 24, 24, 0.8); /* Fundal roșu */
  border: 1px solid rgba(65, 4, 4, 0.8); /* Border roșu */
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 10;
  text-decoration: none;
  color: white; /* Text alb */
  transition: all 0.2s ease;
}

.card-section .card:nth-child(1) {
  --color: 348 80% 60%; /* roșu */
}

.card-section .card:nth-child(2) {
  --color: 60 100% 50%; /* galben */
}

.card-section .card:nth-child(3) {
  --color: 0 100% 50%; /* roșu intens */
}

.card-section .card::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(
    500px circle at var(--mouse-x) var(--mouse-y),
    hsl(var(--color) / 0.35),
    transparent 40%
  );
  border-radius: inherit;
  opacity: 0;
  z-index: 2;
}

.card-section:hover > .card::before {
  opacity: 1;
}

.card-section:hover > .card {
  background: radial-gradient(
    400px circle at var(--mouse-x) var(--mouse-y),
    hsl(var(--color) / 1),
    rgba(255, 255, 255, 0.12) 40%
  );
}
</style>


## <center><span style="color: #e63946; font-size: 2.5rem;">UNDE NE GĂSEȘTI?</span></center>

<div class="card-section">
  <div class="card">
    <div class="card-content">
      <i class="fa-brands fa-tiktok"></i>
      <h2>TikTok</h2>
      <p>Followers: <span>41.6K</span></p>
      <a href="https://www.tiktok.com/@elitegamers.ro" target="_blank">
        <i class="fa-solid fa-link"></i>
        <span>Follow me</span>
      </a>
    </div>
  </div>

  <div class="card">
    <div class="card-content">
      <i class="fa-brands fa-instagram"></i>
      <h2>Instagram</h2>
      <p>Followers: <span>124</span></p>
      <a href="https://www.instagram.com/elitegamers.ro/" target="_blank">
        <i class="fa-solid fa-link"></i>
        <span>Follow me</span>
      </a>
    </div>
  </div>

  <div class="card">
    <div class="card-content">
      <i class="fa-brands fa-youtube"></i>
      <h2>Youtube</h2>
      <p>Followers: <span>573</span></p>
      <a href="https://www.youtube.com/@elitegamers7873" target="_blank">
        <i class="fa-solid fa-link"></i>
        <span>Follow me</span>
      </a>
    </div>
  </div>
</div>
