<template>
  <div class="app">
    <AppHeader />
    <RouterView />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<style scoped>
.app {
  min-height: 100vh;
  color: #1f2937;
  background-color: #f8fafc;
}
</style>