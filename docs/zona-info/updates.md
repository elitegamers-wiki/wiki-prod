---
outline: deep
---
<img src="../public/elitegamers.png" alt="pozaRegulament" width="256" height="256" style="display: block; margin: 0px auto; border-radius: 1%; border-radius: 5%;">


## Update 0.1.0 

```js
- Reparate grade admin
- Reparate garaje personale
- Reparat notar si RAR
- Adaugate haine custom
- Fixate buguri anticheat
- Adaugate masina lipsa de la DMV
- Adaugate bicicletele lipsa de la rent car spawn
- Ceasul este acum corect, ora Romaniei
- Masinile de politie/medici se spawneaza corect
- Kiturile de mecanic sunt acum gratis pentru toata lumea (temporar)
- Gradele de admin apar corect in chat acum
- Poti parca masina acum
- Rezolvat bugul in care mecanicul/alte joburi nu pot raspunde la apeluri
- Rezolvat un bug la sistemul de contracte in care aparea ca esti deja in contract
```

## Update 0.2.0

**Features**
```javascript
- Scoasa tinta
- Adaugat text langa turometru care notifica absenta permisului din inventar
- Scoase hainele de job-uri din magazinele de haine
- Taximetrul a fost mutat mai sus pentru a permite citirea turometrului
- A fost modificata opacitatea textelor afisate deasupra NPC-urilor
- Mutat jobul de pescar level 1 (puteti vedea noua locatie pe /gps)
- Scazute joburile de tirist si pescar la 0 ore
- Pozitionate markerele de la garaje mai jos
- Modificate uniformele/hainele, multumim @ana
- Adaugate handling-uri noi pentru masinile existente, multumim @crixus
```
**Bug fixes**
```javascript
- Vehiculele nu mai pot fi pornite de catre pasageri
- Incercarea de a parca o masina in garajul unui job nu va mai scoate jucatorul din masina si va fi notificat ca nu poate accesa garajul
- La tuning preturile au fost trecute in euro
- Reparat bug-ul care nu permitea accesarea bicicletelor dupa ce se cobora de pe ele
- Eliminate anumite comenzi nefolosite
- Carry nu mai permite utilizarea click-ului sau accesarea inventarului de catre cel carat si va bloca cel care cara din a folosi la randul lui click-ul. A fost rezolvata o problema care punea jucatorul pe mijlocul drumului daca se apasa tasta F
- La computerul de bord al masinii a fost reparata functia de aprinde/stingere a neoanelor
- Reparat un bug care pornea melodia automat cand se intra in masina din nou chiar daca aceasta era oprita din computerul de bord
- Reparat meniul Y, iar acum deselectarea hainelor va arata corpul in mod normal
- Toate meniurile vizuale afiseaza acum moneda sub formatul € si nu cu EUR
- Nu se mai pot impinge biciclete folosind ALT
- Reparat /me (afiseaza textul mai ok)
- Reparate anumite buguri la anticheat
- Fixat un bug la contracte care nu permitea afisajul jucatorilor din jur
```

## Update 0.3.0

**Features**
```javascript
- Adaugate markere pentru meniurile de haine pentru a le identifica mai usor
- Semnalizari la masini (se folosesc folosind sagetile)
- Adaugat "nickname" in scoreboard
- Adaugate comenzile /dv /names /blips de la mod+
- Adaugata comanda /ore <id>
```
**Bug fixes**
```javascript
- Reparat consumul la carry
- Acum nu se mai pot cara jucatori care cara alti jucatori sau sunt carati deja
- Hud-ul nu mai dispare dupa iesirea din masina
- Reparat un bug la televizorul de pe plaja care dadea erori la jucator
- Fixat un bug la taxi care facea ca textul taximetrului sa apara ca fiind "liber"
- Fixat un alt bug la taxi care facea sa calculeze gresit distanta parcursa
- Fixat un bug la garaj care facea sa nu iti poti parca masina uneori
- Fixat un bug la multiple resurse care cauzau probleme de memorie (mem. leak)
```

## Update 0.4.0 
Facut de: **xSLOW & sNok3**

**Bug fixes**
```js
- Fixat un bug care nu permitea atacarea/omorarea altor jucatori
- Fixat un bug la garaje care permitea sa iei masini de grad mai mare
- Pentru a folosi trusa de clonat chei acum poti scoate masina din garaj fara sa ai cheia acesteia
- Fixat un bug la frizerie si magazinul de haine care facea sa dispara meniul daca se apasa prea repede pe tasta E
- Fixat un bug care permitea incuierea unui ATV
- Fixat un bug la tuning care nu permitea repararea masinii din prima incercare
- Fixat un bug la garajele de job care nu te lasa sa alegi o masina de job
```
**Features**
```js
- Adaugata culoare de diferentiere pentru canalele din chat
- Adaugata notificare cand un membru staff se teleporteaza dupa acceptarea unui report
- Crescut timpul pana la anularea jobului atunci cand iesi din masina la 10 minute pentru tirist/sofer de autobuz
- Adaugate 3 masini noi la mecanic
- Imbunatatit sistemul de garaje
- Adaugat centru de inchiere masina la puscarie
- KM masinii sunt acum afisati ok
- Adaugata notificare la impingerea masinii cu tastele necesare pentru a vira
- A fost schimbat sistemul de notificari de la emote-urile partajate cu sistemul obisnuit
- Au fost modificate tastele pentru acceptarea/respingerea
 emote-urilor
- Scoasa animatia de la revive
- Actualizat pretul ciupercilor
- Adaugat text deasupra ciupercilor cu tasta necesara
- Adaugat text deasupra minereelor cu tasta necesara
- Scos skillcheck pentru jobul de ciupercar/miner
- Creat un sistem pentru backup-uri zilnice a serverului pentru cat o mai buna pastrare a datelor
```

## Update 0.5.0
Facut de: **sNok3 & xSLOW**

**Features**
```javascript
- Adaugata optiunea de a dezactiva ESP pe masini din computer-ul de bord (tasta O) pentru masinile sport
- Adaugat comanda pentru a incepe inregistrarea de pe bodycam in meniul de pe tasta K
- Schimbate anumite culori de la bodycam si mutate interfetele mai jos pentru a nu obstructiona hud-urile
- Tradus inventarul in limba romana
- La jobul de miner/ciupercar acum apare un text sugestiv pentru a ajuta jucatorii noi.
- Pompele din benzinarii nu mai explodeaza la impactul cu un vehicul
- A fost ascuns numarul de gloante din hud pentru armele albe
- A fost scos scoreboard-ul pentru jucatori pentru a evita metagaming-ul
- In computer-ul de bord a fost sincronizata muzica din queue intre toti jucatorii din masina prezenti in acel moment in masina
```
**Bug fixes**
```javascript
- Fixat un bug la carry care permitea caratul jucatorilor care pescuiesc
- Fixat un bug care cauza o eroare la pescar atunci cand jucatorul era impins de catre altcineva
- Mutata afisarea radarului la politie mai sus deoarece bloca turometrul
- Fixat un bug care nu permitea acceptarea sau refuzarea emote-urilor partajate
- Fixat un bug la berbecul de la politie care nu permitea deschiderea unor usi
- Fixat un bug la inventar care stergea toate grenadele chiar daca se arunca doar 1
- Fixat un bug la rentcar care te teleporta la puscarie in loc de locul corect.
- Fixat un bug la computer-ul de bord pentru masinile non-personale care facea sa nu poti deschide meniul
- Fixat un bug la computer-ul de bord care permitea sa porneasca melodia precendata chiar si dupa ce se terminase
- Fixat un bug la computer-ul de bord care bloca butonul de play/pauza dupa ce se iesea din masina
```

## Update 0.6.0
Facut de: **sNok3 & xSLOW**

**Features**
```js
- Jobul de ciupercar are acum 2 zone separate (nivel 1 si nivel 2)
- Adaugata iconita deasupra capului cand cineva vorbeste
- Melodiile de pe YT puse in masina ar trebui sa se sincronizeze cu toti (in lucru inca)
- Acum la jobul de pizza, in functie de skill, poti lua 5 sau 10 pizza
- Scazut timpul de pescuit 
- Crescut timpul pentru sters masinile la 45m
- Imbunatatit algoritmul de "randomizare" folosit in diverse locuri (checkpoint joburi, etc)
- La tirist si la iesitul din garaj timpul in care esti in "ghost mode" este mai scurt
- Modificate salariile la tirist/sofer de autobuz
- Updatate diferite resurse
```

**Bug fixes**
```js
- Modificat un text gresit la meniul de haine
- Optimizat jobul de tirist
- Optimizat sistemul de sunete custom
- Reparat un punct de vanzare pentru ciupercar/adaugat punct de vanzare pentru ciupercar ilegal
- Scoasa animatia de la meniul de pausa care cauza probleme
-  Modificat sistemul de entitati (in speranta repararii bugului cu masinile spawnate care se sterg - la pizza job mai mult)
- Reparat un bug la inchiriat masini care facea sa nu mai poti urca pe motocicleta/atv/etc
```

## Update 0.7.0
Facut de: **xSLOW**

**Features/Changes**
```js
- Impartit minerul in 2 mine (nivel 1 si nivel 2)
- Modificate raritatile la minereuri
- Adaugata notificare la magazin daca nu ai bani
- Modificate diverse locatii in /gps
- Oprit temporar consumul de combustibil pentru avioane, barci, elicoptere deoarece nu ai pompe
- Creat dealership pentru barci
- Create 2 garaje pentru barci
- Daca nu ai un skin de ghiozdan atunci cand cumperi ghiozdan (mic, mediu, mare) ti se pune automat un skin daca nu ai
- Adaugata imagine lipsa la gunoiul de la pescar
- Adaugate retete de crafting pentru miner (rafinarie)
- Scoasa animatia de la /revive
- Facut ca buletinul/permisul sa iti apara si tie/altora atunci cand ii dai "folosire"
- Inventarul este acum dezactivat in garaje
- Adaugate garaje personale noi in apropierea tuturor joburilor
- Adaugata notificare daca incerci sa iesi din masina cu centura pusa/masina incuiata
- Imbunatatit sistemul de vehicule, npcuri si obiecte
- Modificate iconitele de pe harta pentru joburi
```
**Bug fixes**
```js
- Rezolvat un bug la jobul sofer de autobuz si la tirist care facea sa ti se stearga vehiculul in timp ce erai in tura
- Rezolvat un bug la jobul de politist care putea bloca jocul
- Rezolvat un bug la tirist care lasa tiristul de nivel 1 sa faca curse de nivel 2
- Rezolvat un bug care facea ca amenzile de la politie sa nu mearga
- Rezolvat un bug la modele (se stergea cache-ul de 2 ori)
- Rezolvat un bug la legat firele (aparea notificarea si dupa ce ieseai din masina)
```

## Update 0.8.0
Facut de: sNok3 & xSLOW

**Features**
```javascript
- Adaugata optiunea de a selecta masina pentru care se doreste retinerea talonului la politisti
- Schimbate ratele de spawn ale minereurilor la job-ul de miner
- Adaugat MDT pentru politie
- Imbunatatita performanta in baza de date pentru sistemul de tickete
- Adaugat magazin pentru alimente in sectia de politie pentru politisti
- La jobul de taxi de acum vei primi comenzi de la NPC-uri
- La pescar au fost adaugate mai multe tipuri de momeala. Acestea se pot gasi, crafta sau cumpara din magazin
- Adaugate blips-uri pe harta pentru pescar
- Cand arati/iti este aratat buletinul iti va fi copiat automat CNP-ul pentru "copy-paste"
- Adaugate camere video la politisti/
- Adaugat sistem automat de amenzi pe baza MDT-ului de politie
- Masinile acum pot fi tractate de catre mecanici cu vehiculele utilitare
- Adaugata sansa de fail la miner nivel 2
- Crafting-ul acum permite mai multe cantitati
- Actualizate preturi
- Sistemul de interactionare de la DMV a fost imbunatatit
- Adaugat garaj pentru factiuni/mafii
- Adaugat minimap pentru cayo perico
- Acum itemele aruncate de pe jos se sterg la 15 minute
```

**Bug fixes**
```javascript
- Fixat un bug care nu permitea stergea banilor daca jucatorul ar fi avut o balanta negativa
- Fixat un bug care nu permitea politistilor sa retina permisul si talonul
- Adaugate mainile cu id 1 inapoi in magazinul de haine
- Reparate descrierile la comenzi precum /gat, /top, etc.
- Fixat scrisul de deasupra instructorului auto care nu era vizibil decat foarte aproape
- Fixat un bug la taximetrist care facea ca costul cursei sa scada
- Fixat un bug la soferul de autobuz care facea sa poti trece prin statie daca aveai cruise control
- Fixat un bug la functia interna de incarcat vehiculele din baza de date
```

## Update 0.9.0
Facut de: sNok3 & xSLOW
**Features**
```javascript
- Adaugata bodycam personalizat
- Adaugate mandate in MDT-ul politiei si afisaj pentru jucatori
- Reskin la inventar cu o interfata mai moderna
- Adaugate laboratoare diverse pentru mafii cu animatii pentru craftare
- Rescris sistemul de crafting adaugand imbunatatiri si functionalitati noi (timp de crafting, crafting mobil, scene/animatii)
- Creat un sistem de jaf la magazin interactionabil cu casierul.
- Creat dealership pentru avioane/elicoptere
- Creat garaj pentru avioane (in curand si pentru elicoptere)
- Creat un sistem functional de plantatii (crestere plantei in timp, seminte, cules, animatii, fizici, etc)
- Acum poti urca pe cineva pe targa si daca este viu
- Adaugat lift pentru spital (etaj 1, 2 si acoperis pentru helipad)
- Facut un sistem care previne blocarea jucatorului in interioare cu teleport (garaje, etc)
- Acum la job-ul de taximetrist poti primi apel de la NPC
- Adaugat magazin de homedepot care contine materiale pentru diverse joburi
- Adaugate vehicule noi custom
- Adaugat meniu pentru sirene si girofaruri pentru politie
```

**Bug fixes**
```javascript
- Reparat un bug care nu permitea alegerea uniformelor la job-uri
- Reparate mici bug-uri la MDT-ul politiei care nu permiteau incarcarea anumitor date
- Reparat un bug la jaful de atm-uri care facea sa nu mai poti da jaf din nou mai tarziu.
- Rezolvate multe buguri la jobul de medic
- Rezolvate bug-uri la permise/buletine
- Rezolvat un bug la tuning care nu te permitea reparatia masinii
- Rezolvat un bug la inventar care nu permitea datul de iteme
- Rezolvat un mesaj in meniul liderului de factiune/jucator promovat/retrogradat
```

## Update 1.0 (Stable release) - Marea deschidere
Facut de: **sNok3 & xSLOW**

**Features**
```js
- Adaugata optiunea in MDT de a copia CNP-ul unui jucator
- Schimbat mapping-ul inchisorii, usile/portile inchise, adaugate uniformele de prizonieri, etc
- Inlocuit sistemul de sirene pentru masinile de politie (mult mai optimizat)
- Adaugata optiunea de a factura un jucator pe o suma predefinita/aleasa de tine
- Adaugate butoane in K pentru livrat ilegale
- Finalizata armuraria politiei
- Creat un sistem de cufere/depozite
- Modificat sistemul de vreme dinamica sa corespunda cu vremea actuala (zapada, frig, ceata)
- Adaugata camera de evidente la politie / o limita de inchisoare indiferent de sentinta
- Inlocuite imaginile de la primarie cu unele mai calitative
- Adaugate multiple crafting-uri (unele speciale, cu scene animate) pentru ilegale
- Adaugate diverse locatii secrete pentru joburile ilegale
- Optimizate diverse scripturi
- Finalizate hainele/uniformele
- Adaugate kituri de reparat masina pentru civili
- Modificat designul chatului putin
- Creat un sistem de job boost configurabil
- Actualizate toate preturile
- Modificate multiple iteme (nume, descriere, imagine)
- Modificat markerul de deasupra capului atunci cand vorbesti cu un punct foarte mic si finut
- Modificata interfata de keybinds sa fie pornita by default pentru jucatorii noi
```

**Bug fixes**
```js
- Reparat un bug la MDT care nu permitea cautarea jucatorilor
- Rezolvat un bug la craftingurile care aveau mai multe retete pentru acelasi item
- Rezolvat un bug la dealership care nu stergea markerele
- Rezolvat un bug la traseul DMV
- Rezolvat un bug la taximetrist care nu facea sa inceapa tura
- Rezolvat un bug la garaje care facea ca unele masini sa nu apara acolo
- Rezolvat un bug la "leaga firele" care aparea si cand ieseai din masina
- Multiple buguri/greseli minore rezolvate
```

## Update 1.0.1 - Quick patch
Mesterit de: **xSLOW**
Am zis ca ma culc dar m-am intors la PC sa postez modificarile de astazi.. enjoy!

**Features**
```js
- Acum se pot incuia si motocicletele (pentru a preveni furtul itemelor)
- Bulgarii de zapada dau acum 0 damage (puteti face bulgarii pe tasta O daca nu stiati)
- Marit timpul de stat afk
- Adaugat in keybinds tasta L pentru a incuia masina (pentru incepatori)
- Scos pistolul din gunshop deoarece se abuza de el
- Oprit ESP-ul temporar pana se rezolva
- Modificate sloturile din HUD
- Marita raza la magazinele de ghiozdane
- Optimizate diverse resurse
- Adaugata comanda de anunt pentru admini
- Adaugata comanda /ore pentru toata lumea
- Actualizate preturile la avioane/elicoptere
```

**Bug fixes**
```js
- Acum puteti da /carry oamenilor morti
- Fixat un bug la inchiriat masini care nu te lasa sa spawnezi fixter
```

# Update 1.0.2 - Quick patch
Mesterit de: **xSLOW**
Am zis ca ma culc dar m-am intors la PC sa postez modificarile de astazi.. enjoy! (seara nr. 2)

**Features**
```js
- Adaugate codurile la politie pe ecran
- Modificata pozitia magazinelor de ghiozdane sa poata fi accesate si de dupa tejghea
- Mutat kitul de pana, kitul de reparatie si kitul de clonat chei pentru civili la magazinele 24/7
- Actualizat MDT-ul politiei cu noul cod penal
- Actualizate locatiile din /GPS
- Adaugata armura/radio-ul in armuraria politiei
- Mutata tasta pentru sirenele masinilor de politie/smir de pe Q pe SHIFT
- Traduse toate itemele din magazinul 24/7
```

**Bug fixes**
```js
- Reparat un bug la taximetrist care facea ca NPC-ul sa se sperie si sa fuga
- Facut sa apara IBAN-ul corect in meniul de intrare
- Rezolvat un bug la consumabile care facea sa dea eroare la server
- Rezolvata comanda de /givemoneyall pentru a da mai usor bani tuturor conectati
- Rezolvat un bug la comenzile de admin /blips /names
- Rezolvat un bug la radio care facea sa nu ti se actualizeze jobul si canalele la care ai acces
```

# Update 1.0.3 & 1.0.4 - More bugfix & changes
Mesterit de: **xSLOW**

**Features**
```js
- Adaugate coduri la politie
- Optimizate 2 comenzi de admin care consumau foarte mult
- Acum te poti angaja direct de la npcul de job, nu doar de la primarie
- Adaugate multiple loguri pentru admini
- Acum apelurile la taxi de la NPC vor intra mai rapid si se vor sterge mai greu
- Schimbat radarul din MPH in KMH
- Adaugat in K buton de perchezitie (poti vedea inventarul fara sa iei iteme)
- Acum adminii pot accepta ticketele jucatorilor deconectati 
- Adaugate efecte de zapada la roti/urme in zapada/etc
- Modificat cum apare pe discord cand un jucator intra pe server
- Adaugate masini/elicoptere noi la politie/smir
- Adaugat magazin in Paleto
- Adaugat NPC la jobul de taxi
- Actualizate permisiunile pentru gradul de helper
- Adaugat un buton in K pentru a opri jobul curent, valabil pentru taxi, pizza, tirist, sofer autobuz)
```

**Bug fixes**
```js
- La DMV la testul practic acum nu se vor mai speria npcurile si nu vor mai fugi din masina
- Acum cand scoti masinile de job din garaj vor fi reparate si rezervorul va fi plin
- Rezolvat un bug la MDT care facea sa nu poti da amenda fara reducere
- Rezolvat un bug la butonul home care facea sa se blocheze jocul
- Rezolvat bugul care facea ca mancarea la politie sa apara ca fiind gratis dar sa coste bani de fapt
- Rezolvat un bug care te lasa sa pui mitraliere pe masina (lol)
- Rezolvat un bug la comanda de /ore, poti scrie comanda fara sa precizezi un id
- Rezolvat complet bugul la sistemul de haine cu spatiile goale (ms iann)
- Rezolvat un bug la kitul de pana care facea sa se strice masina (culmea)
- Rezolvat un bug la masinile de politie/medici in care nu puteai sa folosesti radio
```

# Update 1.0.5 - Patching/changes
Mesterit de: **xSLOW**

**Features**
```js
- Seful politiei acum vede toate uniformele
- Adaugata o comanda noua pentru admini care permite refacerea caracterului unui jucator
- Adaugate mai multe loguri
- Modificata locatia sefului politiei
- Ciupercile si minereurile se sincronizeaza acum doar daca esti in zona
- Adaugate noi vehicule la SMIR in garaj si adaugata targa pentru acestea
- Adaugat pontaj automat pentru admini
- Mutata locatia de vandut ciupercile
- Mutate spawnpoint-urile garajului de mecanici
- Blips acum activeaza si names (admin)
- Scoasa primaria de craciun (buguri vizuale)
```

**Bug fixes**
```js
- Rezolvat un bug care facea sa nu mai poti sta crouch
- Rezolvat un bug la MDT care facea sa nu poti salva raportul
```

# Update 1.0.6 - Patching/changes/new goodies
Mesterit de: **xSLOW**

**Features**
```js
- Optimizat foarte mult sistemul de clothing
- Optimizat sistemul de report-uri
- Optimizat core-ul serverului
- Adaugat un minigame fun pe server. Veti afla in curand care este acesta
- Rescris sistemul de confiscare/restituire iteme inventar
- Pontajul automat al adminilor acum arata si timpul petrecut in ultimele 7 zile
```

**Bug fixes**
```js
- Rezolvat bugul la puscarie cu itemele date inapoi corupte (buletin, arme, permis, etc)
```

# Update 1.0.7 si 1.0.8 - Patching/changes/new goodies
Mesterit de: **xSLOW**

**Features**
```js
@ 1.0.7
- Adaugate haine la squidgames
- Scos mappingul de craciun
- Optimizate 2 masini
- Optimizat squidgames, ar trebui sa aveti mai multe fpsuri
- Schimbat timpul de respawn de la 1m la 5m
- Modificata marimea default la UI-ul de radar la politie
- Adaugate o gramada de mapping-uri noi. Multumesc tuturor
- Optimizat chat-ul, adaugata comanda de sters chatul
- Refacut sistemul de uniforme si optimizat acesta
- Acum uniformele se pun automat cand incepi jobul si dispar cand termini jobul
- Adminii acum pot tuna masina oricui
@ 1.0.8
- Pusa restrictie la jafurile de magazin/atm la 50h minim
- Adaugata comanda /toprich sa vezi cei mai bogati jucatori din oras
- Adaugate multiple loguri pentru bani
- Actualizate retetele de crafting de la ciupercar
- Actualizate locatiile la spital/garajele
- Actualizat pretul la ciupercar ilegal
- Acum ca taximetrist poti accepta o singura comanda simultan
- Adaugata o locatie noua de haine/magazin la legion square (in centru langa fleeca)
- Adaugat un spital secret pentru mafioti
```

**Bug fixes**
```js
@ 1.0.7
- Rezolvat un bug care facea la squidgames ca castigatorii sa nu fie in ordinea corecta
@ 1.0.8
- Niciun bug reparat, serverul este impecabil :))

```