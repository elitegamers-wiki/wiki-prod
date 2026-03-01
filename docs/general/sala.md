---
outline: deep
---

<img src="../public/elitegamers.png" alt="logo" width="256" height="256" style="display: block; margin: 0px auto; border-radius: 5%;">

<style>
.eg-sala {
  font-family: 'Poppins', sans-serif;
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  color: white;
}

.eg-sala h1, .eg-sala h2, .eg-sala h3 {
  font-weight: 700;
  color: #cc3333;
  text-shadow: 1px 1px 4px rgba(204, 51, 51, 0.7);
}

.eg-box {
  background: linear-gradient(135deg, #1a1a1a 70%, #ff2323 100%);
  border-left: 5px solid #cc1a1a;
  padding: 1.5rem 2rem;
  margin: 1.5rem 0;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(255, 35, 35, 0.6);
}

.eg-sala p, .eg-sala li {
  line-height: 1.6;
  color: #eee;
}

.eg-sala table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.eg-sala th, .eg-sala td {
  border: 1px solid #cc3333;
  padding: 0.7rem;
  text-align: left;
}

.eg-sala th {
  background: #2a0a0a;
  color: #ff6666;
}
</style>

<div class="eg-sala">

# Sala de Fitness

Sala de fitness iti permite sa iti antrenezi corpul pentru a deveni mai puternic si mai rezistent. Prin exercitii regulate vei obtine **capacitate suplimentara in inventar** si **stamina mai buna la alergat**.

## 1. Locatie

Sala de sport se afla la **Muscle Sands Gym**, pe plaja. Poti cauta pe GPS dupa "**Sala**" sau "**Gym**" pentru a gasi locatia exacta marcata pe harta.

## 2. Abonamente

Pentru a folosi echipamentele din sala ai nevoie de un abonament activ. Te poti adresa NPC-ului din fata salii si apasa **[E]** pentru a cumpara un abonament sau pentru a verifica statusul abonamentului tau curent.

Exista trei tipuri de abonamente disponibile:

| Abonament | Pret | Durata |
|-----------|------|--------|
| **Basic** | €5.000 | 7 zile |
| **Premium** | €15.000 | 30 zile |
| **VIP** | €40.000 | 90 zile |

Toate abonamentele ofera acces la **toate echipamentele** din sala. Diferenta este doar durata de valabilitate. Nu poti cumpara un abonament nou cat timp ai deja unul activ.

## 3. Statistici

Sala de fitness iti imbunatateste doua statistici principale:

- **Forta (Strength)** – Nivel maxim: **20kg**. Fiecare kilogram de forta adauga **1kg capacitate suplimentara** in inventarul tau. La nivelul maxim vei avea **+20kg** capacitate extra.

- **Stamina** – Nivel maxim: **100**. Stamina iti afecteaza viteza de recuperare cand alergi. La nivelul 0 ai recuperare normala, iar la nivelul maxim (100) ai **recuperare de 2x mai rapida** dupa sprint.

Ambele statistici incep de la **0** si cresc treptat pe masura ce te antrenezi.
Poti verifica statisticile tale fizice oricand folosind comanda **/checkstats**.

## 4. Exercitii

Apropiindu-te de un echipament din sala si apasand **[E]** vei incepe exercitiul corespunzator. Fiecare exercitiu consta dintr-o **bara de progres** urmata de un **minigame de tip skillcheck**.

#### Exercitii de Forta

*   **Greutati (Dumbbells)** – Ridici greutati cu haltera. Creste **forta**.
*   **Tractiuni (Pullups / Chinups)** – Exercitii de tractiuni la bara. Cresc **forta**.
*   **Flotari (Pushups)** – Flotari pe saltea. Cresc **forta**.

#### Exercitii de Stamina

*   **Banda de alergat (Treadmill)** – Alergi pe banda. Creste **stamina**.

#### Exercitii Mixte

*   **Abdomene (Situps)** – Cresc atat **stamina** cat si **forta**.
*   **Yoga** – Creste atat **stamina** cat si **forta**.

#### Progresie

Fiecare exercitiu contine mai multe etape de skillcheck. Daca reusesti **toate** etapele, primesti **progresul complet**. Daca reusesti doar o parte din ele, primesti **progres partial** proportional cu cate ai completat. Daca esuezi complet, nu primesti nimic.
Ritmul de progresie este echilibrat astfel incat aproximativ **1 ora de antrenament** la sala aduce **+1kg forta**.

## 5. Suplimente

Suplimentele alimentare pot fi cumparate si consumate pentru a imbunatati performanta la sala:

*   **Proteina** – Incetineste pierderea statisticilor cu **25%**. In loc sa pierzi 1kg forta la fiecare 5 ore jucate, o vei pierde la fiecare 7.5 ore jucate.
*   **Energizant** – Reduce durata exercitiilor cu **15%**, permitandu-ti sa faci mai multe exercitii in acelasi timp.
*   **Supliment muscular** – Creste cantitatea de statistici castigate la fiecare exercitiu.

Suplimentele pot fi achizitionate de la magazinele din oras si au efect temporar.

## 6. Pierderea Statisticilor (Decay)

Daca nu te antrenezi regulat, statisticile tale vor scadea in timp. Pierderea se calculeaza pe baza **timpului jucat** de la ultimul antrenament, nu pe baza timpului real. Asta inseamna ca statisticile nu se pierd cat esti offline.

*   **Fara proteina** – Pierzi **1kg forta** si **5 stamina** la fiecare **5 ore jucate** fara antrenament.
*   **Cu proteina activa** – Pierzi **1kg forta** si **5 stamina** la fiecare **7.5 ore jucate** fara antrenament.

Cand statisticile scad vei primi o notificare care te informeaza cat ai pierdut.

Orice exercitiu efectuat cu succes **reseteaza contorul de decay**, deci este suficient sa te antrenezi din cand in cand pentru a-ti mentine progresul.

## 7. Comenzi

| Comanda | Descriere |
|---------|-----------|
| **/checkstats** | Afiseaza statisticile tale fizice (stamina, forta, bonus inventar) |

</div>