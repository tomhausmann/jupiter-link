// src/composables/useTerminalCommands.js
import { ref } from 'vue'

export function useTerminalCommands() {
  const commandHistory = ref([])
  const currentCommand = ref('')

  const EASTER_EGGS = {
    'XXX': 'STRAIGHT EDGE - TRUE TILL DEATH',
    'HACK THE PLANET': 'HACK THE PLANET! THEY ARE TRASHING OUR RIGHTS!',
    '/help': `Available commands:
              /start - Begin security assessment
              /about - Show manifesto
              XXX - ???`,
    '/about': `We are the antidote to corporate consulting bloat.
              Clear intent. Zero trust. True till root.`,
  }

  const processCommand = (command) => {
    const trimmedCmd = command.trim().toUpperCase()
    let response = EASTER_EGGS[trimmedCmd] || 'Command not recognized. Try /help'
    
    commandHistory.value.push(
      { type: 'input', content: command },
      { type: 'output', content: response }
    )

    return response
  }

  const clearHistory = () => {
    commandHistory.value = []
  }

  return {
    commandHistory,
    currentCommand,
    processCommand,
    clearHistory
  }
}
