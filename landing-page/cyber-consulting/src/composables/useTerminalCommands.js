// src/composables/useTerminalCommands.js
import { ref } from 'vue'

export function useTerminalCommands() {
  const commandHistory = ref([])
  const currentCommand = ref('')

  const commands = {
    '/help': `Available commands:
             /manifesto - Show our principles
             /about - Company info
             /start - Begin assessment
             Try finding easter eggs...`,
    '/manifesto': () => {
      return `[MANIFESTO.sys]
              X - Clear Intent
              0 - Zero Trust
              # - True Till Root
              Type /manifest-X, /manifest-0, or /manifest-# for details`
    },
    '/manifest-x': `CLEAR INTENT
                    Like the X drawn on our hands
                    No corporate bloat
                    Pure, focused security expertise`,
    'xxx': 'STRAIGHT EDGE - TRUE TILL DEATH',
    'hack the planet': 'HACK THE PLANET! THEY ARE TRASHING OUR RIGHTS!',
    '28.3.97': 'DEUS EX MACHINA - Follow the white rabbit...',
  }

  const processCommand = () => {
    const cmd = currentCommand.value.toLowerCase().trim()
    
    const response = typeof commands[cmd] === 'function' 
      ? commands[cmd]() 
      : commands[cmd] || 'Command not recognized. Try /help'

    commandHistory.value.push(
      { type: 'input', content: currentCommand.value },
      { type: 'output', content: response }
    )

    currentCommand.value = ''
  }

  return {
    commandHistory,
    currentCommand,
    processCommand
  }
}