<template>
  <div class="fixed inset-0">
    <div class="absolute inset-0 bg-cyber-black opacity-90"></div>
    <div class="absolute inset-0" 
         :style="{ backgroundImage: 'radial-gradient(#3BB4C1 1px, transparent 1px)', 
                  backgroundSize: '50px 50px' }">
    </div>
    <div v-for="(glitch, index) in activeGlitches" 
         :key="index"
         class="tracking-line"
         :style="{ 
           top: `${glitch.position}%`, 
           opacity: glitch.opacity
         }">
    </div>
  </div>
 </template>
 
 <script setup>
 import { ref, onMounted, onUnmounted } from 'vue'
 
 const activeGlitches = ref([])
 let glitchInterval
 
 onMounted(() => {
  glitchInterval = setInterval(createRandomGlitch, 400)
 })
 
 onUnmounted(() => {
  clearInterval(glitchInterval)
 })
 
 function createRandomGlitch() {
  if (Math.random() > 0.8) return // 80% chance
 
  const glitch = {
    position: 0,
    opacity: 0.2 + Math.random() * 0.2,
    id: Date.now()
  }
  
  activeGlitches.value.push(glitch)
  
  const animation = setInterval(() => {
    glitch.position += 1.2
    if (glitch.position > 100) {
      clearInterval(animation)
      activeGlitches.value = activeGlitches.value.filter(g => g.id !== glitch.id)
    }
  }, 10)
 }
 </script>
 
 <style scoped>
 .tracking-line {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 108, 249, 0.3) 20%,
    rgba(45, 226, 230, 0.3) 40%,
    rgba(251, 63, 223, 0.3) 60%,
    transparent 100%
  );
  box-shadow: 0 0 5px rgba(251, 63, 223, 0.2);
 }
 </style>