<template>
  <main>
    <div class="web_home">
      <header>
        <div class="background_dorder">
          <h1>Hello</h1>
        </div>
      </header>
    </div>
    
    <TheWelcome />
  </main>
</template>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<style lang="scss" scoped>
  .web_home {
    width: 100%;
    height: 30vh;
    // background-color: $web_main_color;
    header {
      display: flex;
      height: 100%;
      .background_dorder {
        display: flex;
        margin: auto;
        width: 60vw;
        height: 80%;
        border: 1px solid $web_main_color;

        h1 {
          margin: auto auto 0 auto;

          line-height: 1;//使字体块高度 = 字体本身高度
          font-size: 4em;
          font-weight: 600;
        }
      }
    }
    
  }
</style>