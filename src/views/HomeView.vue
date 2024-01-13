<template>
  <main>
    <div class="web_home">
      <h1>Hello</h1>
    </div>
    
    <TheWelcome />
  </main>
</template>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<style lang="scss" scoped>
  .web_home{
    width: 100%;
    height: 30vh;
    background-color: $web_main_color;
  }
</style>