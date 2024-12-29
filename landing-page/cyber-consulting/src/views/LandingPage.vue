<template>
  <div class="relative">
    <GridBackground />
    
    <main class="relative z-10 flex flex-col">
      <!-- Hero section with less bottom margin -->
      <HeroSection class="min-h-[40vh] mb-16" />
      
      <!-- Manifesto with specific margins -->
      <ManifestoSection class="mb-24" />
      
      <!-- Terminal section -->
      <TerminalSection class="mb-16" />
    </main>
  </div>
</template>

<script setup>
import GridBackground from '../components/shared/GridBackground.vue'
import HeroSection from '../components/landing/HeroSection.vue'
import ManifestoSection from '../components/landing/ManifestoSection.vue'
import TerminalSection from '../components/landing/TerminalSection.vue'
</script>