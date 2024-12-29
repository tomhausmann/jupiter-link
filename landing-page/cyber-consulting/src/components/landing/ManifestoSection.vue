<template>
    <section>
      <div class="max-w-4xl mx-auto">
        <CyberTerminal title="MANIFESTO.SYS">
          <div class="space-y-8">
            <div v-for="(section, index) in manifestoSections" 
                 :key="section.id"
                 :class="[
                   'transform transition-all duration-500',
                   isRevealed(`manifesto-${index}`) ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                 ]"
                 :data-section="'manifesto-' + index">
              <div class="flex items-center space-x-4 mb-2">
                <div class="text-cyber-pink font-bold text-xl">{{ section.symbol }}</div>
                <h3 class="text-lg">{{ section.title }}</h3>
              </div>
              <pre class="text-cyber-green text-xs mb-4 hidden md:block">{{ section.asciiArt }}</pre>
              <div class="text-cyber-text-secondary pl-8 border-l-2 border-cyber-purple">
                <p v-for="(line, i) in section.content.split('\n')" 
                   :key="i" 
                   class="mb-2">
                  {{ line.trim() }}
                </p>
              </div>
            </div>
          </div>
        </CyberTerminal>
      </div>
    </section>
  </template>
  
  <script setup>
  import CyberTerminal from '../core/CyberTerminal.vue'
  import { useScrollReveal } from '../../composables/useScrollReveal.js'
  import { manifestoSections } from '../../data/manifesto.js'
  
  const { isRevealed } = useScrollReveal()
  </script>