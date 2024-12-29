<template>
  <section class="mt-8">
    <div class="max-w-3xl mx-auto">
      <CyberTerminal title="MANIFESTO.SYS">
        <div class="manifesto-content px-4 py-6">
          <div class="max-w-2xl mx-auto">
            <h2 class="text-2xl font-mono mb-6 flex items-center justify-center">
              <span class="text-cyber-pink font-bold text-3xl mr-4 neon-x">X</span>
              <span class="text-cyber-blue neon-header">CUT THE NOISE / EXECUTE WITH INTEGRITY</span>
            </h2>
 
            <div class="space-y-4">
              <p class="text-cyber-blue font-bold pl-8">
                We care about security, not wasting your funds.
              </p>
              
              <div class="pl-8 border-l-2 border-cyber-pink space-y-2 neon-line">
                <p class="text-cyber-green">No corporate bloat, no death by PowerPoint.</p>
                <p class="text-cyber-green">No recycled reports masked as "insights".</p>
                <p class="text-cyber-green">No overcharged small talk disguised as "strategy meetings".</p>
                <p class="text-cyber-green">No legacy mindsets in modern cloud environments.</p>
                <p class="text-cyber-green">No checkbox compliance without actual security.</p>
              </div>
 
              <p class="text-cyber-blue font-bold pl-8 mt-6">
                Pure focused expertise > enterprise theater.
              </p>
 
              <div class="mt-8 space-y-6">
                <div class="neon-separator"></div>
                
                <div class="flex justify-center">
                  <div class="terminal-content text-sm whitespace-nowrap px-1">
                    <span class="text-cyber-pink">$</span>
                    <span class="text-cyber-blue ml-2">./secunauts.sh</span>
                    <span class="terminal-args">
                      <span class="text-cyber-purple">&nbsp;--approach</span><span class="text-cyber-green">=</span><span class="text-cyber-pink">straight</span>
                      <span class="text-cyber-purple">&nbsp;--strategy</span><span class="text-cyber-green">=</span><span class="text-cyber-pink">zero-trust</span>
                      <span class="text-cyber-purple">&nbsp;--env</span><span class="text-cyber-green">=</span><span class="text-cyber-pink">cloud-native</span>
                    </span>
                    <span class="terminal-cursor mr-1"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CyberTerminal>
    </div>
  </section>
 </template>
 
 <script setup>
 import CyberTerminal from '../core/CyberTerminal.vue'
 </script>
 
 <style scoped>
 .terminal-content {
  font-family: 'Consolas', 'Liberation Mono', 'Courier New', monospace;
  line-height: 1.2;
  letter-spacing: -0.01em;
  text-shadow: 0 0 2px rgba(0, 255, 65, 0.2);
 }
 
 .terminal-args {
  margin-left: 0.25rem;
 }
 
 .neon-x {
  text-shadow: 
    0 0 5px rgba(255, 42, 109, 0.7),
    0 0 10px rgba(255, 42, 109, 0.5),
    0 0 15px rgba(255, 42, 109, 0.3);
 }
 
 .neon-header {
  text-shadow: 0 0 7px rgba(59, 180, 193, 0.5);
  animation: neonPulse 4s infinite;
 }
 
 .neon-line {
  position: relative;
 }
 
 .neon-line::before {
  content: '';
  position: absolute;
  left: -1px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-cyber-pink);
  box-shadow: 
    -2px 0 10px rgba(255, 42, 109, 0.4),
    2px 0 10px rgba(255, 42, 109, 0.4);
 }
 
 .neon-separator {
  height: 1px;
  background: var(--color-cyber-blue);
  position: relative;
  width: 100%;
  opacity: 0.5;
}
 
.neon-separator::after {
  content: '';
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(59, 180, 193, 0.3) 20%,
    rgba(59, 180, 193, 0.4) 50%,
    rgba(59, 180, 193, 0.3) 80%,
    transparent 100%
  );
  filter: blur(0.5px);
}
 
 .terminal-cursor::after {
  content: "";
  display: inline-block;
  width: 8px;
  height: 16px;
  background: #00FF41;
  animation: blink 1s step-end infinite;
  margin-left: 4px;
  vertical-align: middle;
 }
 
 @keyframes neonPulse {
  0%, 100% { 
    text-shadow: 0 0 7px rgba(59, 180, 193, 0.5);
  }
  50% { 
    text-shadow: 0 0 12px rgba(59, 180, 193, 0.7);
  }
 }
 
 @keyframes blink {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
 }
 </style>