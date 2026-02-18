---
outline: deep
---

<div class="eg-tirist">

<!-- LOGO CLAR, FĂRĂ COLȚURI/MARGINI -->
<img src="../public/elitegamers.png" alt="logoEG" width="300" class="eg-logo">

<style>
.eg-tirist {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  padding: 1rem;
}

/* Logo-ul să nu fie afectat de stilul pentru restul imaginilor */
.eg-tirist .eg-logo {
  display: block;
  margin: 0 auto;
  border: none;
  border-radius: 0;
  box-shadow: none;
  max-width: 100%;
  height: auto;
}

/* Stil pentru boxuri roșii tematice */
.eg-tirist .eg-box {
  max-width: 700px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, #1a1a1a 70%, #ff2323 100%);
  box-shadow: 0 8px 24px rgba(255, 35, 35, 0.6);
  color: #fff;
}

/* Stil doar pentru imaginile normale (nu logo-ul) */
.eg-tirist img:not(.eg-logo) {
  border-radius: 8px;
  border: 2px solid #ff2323;
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1rem auto;
}

.eg-tirist .eg-box ul {
  line-height: 1.6;
  font-size: 1.1em;
  padding-left: 1.3em;
}

.eg-tirist ul {
  max-width: 700px;
  margin: 30px auto;
  line-height: 1.6;
  font-size: 1.1em;
  padding-left: 1.3em;
}

.eg-tirist ul ul {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 1.3em;
}

.eg-tirist details > summary {
  cursor: pointer;
  font-weight: 600;
  color: #ff2323;
  margin-top: 1rem;
  user-select: none;
}

.eg-tirist details > summary:hover {
  text-decoration: underline;
}
</style>

### Ce presupune acest job de trucker?

<div class="eg-box">
  Jobul de trucker implică transportul mărfurilor între diferite destinații, folosind tirul companiei. La început, vei face curse normale pentru aprovizionarea magazinelor, benzinăriilor sau transportul de vehicule. Pe măsură ce avansezi, poți accesa curse mai complexe și riscante, precum transportul de mărfuri periculoase. Plata este făcută pe kilometru parcurs, iar performanța ta este recompensată în funcție de cum parchezi la destinație.<br>
  Traseele sunt tematice, în funcție de tipul de marfă transportată, iar destinațiile se calculează automat în funcție de locația ta curentă, pentru a permite organizarea de convoaie cu alți jucători.
</div>

### Cum mă angajez?

<p>Pentru a începe, trebuie să deții un permis de conducere, pe care îl poți obține de la școala de șoferi, trecând mai întâi printr-un test teoretic, urmat de unul practic. După ce obții permisul, trebuie să mergi la Primărie, unde un NPC de la tejghea te va introduce în meniul interactiv, de unde poți selecta locul de muncă dorit.</p>

:::details Locatie Primarie
<img src="../public/joburi/gps.png" alt="Locatie Primarie">
:::

:::details NPC
<img src="../public/joburi/primarie.png" alt="NPC Primarie">
:::

<div class="eg-box">
  Pentru a începe jobul de trucker, ai nevoie de <b>50 ore jucate</b>. În cazul în care vrei să accesezi <b>Skill 2 - Șofer Avansat</b>, ai nevoie de <b>200 ore jucate</b> și o licență suplimentară pentru transportul de mărfuri periculoase. Licența poate fi obținută de la patronul jobului (NPC-ul), care costă 30.000 de euro și este obligatorie pentru cursele de acest tip.
</div>

### Informații suplimentare:

Skill-uri disponibile:

<div class="eg-box">
  <ul>
    <li><b>Șofer Începător (Skill 1):</b> Curse simple și sigure, precum aprovizionarea magazinelor sau benzinăriilor.</li>
    <li><b>Șofer Avansat (Skill 2):</b> Permite accesul la transporturi periculoase, precum mărfuri explozive sau chimice. Aceste curse sunt bine plătite, dar trailer-ul poate exploda dacă nu ești atent, ceea ce crește riscul.</li>
  </ul>
</div>

<ul>
  <li><b>Restricții în funcție de nivel:</b> Tipurile de traseu și mărfurile transportate sunt blocate până atingi un anumit nivel al jobului.</li>
  <li><b>Trasee tematice:</b>
    <ul>
      <li>Curse specifice pentru anumite categorii de produse (combustibil, vehicule, produse pentru magazine).</li>
      <li>Cursele se pot face doar cu tirul oferit de firmă. La fiecare cursă nouă, tirul și remorca sunt resetate automat.</li>
      <li>Destinațiile includ locații variate, iar fiecare parcare îți oferă recompense diferite în funcție de calitatea parcării (proastă, ok, foarte bună).</li>
    </ul>
  </li>
  <li><b>Convoaie:</b> Toți jucătorii au aceleași trasee, astfel încât să poată forma convoaie pentru realism și distracție.</li>
</ul>

</div>
