<template>
  <div class="about">
    <h1 @click="clickAbout">This is an about page</h1>
  </div>
</template>

<script setup lang="ts">
  const clickAbout = () => {
    console.log('clickMe');
    
  } 
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
