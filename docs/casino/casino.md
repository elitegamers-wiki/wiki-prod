---
outline: deep
---

<style>
  /* Logo sus, centrat */
  .eg-casino-logo {
    display: block;
    margin: 40px auto 20px auto;
    width: 256px;
    height: 256px;
    border-radius: 5%;
    user-select: none;
  }

  /* Titlu principal */
  .eg-casino-main-title {
    text-align: center;
    font-size: 2.8rem;
    font-weight: 900;
    color: #e63946;
    text-shadow:
      0 0 4px #b22222;
    margin-bottom: 50px;
    user-select: none;
  }

  /* Carduri principale */
  .eg-casino-card {
    background-color: #1c1c1c;
    border-radius: 18px;
    box-shadow:
      0 4px 10px rgba(230, 57, 70, 0.25);
    margin: 0 auto 40px auto;
    max-width: 1000px;
    padding: 25px 35px;
    transition: box-shadow 0.3s ease;
  }
  .eg-casino-card:hover {
    box-shadow:
      0 6px 15px rgba(230, 57, 70, 0.4);
  }

  /* Subtitlu card */
  .eg-casino-card-title {
    font-size: 2rem;
    font-weight: 800;
    background: linear-gradient(90deg, #ff3333, #b22222);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
    user-select: none;
  }

  /* Text paragraf */
  .eg-casino-text {
    font-size: 1.15rem;
    line-height: 1.7;
    color: #ddd;
    margin-bottom: 20px;
  }

  /* Listă personalizată */
  .eg-casino-list {
    list-style: none;
    padding-left: 0;
    margin-bottom: 20px;
  }
  .eg-casino-list li {
    position: relative;
    padding-left: 1.8em;
    margin-bottom: 12px;
    color: #eee;
  }
  .eg-casino-list li::before {
    content: "•";
    position: absolute;
    left: 0;
    font-size: 1.3rem;
    color: #e63946;
  }

  /* Imagini în card */
  .eg-casino-img {
    width: 100%;
    border-radius: 14px;
    box-shadow: 0 3px 10px rgba(230, 57, 70, 0.3);
    margin: 15px 0 0 0;
    transition: transform 0.3s ease;
  }
  .eg-casino-img:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 18px rgba(230, 57, 70, 0.45);
  }
</style>

<!-- Logo sus -->
<img src="../public/elitegamers.png" alt="Logo EliteGamers" class="eg-casino-logo" />

<h1 class="eg-casino-main-title">Despre Casino</h1>

<!-- Card 1 -->
<section class="eg-casino-card">
  <h2 class="eg-casino-card-title">Ce este Casino-ul?</h2>
  <p class="eg-casino-text">
    Casino-ul este locul unde jucătorii pot încerca să-și mărească averea sau, din contră, să piardă totul. Este un spațiu dedicat celor pasionați de jocurile de noroc și distracție, aducând un plus de adrenalină în viața de zi cu zi a orașului.
  </p>
  <ul class="eg-casino-list">
    <li>Jocuri de noroc variate: ruletă și slot machines.</li>
    <li>Atenție la riscurile pierderilor financiare semnificative.</li>
    <li>Loc ideal pentru socializare și momente pline de suspans.</li>
  </ul>
</section>

<!-- Card 2 -->
<section class="eg-casino-card">
  <h2 class="eg-casino-card-title">Interiorul din casino</h2>
  <img src="../public/casino/casino_interior.webp" alt="Interior Casino" class="eg-casino-img" />
</section>

<!-- Card 3 -->
<section class="eg-casino-card">
  <h2 class="eg-casino-card-title">Magazin pentru băuturi și mâncare</h2>
  <img src="../public/casino/casier.webp" alt="Magazin Casino" class="eg-casino-img" />
</section>

<!-- Card 4 -->
<section class="eg-casino-card">
  <h2 class="eg-casino-card-title">De unde cumperi chips-uri?</h2>
  <p class="eg-casino-text">Chips-urile se cumpără de la cashier, așa cum se vede și în gif-ul de mai jos:</p>
  <img src="../public/casino/chips.gif" alt="Cumparare chips Casino" class="eg-casino-img" />
</section>

<!-- Card 5 -->
<section class="eg-casino-card">
  <h2 class="eg-casino-card-title">Lucky Wheel</h2>
  <p class="eg-casino-text">
    Principala atracție este roata norocului, unde poți consuma bani pentru a câștiga o mașină exclusivă. Șansele sunt mici, dar merită încercat de mai multe ori!
  </p>
  <img src="../public/casino/roata_casino.gif" alt="Roata norocului Casino" class="eg-casino-img" />
</section>

<!-- Card 6 -->
<section class="eg-casino-card">
  <h2 class="eg-casino-card-title">Pacanele (Slots)</h2>
  <p class="eg-casino-text">
    Sistemul de pacanele a fost refacut complet cu o interfata atractiva si moderna. Este bazat pe un joc clasic cu o singura linie unde trebuie sa nimeresti 3 obiecte de acelasi fel pentru a castiga.
  </p>
  <ul class="eg-casino-list">
    <li>Miza configurabila - alegi cat vrei sa pariezi</li>
    <li>Auto-spin - poti juca automat pana la 500 de jocuri consecutive</li>
    <li>Animatie de castig speciala pentru premiile mari</li>
    <li>Apasa SPACE pentru a invarte sau activeaza auto-spin</li>
  </ul>
  <img src="../public/casino/slots.gif" alt="Slot machines Casino" class="eg-casino-img" />
</section>

<!-- Card 7 -->
<section class="eg-casino-card">
  <h2 class="eg-casino-card-title">Coinflip</h2>
  <p class="eg-casino-text">
    Jocul Coinflip este simplu: alegi intre cap sau pajura cu o sansa de 50-50. Este un mod rapid de a-ti testa norocul!
  </p>
  <ul class="eg-casino-list">
    <li>Pariuri intre 100 si 10.000 de euro</li>
    <li>Sansa de 50-50 - alegi cap sau pajura</li>
    <li>In stanga ecranului vezi statistica intregii sesiuni</li>
    <li>In dreapta selectezi miza si apesi butonul de incepere</li>
  </ul>
</section>
