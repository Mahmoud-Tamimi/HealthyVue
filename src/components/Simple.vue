<template>
  <div class="hello">
    <h1>this is a test component</h1>
    <h3>prop1: {{ prop1 }}</h3>
    <button @click="Clicked()"></button>
    <button @click="sendData">Send Emits</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    prop1: String
  },
  data () {
    return {}
  },
  methods: {
    Clicked () {
      alert('test component')
    },
    sendData () {
      this.$emit('sending-start')
    }
  }
})
</script>

<style scoped>
.hello{
  border: red solid 1px;
  padding: 5px;
}
</style>
