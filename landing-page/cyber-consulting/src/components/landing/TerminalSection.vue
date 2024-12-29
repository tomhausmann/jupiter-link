// src/components/landing/TerminalSection.vue
<template>
  <section>
    <div class="max-w-2xl mx-auto">
      <CyberTerminal title="SEC:// Terminal v1.0">
        <div class="h-64 overflow-y-auto mb-4" ref="outputContainer">
          <div v-for="(entry, idx) in commandHistory" 
               :key="idx" 
               :class="[
                 'mb-2 whitespace-pre-wrap',
                 entry.type === 'input' ? 'text-cyber-blue' : 'text-cyber-green'
               ]">
            <span v-if="entry.type === 'input'">> </span>
            {{ entry.content }}
          </div>
        </div>
        <div class="flex items-center border-t border-cyber-blue pt-2">
          <span class="text-cyber-blue mr-2">></span>
          <input
            v-model="currentCommand"
            @keyup.enter="processCommand"
            type="text"
            class="w-full bg-transparent border-none outline-none text-cyber-green"
            placeholder="Type /help for available commands..."
            autofocus
          />
        </div>
      </CyberTerminal>
    </div>
  </section>
</template>

<script setup>
import { nextTick, ref, watch } from 'vue'
import CyberTerminal from '../core/CyberTerminal.vue'
import { useTerminalCommands } from '../../composables/useTerminalCommands'

const { commandHistory, currentCommand, processCommand } = useTerminalCommands()
const outputContainer = ref(null)

// Auto-scroll to bottom when new commands are added
watch(commandHistory, () => {
  nextTick(() => {
    if (outputContainer.value) {
      outputContainer.value.scrollTop = outputContainer.value.scrollHeight
    }
  })
})
</script>