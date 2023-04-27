<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3 :class="[classcalc.Classcolor, 'sjxbsxjn']" :style="`font-size: ${classcalc.FontSize}px`">{{ Status }}</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">typescript</a></li>
    </ul>
    <h3 ref="Links">Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <Simple @sending-start="DataRecive"></Simple>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import Simple from './Simple.vue'

type Box = {
  width: number
  height: number
  length: number
  name?: string
  color?: 'black' | 'white'
}

var newbox :Box = {
  height: 323,
  length: 323,
  width: 323
}

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
    phone: { type: String, default: '0797123456' },
    BoxData: { type: Object as PropType<Box> }
  },
  data () {
    return {
      Status: 'Success',
      ClassFromServer: 'Container h3 BOLD',
      UserFontSize: 100,
      box: {} as Box
    }
  },
  mounted () {
    console.log('this.$attrs')
    console.log(this.$attrs)
    console.log(this.$refs.Links)
    const ref :any = this.$refs.Links
    setTimeout(() => {
      ref.innerHTML = 'xxxx'
    }, 1000)
  },
  computed: {
    classcalc () {
      var Classcolor = ''
      var FontSize = this.UserFontSize
      if (this.Status === 'Success') {
        Classcolor = 'Green'
        FontSize = 70
      } else if (this.Status === 'Failed') {
        Classcolor = 'Red'
        FontSize = 30
      }
      return {
        FontSize: FontSize,
        Classcolor: Classcolor
      }
    }
  },
  methods: {
    DataRecive () {
      console.log('Task Done')
    }
  },
  components: { Simple }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.Red{
  background-color: red;
}
.Green{
  background-color: green;
}
</style>
