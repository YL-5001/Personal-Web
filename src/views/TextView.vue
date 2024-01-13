<template>
  <div class="about">
    <h1 @click="clickAbout">This is an text page</h1>
  </div>
</template>

<script setup lang="ts">
  const clickAbout = () => {
    console.log('clickMe');
    
  } 
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.about {
  /* visibility: hidden; */
  opacity: 0;
}
.about h1 {
  /* visibility: visible; */
  opacity: 1;
}
</style>
