<template>
    <section class="py-20 px-4">
      <div class="max-w-2xl mx-auto">
        <CyberTerminal>
          <div class="h-64 overflow-y-auto mb-4" ref="outputContainer">
            <div v-for="(entry, idx) in commandHistory" 
                 :key="idx" 
                 :class="[
                   'mb-2',
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
              class="flex-1 bg-transparent border-none outline-none text-cyber-green"
              placeholder="Type /help for available commands..."
            />
          </div>
        </CyberTerminal>
      </div>
    </section>
  </template>
  
  <script setup>
  import CyberTerminal from '../core/CyberTerminal.vue'
  import { useTerminalCommands } from '../../composables/useTerminalCommands.js'
  
  const { commandHistory, currentCommand, processCommand } = useTerminalCommands()
  </script>