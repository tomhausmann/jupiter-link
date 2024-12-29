<template>
  <div class="relative">
    <GridBackground />
    
    <main class="relative z-10 flex flex-col gap-8">
      <HeroSection />
      <div class="px-4">
        <div class="max-w-4xl mx-auto space-y-8">
          <ManifestoSection />
          <TerminalSection />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import GridBackground from '../components/shared/GridBackground.vue'
import HeroSection from '../components/landing/HeroSection.vue'
import ManifestoSection from '../components/landing/ManifestoSection.vue'
import TerminalSection from '../components/landing/TerminalSection.vue'
</script>