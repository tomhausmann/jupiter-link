// src/composables/useScrollReveal.js
import { ref, onMounted } from 'vue'

export function useScrollReveal() {
  const revealedSections = ref(new Set())
  
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealedSections.value.add(entry.target.dataset.section)
        observer.unobserve(entry.target)
      }
    })
  }

  onMounted(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    })

    document.querySelectorAll('[data-section]').forEach(section => {
      observer.observe(section)
    })
  })

  return {
    revealedSections,
    isRevealed: (section) => revealedSections.value.has(section)
  }
}