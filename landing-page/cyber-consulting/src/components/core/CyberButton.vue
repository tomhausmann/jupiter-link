<template>
    <button 
      @click="$emit('click')"
      @mouseenter="startGlitch"
      @mouseleave="stopGlitch"
      :class="[
        'relative px-6 py-3',
        'bg-cyber-black',
        'border-2',
        isGlitching ? 'border-cyber-pink' : 'border-cyber-blue',
        'text-cyber-blue hover:text-cyber-pink',
        'transition-colors duration-300',
        'overflow-hidden font-mono',
        isHovered ? 'shadow-neon-blue' : ''
      ]"
    >
      <slot></slot>
      <div v-if="isGlitching" class="absolute inset-0 bg-cyber-pink opacity-10" />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-blue/10 to-transparent animate-scan" />
    </button>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useGlitchEffect } from '../../composables/useGlitchEffect.js'
  
  const { isGlitching, startGlitch, stopGlitch } = useGlitchEffect()
  const isHovered = ref(false)
  </script>