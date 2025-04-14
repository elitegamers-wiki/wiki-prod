<!-- .vitepress/components/StarRating.vue -->
<template>
  <div class="rating-container">
    <transition name="fade">
      <div v-if="!hideRating" class="rating-box">
        <p class="rating-title">Acorda o nota pentru Wikipedia</p>

        <div class="stars">
          <span
            v-for="n in 5"
            :key="n"
            @click="submitRating(n)"
            @mouseover="hover = n"
            @mouseleave="hover = 0"
            class="star"
            :class="{ active: n <= (hover || rating) }"
          >
            ★
          </span>
        </div>
      </div>
    </transition>

    <transition name="fade-slow">
      <p v-if="showThanks" class="thanks-message">Mulțumim pentru feedback!</p>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const rating = ref(0)
const hover = ref(0)
const submitted = ref(false)
const pagePath = ref('')
const hideRating = ref(false)
const showThanks = ref(false)

onMounted(() => {
  pagePath.value = location.pathname
})

async function submitRating(value) {
  if (submitted.value) return

  rating.value = value
  submitted.value = true

  // Fade out stelele și întrebarea
  hideRating.value = true

  // Delay și apoi fade-in la mesajul de mulțumire
  setTimeout(() => {
    showThanks.value = true
  }, 800)

  try {
    await fetch('https://YOUR_BACKEND_URL/api/rate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: pagePath.value,
        rating: value,
      }),
    })
  } catch (err) {
    console.error('Eroare la trimiterea ratingului:', err)
  }
}
</script>

<style scoped>
.rating-container {
  background: linear-gradient(135deg, #1f1f1f, #8b0000);
  padding: 1.5rem;
  border-radius: 16px;
  margin-top: 2rem;
  text-align: center;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  color: #fff;
  overflow: hidden;
}

.rating-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.stars {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.star {
  transition: transform 0.2s ease, color 0.2s ease;
  cursor: pointer;
  color: #444;
}

.star:hover {
  transform: scale(1.2);
}

.star.active {
  color: #ffcc00;
}

.thanks-message {
  font-size: 1rem;
  font-weight: 500;
  color: #10b981;
  margin-top: 0.5rem;
}

/* Fade transitions */
.fade-enter-active,
.fade-leave-active,
.fade-slow-enter-active,
.fade-slow-leave-active {
  transition: opacity 0.6s ease;
}
.fade-slow-enter-active {
  transition-delay: 0.1s;
}
.fade-enter-from,
.fade-leave-to,
.fade-slow-enter-from,
.fade-slow-leave-to {
  opacity: 0;
}
</style>
