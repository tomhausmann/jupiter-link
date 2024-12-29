// src/composables/useGlitchEffect.js
import { ref, onUnmounted } from 'vue'

export function useGlitchEffect() {
  const isGlitching = ref(false)
  const glitchIntensity = ref(1)
  let glitchInterval = null

  const startGlitch = (intensity = 1) => {
    glitchIntensity.value = intensity
    isGlitching.value = true
    
    // Random glitch intervals
    glitchInterval = setInterval(() => {
      isGlitching.value = Math.random() > 0.7
    }, 100 * intensity)
  }

  const stopGlitch = () => {
    isGlitching.value = false
    clearInterval(glitchInterval)
  }

  onUnmounted(() => {
    clearInterval(glitchInterval)
  })

  return {
    isGlitching,
    glitchIntensity,
    startGlitch,
    stopGlitch
  }
}