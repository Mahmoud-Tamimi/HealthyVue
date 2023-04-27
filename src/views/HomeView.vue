<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld data-test="bsajghxv" style="saxasx" class="sakxjbsx" msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue' // only for TS
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  }
})
</script>

<style scoped>

</style>
