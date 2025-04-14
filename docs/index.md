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
    src: /elitegamers.gif
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

<!-- ---
### <center><span style="color: #e63946; font-size: 2.5rem;">OBLIGATORIU SA AVETI VERSIUNEA BETA</span></center>

<a href="/bg/eg.gif" target="_blank">
  <img src="/bg/eg.gif" alt="altGIF" width="750" height="800" style="display: block; margin: 0px auto; border-radius: 2.5%; box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.23);">
</a> -->

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


<style>
body:has(.VPHome)::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url('/cards/elitegamers32.png') center center no-repeat;
  background-size: cover;
  z-index: -1;
  pointer-events: none;
}
</style>


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
---

### <center><span style="color: #e63946; font-size: 2.5rem;">UNDE NE GĂSEȘTI?</span></center>

<div class="card-section">
  <div class="card">
    <div class="card-content">
      <i class="fa-brands fa-tiktok"></i>
      <h2>TikTok</h2>
      <p>Followers: <span>41.6K</span></p>
      <a href="https://www.tiktok.com/@elitegamers.ro" target="_blank">
        <i class="fa-solid fa-link"></i>
        <span>Follow Us</span>
      </a>
    </div>
  </div>

  <div class="card">
    <div class="card-content">
      <i class="fa-brands fa-discord"></i>
      <h2>Discord</h2>
      <p>Members: <span>8.545</span></p>
      <a href="https://discord.gg/u8nnkDqZ2q" target="_blank">
        <i class="fa-solid fa-link"></i>
        <span>Join Now</span>
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
        <span>Follow Us</span>
      </a>
    </div>
  </div>
</div>

<!-- HOW TO PLAY -->

---
### <center><span style="color: #e63946; font-size: 2.5rem;">CUM TE POTI JUCA PE SERVER-UL NOSTRU?</span></center>
### <span><center>Pentru a juca pe serverul nostru, trebuie să aveți o copie licențiată a Grand Theft Auto V și FiveM descărcat.</center></span>
---

<div class="howtocard-container">
  <!-- Card 1: Ai nevoie de GTA 5 -->
  <div class="howtocard">
    <div class="corner-icon">
      <img src="/cards/gta5.png" alt="Web Icon" />
    </div>
    <div class="step">STEP 1</div>
    <img src="/cards/fivem3.jpg" alt="EliteGamers" style="border: 0.9px solid darkred; border-radius: 16px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);">
    <h3>Ai nevoie de GTA 5</h3>
    <div class="description">
      Puteți achiziționa GTA 5 de pe 
      <a href="https://store.steampowered.com/app/271590/Grand_Theft_Auto_V_Legacy/" target="_blank">Steam</a>, 
      <a href="https://store.epicgames.com/en-US/p/grand-theft-auto-v" target="_blank">Epic Games</a> sau 
      <a href="https://store.rockstargames.com/game/buy-gta-v" target="_blank">Rockstar Launcher</a>.
    </div>
  </div>

  <!-- Card 2: Descarci FiveM -->
  <div class="howtocard">
    <div class="corner-icon">
      <img src="/cards/fivem.png" alt="Download Icon" />
    </div>
    <div class="step">STEP 2</div>
    <img src="/cards/fivem.jpg" alt="FiveM" style="border: 0.9px solid darkred; border-radius: 16px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);">
    <h3>Descarci FiveM</h3>
    <div class="description">
      Accesează site-ul oficial FiveM și descarcă clientul pentru a începe jocul.
    </div>
    <div class="button-container">
      <a href="https://fivem.net/" target="_blank">
        <button>Descarcă acum</button>
      </a>
    </div>
  </div>

  <!-- Card 3: Intri pe elitegamers.ro -->
  <div class="howtocard">
    <div class="corner-icon">
      <img src="/cards/search.png" alt="Web Icon" />
    </div>
    <div class="step">STEP 3</div>
    <img src="/cards/fivem2.webp" alt="EliteGamers" style="border: 0.9px solid darkred; border-radius: 16px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);">
    <h3>Intră pe gta.elitegamers.ro</h3>
    <div class="description">
      În clientul FiveM, caută la BROWSE: ELITEGAMERS.RO sau connect gta.elitegamers.ro
    </div>
  </div>
</div>


<!-- --- CONTRIBUITORI --- -->
<div>

  <h2 text="center lg" my-5 font-bold>
    Multumim tuturor pentru support!!
  </h2>

  <a href="https://github.com/elitegamers-wiki/wiki-prod/graphs/contributors" flex justify-center>
    <img src="https://contrib.rocks/image?repo=elitegamers-wiki/wiki-prod" />

  </a>
</div>


<ClientOnly>
  <StarRating />
</ClientOnly>

---

<SiteMap />