<template>
    <section class="relative min-h-screen flex items-center justify-center px-4">
      <div class="text-center z-10">
        <h1 class="text-4xl md:text-6xl mb-6 glitch-text">
          Precise. Purposeful.<br>No Corporate Bloat.
        </h1>
        <p class="cyber-text text-xl mb-8">
          Security consulting for the digital age.<br>
          No slide decks. No buzzwords. Just results.
        </p>
        <CyberButton @click="$emit('startAssessment')">
          Start Assessment
        </CyberButton>
      </div>
    </section>
  </template>
  
  <script setup>
  import CyberButton from '../core/CyberButton.vue'
  </script>