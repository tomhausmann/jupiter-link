<template>
    <div class="fixed inset-0">
      <div class="absolute inset-0 bg-cyber-black opacity-90"></div>
      <div class="absolute inset-0" 
           :style="{ backgroundImage: 'radial-gradient(#3BB4C1 1px, transparent 1px)', 
                    backgroundSize: '50px 50px' }">
      </div>
      <div class="absolute inset-0 cyber-scanline"></div>
    </div>
  </template>
  
  <style scoped>
  .cyber-scanline {
    background: linear-gradient(
      transparent 0%,
      rgba(59, 180, 193, 0.2) 10%,
      transparent 100%
    );
    background-size: 100% 8px;
    animation: scan 8s linear infinite;
  }
  
  @keyframes scan {
    from { transform: translateY(-100%) }
    to { transform: translateY(100%) }
  }
  </style>