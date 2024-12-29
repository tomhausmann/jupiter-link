<template>
  <div class="relative">
    <GridBackground />
    
    <main class="relative z-10">
      <HeroSection />
      <ManifestoSection />
      <TerminalSection />
    </main>
  </div>
</template>

<script setup>
import GridBackground from '../components/shared/GridBackground.vue'
import HeroSection from '../components/landing/HeroSection.vue'
import ManifestoSection from '../components/landing/ManifestoSection.vue'
import TerminalSection from '../components/landing/TerminalSection.vue'
</script>