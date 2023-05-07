<template>
  <div class="hello">
    <h1>this is a test component</h1>
    <h3>prop1: {{ prop1 }}</h3>
    <button @click="Clickmatutions()"></button>
    <button @click="sendData">Send Emits</button>
    <span>{{ LastName }}</span>
  </div>
</template>

<script>

import Mainmixin from '@/components/mixin.vue'
export default ({
  mixins: [Mainmixin],
  props: {
    prop1: String
  },
  data () {
    return {
      LastName: this.$store.state.search
    }
  },
  methods: {
    Clickmatutions () {
      this.function1()
      return this.$store.commit('Clicked')
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
