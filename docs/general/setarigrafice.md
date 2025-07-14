---
outline: deep
---

<img src="../public/elitegamers.png" alt="pozaRegulament" width="256" height="256" style="display: block; margin: 2rem auto 1rem; border-radius: 5%;">

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.guide-container {
  font-family: 'Poppins', sans-serif;
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  color: white;
}

.guide-box {
  background: linear-gradient(135deg, #1a1a1a 70%, #cc3a3a 100%);
  border-left: 5px solid #d94a4a;
  padding: 1.5rem 2rem;
  margin: 1.5rem 0;
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(217, 74, 74, 0.25);
  transition: box-shadow 0.3s ease;
}

.guide-box:hover {
  box-shadow: 0 12px 35px rgba(217, 74, 74, 0.45);
}

.title-font {
  font-weight: 800;
  color: #d94a4a;
  text-shadow: 1px 1px 4px rgba(217, 74, 74, 0.7);
  font-size: 2.6rem;
  margin-bottom: 1rem;
}

.header-font {
  font-weight: 600;
  color: #e26a6a;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.tip {
  background: #222020cc;
  border-left: 4px solid #d94a4a;
  padding: 1rem 1.2rem;
  border-radius: 10px;
  margin: 1rem 0 1.5rem 0;
  color: #d3d3d3;
}

.tip strong {
  color: #e07c7c;
}

p, ul {
  line-height: 1.5;
}

code {
  background-color: #cc3a3aaa;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-weight: 600;
  color: white;
}

ul {
  margin-left: 1.3rem;
}

</style>

<div class="guide-container">

# <span class="title-font"><center>Ghid pentru Setarile Grafice in GTA 5</center></span>

### <span class="header-font">Cum imbunatatesti Performanta?</span>

### 1. Configurarea optima a graficii in FiveM
<div class="tip"><strong>INFO:</strong><br>
Acceseaza <code>Settings → Graphics</code> si foloseste urmatoarele setari:
<ul>
  <li><p style="color: #6ecc5d;"><strong>Texture Quality:</strong> Medium / High (daca ai VRAM suficient)</p></li>
  <li><p style="color: #6ecc5d;"><strong>Shader Quality:</strong> Low</p></li>
  <li><p style="color: #6ecc5d;"><strong>Reflection Quality:</strong> Off</p></li>
  <li><p style="color: #6ecc5d;"><strong>MSAA:</strong> Off</p></li>
  <li><p style="color: #6ecc5d;"><strong>Anisotropic Filtering:</strong> x2 sau Off</p></li>
  <li><p style="color: #6ecc5d;"><strong>Shadow Quality:</strong> Very Low</p></li>
  <li><p style="color: #6ecc5d;"><strong>Grass Quality:</strong> Off</p></li>
  <li><p style="color: #6ecc5d;"><strong>Post FX:</strong> Low</p></li>
</ul>
Aceste ajustari reduc consumul de resurse si imbunatatesc performanta FPS-ului.
</div>

### 2. Optimizarea sistemului Windows si a driverelor
<div class="tip">
<ul>
  <li><p style="color: #6ecc5d;">Seteaza Windows in "High Performance Mode"</p></li>
  <li><p style="color: #6ecc5d;">Actualizeaza driverele pentru placa video (NVIDIA/AMD)</p></li>
  <li><p style="color: #6ecc5d;">Inchide aplicatiile care ruleaza in fundal</p></li>
</ul>
</div>

### <span class="header-font">Explicatia fiecarei setari din GTA 5</span>

### Ignore Suggested Limits -> <span style="color:#d94a4a;">Nu este necesar</span>
<div class="guide-box">
Aceasta optiune permite cresterea graficii dincolo de limita VRAM-ului placii video, dar poate cauza instabilitate.
</div>

### DirectX Version -> <span style="color:#6ecc5d;">DirectX 11</span>
<div class="guide-box">
Alegerea unei versiuni inferioare de DirectX poate reduce considerabil calitatea graficii.
<div class="tip"><strong>Recomandare!</strong><br>Daca folosesti un PC cu resurse limitate, poti seta o versiune mai veche pentru a obtine un FPS mai bun.</div>
</div>

### Render Resolution -> <span style="color:#d94a4a;">Recomandata: Nativa</span>
<div class="guide-box">
Seteaza rezolutia nativa a monitorului pentru a obtine cea mai buna calitate a imaginii.
</div>

### Output monitor -> <span style="color:#d94a4a;">La alegere</span>
<div class="guide-box">
Permite alegerea monitorului pentru redarea jocului, in cazul in care ai mai multe monitoare conectate.
</div>

### FXAA -> <span style="color:#6ecc5d;">Activat (pentru a evita efectul de pixelare)</span>
<div class="guide-box">
FXAA este un filtru care netezeste marginile obiectelor, creand un efect vizual mai placut, insa poate estompa detaliile fine.
</div>

### MSAA -> <span style="color:#6ecc5d;">Dezactivat</span>
<div class="guide-box">
MSAA este similar cu FXAA, dar are un impact mai mare asupra performantei. Foloseste-l doar daca ai un PC foarte puternic.
</div>

### VSync -> <span style="color:#6ecc5d;">Dezactivat</span>
<div class="guide-box">
Aceasta setare sincronizeaza FPS-ul cu rata de refresh a monitorului. In general, este recomandat sa o dezactivezi pentru a obtine un FPS mai mare.<br>
Daca ai un monitor cu 60Hz, setarea VSync va limita FPS-ul la 60.
</div>

### Pause Game On Focus Loss -> <span style="color:#d94a4a;">Nu este relevanta pentru multiplayer</span>

### Population Density/Variety -> <span style="color:#d94a4a;">Minima, este doar pentru Singleplayer</span>

### Distance Scaling -> <span style="color:#d94a4a;">Depinde de preferinte</span>
<div class="guide-box">
Acest setaj controleaza distanta la care sunt randate obiectele. Marirea acestei setari poate scadea performanta.
</div>

### Extended Texture Budget -> <span style="color:#d94a4a;">Depinde de resursele tale</span>
<div class="guide-box">
Daca ai dificultati cu texturile din joc, poti creste acest parametru, dar va consuma mai mult VRAM.
</div>

### Texture Quality -> <span style="color:#d94a4a;">Depinde de PC</span>
<div class="guide-box">
Aceasta setare afecteaza calitatea texturilor. Seteaz-o pe valoare mare pentru detalii grafice mai bune, dar vei observa o scadere a performantei.
</div>

### Shader Quality -> <span style="color:#d94a4a;">Depinde de performanta</span>
<div class="guide-box">
Schimba calitatea efectelor de lumina si alte efecte grafice. Cresterea acestei setari poate imbunatati grafica, dar reduce FPS-ul.
<div class="tip"><strong>Recomandare!</strong><br>Daca folosesti un mod grafic, seteaza aceasta optiune la valoare mare pentru a pune in valoare efectele grafice.</div>
</div>

### Shadow Quality -> <span style="color:#d94a4a;">Depinde de preferinte</span>
<div class="guide-box">
Aceasta setare afecteaza calitatea umbrelor din joc. Cu cat o cresti, cu atat mai mult va afecta performanta.
</div>

### Reflection Quality -> <span style="color:#d94a4a;">Depinde de PC</span>
<div class="guide-box">
Ajusteaza detaliile reflexiilor. Marirea acestei setari poate imbunatati calitatea vizuala, dar poate reduce FPS-ul.
</div>

### Reflection MSAA -> <span style="color:#d94a4a;">Depinde de performanta</span>
<div class="guide-box">
Similar cu MSAA, dar aplicat doar reflexiilor. Cresterea acestuia afecteaza semnificativ performanta.
</div>

### Water Quality -> <span style="color:#d94a4a;">Depinde de detalii vizuale</span>
<div class="guide-box">
Seteaza calitatea apei din joc. Cresterea acestei setari poate reduce performanta.
</div>

### Particles Quality -> <span style="color:#d94a4a;">Depinde de preferinte</span>
<div class="guide-box">
Aceasta setare afecteaza efectele particulelor (ex: fum, praf, foc). Cresterea acesteia poate imbunatati grafica, dar va reduce FPS-ul.
</div>

### Grass Quality -> <span style="color:#d94a4a;">Depinde de performanta</span>
<div class="guide-box">
Modifica calitatea vegetatiei din joc. Cresterea acesteia poate scadea FPS-ul, dar imbunatateste grafica.
</div>

### Soft Shadows -> <span style="color:#d94a4a;">Nu face diferenta semnificativa</span>
<div class="guide-box">
Aceasta setare controleaza modul in care umbrele sunt randate. De obicei, nu are un impact major asupra FPS-ului.
</div>

### Post FX -> <span style="color:#d94a4a;">Depinde de preferinte</span>
<div class="guide-box">
Modifica efectele vizuale precum contrastul, luminozitatea si filtrele de imagine. Cresterea acestui parametru poate imbunatati estetica jocului, dar reduce FPS-ul.
<div class="tip"><strong>Recomandare!</strong><br>Daca folosesti un mod grafic, seteaza aceasta optiune la maxim pentru a pune in valoare acele moduri.</div>
</div>

### Motion Blur Strength -> <span style="color:#d94a4a;">Depinde de preferinte</span>

### In-Game Depth of Field Effects -> <span style="color:#d94a4a;">La alegere</span>
<div class="guide-box">
Creeaza un efect cinematic prin estomparea fundalului, oferind un efect de focalizare pe obiectele de interes.
</div>

### Anisotropic Filtering -> <span style="color:#6ecc5d;">x16</span>
<div class="guide-box">
Imbunatateste calitatea texturilor vizibile la unghiuri oblice (ex: drumuri, ziduri). Fara aceasta setare, texturile pot deveni neclare la distanta.
<div class="tip"><strong>Recomandare!</strong><br>Daca setezi calitatea texturilor pe o valoare medie, aceasta setare poate imbunatati detaliile vizuale fara a afecta semnificativ FPS-ul.</div>
</div>

### Ambient Occlusion -> <span style="color:#d94a4a;">La alegere</span>
<div class="guide-box">
Imbunatateste umbrele si iluminarea, creand efecte mai realiste ale umbrelor si al luminii din colturi si sub obiecte.
</div>

### Tesselation -> <span style="color:#d94a4a;">La alegere</span>
<div class="guide-box">
Adauga detalii suplimentare obiectelor 3D, facandu-le mai realiste. Foloseste-o pentru un efect vizual mai bun, dar poate afecta performanta.
</div>

</div>
