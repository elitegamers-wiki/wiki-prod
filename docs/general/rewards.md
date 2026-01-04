---
outline: deep
---

<style scoped>

.eg-rewards-box {
  font-family: 'Poppins', sans-serif;
  color: #f4f4f4;
}

.eg-rewards-box h2, .eg-rewards-box h3 {
  color: #ff4b4b;
  text-align: center;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
}

.eg-rewards-box h2 {
  font-size: 2.6rem;
  margin-top: 2rem;
}

.eg-rewards-box h3 {
  font-size: 1.9rem;
  margin-top: 3rem;
}

.eg-rewards-box img:not(.no-style) {
  display: block;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(215, 38, 56, 0.3);
  max-width: 100%;
  height: auto;
}

.eg-rewards-card {
  margin: 2rem auto;
  max-width: 900px;
  padding: 1.8rem 2.2rem;
  background: linear-gradient(135deg, #1a1a1a 70%, #ff2323 100%);
  border-left: 6px solid #ff4b4b;
  border-radius: 14px;
  box-shadow: 0 8px 18px rgba(215, 38, 56, 0.15);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  font-size: 1.2rem;
  color: #ffffff;
}

.eg-rewards-card:hover {
  box-shadow: 0 15px 35px rgba(215, 38, 56, 0.4);
  transform: translateY(-4px);
}

.eg-rewards-card ul {
  padding-left: 1.5rem;
}

.eg-rewards-card li {
  margin-bottom: 0.6rem;
  line-height: 1.6;
}

.eg-rewards-card li ul {
  margin-top: 0.3rem;
  list-style-type: disc;
  color: #ffd1d1;
  font-weight: 600;
}

.eg-rewards-card strong {
  color: #ffffff;
}
</style>

<div class="eg-rewards-box">
  <div style="display: flex; justify-content: center;">
    <img src="../public/elitegamers.png" alt="logo EliteGamers" width="256" height="256" class="no-style" style="margin-top: 2rem; border-radius: 12px;">
  </div>


  ### Sistem Streak Bonus

  <div class="eg-rewards-card">
    <p>Cu cat te loghezi mai multe zile consecutiv, cu atat primesti bonusuri mai mari:</p>
    <ul>
      <li>Fiecare zi consecutiva creste bonusul primit</li>
      <li>Pana la <strong>100% bonus</strong> la 15 zile consecutive</li>
      <li>Streak-ul se reseteaza daca ratezi o zi</li>
    </ul>
  </div>

  ### Premii Bazate pe Timp Jucat

  <div class="eg-rewards-card">
    <p>Pe langa misiunile zilnice, primesti recompense si in functie de timpul jucat:</p>
    <ul>
      <li>Recompense automate la anumite praguri de ore jucate</li>
      <li>Premii speciale pentru jucatorii activi</li>
    </ul>
  </div>

  ### Comenzile disponibile

  <div class="eg-rewards-card">
    <ul>
      <li><strong>/premii</strong> - Afiseaza lista recompenselor si timpul ramas.</li>
    </ul>
  </div>
</div>
