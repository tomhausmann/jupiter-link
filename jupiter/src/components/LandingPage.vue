<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-gray-800 text-white py-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center px-4">
        <h1 class="text-xl font-bold">CyberEdge</h1>
        <nav class="flex space-x-4">
          <a href="#about" class="hover:text-blue-400 transition">About</a>
          <a href="#services" class="hover:text-blue-400 transition">Services</a>
          <a href="#contact" class="hover:text-blue-400 transition">Contact</a>
        </nav>
        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Initiate Self-Assessment
        </button>
      </div>
    </header>

    <!-- Main Section -->
    <main class="flex-grow bg-gray-100 py-8">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">CyberEdge: Transform Your Compliance Journey</h2>
        <p class="text-lg mb-8">Our tools and insights empower your business to ace compliance with ease and style.</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition">
            <h3 class="text-xl font-bold mb-2">GDPR Mind Meld</h3>
            <p>Privacy so tight, even your thoughts are compliant!</p>
          </div>
          <!-- Service 2 -->
          <div class="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition">
            <h3 class="text-xl font-bold mb-2">DORA the Explorer</h3>
            <p>Financial regs? More like financial FLEX!</p>
          </div>
          <!-- Service 3 -->
          <div class="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition">
            <h3 class="text-xl font-bold mb-2">NIS2 Ninja Skills</h3>
            <p>Critical infrastructure? Nah, CRITICAL AWESOMENESS!</p>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto px-4 text-center space-y-4">
        <p>&copy; 2024 CyberEdge. All rights reserved.</p>
        <div class="flex justify-center space-x-4">
          <a href="#" class="hover:text-blue-400">Privacy Policy</a>
          <a href="#" class="hover:text-blue-400">Terms of Service</a>
          <a href="#" class="hover:text-blue-400">Contact Us</a>
        </div>
        <div class="flex justify-center space-x-4">
          <a href="#" class="hover:text-blue-400">Twitter</a>
          <a href="#" class="hover:text-blue-400">LinkedIn</a>
          <a href="#" class="hover:text-blue-400">GitHub</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LandingPage',
});
</script>

<style>
/* Add fade-in animation on page load */
body {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
