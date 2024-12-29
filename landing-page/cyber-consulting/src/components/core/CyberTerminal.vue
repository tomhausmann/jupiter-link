<template>
    <div class="w-full bg-cyber-black border-2 border-cyber-blue p-4 font-mono">
      <div class="flex justify-between items-center mb-4 border-b border-cyber-blue pb-2">
        <slot name="header">
          <span class="text-cyber-green">{{ title }}</span>
        </slot>
      </div>
      <div class="terminal-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: {
      type: String,
      default: 'Terminal'
    }
  })
  </script>