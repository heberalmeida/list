<template>
  <div id="app">
    <textarea v-model="text" cols="30" rows="5" />
    <br />
    <button @click.prevent="getList">Converter</button>
    <h4>Resultado</h4>
    <ul>
      <li v-for="(r, k) in result" :key="k">
        <span :style="r.copy ? 'text-decoration: line-through;': ''">{{k}}-{{ r.coord }}</span>
        <button @click="getCopy(r)">Copy</button>
        <hr v-if="k % 3 === 2" />  
      </li>
        
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      text: '',
      result: ''
    }
  },
  methods: {
    getCopy(r){
      r.copy = !r.copy
      this.$copyText(r.coord).then(
        () => null,
        () => alert('Erro')
      )
    },
    getList() {
      if (this.text) {
        this.result = this.text.match(/-?\d+.\d+,-?\d+.\d+/g).map(i => {
          return {
            coord: i,
            copy: false
          }
        })
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  list-style: none;
  line-height: 30px;
}

span {
  margin: 10px;
}

hr {
  border-bottom: 1px dashed #ccc;
  border-style: dashed;
  width: 300px;
}
</style>
