---
outline: deep
---

<img src="../public/elitegamers.png" alt="pozaProblemeGenerale" width="256" height="256" style="display: block; margin: 0 auto; border-radius: 10px;">

# <center><span style="color: #cc2b2b;">Probleme generale și de conectare la FiveM</span></center>

::: info
**Această secțiune conține pașii recomandați atunci când întâmpini probleme de conectare, crash-uri, lag, FPS scăzut sau alte erori la intrarea pe serverul ELITEGAMERS ROMANIA**
Parcurge pașii **în ordinea de mai jos**, de la cel mai simplu la cel mai avansat. În majoritatea cazurilor, problema se rezolvă înainte de a ajunge la ultimii pași.
:::

---

## 1. Repornește calculatorul

::: tip
**Cel mai simplu pas, însă de multe ori cel mai eficient.**

O repornire completă închide procesele blocate în fundal, eliberează memoria RAM și resetează driverele care s-ar fi putut bloca după o sesiune lungă de joc.
:::

::: info
**Cum procedezi:**
- Închide complet FiveM (nu doar minimizat în bara de notificări).
- Apasă **Start → Power → Restart** (NU „Shut down” urmat de pornire — Windows folosește Fast Boot și nu resetează tot).
- Așteaptă să pornească complet sistemul și încearcă din nou conectarea.
:::

---

## 2. Repornește router-ul

::: tip
**Dacă ai o conexiune instabilă, ping mare, deconectări aleatorii sau erori de tip „Failed handshake to server”, router-ul tău este suspectul principal.**
:::

::: info
**Pașii corecți (nu doar butonul de pornire/oprire):**
1. Scoate **fizic** cablul de alimentare al router-ului din priză.
2. Așteaptă cel puțin **30 de secunde** (este important — condensatorii trebuie să se descarce complet pentru a face un reset real).
3. Bagă la loc cablul și așteaptă să se aprindă toate LED-urile (Internet, WAN, Wi-Fi).
4. Încearcă din nou conectarea pe server.
:::

::: warning
Dacă folosești **Wi-Fi**, recomandăm conectarea cu cablu de rețea (Ethernet) direct în router. Wi-Fi-ul are pierderi de pachete și o latență variabilă, care afectează FiveM mai mult decât alte jocuri.
:::

---

## 3. Actualizează driverele (în special pe cele ale plăcii video)

::: tip
**Driverele învechite (mai ales cele ale plăcii video) cauzează crash-uri, FPS scăzut, ecran negru, artefacte grafice și erori de tip „DXGI_ERROR_DEVICE_HUNG” sau „Out of GPU memory”.**

FiveM rulează pe motorul RAGE, care este foarte sensibil la versiunea driverului video. Producătorii (NVIDIA / AMD / Intel) lansează frecvent actualizări optimizate pentru jocuri — merită instalate.
:::

::: info
**Placă video NVIDIA:**
1. Descarcă **NVIDIA App** sau **GeForce Experience** de pe [https://www.nvidia.com/en-us/software/nvidia-app/](https://www.nvidia.com/en-us/software/nvidia-app/).
2. Accesează secțiunea **Drivers** și apasă **Check for updates**.
3. Dacă există o versiune nouă, alege **Download** și apoi **Express Installation**.
4. Repornește calculatorul după instalare.

**Placă video AMD:**
1. Descarcă **AMD Software: Adrenalin Edition** de pe [https://www.amd.com/en/support](https://www.amd.com/en/support).
2. Deschide aplicația și mergi în secțiunea **Home** sau **Drivers & Software**.
3. Apasă **Check for Updates** și instalează versiunea recomandată (NU varianta „Optional”).
4. Repornește calculatorul.

**Placă video Intel (integrată):**
1. Descarcă **Intel Driver & Support Assistant** de pe [https://www.intel.com/content/www/us/en/support/detect.html](https://www.intel.com/content/www/us/en/support/detect.html).
2. Lasă aplicația să scaneze sistemul și instalează actualizările recomandate.
:::

::: warning
**Recomandare avansată:** Dacă întâmpini probleme persistente după actualizare, folosește **DDU (Display Driver Uninstaller)** în Safe Mode pentru a șterge complet driverul vechi înainte de a-l instala pe cel nou. Multe conflicte grafice provin din fișiere rămase de la driverele anterioare.
:::

::: danger
**Nu ignora nici driverele de chipset, rețea și sunet.** Un driver de rețea învechit (Realtek / Intel / Killer) cauzează ping inconstant și deconectări. Verifică-le pe site-ul producătorului plăcii de bază sau al laptopului.
:::

---

## 4. Șterge memoria cache a FiveM

::: tip
**Memoria cache coruptă este cauza nr. 1 a crash-urilor la intrarea pe server, a texturilor lipsă și a erorilor de tip „failed to load resource”.**
:::

::: info
**Tutorial video oficial:** [https://www.youtube.com/watch?v=ROzbOEc7lak](https://www.youtube.com/watch?v=ROzbOEc7lak)

**Pe scurt:**
1. Clic dreapta pe pictograma FiveM → **Open File Location**.
2. Intră în folderul **FiveM Application Data → data**.
3. Șterge următoarele foldere:
   - `cache`
   - `server-cache`
   - `server-cache-priv`
4. Redeschide FiveM și conectează-te din nou (prima conectare va fi mai lungă, deoarece se redescarcă tot).
:::

<a href="/bg/cache.gif" target="_blank">
  <img src="/bg/cache.gif" alt="cacheGIF" width="750" height="800" style="display: block; margin: 0px auto; border-radius: 2.5%; box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.23);">
</a>

---

## 5. Optimizare a rețelei (script automat)

::: tip
**Punem la dispoziție un script `.bat` oficial care resetează configurația de rețea, șterge memoria cache DNS și aplică optimizări pentru jocurile online.**

**Sursa scriptului:** [https://docs.illusioncloud.biz/books/faq/page/reset-your-windows-tcp-settings-recommended-for-illusioncloud-ddos-filtered-game-servers](https://docs.illusioncloud.biz/books/faq/page/reset-your-windows-tcp-settings-recommended-for-illusioncloud-ddos-filtered-game-servers)
:::

::: info
**Pași:**
1. Descarcă scriptul de aici: [https://cdn.elitegamers.ro/rezolvare_optimizari_net.bat](https://cdn.elitegamers.ro/rezolvare_optimizari_net.bat)
2. Clic dreapta pe fișierul descărcat → **Run as administrator** (obligatoriu — fără drepturi de administrator scriptul nu funcționează).
3. Așteaptă să termine de rulat (vor apărea mesaje în fereastra neagră; nu o închide până la final).
4. Repornește calculatorul după ce scriptul s-a încheiat.
:::

::: warning
**Atenție!** Dacă Windows Defender sau alt program antivirus blochează scriptul, este vorba despre un fals pozitiv (scriptul folosește comenzi precum `netsh` și `ipconfig`, care sunt marcate automat ca fiind suspecte). Permite execuția doar dacă ești sigur că l-ai descărcat de pe linkul oficial de mai sus.
:::

---

## 6. Verifică integritatea fișierelor GTA V (Steam)

::: tip
**Dacă ai fișiere lipsă sau corupte în instalarea GTA V, FiveM va da crash sau va afișa erori de tip „Game Storage” la pornire.**
:::

::: info
**Cum faci verificarea în Steam:**
1. Deschide **Steam**.
2. Mergi în **Library** și caută **Grand Theft Auto V**.
3. Clic dreapta pe joc → **Properties**.
4. Accesează secțiunea **Installed Files** (sau **Local Files**, în versiunile mai vechi).
5. Apasă **Verify integrity of game files**.
6. Așteaptă — procesul poate dura între **15 și 60 de minute**, în funcție de viteza HDD-ului/SSD-ului.
7. Dacă Steam găsește fișiere corupte, le va redescărca automat.
:::

::: warning
Pe **Rockstar Launcher** sau **Epic Games**, procesul este similar: caută opțiunea **Verify** sau **Repair** în setările jocului.
:::

---

## 7. Reinstalează FiveM

::: tip
**Soluție de ultimă instanță, dacă pașii 1-6 nu au rezolvat problema.**
Reinstalarea elimină fișierele corupte ale aplicației FiveM, configurațiile invalide și actualizările eșuate.
:::

::: info
**Pașii corecți pentru reinstalare:**
1. Închide complet FiveM.
2. Dezinstalează FiveM din **Apps & Features** (Windows) sau folosind dezinstalatorul din folderul de instalare.
3. Șterge **manual** folderul `%localappdata%\FiveM` (apasă `Win + R`, tastează `%localappdata%`, apasă Enter și șterge folderul `FiveM`).
4. Șterge și folderul de instalare, dacă a rămas (de obicei pe Desktop sau în `Documents`).
5. Descarcă FiveM din nou de pe site-ul oficial: [https://fivem.net](https://fivem.net).
6. Instalează aplicația și conectează-te din nou pe server.
:::

::: warning
**Nu vei pierde progresul de pe server** — toate datele personajului sunt salvate pe serverul nostru, nu local, pe calculatorul tău. Reinstalarea afectează doar aplicația FiveM.
:::

---

## 8. Dezinstalează modurile grafice

::: danger
**Modurile grafice (ReShade, NaturalVision, QuantV etc.) sunt o cauză foarte frecventă a crash-urilor și a FPS-ului scăzut în FiveM.**

Multe dintre acestea modifică fișierele jocului și intră în conflict cu sistemele anti-cheat ale serverului.
:::

::: info
**Cum dezinstalezi corect un mod grafic:**
1. Mergi în folderul de instalare al jocului **GTA V** (de obicei `C:\Program Files\Rockstar Games\Grand Theft Auto V` sau prin Steam).
2. Șterge următoarele fișiere, dacă există:
   - `dxgi.dll`
   - `d3d11.dll`
   - `d3d9.dll`
   - `ReShade.ini`
   - Foldere precum `reshade-shaders`, `ReShade`, `NVE`, `QuantV`, `NaturalVision`.
3. Dacă ai folosit un installer al modului, alege opțiunea **Uninstall** din acel installer.
4. După ștergere, rulează din nou **Verify integrity of game files** (vezi Pasul 6), pentru a restaura fișierele originale.
:::

::: warning
Recomandăm **să nu folosești moduri grafice** pe serverul nostru. Pentru îmbunătățirea graficii, folosește în schimb [setările grafice optime](/general/setarigrafice) explicate în Wiki.
:::

---

## Probleme persistente?

::: info
Dacă ai parcurs **toți pașii de mai sus**, iar problema persistă:

- Deschide un **tichet** pe serverul nostru de [Discord](https://discord.gg/elitegamers-ro-351058903271735306).
- Menționează **exact ce pași ai încercat** și **ce eroare primești** (de preferat cu o captură de ecran a erorii).
- Include specificațiile calculatorului (CPU, GPU, RAM, sistem de operare).
:::

::: tip
Cu cât oferi mai multe detalii, cu atât echipa tehnică te poate ajuta mai rapid.
:::
